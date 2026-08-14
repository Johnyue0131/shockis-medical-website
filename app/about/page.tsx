import Link from "next/link";
import { Arrow, Footer, Header, PageIntro } from "../components";

const qualityAreas = [
  ["01", "Quality Management System", "Documented procedures connect product requirements, supplier controls, production activities and product records."],
  ["02", "Manufacturing Control", "Defined work instructions and process checks support consistent assembly and controlled production."],
  ["03", "Product Inspection", "Incoming, in-process and final inspection activities are used to verify product requirements before release."],
  ["04", "Regulatory Support", "Product and market documentation is reviewed according to the applicable cooperation requirements."],
];

const manufacturingCapabilities = [
  ["Engineering Support", "Product configuration, technical evaluation and structured communication throughout a cooperation project."],
  ["Production Capability", "Coordinated assembly, material planning and production scheduling for commercial supply."],
  ["Quality Control", "Inspection checkpoints and traceable production records support release decisions."],
  ["Global Supply Support", "Documentation, order coordination and logistics support for international partners."],
];

const partnerTypes = [
  "Medical distributors",
  "Rehabilitation clinics",
  "Healthcare providers",
  "OEM partners",
];

export default function About() {
  return (
    <>
      <Header />
      <main className="about-manufacturer-page">
        <PageIntro
          index="02"
          kicker="ABOUT SHOCKIS"
          title="Focused by choice."
          copy="SHOCKIS is a focused shockwave therapy device manufacturer serving healthcare professionals, medical distributors and OEM partners in global markets."
        />

        <section className="section about-company-overview">
          <div className="wrap about-company-grid">
            <div>
              <p className="kicker">COMPANY OVERVIEW</p>
              <h2>Professional focus in<br />shockwave therapy.</h2>
            </div>
            <div className="about-company-copy">
              <p>SHOCKIS develops and supplies shockwave therapy systems for professional rehabilitation and healthcare environments. Our work brings together product engineering, manufacturing coordination and partner support around a clearly defined technology platform.</p>
              <p>We work with international distributors, clinics, healthcare providers and OEM partners who require practical products, clear communication and dependable supply support.</p>
              <div className="about-company-pillars">
                <span>Shockwave therapy specialization</span>
                <span>Medical device manufacturing</span>
                <span>Global healthcare partnerships</span>
              </div>
            </div>
          </div>
        </section>

        <section className="about-focus-section">
          <div className="wrap about-focus-grid">
            <div>
              <p className="kicker light">OUR FOCUS</p>
              <h2>Depth over breadth.</h2>
              <p>Concentrating on shockwave therapy allows our teams to build deeper product knowledge, focus engineering resources and respond more effectively to professional user and partner requirements.</p>
            </div>
            <div className="about-focus-values">
              <article><span>01</span><h3>Product Expertise</h3><p>Focused knowledge of the therapy system, applicators, interface and professional workflow.</p></article>
              <article><span>02</span><h3>Engineering Capability</h3><p>Structured technical support for product evaluation, configuration and ongoing improvement.</p></article>
              <article><span>03</span><h3>Reliable Solutions</h3><p>Practical product design and coordinated support for long-term professional use.</p></article>
            </div>
          </div>
        </section>

        <section className="section about-quality-section">
          <div className="wrap">
            <div className="section-heading">
              <div>
                <p className="kicker">QUALITY &amp; COMPLIANCE</p>
                <h2>Quality built into<br />the working process.</h2>
              </div>
              <p>Our quality approach is based on documented controls, defined responsibilities and product verification. Specific certifications and regulatory documents are provided only when verified for the relevant product and market.</p>
            </div>
            <div className="about-quality-list">
              {qualityAreas.map(([number, title, copy]) => (
                <article key={number}>
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
            <div className="about-compliance-note">
              <strong>Clear regulatory communication</strong>
              <p>Manufacturer information, product specifications and available regulatory documentation can be reviewed during distributor or procurement evaluation. Registration, listing and market authorization are treated as distinct requirements.</p>
              <Link className="text-btn" href="/contact">Request documentation <Arrow /></Link>
            </div>
          </div>
        </section>

        <section className="about-manufacturing-section">
          <div className="wrap">
            <div className="section-heading inverse">
              <div>
                <p className="kicker light">MANUFACTURING CAPABILITY</p>
                <h2>From technical review<br /><em>to coordinated supply.</em></h2>
              </div>
              <p>Manufacturing support is organized around product consistency, practical documentation and responsive cooperation.</p>
            </div>
            <div className="manufacturing-capability-grid">
              {manufacturingCapabilities.map(([title, copy], index) => (
                <article key={title}>
                  <span>0{index + 1}</span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section about-partnership-section">
          <div className="wrap about-partnership-grid">
            <div>
              <p className="kicker">GLOBAL PARTNERSHIP</p>
              <h2>Built for long-term<br />healthcare cooperation.</h2>
              <p>SHOCKIS supports partners through product information, technical communication, commercial coordination and market-specific documentation review.</p>
              <Link className="solid-btn" href="/contact">Discuss cooperation <Arrow /></Link>
            </div>
            <div className="about-partner-card">
              <small>WHO WE SUPPORT</small>
              <ul>
                {partnerTypes.map((partner, index) => <li key={partner}><span>0{index + 1}</span>{partner}</li>)}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
