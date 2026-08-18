import Link from "next/link";
import type { BodyArea } from "../data";

const bodyAreaIcons: Record<string, string> = {
  Shoulder: "/images/indications/icons/shoulder.png",
  "Elbow, Wrist & Hand": "/images/indications/icons/elbow.png",
  "Back & Hip": "/images/indications/icons/back_hip.png",
  "Knee & Lower Leg": "/images/indications/icons/knee.png",
  "Foot & Ankle": "/images/indications/icons/ankle_foot.png",
  "Muscle & Fascia": "/images/indications/icons/muscle.png",
};

export function BodyAreaCard({ area }: { area: BodyArea }) {
  return (
    <article className="body-area-card" id={`body-area-${area.name.toLowerCase().replace(/[^a-z]+/g, "-").replace(/-$/, "")}`}>
      <div className="body-area-placeholder">
        <img
          src={bodyAreaIcons[area.name]}
          alt={`${area.name} medical illustration`}
          width="400"
          height="400"
          loading="lazy"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "contain" }}
        />
      </div>
      <div className="body-area-copy">
        <h3>{area.name}</h3>
        <p>{area.description}</p>
        <ul>
          {area.conditions.map((condition) => (
            <li key={condition.slug}><Link href={`/applications/${condition.slug}`}>{condition.name}<span aria-hidden="true">→</span></Link></li>
          ))}
        </ul>
      </div>
    </article>
  );
}
