import Link from "next/link";
import { Arrow, Footer, Header } from "../components";
import { ProductInformationCta } from "../product-components/ProductInformationCta";
import { ProductImageGallery } from "./ProductImageGallery";

const overviewFeatures = [
  ["Dual Operation", "Touchscreen setup and physical controls support direct parameter adjustment."],
  ["Ergonomic Handpiece", "A balanced aluminum handpiece supports practical professional workflows."],
  ["Multiple Applicator Options", "Seven interchangeable heads provide a range of contact formats."],
];

const specifications = [
  ["Treatment heads", "7 interchangeable heads: D35, D20, A6, D15, R15, T10 and F15"],
  ["Pressure range", "1–8 Bar (current Amazon listing)"],
  ["Adjustment precision", "0.1 Bar"],
  ["Frequency", "1–21 Hz (current Amazon listing)"],
  ["Energy level", "Energy density not provided; pending engineering documentation"],
  ["Display", "7-inch touchscreen"],
  ["Control method", "Touchscreen and dual adjustment knobs"],
  ["Handpiece cable", "6 ft / approx. 1.83 m"],
  ["Rated power", "350 W"],
  ["Power supply", "Approx. 110 V, 50/60 Hz"],
  ["Device dimensions", "Pending engineering confirmation"],
  ["Device net weight", "Pending engineering confirmation"],
  ["Included accessories", "Applicators, service parts, maintenance tools, user documents and transport cases"],
];

const faqs = [
  ["What is included with the system?", "The current product configuration includes the main device, handpiece with 6 ft cable, seven treatment heads, accessory and maintenance components, and user documentation. Final supplied contents should be confirmed against the quotation and packing list."],
  ["What are the available operating settings?", "The current Amazon listing specifies a 1–8 Bar pressure range, 0.1 Bar adjustment precision and a 1–21 Hz frequency range. The system combines touchscreen setup with two physical adjustment knobs."],
  ["How many applicator options are available?", "The current configuration shows seven interchangeable heads: D35, D20, A6, D15, R15, T10 and F15. Use must follow the applicable instructions and professional requirements."],
  ["How can I request pricing and availability?", "Use the Request Information or Contact Us option to share your organization, destination market, quantity and documentation requirements with the SHOCKIS team."],
  ["What support is available?", "Available support may include product specifications, user documentation, market-specific regulatory information and commercial cooperation materials. Contact SHOCKIS to confirm the documents available for your market."],
];

