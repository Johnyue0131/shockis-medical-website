export function IndicationHero({ title, subtitle, eyebrow = "CLINICAL APPLICATION CENTER", compact = false }: { title: string; subtitle: string; eyebrow?: string; compact?: boolean }) {
  return (
    <section className={`indication-hero${compact ? " compact" : ""}`}>
      <div className="wrap indication-hero-grid">
        <div><p className="kicker">{eyebrow}</p><h1>{title}</h1></div>
        <p>{subtitle}</p>
      </div>
    </section>
  );
}
