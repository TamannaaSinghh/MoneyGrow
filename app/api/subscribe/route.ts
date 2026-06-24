import { NextResponse } from "next/server";
import crypto from "crypto";

export const runtime = "nodejs";

const API_KEY = process.env.MAILCHIMP_API_KEY;
const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
// Datacenter prefix, e.g. "us21". Falls back to the suffix of the API key,
// which always ends in "-<server>".
const SERVER_PREFIX =
  process.env.MAILCHIMP_SERVER_PREFIX ?? API_KEY?.split("-")[1];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  if (!API_KEY || !AUDIENCE_ID || !SERVER_PREFIX) {
    return NextResponse.json(
      { error: "Newsletter signup isn’t configured yet." },
      { status: 503 }
    );
  }

  let email = "";
  try {
    const body = await req.json();
    email = String(body?.email ?? "").trim().toLowerCase();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  // MD5 of the lowercased email is Mailchimp's subscriber id — using it with
  // PUT upserts the member, so re-submitting an existing email is harmless.
  const hash = crypto.createHash("md5").update(email).digest("hex");
  const url = `https://${SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members/${hash}`;

  // status_if_new only applies to brand-new members; existing subscribers keep
  // their current status (so we never silently re-subscribe someone who left).
  const statusIfNew =
    process.env.MAILCHIMP_DOUBLE_OPT_IN === "true" ? "pending" : "subscribed";

  try {
    const res = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${Buffer.from(`anystring:${API_KEY}`).toString(
          "base64"
        )}`,
      },
      body: JSON.stringify({ email_address: email, status_if_new: statusIfNew }),
    });

    if (res.ok) {
      const data = await res.json().catch(() => ({}));
      return NextResponse.json({ ok: true, status: data?.status });
    }

    const data = await res.json().catch(() => ({} as Record<string, unknown>));
    const title = (data?.title as string) ?? "";

    // Already on the list — a success from the visitor's point of view.
    if (title === "Member Exists") {
      return NextResponse.json({ ok: true, already: true });
    }

    console.error("[mailchimp]", res.status, title, data?.detail);
    return NextResponse.json(
      { error: (data?.detail as string) || "Couldn’t subscribe right now. Please try again." },
      { status: 502 }
    );
  } catch (err) {
    console.error("[mailchimp] network error", err);
    return NextResponse.json(
      { error: "Couldn’t reach the mail service. Please try again." },
      { status: 502 }
    );
  }
}
