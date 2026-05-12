import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { TeamCard } from "@/components/TeamCard";
import { CTAStrip } from "@/components/CTAStrip";
import { team } from "@/lib/team";

export const metadata = { title: "Team" };

export default function TeamPage() {
  return (
    <>
      <PageHeader
        eyebrow="Team"
        title={
          <>
            Three investors. <span className="italic font-light text-teal-700">One mandate.</span>
          </>
        }
        intro="Our investment team brings together two decades of sell-side, buy-side and private equity experience — and invests its own net worth alongside clients."
      />

      <Section>
        <div className="space-y-6">
          {team.map((m) => (
            <TeamCard key={m.slug} member={m} expanded />
          ))}
        </div>
      </Section>

      <CTAStrip
        title="Talk directly to a portfolio manager."
        body="At MoneyGrow, you talk to the people who manage your money — not a relationship manager. Schedule a 30-minute call."
      />
    </>
  );
}
