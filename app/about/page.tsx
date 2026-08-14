import Link from "next/link";
import { Arrow, Footer, Header } from "../components";

const focusAreas = [
  {
    number: "01",
    title: "Focused Technology",
    copy: "A dedicated technology direction centered on professional shockwave therapy and the workflows that support clinical use.",
  },
  {
    number: "02",
    title: "Professional Manufacturing",
    copy: "Product engineering, controlled production and documented processes developed around medical device requirements.",
  },
  {
    number: "03",
    title: "Reliable Medical Solutions",
    copy: "Practical systems designed to support consistent operation, clear technical communication and long-term cooperation.",
  },
];

const qualityAreas = [
  {
    title: "FDA Market Support",
    copy: "Support for applicable U.S. market documentation, product status review and responsible regulatory communication.",
  },
  {
    title: "ISO 13485 Quality System",
    copy: "Quality management principles that connect product requirements, production controls, inspection and records.",
  },
  {
    title: "FSA / HSA Market Support",
    copy: "Commercial documentation support for applicable U.S. market programs, subject to product and plan eligibility.",
  },
  {
    title: "Global Regulatory Support",
    copy: "Market-specific information is coordinated with partners according to the product status and destination requirements.",
  },
];

const manufacturingAdvantages = [
  {
    number: "01",
    title: "Medical Device Manufacturing Capability",
    copy: "Focused engineering and production coordination support repeatable manufacturing for professional shockwave systems.",
  },
  {
    number: "02",
    title: "Quality Control",
    copy: "Defined incoming, in-process and final inspection activities support consistency before product release.",
  },
  {
    number: "03",
    title: "OEM & Distributor Cooperation",
    copy: "Product evaluation, documentation and supply coordination for qualified medical distributors and cooperation partners.",
  },
];

