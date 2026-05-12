type Pillar = { title: string; body: string };

export function FourPGrid({ items, accent = "teal" }: { items: Pillar[]; accent?: "teal" | "gold" }) {
  const accentColor = accent === "gold" ? "text-gold-400" : "text-teal-600";
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink/10 border border-ink/10 rounded-md overflow-hidden">
      {items.map((item, i) => {
        const num = String(i + 1).padStart(2, "0");
        return (
          <div key={item.title} className="bg-paper p-8 lg:p-10 relative group">
            <div className="flex items-baseline gap-4 mb-5">
              <span className={`font-mono text-sm ${accentColor} tabular`}>/{num}</span>
              <h3 className="font-display text-2xl lg:text-3xl tracking-tightish">
                {item.title}
              </h3>
            </div>
            <p className="text-base leading-relaxed text-ink/75">{item.body}</p>
          </div>
        );
      })}
    </div>
  );
}
