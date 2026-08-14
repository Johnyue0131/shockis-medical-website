import Link from "next/link";
import { Arrow, Footer, Header } from "../components";

const highlights = [
  ["01", "Advanced Shockwave Technology", "Configurable system performance developed for professional rehabilitation workflows."],
  ["02", "User-Friendly Operation", "Touchscreen setup and physical controls support clear, efficient operation."],
  ["03", "Multiple Treatment Applications", "Seven interchangeable applicators provide flexibility across different contact areas."],
  ["04", "Reliable Clinical Performance", "A focused platform designed around consistent use in professional environments."],
  ["05", "Professional Healthcare Solution", "Product information and cooperation support for clinics, providers and distributors."],
];

const technicalOverview = [
  ["Technology Type", "Radial shockwave platform"],
  ["Energy Level", "Configurable system output"],
  ["Frequency", "1–21 Hz"],
  ["Pressure Range", "1–8 Bar"],
  ["Applicators", "7 interchangeable treatment heads"],
  ["Display", "7-inch touchscreen"],
  ["Accessories", "Professional accessory and transport configuration"],
];

const applications = [
  ["Rehabilitation", "Professional workflows supporting structured physical rehabilitation programs."],
  ["Sports Medicine", "A configurable system for sports rehabilitation and recovery environments."],
  ["Physiotherapy", "Designed for trained physiotherapy professionals and clinical treatment settings."],
  ["Pain Management", "Supports professional protocols for selected musculoskeletal treatment needs."],
];

