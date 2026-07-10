import type { Member } from "@/lib/team";

export function TeamCard({ member, index }: { member: Member; index?: number }) {
  return (
    <article
      id={member.slug}
      className="group bg-paper border border-ink/10 rounded-md p-7 lg:p-9 hover:border-teal-600/50 hover:shadow-soft transition"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-5">
          <div className="shrink-0 w-20 h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden bg-gradient-to-br from-teal-700 to-teal-900 grain grid place-items-center text-cream">
            {member.photo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={member.photo}
                alt=""
                className="w-full h-full object-cover object-top"
              />
            ) : (
              <span className="font-display text-3xl tracking-tighter3">
                {member.initials}
              </span>
            )}
          </div>
          <div>
            <p className="smallcaps text-base text-teal-700 font-medium">{member.role}</p>
            <h3 className="font-display text-2xl lg:text-3xl mt-1.5 tracking-tightish">
              {member.name}
            </h3>
          </div>
        </div>
        {typeof index === "number" && (
          <span className="mt-1.5 inline-block w-2 h-2 rotate-45 bg-teal-600/50" aria-hidden />
        )}
      </div>

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
      <div className="mt-5 space-y-3 text-base leading-relaxed text-ink/75">
        {member.bio.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      <a
        href={member.linkedin}
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex items-center gap-2 text-base font-medium text-teal-700 hover:text-teal-700"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.86-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.86 3.37-1.86 3.6 0 4.27 2.37 4.27 5.46v6.29zM5.34 7.43A2.06 2.06 0 1 1 5.34 3.3a2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0z"/>
        </svg>
        LinkedIn
      </a>
    </article>
  );
}
