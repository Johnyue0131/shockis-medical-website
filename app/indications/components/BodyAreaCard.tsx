import Link from "next/link";
import type { BodyArea } from "../data";

export function BodyAreaCard({ area }: { area: BodyArea }) {
  return (
    <article className="body-area-card" id={`body-area-${area.name.toLowerCase().replace(/[^a-z]+/g, "-").replace(/-$/, "")}`}>
      <div className="body-area-placeholder" aria-hidden="true">
        <span>{area.number}</span><i /><i /><b>IMAGE PLACEHOLDER</b>
      </div>
      <div className="body-area-copy">
        <h3>{area.name}</h3>
        <p>{area.description}</p>
        <ul>
          {area.conditions.map((condition) => (
            <li key={condition.slug}><Link href={`/indications/${condition.slug}`}>{condition.name}<span aria-hidden="true">→</span></Link></li>
          ))}
        </ul>
      </div>
    </article>
  );
}
