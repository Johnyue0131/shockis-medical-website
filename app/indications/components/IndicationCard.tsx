import Link from "next/link";
import type { IndicationDetail } from "../data";

export function IndicationCard({ indication, index }: { indication: IndicationDetail; index: number }) {
  return (
    <article className="indication-region-card">
      <div className="indication-card-visual" aria-hidden="true">
        <span>{String(index + 1).padStart(2, "0")}</span>
        <i /><i /><i />
        <b>{indication.region}</b>
      </div>
      <div className="indication-card-copy">
        <h3>{indication.title}</h3>
        <p>{indication.cardDescription}</p>
        <Link href={`/indications/${indication.slug}`}>Learn More <span aria-hidden="true">→</span></Link>
      </div>
    </article>
  );
}