export default function About() {
  return (
    <>
      <Header />
      <main className="about-manufacturer">
        <section className="about-introduction">
          <div className="wrap about-introduction-grid">
            <div>
              <p className="kicker">COMPANY INTRODUCTION</p>
              <h1>
                Focused shockwave technology.
                <em>Built for professional care.</em>
              </h1>
            </div>
            <div className="about-introduction-copy">
              <p>
                SHOCKIS focuses on professional shockwave therapy systems for global healthcare providers and medical partners.
              </p>
              <div className="about-audience">
                <span>Healthcare Providers</span>
                <span>Medical Distributors</span>
                <span>OEM Partners</span>
              </div>
            </div>
          </div>
        </section>

        <section className="about-focus">
          <div className="wrap">
            <div className="about-section-heading">
              <div>
                <p className="kicker">OUR FOCUS</p>
                <h2>Depth of expertise,<br />applied with purpose.</h2>
              </div>
              <p>
                Our focused product direction brings technology, manufacturing and partner support together around one professional therapy platform.
              </p>
            </div>
            <div className="about-focus-grid">
              {focusAreas.map((item) => (
                <article key={item.number}>
                  <span>{item.number}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-quality">
          <div className="wrap">
            <div className="about-section-heading">
              <div>
                <p className="kicker">QUALITY &amp; COMPLIANCE</p>
                <h2>Responsible systems.<br />Clear market support.</h2>
              </div>
              <p>
                Quality and regulatory information is communicated according to verified product status, available documentation and the requirements of each market.
              </p>
            </div>
            <div className="about-quality-grid">
              {qualityAreas.map((item, index) => (
                <article key={item.title}>
                  <span>0{index + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>
            <p className="about-compliance-note">
              FDA registration, device listing and marketing authorization are distinct regulatory concepts. FSA/HSA eligibility may vary by product, provider and individual plan.
            </p>
          </div>
        </section>

        <section className="about-manufacturing">
          <div className="wrap">
            <div className="about-section-heading">
              <div>
                <p className="kicker">MANUFACTURING ADVANTAGE</p>
                <h2>Focused capability for<br />professional partners.</h2>
              </div>
              <p>
                From production coordination to partner support, SHOCKIS is structured to serve professional healthcare and medical device markets.
              </p>
            </div>
            <div className="about-manufacturing-list">
              {manufacturingAdvantages.map((item) => (
                <article key={item.number}>
                  <span>{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-help">
          <div className="wrap">
            <div className="about-help-card">
              <div>
                <p className="kicker light">PRODUCT SELECTION SUPPORT</p>
                <h2>Need help choosing the right shockwave system?</h2>
              </div>
              <div className="about-help-copy">
                <p>
                  Our team can help you select the right shockwave therapy solution based on your clinical needs, market requirements and business goals.
                </p>
                <div className="about-help-actions">
                  <Link className="solid-btn white" href="/products">Explore Products <Arrow /></Link>
                  <Link className="outline-btn light" href="/request-quote">Request Quote <Arrow /></Link>
                  <Link className="text-btn light" href="/contact">Contact Our Team <Arrow /></Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <style>{`
        .about-manufacturer{background:#fff;overflow:hidden}.about-introduction{background:linear-gradient(128deg,#f8fbfd 0%,#eef5fa 64%,#e5f0f7 100%);border-bottom:1px solid var(--line)}.about-introduction-grid{min-height:610px;display:grid;grid-template-columns:1.08fr .72fr;gap:120px;align-items:center}.about-introduction h1{max-width:780px;margin:0;color:#0a3763;font-size:clamp(51px,5.4vw,76px);font-weight:480;line-height:1.02;letter-spacing:-.058em}.about-introduction h1 em{display:block;margin-top:5px;color:#1378bb;font-family:Georgia,serif;font-weight:400}.about-introduction-copy{padding-top:55px}.about-introduction-copy>p{max-width:560px;margin:0;color:#4f6d85;font-size:16px;line-height:1.9}.about-audience{display:flex;flex-wrap:wrap;gap:9px;margin-top:34px}.about-audience span{padding:10px 14px;border:1px solid #c9dce8;background:#ffffffa8;color:#325d7e;font-size:8px;letter-spacing:.08em;text-transform:uppercase}.about-focus,.about-manufacturing{padding:118px 0}.about-section-heading{display:grid;grid-template-columns:1fr .72fr;gap:120px;align-items:end;margin-bottom:68px}.about-section-heading h2{margin:0;color:#0a3763;font-size:50px;font-weight:500;line-height:1.07;letter-spacing:-.045em}.about-section-heading>p{max-width:530px;margin:0;color:#61798c;font-size:11px;line-height:1.85}.about-focus-grid{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid #cbdce7}.about-focus-grid article{min-height:300px;padding:28px 32px;border-right:1px solid #cbdce7}.about-focus-grid article:first-child{border-left:1px solid #cbdce7}.about-focus-grid article>span,.about-quality-grid article>span,.about-manufacturing-list article>span{color:#1681c5;font-size:8px;letter-spacing:.1em}.about-focus-grid article>div{margin-top:86px}.about-focus-grid h3,.about-quality-grid h3,.about-manufacturing-list h3{margin:0 0 15px;color:#153f63;font-size:18px;font-weight:600}.about-focus-grid p,.about-quality-grid p,.about-manufacturing-list p{margin:0;color:#697f91;font-size:10px;line-height:1.82}.about-quality{padding:118px 0;background:#f4f8fb}.about-quality-grid{display:grid;grid-template-columns:repeat(4,1fr);border:1px solid #d4e2ea;background:#fff}.about-quality-grid article{min-height:300px;padding:29px 27px;border-right:1px solid #d4e2ea}.about-quality-grid article:last-child{border-right:0}.about-quality-grid h3{margin-top:76px;line-height:1.3}.about-compliance-note{max-width:960px;margin:25px 0 0;color:#718697;font-size:8px;line-height:1.75}.about-manufacturing-list{border-top:1px solid #cbdce7}.about-manufacturing-list article{display:grid;grid-template-columns:90px .85fr 1fr;gap:32px;align-items:center;min-height:145px;border-bottom:1px solid #cbdce7}.about-manufacturing-list h3{margin:0;font-size:20px}.about-manufacturing-list p{max-width:540px}.about-help{padding:0 0 118px}.about-help-card{display:grid;grid-template-columns:1fr .9fr;gap:100px;align-items:end;padding:78px 82px;background:linear-gradient(132deg,#061f3d 0%,#083f6e 72%,#07558c 100%);color:#fff}.about-help-card h2{max-width:650px;margin:0;color:#fff;font-size:48px;font-weight:500;line-height:1.08;letter-spacing:-.045em}.about-help-copy>p{max-width:560px;margin:0;color:#b9ccda;font-size:11px;line-height:1.85}.about-help-actions{display:flex;flex-wrap:wrap;align-items:center;gap:14px;margin-top:31px}.outline-btn.light{display:inline-flex;align-items:center;justify-content:center;gap:18px;min-height:48px;padding:0 22px;border:1px solid #ffffff70;color:#fff;font-size:9px;text-decoration:none}.text-btn.light{color:#fff;border-bottom-color:#ffffff70}
        @media(max-width:820px){.about-introduction-grid,.about-section-heading,.about-help-card{grid-template-columns:1fr}.about-introduction-grid{min-height:auto;padding-top:82px;padding-bottom:78px;gap:34px}.about-introduction h1{font-size:46px}.about-introduction-copy{padding-top:0}.about-introduction-copy>p{font-size:13px}.about-focus,.about-quality,.about-manufacturing{padding:78px 0}.about-section-heading{gap:26px;margin-bottom:43px}.about-section-heading h2,.about-help-card h2{font-size:37px}.about-focus-grid,.about-quality-grid{grid-template-columns:1fr}.about-focus-grid article,.about-focus-grid article:first-child,.about-quality-grid article{min-height:auto;padding:27px;border:0;border-left:1px solid #cbdce7;border-right:1px solid #cbdce7;border-bottom:1px solid #cbdce7}.about-focus-grid article>div,.about-quality-grid h3{margin-top:38px}.about-manufacturing-list article{grid-template-columns:45px 1fr;gap:14px;padding:27px 0}.about-manufacturing-list article p{grid-column:2}.about-help{padding-bottom:78px}.about-help-card{gap:32px;padding:48px 28px}.about-help-actions{align-items:stretch;flex-direction:column}.about-help-actions a{width:100%;justify-content:space-between}}
      `}</style>
    </>
  );
}
