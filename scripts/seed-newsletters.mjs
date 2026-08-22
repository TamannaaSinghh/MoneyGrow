/**
 * Import newsletter PDFs from a local folder into Sanity.
 *
 * The old WordPress install is gone — moneygrowindia.com now serves this
 * Next.js site, and every legacy /wp-content/uploads/*.pdf URL returns 403.
 * The archive PDFs therefore have to come from a local copy (a WordPress
 * backup, a media-library export, or wherever the originals live).
 *
 * Usage:
 *   node --env-file=.env.local scripts/seed-newsletters.mjs <folder>
 *
 * Every *.pdf in <folder> whose filename contains a YYYY-MM-DD date is
 * uploaded to Sanity and gets a matching "newsletter" document, e.g.
 *   2026-06-03-MoneyGrow-Reflections.pdf  ->  letter dated 3 June 2026
 *
 * Options:
 *   --title "..."   Title for the created letters (default: MoneyGrow Reflections)
 *   --replace       Overwrite letters already in Sanity (default: skip them)
 *   --dry-run       List what would be imported without writing anything
 *
 * Requires SANITY_API_WRITE_TOKEN (an Editor token from
 * https://www.sanity.io/manage -> project -> API -> Tokens) in .env.local.
 *
 * Re-running is safe: each letter uses a fixed _id derived from its date, and
 * existing letters are skipped unless --replace is passed.
 */
import { createClient } from "@sanity/client";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, basename } from "node:path";

const args = process.argv.slice(2);
const flag = (name) => args.includes(name);
const valueOf = (name, fallback) => {
  const i = args.indexOf(name);
  return i !== -1 && args[i + 1] ? args[i + 1] : fallback;
};

const folder = args.find((a) => !a.startsWith("--") && args[args.indexOf(a) - 1] !== "--title");
const title = valueOf("--title", "MoneyGrow Reflections");
const replace = flag("--replace");
const dryRun = flag("--dry-run");

if (!folder) {
  console.error(
    "Usage: node --env-file=.env.local scripts/seed-newsletters.mjs <folder> [--title \"...\"] [--replace] [--dry-run]\n" +
      "\n<folder> is a directory of newsletter PDFs whose filenames contain a" +
      "\nYYYY-MM-DD date, e.g. 2026-06-03-MoneyGrow-Reflections.pdf"
  );
  process.exit(1);
}

let folderStat;
try {
  folderStat = statSync(folder);
} catch {
  console.error(`Not found: ${folder}`);
  process.exit(1);
}
if (!folderStat.isDirectory()) {
  console.error(`Not a directory: ${folder}`);
  process.exit(1);
}

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!dryRun && (!projectId || !token)) {
  console.error(
    "Missing env. Need NEXT_PUBLIC_SANITY_PROJECT_ID and SANITY_API_WRITE_TOKEN.\n" +
      "Run: node --env-file=.env.local scripts/seed-newsletters.mjs <folder>"
  );
  process.exit(1);
}

const client = dryRun
  ? null
  : createClient({ projectId, dataset, apiVersion: "2024-06-01", token, useCdn: false });

// Collect PDFs and pull the letter date out of each filename.
const undated = [];
const files = readdirSync(folder)
  .filter((f) => f.toLowerCase().endsWith(".pdf"))
  .map((f) => {
    const m = basename(f).match(/(\d{4})-(\d{2})-(\d{2})/);
    if (!m) {
      undated.push(f);
      return null;
    }
    return { file: f, date: `${m[1]}-${m[2]}-${m[3]}` };
  })
  .filter(Boolean)
  // Newest first, and drop duplicates for the same date.
  .sort((a, b) => (a.date < b.date ? 1 : -1))
  .filter((s, i, all) => all.findIndex((o) => o.date === s.date) === i);

if (files.length === 0) {
  console.error(
    `No dated PDFs found in ${folder}.\n` +
      "Filenames must contain a YYYY-MM-DD date, e.g. 2026-06-03-MoneyGrow-Reflections.pdf"
  );
  if (undated.length) console.error(`\nSkipped (no date in filename):\n  ${undated.join("\n  ")}`);
  process.exit(1);
}

console.log(
  `${dryRun ? "[dry run] " : ""}Importing ${files.length} newsletter${files.length === 1 ? "" : "s"} ` +
    `from ${folder}` +
    (dryRun ? ".\n" : ` into ${projectId}/${dataset}.\n`)
);

let created = 0;
const skipped = [];
const failed = [];

for (const { file, date } of files) {
  const _id = `newsletter.${date}`;
  process.stdout.write(`- ${date}  ${file} ... `);

  if (dryRun) {
    console.log("would import");
    created++;
    continue;
  }

  try {
    if (!replace) {
      const existing = await client.getDocument(_id).catch(() => null);
      if (existing) {
        console.log("already in Sanity, skipped");
        skipped.push(date);
        continue;
      }
    }

    const asset = await client.assets.upload("file", readFileSync(join(folder, file)), {
      filename: file,
      contentType: "application/pdf",
    });

    const doc = {
      _id,
      _type: "newsletter",
      date,
      title,
      file: { _type: "file", asset: { _type: "reference", _ref: asset._id } },
    };

    if (replace) await client.createOrReplace(doc);
    else await client.createIfNotExists(doc);

    created++;
    console.log("imported");
  } catch (err) {
    failed.push(`${date} — ${err.message}`);
    console.log(`FAILED (${err.message})`);
  }
}

console.log(
  `\n${dryRun ? "Would import" : "Imported"} ${created} newsletter${created === 1 ? "" : "s"}.`
);
if (skipped.length) {
  console.log(`Skipped ${skipped.length} already in Sanity (pass --replace to overwrite).`);
}
if (undated.length) {
  console.log(`\nSkipped — no YYYY-MM-DD date in the filename:\n  ${undated.join("\n  ")}`);
}
if (failed.length) {
  console.log(`\nFailed:\n  ${failed.join("\n  ")}`);
  process.exitCode = 1;
}
