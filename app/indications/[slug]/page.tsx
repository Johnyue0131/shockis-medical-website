import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow, Footer, Header } from "../../components";
import { IndicationsStyles } from "../components/IndicationsStyles";
import { getIndicationBySlug, indicationDetails } from "../data";

export function generateStaticParams() {
  return indicationDetails.map(({ slug }) => ({ slug }));
}

const treatmentBenefits = [
  ["01", "Non-invasive Treatment", "Externally generated acoustic pulses provide a non-surgical treatment modality for selected professional applications."],
  ["02", "Rehabilitation Support", "Shockwave therapy may complement condition-specific exercise, loading and rehabilitation strategies."],
  ["03", "Professional Clinical Application", "Trained healthcare professionals can integrate the modality into a documented clinical workflow."],
];

export default function IndicationDetailPage({ params }: { params: { slug: string } }) {
  const indication = getIndicationBySlug(params.slug);
  if (!indication) notFound();

  return (
    <>
      <Header />
      <main className="indications-site indication-detail-page">
        <section className="condition-hero">
          <div className="wrap condition-hero-grid">
            <div>
              <p className="kicker">{indication.region.toUpperCase()} / CLINICAL APPLICATION</p>
              <h1>{indication.title}</h1>
              <p>{indication.introduction}</p>
            </div>
            <div className="condition-image-placeholder" role="img" aria-label={`${indication.title} image placeholder`}>
              <span>CLINICAL IMAGE</span><i /><i /><i /><b>{indication.region}</b>
            </div>
          </div>
        </section>

        <nav className="indication-detail-nav" aria-label="Breadcrumb">
          <div className="wrap"><Link href="/indications">Indications</Link><span>/</span><span>{indication.title}</span></div>
        </nav>

        <section className="condition-overview">
          <div className="wrap">
            <div className="condition-section-heading"><p className="kicker">CONDITION OVERVIEW</p><h2>Understanding the condition.</h2></div>
            <div className="condition-overview-grid">
              <article className="condition-definition"><span>01</span><h3>What is {indication.title}?</h3><p>{indication.definition}</p></article>
              <article><span>02</span><h3>Common Symptoms</h3><ul>{indication.symptoms.map((item) => <li key={item}>{item}</li>)}</ul></article>
              <article><span>03</span><h3>Common Causes</h3><ul>{indication.causes.map((item) => <li key={item}>{item}</li>)}</ul></article>
            </div>
          </div>
        </section>

        <section className="condition-therapy">
          <div className="wrap condition-therapy-grid">
            <div className="condition-image-placeholder dark" role="img" aria-label="Shockwave therapy application image placeholder">
              <span>APPLICATION IMAGE</span><i /><i /><i /><b>PROFESSIONAL USE</b>
            </div>
            <div>
              <p className="kicker">SHOCKWAVE THERAPY APPLICATION</p>
              <h2>How shockwave therapy is considered.</h2>
              <article><span>HOW IT WORKS</span><p>{indication.therapyPrinciple}</p></article>
              <article><span>CLINICAL APPLICATION</span><p>{indication.clinicalApplication}</p></article>
            </div>
          </div>
        </section>

        <section className="condition-benefits">
          <div className="wrap">
            <div className="condition-section-heading"><p className="kicker">TREATMENT BENEFITS</p><h2>Designed to support professional care.</h2></div>
            <div className="condition-benefits-grid">
              {treatmentBenefits.map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}
            </div>
          </div>
        </section>

        <section className="condition-solution">
          <div className="wrap condition-solution-grid">
            <div><p className="kicker light">SHOCKIS SOLUTION</p><h2>Professional shockwave technology for healthcare environments.</h2></div>
            <div><p>The SHOCKIS Shockwave Therapy System is developed for professional rehabilitation and healthcare workflows. Its configurable operation and applicator options support trained users evaluating shockwave therapy across appropriate clinical applications.</p><Link className="solid-btn white" href="/products">Explore the system <Arrow /></Link></div>
          </div>
        </section>

        <section className="condition-faq">
          <div className="wrap condition-faq-grid">
            <div><p className="kicker">FAQ</p><h2>Common professional questions.</h2></div>
            <div className="condition-faq-list">{indication.faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>
          </div>
        </section>

        <aside className="condition-disclaimer"><div className="wrap"><p><strong>Professional education notice:</strong> This page does not provide medical advice, a treatment protocol or a claim that a SHOCKIS device is cleared, approved or effective for this condition in every market. Healthcare professionals must review the applicable instructions for use, verified regulatory status, contraindications and local requirements.</p></div></aside>

        <section className="condition-help">
          <div className="wrap"><div className="condition-help-card">
            <div><p className="kicker light">PRODUCT SELECTION SUPPORT</p><h2>Need help choosing the right shockwave system?</h2></div>
            <div><p>Discuss your clinical environment, market requirements and professional product needs with the SHOCKIS team.</p><div className="condition-help-actions"><Link className="solid-btn white" href="/products">Explore Products <Arrow /></Link><Link className="outline-btn light" href="/request-quote">Request Quote <Arrow /></Link><Link className="text-btn light" href="/contact">Contact Team <Arrow /></Link></div></div>
          </div></div>
        </section>
      </main>
      <Footer />
      <IndicationsStyles />
      <style>{`
        .condition-hero{background:linear-gradient(128deg,#f8fbfd,#edf5fb 66%,#e5f1f9);border-bottom:1px solid var(--line)}.condition-hero-grid{min-height:610px;display:grid;grid-template-columns:1fr .82fr;gap:105px;align-items:center;padding-top:78px;padding-bottom:78px}.condition-hero h1{max-width:760px;margin:0;color:#0a3763;font-size:clamp(58px,6vw,80px);font-weight:480;line-height:1;letter-spacing:-.058em}.condition-hero div>p:not(.kicker){max-width:660px;margin:28px 0 0;color:#536f88;font-size:14px;line-height:1.88}.condition-image-placeholder{position:relative;min-height:390px;overflow:hidden;border:1px solid #c8dbe7;background:linear-gradient(145deg,#f9fcfd,#dcebf4)}.condition-image-placeholder>span{position:absolute;top:24px;left:25px;color:#47738f;font-size:7px;letter-spacing:.15em}.condition-image-placeholder i{position:absolute;border:1px solid #a5c7da;border-radius:50%}.condition-image-placeholder i:nth-of-type(1){width:390px;height:390px;right:-100px;top:0}.condition-image-placeholder i:nth-of-type(2){width:260px;height:260px;right:-35px;top:65px}.condition-image-placeholder i:nth-of-type(3){width:14px;height:14px;right:88px;top:190px;border:0;background:#147fbd;box-shadow:0 0 0 12px #147fbd1b}.condition-image-placeholder b{position:absolute;right:26px;bottom:24px;color:#385f79;font-size:8px;letter-spacing:.14em;text-transform:uppercase}.condition-section-heading{display:grid;grid-template-columns:.38fr 1fr;gap:60px;align-items:start;margin-bottom:60px}.condition-section-heading h2{max-width:760px;margin:0;color:#0a3763;font-size:48px;font-weight:500;line-height:1.08;letter-spacing:-.045em}.condition-overview,.condition-benefits,.condition-faq{padding:112px 0}.condition-overview-grid{display:grid;grid-template-columns:1.25fr .85fr .85fr;border-top:1px solid #cadce7}.condition-overview-grid article{min-height:340px;padding:28px 30px;border-right:1px solid #cadce7}.condition-overview-grid article:first-child{border-left:1px solid #cadce7}.condition-overview-grid span,.condition-benefits-grid span{color:#1681c5;font-size:8px}.condition-overview-grid h3,.condition-benefits-grid h3{margin:75px 0 15px;color:#153f63;font-size:18px}.condition-overview-grid p,.condition-benefits-grid p{margin:0;color:#657d90;font-size:10px;line-height:1.82}.condition-overview-grid ul{list-style:none;margin:0;padding:0;border-top:1px solid #dce7ee}.condition-overview-grid li{padding:13px 0;border-bottom:1px solid #dce7ee;color:#657d90;font-size:9px;line-height:1.55}.condition-therapy{padding:112px 0;background:#f3f7fa}.condition-therapy-grid{display:grid;grid-template-columns:.9fr 1.1fr;gap:105px;align-items:center}.condition-image-placeholder.dark{min-height:520px;background:linear-gradient(145deg,#07355e,#09659f);border-color:#2f719d}.condition-image-placeholder.dark i{border-color:#77afd0}.condition-image-placeholder.dark i:nth-of-type(3){background:#fff;box-shadow:0 0 0 12px #ffffff1c}.condition-image-placeholder.dark span,.condition-image-placeholder.dark b{color:#bfdae9}.condition-therapy h2{max-width:650px;margin:0 0 42px;color:#0a3763;font-size:47px;font-weight:500;line-height:1.08;letter-spacing:-.045em}.condition-therapy article{display:grid;grid-template-columns:145px 1fr;gap:28px;padding:25px 0;border-top:1px solid #cadce7}.condition-therapy article:last-child{border-bottom:1px solid #cadce7}.condition-therapy article span{color:#0c73b3;font-size:7px;letter-spacing:.12em}.condition-therapy article p{margin:0;color:#61798c;font-size:10px;line-height:1.82}.condition-benefits-grid{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid #cadce7}.condition-benefits-grid article{min-height:285px;padding:28px 31px;border-right:1px solid #cadce7}.condition-benefits-grid article:first-child{border-left:1px solid #cadce7}.condition-solution{padding:108px 0;background:linear-gradient(135deg,#061f3d,#075183);color:#fff}.condition-solution-grid{display:grid;grid-template-columns:1fr .85fr;gap:110px;align-items:center}.condition-solution h2{max-width:700px;margin:0;color:#fff;font-size:48px;font-weight:500;line-height:1.08;letter-spacing:-.045em}.condition-solution-grid>div:last-child>p{margin:0 0 30px;color:#bfd1de;font-size:11px;line-height:1.88}.condition-faq-grid{display:grid;grid-template-columns:.7fr 1.3fr;gap:100px}.condition-faq h2{max-width:500px}.condition-help{padding:0 0 112px}.condition-help-card{display:grid;grid-template-columns:1fr .9fr;gap:100px;align-items:end;padding:72px 76px;background:linear-gradient(132deg,#061f3d,#084a79);color:#fff}.condition-help-card h2{max-width:650px;margin:0;color:#fff;font-size:45px;font-weight:500;line-height:1.08;letter-spacing:-.044em}.condition-help-card>div:last-child>p{margin:0;color:#b9ccda;font-size:10px;line-height:1.8}.condition-help-actions{display:flex;flex-wrap:wrap;gap:13px;align-items:center;margin-top:28px}.condition-help-actions .outline-btn.light{display:inline-flex;min-height:48px;padding:0 20px;align-items:center;gap:17px;border:1px solid #ffffff70;color:#fff;font-size:9px;text-decoration:none}.condition-help-actions .text-btn.light{color:#fff;border-bottom-color:#ffffff70}.condition-disclaimer{margin-bottom:112px}.condition-disclaimer strong{color:#345e79}
        @media(max-width:820px){.condition-hero-grid,.condition-section-heading,.condition-overview-grid,.condition-therapy-grid,.condition-solution-grid,.condition-faq-grid,.condition-help-card{grid-template-columns:1fr}.condition-hero-grid{min-height:auto;padding-top:70px;padding-bottom:70px;gap:45px}.condition-hero h1{font-size:48px}.condition-image-placeholder{min-height:300px}.condition-overview,.condition-benefits,.condition-faq,.condition-therapy{padding:75px 0}.condition-section-heading{gap:24px;margin-bottom:40px}.condition-section-heading h2,.condition-therapy h2,.condition-solution h2,.condition-help-card h2{font-size:36px}.condition-overview-grid article,.condition-overview-grid article:first-child,.condition-benefits-grid article,.condition-benefits-grid article:first-child{min-height:auto;padding:27px;border-left:1px solid #cadce7;border-right:1px solid #cadce7;border-bottom:1px solid #cadce7}.condition-overview-grid h3,.condition-benefits-grid h3{margin-top:40px}.condition-therapy-grid{gap:45px}.condition-image-placeholder.dark{min-height:340px}.condition-therapy article{grid-template-columns:1fr;gap:10px}.condition-benefits-grid{grid-template-columns:1fr}.condition-solution{padding:75px 0}.condition-solution-grid,.condition-faq-grid{gap:40px}.condition-help{padding-bottom:75px}.condition-help-card{gap:32px;padding:46px 27px}.condition-help-actions{align-items:stretch;flex-direction:column}.condition-help-actions a{width:100%;justify-content:space-between}.condition-disclaimer{margin-bottom:75px}}
      `}</style>
    </>
  );
}