export default function Shop() {
  return (
    <>
      <Header />
      <main className="shop-page">
        <section className="shop-hero">
          <div className="wrap shop-hero-grid">
            <div className="shop-hero-copy">
              <p className="kicker">PROFESSIONAL SYSTEM SELECTION</p>
              <h1>Explore SHOCKIS<br />Shockwave Therapy System</h1>
              <p>Discover our professional shockwave therapy solution designed for rehabilitation clinics, healthcare providers and global medical device partners.</p>
              <div className="shop-actions">
                <Link className="solid-btn" href="/product">View Product <Arrow /></Link>
                <Link className="shop-secondary-btn" href="/request-quote">Request Quote <Arrow /></Link>
              </div>
              <div className="shop-audience">
                <span>Medical Device Distributors</span>
                <span>Physiotherapy Clinics</span>
                <span>Rehabilitation Centers</span>
                <span>Healthcare Providers</span>
              </div>
            </div>
            <div className="shop-hero-visual">
              <span>SHOCKWAVE THERAPY SYSTEM / ST100</span>
              <img src="/images/products/st100-main.jpg" width="1189" height="1179" alt="SHOCKIS ST100 professional shockwave therapy system" />
              <small>PRODUCT / CLINICAL / MEDICAL VISUAL AREA</small>
            </div>
          </div>
        </section>

        <section className="shop-section shop-featured">
          <div className="wrap">
            <div className="shop-section-heading">
              <div><p className="kicker">FEATURED PRODUCT</p><h2>One focused system.<br />Professional capability.</h2></div>
              <p>SHOCKIS currently focuses its product expertise on a professional shockwave platform for rehabilitation and healthcare environments.</p>
            </div>
            <article className="shop-product-card">
              <div className="shop-product-image">
                <img src="/images/products/st100-main.jpg" width="1189" height="1179" alt="SHOCKIS Shockwave Therapy System with applicators" />
                <span>ST100 / COMPLETE SYSTEM</span>
              </div>
              <div className="shop-product-copy">
                <p className="kicker">SHOCKIS / SHOCKWAVE THERAPY</p>
                <h2>SHOCKIS Shockwave<br />Therapy System</h2>
                <p>Professional shockwave therapy equipment designed for rehabilitation, sports medicine and clinical applications.</p>
                <ul>
                  <li>Configurable shockwave performance</li>
                  <li>Touchscreen and direct physical controls</li>
                  <li>Seven interchangeable applicators</li>
                  <li>Professional accessory configuration</li>
                </ul>
                <div className="shop-actions">
                  <Link className="solid-btn" href="/product">View Details <Arrow /></Link>
                  <Link className="shop-text-link" href="/contact">Request Information <Arrow /></Link>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="shop-highlights">
          <div className="wrap">
            <div className="shop-section-heading shop-heading-light">
              <div><p className="kicker light">PRODUCT HIGHLIGHTS</p><h2>Designed for professional<br />healthcare workflows.</h2></div>
              <p>A focused combination of technology, usability and system flexibility for professional partners.</p>
            </div>
            <div className="shop-highlight-grid">
              {highlights.map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}
            </div>
          </div>
        </section>

        <section className="shop-section shop-technical">
          <div className="wrap shop-technical-grid">
            <div className="shop-technical-intro">
              <p className="kicker">TECHNICAL OVERVIEW</p>
              <h2>Essential product<br />information.</h2>
              <p>A concise overview for initial system selection. Final product specifications and market configurations are available through the SHOCKIS product information process.</p>
              <img src="/images/products/st100-dual-control.jpg" width="1500" height="1500" alt="SHOCKIS touchscreen and physical control interface" />
            </div>
            <dl className="shop-technical-table">
              {technicalOverview.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
            </dl>
          </div>
        </section>

        <section className="shop-section shop-applications">
          <div className="wrap">
            <div className="shop-section-heading">
              <div><p className="kicker">APPLICATIONS</p><h2>Shockwave Therapy<br />Applications</h2></div>
              <p>Designed as a professional platform for trained users working across rehabilitation and clinical environments.</p>
            </div>
            <div className="shop-application-layout">
              <div className="shop-application-image"><img src="/images/products/st100-clinical-use.jpg" width="1464" height="600" alt="Shockwave therapy in a professional sports rehabilitation setting" /></div>
              <div className="shop-application-grid">
                {applications.map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}
              </div>
            </div>
          </div>
        </section>

        <section className="shop-request-cta">
          <div className="wrap">
            <div><p className="kicker light">PRODUCT &amp; DISTRIBUTOR INQUIRY</p><h2>Request Product<br />Information</h2></div>
            <div><p>Contact SHOCKIS for product specifications, technical documentation and distributor cooperation.</p><Link className="solid-btn white" href="/contact">Contact SHOCKIS <Arrow /></Link></div>
          </div>
        </section>
      </main>
      <Footer />
      <style>{`
        .shop-page{overflow:hidden;background:#fff}.shop-hero{background:linear-gradient(132deg,#f7fafc 0%,#edf5fb 58%,#e4f0f8 100%);border-bottom:1px solid var(--line)}.shop-hero-grid{min-height:690px;display:grid;grid-template-columns:.92fr 1.08fr}.shop-hero-copy{padding:105px 65px 72px 0;display:flex;flex-direction:column;justify-content:center;align-items:flex-start}.shop-hero-copy h1{font-size:clamp(52px,5vw,72px);line-height:1.01;letter-spacing:-.055em;font-weight:480;color:#0a3763;margin:0}.shop-hero-copy>p:not(.kicker){max-width:590px;font-size:15px;line-height:1.8;color:#536f88;margin:28px 0 32px}.shop-actions{display:flex;align-items:center;gap:24px;flex-wrap:wrap}.shop-secondary-btn{display:inline-flex;align-items:center;justify-content:space-between;gap:26px;padding:15px 0;border-bottom:1px solid #8aa9c0;color:#123f68;font-size:11px;font-weight:800}.shop-audience{display:flex;gap:18px;flex-wrap:wrap;margin-top:58px;padding-top:20px;border-top:1px solid #b7cddd;width:100%}.shop-audience span{font-size:8px;font-weight:700;color:#456985}.shop-hero-visual{position:relative;background:linear-gradient(145deg,#fff,#edf5fa);display:grid;place-items:center;overflow:hidden}.shop-hero-visual:before{content:"";position:absolute;width:600px;height:600px;border:1px solid #b6d3e7;border-radius:50%;box-shadow:0 0 0 70px #dcebf452,0 0 0 140px #e9f3f855}.shop-hero-visual img{position:relative;z-index:1;width:90%;height:90%;object-fit:contain;mix-blend-mode:multiply}.shop-hero-visual>span{position:absolute;z-index:2;top:24px;left:24px;background:#ffffffe8;padding:9px 11px;font-size:7px;letter-spacing:.17em;color:#406781}.shop-hero-visual>small{position:absolute;z-index:2;right:20px;bottom:20px;font-size:6px;letter-spacing:.16em;color:#6f8aa0}.shop-section{padding:110px 0}.shop-section-heading{display:grid;grid-template-columns:1.25fr .75fr;gap:90px;align-items:end;margin-bottom:58px}.shop-section-heading h2,.shop-technical-intro h2{font-size:50px;line-height:1.06;letter-spacing:-.045em;font-weight:500;margin:0}.shop-section-heading>p{color:var(--muted);font-size:12px;line-height:1.8;margin:0}.shop-product-card{display:grid;grid-template-columns:1.12fr .88fr;min-height:610px;box-shadow:0 22px 65px #0b4d8210}.shop-product-image{position:relative;background:#f1f6fa;overflow:hidden}.shop-product-image img{width:100%;height:100%;object-fit:contain;mix-blend-mode:multiply}.shop-product-image span{position:absolute;left:22px;bottom:22px;background:#ffffffe8;padding:9px 11px;font-size:7px;letter-spacing:.17em}.shop-product-copy{padding:65px 55px;background:#fff;border:1px solid var(--line);display:flex;flex-direction:column;justify-content:center}.shop-product-copy h2{font-size:36px;line-height:1.1;letter-spacing:-.04em;font-weight:520;margin:0 0 20px}.shop-product-copy>p:not(.kicker){font-size:12px;color:var(--muted);line-height:1.8}.shop-product-copy ul{list-style:none;padding:0;margin:25px 0 32px;border-top:1px solid var(--line)}.shop-product-copy li{padding:13px 0;border-bottom:1px solid var(--line);font-size:10px;font-weight:700}.shop-text-link{font-size:11px;font-weight:800;display:flex;gap:18px;border-bottom:1px solid #b5c9da;padding:10px 0}.shop-highlights{padding:110px 0;background:linear-gradient(135deg,#061f3d,#074477);color:#fff}.shop-heading-light>p{color:#b7cadb}.shop-highlight-grid{display:grid;grid-template-columns:repeat(5,1fr);border-top:1px solid #ffffff25}.shop-highlight-grid article{min-height:300px;padding:27px 24px;border-right:1px solid #ffffff25}.shop-highlight-grid article:first-child{border-left:1px solid #ffffff25}.shop-highlight-grid span{font-size:8px;color:#78c6f2}.shop-highlight-grid h3{font-size:17px;line-height:1.25;margin:76px 0 14px}.shop-highlight-grid p{font-size:10px;line-height:1.75;color:#abc1d4}.shop-technical{background:#f4f8fb}.shop-technical-grid{display:grid;grid-template-columns:.8fr 1.2fr;gap:110px}.shop-technical-intro>p:not(.kicker){font-size:11px;color:var(--muted);line-height:1.8;margin:25px 0 36px}.shop-technical-intro img{width:100%;height:300px;object-fit:cover}.shop-technical-table{margin:0;border-top:1px solid #cbdce8}.shop-technical-table>div{display:grid;grid-template-columns:.8fr 1.2fr;gap:25px;padding:21px 0;border-bottom:1px solid #cbdce8}.shop-technical-table dt{font-size:8px;text-transform:uppercase;letter-spacing:.1em;color:#678198}.shop-technical-table dd{margin:0;font-size:11px;font-weight:700}.shop-application-layout{display:grid;grid-template-columns:1.05fr .95fr;min-height:610px}.shop-application-image{overflow:hidden}.shop-application-image img{width:100%;height:100%;object-fit:cover;object-position:65% center}.shop-application-grid{display:grid;grid-template-columns:1fr 1fr;background:#edf5fb}.shop-application-grid article{padding:30px;border:1px solid #d3e1eb;margin:-1px 0 0 -1px}.shop-application-grid span{font-size:8px;color:#1880c8}.shop-application-grid h3{font-size:17px;margin:58px 0 12px}.shop-application-grid p{font-size:10px;line-height:1.75;color:var(--muted)}.shop-request-cta{background:linear-gradient(135deg,#075fa9,#06355f);color:#fff;padding:100px 0}.shop-request-cta>.wrap{display:grid;grid-template-columns:1fr 1fr;gap:110px;align-items:center}.shop-request-cta h2{font-size:46px;line-height:1.08;letter-spacing:-.04em;font-weight:500;margin:0}.shop-request-cta>div>div:last-child>p{color:#c3d4e3;line-height:1.75;margin:0 0 28px}
        @media(max-width:820px){.shop-hero-grid,.shop-section-heading,.shop-product-card,.shop-technical-grid,.shop-application-layout,.shop-request-cta>.wrap{grid-template-columns:1fr}.shop-hero-copy{padding:75px 0 45px}.shop-hero-copy h1{font-size:47px}.shop-hero-visual{min-height:450px}.shop-section,.shop-highlights{padding:75px 0}.shop-section-heading{gap:25px;margin-bottom:38px}.shop-section-heading h2,.shop-technical-intro h2{font-size:38px}.shop-product-card{min-height:0}.shop-product-image{height:420px}.shop-product-copy{padding:42px 27px}.shop-product-copy h2{font-size:31px}.shop-highlight-grid{grid-template-columns:1fr}.shop-highlight-grid article{min-height:auto;border-left:1px solid #ffffff25;padding:25px}.shop-highlight-grid h3{margin:34px 0 12px}.shop-technical-grid{gap:50px}.shop-technical-table>div{grid-template-columns:1fr;gap:7px}.shop-application-image{height:380px}.shop-application-grid{grid-template-columns:1fr}.shop-application-grid h3{margin:34px 0 12px}.shop-request-cta{padding:75px 0}.shop-request-cta>.wrap{gap:30px}.shop-request-cta h2{font-size:38px}}
      `}</style>
    </>
  );
}
