import { notFound } from "next/navigation";
import { StrategyDetail } from "@/components/StrategyDetail";
import { strategies, getStrategy } from "@/lib/strategies";

export function generateStaticParams() {
  return strategies
    .filter((s) => s.category === "PMS")
    .map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const s = getStrategy(params.slug);
  return { title: s?.name ?? "Strategy" };
}

export default function PmsStrategyDetailPage({ params }: { params: { slug: string } }) {
  const s = getStrategy(params.slug);
  if (!s || s.category !== "PMS") notFound();

  return <StrategyDetail strategy={s} />;
}
