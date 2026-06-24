import { client } from "./client";
import { team as fallbackTeam, type Member } from "@/lib/team";

const TEAM_QUERY = `*[_type == "teamMember"] | order(order asc, name asc){
  "slug": slug.current,
  name,
  role,
  initials,
  "photo": headshot.asset->url,
  linkedin,
  highlights,
  "bio": bio[].text
}`;

type Row = {
  slug: string | null;
  name: string | null;
  role: string | null;
  initials: string | null;
  photo: string | null;
  linkedin: string | null;
  highlights: string[] | null;
  bio: string[] | null;
};

function initialsFrom(name: string): string {
  return name
    .split(/\s+/)
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

/**
 * Fetch the team from Sanity, falling back to the built-in list whenever
 * Sanity is unconfigured, empty, or unreachable.
 */
export async function getTeam(): Promise<Member[]> {
  if (!client) return fallbackTeam;
  try {
    const rows = await client.fetch<Row[] | null>(
      TEAM_QUERY,
      {},
      { next: { revalidate: 60 } }
    );
    if (!rows || rows.length === 0) return fallbackTeam;

    return rows
      .filter((r): r is Row & { slug: string; name: string; role: string } =>
        Boolean(r.slug && r.name && r.role)
      )
      .map((r) => ({
        slug: r.slug,
        name: r.name,
        role: r.role,
        initials: r.initials || initialsFrom(r.name),
        linkedin: r.linkedin ?? "",
        highlights: r.highlights ?? [],
        bio: r.bio ?? [],
        photo: r.photo
          ? `${r.photo}?w=480&h=480&fit=crop&auto=format`
          : undefined,
      }));
  } catch {
    return fallbackTeam;
  }
}
