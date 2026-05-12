import type { Member } from "@/lib/team";

export function TeamCard({ member, expanded = false }: { member: Member; expanded?: boolean }) {
  return (
    <article
      id={member.slug}
      className="bg-paper border border-ink/10 rounded-md overflow-hidden"
    >
      <div className="grid grid-cols-3 gap-0">
        <div className="col-span-1 aspect-[3/4] relative bg-gradient-to-br from-teal-700 to-teal-900 grain text-cream grid place-items-center overflow-hidden">
          <span className="font-display text-7xl lg:text-8xl text-cream/90 tracking-tighter3">
            {member.initials}
          </span>
          <div className="absolute bottom-3 left-4 text-xs smallcaps text-gold-300/90 font-mono">
            MoneyGrow
          </div>
        </div>
        <div className="col-span-2 p-7 lg:p-9">
          <p className="smallcaps text-base text-teal-600 font-medium">{member.role}</p>
          <h3 className="font-display text-2xl lg:text-3xl mt-2 tracking-tightish">
            {member.name}
          </h3>
          <ul className="mt-5 flex flex-wrap gap-2">
            {member.highlights.map((h) => (
              <li
                key={h}
                className="text-xs px-2.5 py-1 bg-mist text-ink/80 rounded font-mono"
              >
                {h}
              </li>
            ))}
          </ul>
          <div className={`mt-5 space-y-3 text-base leading-relaxed text-ink/75 ${expanded ? "" : "line-clamp-4"}`}>
            {member.bio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <a
            href={member.linkedin}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-base font-medium text-teal-600 hover:text-teal-700"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.86-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.86 3.37-1.86 3.6 0 4.27 2.37 4.27 5.46v6.29zM5.34 7.43A2.06 2.06 0 1 1 5.34 3.3a2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0z"/>
            </svg>
            LinkedIn
          </a>
        </div>
      </div>
    </article>
  );
}