export default function Products() {
  return (
    <>
      <Header />
      <main className="st100-compact-page">
        <section className="st100-overview" aria-labelledby="st100-product-name">
          <div className="wrap st100-overview-grid">
            <ProductImageGallery />

            <div className="st100-product-information">
              <p className="kicker">PROFESSIONAL RADIAL SHOCKWAVE THERAPY SYSTEM</p>
              <h1 id="st100-product-name">Shockwave Therapy System</h1>
              <p className="st100-model">SHOCKIS ST100</p>
              <p className="st100-positioning">Professional radial shockwave therapy system designed for clinics, rehabilitation centers and healthcare professionals.</p>

              <div className="st100-overview-features">
                {overviewFeatures.map(([title, copy], index) => (
                  <article key={title}>
                    <span aria-hidden="true">0{index + 1}</span>
                    <div><h2>{title}</h2><p>{copy}</p></div>
                  </article>
                ))}
              </div>

              <div className="st100-actions">
                <Link className="solid-btn" href="/contact">Request Information <Arrow /></Link>
                <Link className="text-btn" href="/contact">Contact Us <Arrow /></Link>
              </div>
            </div>
          </div>
        </section>

        <section className="st100-specifications" id="technical-specifications" aria-labelledby="technical-specifications-title">
          <div className="wrap st100-section-grid">
            <div className="st100-section-title">
              <p className="kicker">02 — PRODUCT DATA</p>
              <h2 id="technical-specifications-title">Technical Specifications</h2>
              <p>Current product information for professional evaluation.</p>
            </div>
            <dl className="st100-specification-table">
              <div className="st100-specification-header" aria-hidden="true"><dt>Specification</dt><dd>Value</dd></div>
              {specifications.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
            </dl>
          </div>
        </section>

        <section className="st100-questions" aria-labelledby="st100-faq-title">
          <div className="wrap st100-section-grid">
            <div className="st100-section-title">
              <p className="kicker">03 — PRODUCT SUPPORT</p>
              <h2 id="st100-faq-title">Frequently Asked Questions</h2>
            </div>
            <div className="st100-accordion">
              {faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}
            </div>
          </div>
        </section>
      </main>
      <ProductInformationCta />
      <Footer />
      <style>{`
        .st100-compact-page{background:#fff;color:#0b1f3a}.st100-overview{padding:62px 0 78px;border-bottom:1px solid #dce5ec}.st100-overview-grid{display:grid;grid-template-columns:1fr 1fr;gap:78px;align-items:center}.st100-product-image{height:590px;display:grid;place-items:center;overflow:hidden;background:#fff}.st100-product-image img{display:block;width:100%;height:100%;object-fit:contain}.st100-product-information{max-width:555px}.st100-product-information .kicker{margin-bottom:18px}.st100-product-information h1{margin:0;color:#0b1f3a;font-size:clamp(46px,5vw,68px);font-weight:600;line-height:.98;letter-spacing:-.05em}.st100-model{margin:15px 0 0;color:#176da5;font-size:11px;font-weight:800;letter-spacing:.15em}.st100-positioning{max-width:520px;margin:24px 0 27px;color:#40566d;font-size:14px;line-height:1.7}.st100-overview-features{border-top:1px solid #d8e2ea}.st100-overview-features article{display:grid;grid-template-columns:38px 1fr;gap:12px;padding:15px 0;border-bottom:1px solid #d8e2ea}.st100-overview-features article>span{padding-top:3px;color:#176da5;font-size:8px;font-weight:800}.st100-overview-features h2{margin:0 0 4px;color:#163a5f;font-size:13px;font-weight:750}.st100-overview-features p{margin:0;color:#40566d;font-size:10px;line-height:1.55}.st100-actions{display:flex;align-items:center;gap:28px;margin-top:28px}.st100-section-grid{display:grid;grid-template-columns:.68fr 1.32fr;gap:90px}.st100-specifications{padding:82px 0;border-bottom:1px solid #dce5ec;background:#fff}.st100-section-title h2{max-width:480px;margin:0;color:#0b1f3a;font-size:42px;font-weight:600;line-height:1.06;letter-spacing:-.04em}.st100-section-title>p:last-child{max-width:360px;margin:18px 0 0;color:#40566d;font-size:11px;line-height:1.7}.st100-specification-table{margin:0;border-top:1px solid #bdccd8}.st100-specification-table>div{display:grid;grid-template-columns:.72fr 1.28fr;gap:28px;padding:14px 0;border-bottom:1px solid #dce5ec}.st100-specification-table dt{color:#52677b;font-size:10px}.st100-specification-table dd{margin:0;color:#17324d;font-size:10px;font-weight:650;line-height:1.55}.st100-specification-table .st100-specification-header{padding:11px 0}.st100-specification-header dt,.st100-specification-header dd{color:#176da5;font-size:8px;font-weight:800;letter-spacing:.12em;text-transform:uppercase}.st100-questions{padding:82px 0 96px;background:#fff}.st100-accordion{border-top:1px solid #bdccd8}.st100-accordion details{border-bottom:1px solid #dce5ec}.st100-accordion summary{position:relative;padding:21px 42px 21px 0;color:#163a5f;font-size:12px;font-weight:750;line-height:1.45;cursor:pointer;list-style:none}.st100-accordion summary::-webkit-details-marker{display:none}.st100-accordion summary:after{content:'+';position:absolute;right:2px;top:18px;color:#176da5;font-size:20px;font-weight:400}.st100-accordion details[open] summary:after{content:'−'}.st100-accordion details p{max-width:760px;margin:-4px 44px 21px 0;color:#40566d;font-size:10px;line-height:1.75}.st100-accordion details[open] summary{color:#0b1f3a}
        @media(max-width:820px){.st100-overview{padding:38px 0 62px}.st100-overview-grid,.st100-section-grid{grid-template-columns:1fr}.st100-overview-grid{gap:40px}.st100-product-image{height:auto;aspect-ratio:1/1}.st100-product-information{max-width:none}.st100-product-information h1{font-size:45px}.st100-actions{align-items:stretch;flex-direction:column;gap:12px}.st100-actions a{width:100%;justify-content:space-between}.st100-specifications,.st100-questions{padding:64px 0}.st100-section-grid{gap:34px}.st100-section-title h2{font-size:35px}.st100-specification-table>div{grid-template-columns:.78fr 1.22fr;gap:18px}.st100-specification-table dt,.st100-specification-table dd{font-size:9px}}
      `}</style>
    </>
  );
}
