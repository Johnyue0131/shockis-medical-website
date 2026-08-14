import { Footer, Header } from "../components";

const accessoryCategories = [
  ["01", "Treatment Applicators", "Future applicator configurations and system-compatible treatment components."],
  ["02", "Replacement Parts", "Service and replacement components for supported SHOCKIS system configurations."],
  ["03", "Consumables", "Professional-use consumable items and supporting materials for future availability."],
];

export default function Accessories() {
  return (
    <>
      <Header />
      <main className="accessories-page">
        <section className="accessories-hero">
          <div className="wrap accessories-hero-grid">
            <div><p className="kicker">SHOCKIS SYSTEM SUPPORT</p><h1>Accessories &amp;<br />System Components</h1></div>
            <p>Explore accessories and supporting components designed for SHOCKIS shockwave therapy systems.</p>
          </div>
        </section>

        <section className="accessories-categories">
          <div className="wrap">
            <div className="accessories-heading">
              <div><p className="kicker">FUTURE PRODUCT FRAMEWORK</p><h2>Professional system support,<br />organized for future expansion.</h2></div>
              <p>This page provides the future structure for verified SHOCKIS accessories and system components. Product details will be added as they become available.</p>
            </div>
            <div className="accessories-grid">
              {accessoryCategories.map(([number, title, copy]) => (
                <article key={number}>
                  <span>{number}</span>
                  <div><h3>{title}</h3><p>{copy}</p></div>
                  <strong>Coming Soon</strong>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <style>{`
        .accessories-page{background:#fff}.accessories-hero{background:linear-gradient(128deg,#f8fbfd,#edf5fb 66%,#e5f1f9);border-bottom:1px solid var(--line)}.accessories-hero-grid{min-height:520px;display:grid;grid-template-columns:1.15fr .85fr;gap:110px;align-items:end;padding-top:95px;padding-bottom:78px}.accessories-hero h1{font-size:clamp(58px,6vw,80px);line-height:.99;letter-spacing:-.058em;font-weight:480;color:#0a3763;margin:0}.accessories-hero-grid>p{padding-left:48px;border-left:1px solid #b9cfdf;color:#536f88;font-size:15px;line-height:1.85;margin:0 0 8px}.accessories-categories{padding:120px 0}.accessories-heading{display:grid;grid-template-columns:1fr .75fr;gap:110px;align-items:end;margin-bottom:65px}.accessories-heading h2{font-size:50px;line-height:1.06;letter-spacing:-.045em;font-weight:500;color:#0a3763;margin:0}.accessories-heading>p{font-size:12px;line-height:1.8;color:#627a8e;margin:0}.accessories-grid{border-top:1px solid #cadbe6}.accessories-grid article{display:grid;grid-template-columns:85px 1fr .35fr;gap:35px;align-items:center;min-height:190px;border-bottom:1px solid #cadbe6}.accessories-grid article>span{font-size:8px;color:#1681c6}.accessories-grid h3{font-size:21px;color:#123f66;margin:0 0 10px}.accessories-grid p{max-width:650px;font-size:10px;line-height:1.75;color:#6a8193;margin:0}.accessories-grid strong{justify-self:end;padding:10px 13px;background:#edf5fb;color:#53738c;font-size:8px;letter-spacing:.13em;text-transform:uppercase}
        @media(max-width:820px){.accessories-hero-grid,.accessories-heading{grid-template-columns:1fr}.accessories-hero-grid{min-height:auto;padding-top:75px;padding-bottom:70px;gap:30px}.accessories-hero h1{font-size:48px}.accessories-hero-grid>p{padding:25px 0 0;border-left:0;border-top:1px solid #b9cfdf;font-size:13px}.accessories-categories{padding:75px 0}.accessories-heading{gap:25px;margin-bottom:45px}.accessories-heading h2{font-size:37px}.accessories-grid article{grid-template-columns:40px 1fr;gap:18px;padding:28px 0}.accessories-grid strong{grid-column:2;justify-self:start}}
      `}</style>
    </>
  );
}
