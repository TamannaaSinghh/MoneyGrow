type Officer = { name: string; email: string };

export function ComplianceContact({
  scope,
  officer,
}: {
  scope: "PMS" | "AIF";
  officer: Officer;
}) {
  return (
    <div className="mt-12 rounded-lg border-2 border-teal-600/30 bg-teal-50/40 overflow-hidden">
      <div className="p-8 lg:p-10">
        <p className="smallcaps text-base text-teal-700 font-medium flex items-center gap-3">
          <span className="inline-block w-8 h-px bg-teal-600/60" />
          Compliance Officer · {scope}
        </p>

        <dl className="mt-5 flex flex-col sm:flex-row sm:flex-wrap gap-x-16 gap-y-6">
          <div className="shrink-0">
            <dt className="text-sm text-ink/60">Name</dt>
            <dd className="font-display text-2xl lg:text-3xl mt-1 tracking-tightish text-ink whitespace-nowrap">
              {officer.name}
            </dd>
          </div>
          <div className="min-w-0">
            <dt className="text-sm text-ink/60">Email</dt>
            <dd className="mt-1">
              <a
                className="text-teal-700 link-underline font-medium whitespace-nowrap text-[clamp(0.8rem,3.1vw,1.125rem)]"
                href={`mailto:${officer.email}`}
              >
                {officer.email}
              </a>
            </dd>
          </div>
        </dl>
      </div>

      <div className="border-t-2 border-teal-600/20 bg-paper p-8 lg:p-10">
        <h3 className="font-display text-2xl lg:text-3xl tracking-tightish">
          Investor grievance redressal
        </h3>
        <p className="mt-3 text-base text-ink/75 max-w-2xl leading-relaxed">
          Write to us first at{" "}
          <a
            className="text-teal-700 link-underline font-medium"
            href="mailto:sales@moneygrowindia.com"
          >
            sales@moneygrowindia.com
          </a>
          . If your complaint is unresolved, escalate to SEBI through either
          platform below.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <a
            href="https://scores.gov.in"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center justify-between gap-4 px-6 py-4 bg-ink text-cream rounded-md text-base font-medium hover:bg-teal-800 transition"
          >
            <span>
              SEBI SCORES
              <span className="block text-sm font-normal text-cream/70 mt-0.5">
                Complaint redressal
              </span>
            </span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>

          <a
            href="https://smartodr.in/login"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center justify-between gap-4 px-6 py-4 bg-ink text-cream rounded-md text-base font-medium hover:bg-teal-800 transition"
          >
            <span>
              SEBI SMART ODR
              <span className="block text-sm font-normal text-cream/70 mt-0.5">
                Online dispute resolution
              </span>
            </span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

        <p className="mt-6 text-sm text-ink/60 max-w-2xl leading-relaxed">
          Disclosure documents are kept up to date as per SEBI requirements.
        </p>
      </div>
    </div>
  );
}
