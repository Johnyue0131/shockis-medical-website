import Link from "next/link";
import { Footer, Header } from "../components";
import { ProductInformationCta } from "../product-components/ProductInformationCta";

const accessoryCategories = [
  ["01", "Applicator Heads", "Interchangeable contact options for supported SHOCKIS system configurations."],
  ["02", "Handpiece Components", "Supporting components designed around the professional handpiece assembly."],
  ["03", "Replacement Parts", "Service and replacement components for compatible system maintenance."],
  ["04", "Foot Switch", "Optional workflow control components for compatible professional configurations."],
  ["05", "Consumables", "Professional-use consumables and supporting treatment materials."],
  ["06", "Accessory Kit", "Organized accessory configurations for system support and professional use."],
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
              <p className="kicker">SYSTEM ACCESSORIES</p>
              <h2>Accessories for professional system support.</h2>
            </div>
            <div className="accessories-grid">
              {accessoryCategories.map(([number, title, copy]) => (
                <Link href="/shop" className="accessory-category-card" key={number}>
                  <div className="accessory-image-placeholder" aria-hidden="true"><span>{number}</span><i /><i /></div>
                  <div className="accessory-category-copy"><h3>{title}</h3><p>{copy}</p><b>View in Shop <span aria-hidden="true">→</span></b></div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <ProductInformationCta />
      <Footer />
      <style>{`
        .accessories-page{background:#fff}.accessories-hero{background:linear-gradient(128deg,#f8fbfd,#edf5fb 66%,#e5f1f9);border-bottom:1px solid var(--line)}.accessories-hero-grid{min-height:520px;display:grid;grid-template-columns:1.15fr .85fr;gap:110px;align-items:end;padding-top:95px;padding-bottom:78px}.accessories-hero h1{font-size:clamp(58px,6vw,80px);line-height:.99;letter-spacing:-.058em;font-weight:480;color:#0a3763;margin:0}.accessories-hero-grid>p{padding-left:48px;border-left:1px solid #b9cfdf;color:#536f88;font-size:15px;line-height:1.85;margin:0 0 8px}.accessories-categories{padding:88px 0 96px}.accessories-heading{max-width:720px;margin-bottom:40px}.accessories-heading .kicker{margin-bottom:14px}.accessories-heading h2{font-size:42px;line-height:1.07;letter-spacing:-.04em;font-weight:600;color:#0b1f3a;margin:0}.accessories-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}.accessory-category-card{display:block;border:1px solid #d4dfe8;background:#fff;color:#0b1f3a}.accessory-image-placeholder{height:185px;position:relative;overflow:hidden;background:#f5f8fb}.accessory-image-placeholder>span{position:absolute;left:20px;top:18px;color:#176da5;font-size:8px;font-weight:800;letter-spacing:.12em}.accessory-image-placeholder i{position:absolute;border:1px solid #bfd2df;border-radius:50%}.accessory-image-placeholder i:first-of-type{width:150px;height:150px;right:-18px;top:16px}.accessory-image-placeholder i:last-of-type{width:82px;height:82px;right:16px;top:50px}.accessory-category-copy{padding:24px}.accessory-category-copy h3{margin:0 0 9px;color:#123f66;font-size:18px;font-weight:700}.accessory-category-copy p{min-height:50px;margin:0;color:#52677b;font-size:10px;line-height:1.65}.accessory-category-copy b{display:flex;justify-content:space-between;margin-top:19px;padding-top:15px;border-top:1px solid #dce5ec;color:#176da5;font-size:9px;font-weight:750}.accessory-category-card:hover{border-color:#9cb7ca}.accessory-category-card:hover .accessory-category-copy b{color:#0b1f3a}
        @media(max-width:820px){.accessories-hero-grid{grid-template-columns:1fr}.accessories-hero-grid{min-height:auto;padding-top:75px;padding-bottom:70px;gap:30px}.accessories-hero h1{font-size:48px}.accessories-hero-grid>p{padding:25px 0 0;border-left:0;border-top:1px solid #b9cfdf;font-size:13px}.accessories-categories{padding:68px 0 74px}.accessories-heading{margin-bottom:32px}.accessories-heading h2{font-size:35px}.accessories-grid{grid-template-columns:1fr}.accessory-image-placeholder{height:160px}.accessory-category-copy p{min-height:0}}
      `}</style>
    </>
  );
}
