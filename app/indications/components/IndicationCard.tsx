import Link from "next/link";
import type { IndicationDetail } from "../data";

const indicationIcons: Record<string, string> = {
  "plantar-fasciitis": "/images/indications/icons/ankle_foot.png",
  "tennis-elbow": "/images/indications/icons/elbow.png",
  "achilles-tendinopathy": "/images/indications/icons/ankle_foot.png",
  tendinopathy: "/images/indications/icons/knee.png",
  "calcific-tendinitis": "/images/indications/icons/shoulder.png",
  "myofascial-trigger-points": "/images/indications/icons/muscle.png",
};

export function IndicationCard({ indication }: { indication: IndicationDetail; index: number }) {
  return (
    <article className="indication-region-card">
      <div className="indication-card-visual">
        <img
          src={indicationIcons[indication.slug]}
          alt={`${indication.title} medical illustration`}
          width="400"
          height="400"
          loading="lazy"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "contain" }}
        />
      </div>
      <div className="indication-card-copy">
        <h3>{indication.title}</h3>
        <p>{indication.cardDescription}</p>
        <Link href={`/applications/${indication.slug}`}>Learn More <span aria-hidden="true">→</span></Link>
      </div>
    </article>
  );
}
