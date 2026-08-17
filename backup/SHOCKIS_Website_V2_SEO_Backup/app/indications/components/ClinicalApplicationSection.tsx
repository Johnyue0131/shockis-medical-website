import { bodyRegions } from "../data";

export function ClinicalApplicationSection() {
  return (
    <section className="indication-applications">
      <div className="wrap">
        <div className="indication-section-heading">
          <div><p className="kicker">COMMON APPLICATIONS</p><h2>Explore professional<br />application topics.</h2></div>
          <p>Each topic is organized as a clinical education pathway for healthcare professionals and product-evaluation partners.</p>
        </div>
        <div className="clinical-application-list">
          {bodyRegions.map((region) => (
            <article key={region.number}>
              <span>{region.number}</span><h3>{region.name}</h3>
              <div>{region.applications.map((item) => <p key={item.name}>{item.name}</p>)}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
