import Link from "next/link";
import { Arrow, Footer, Header } from "../components";
import { ProductClinicalLinks, ProductEnhancementStyles, ProductFaqSection, ProductFeatureShowcase, ProductSelectionCta, ProfessionalApplicationsSection, SevenHeadsSection, WhatsIncludedSection } from "./ProductDetailEnhancements";

const features = [
  {
    number: "01",
    title: "Advanced Shockwave Performance",
    copy: "A configurable 1–8 Bar pressure range and 1–21 Hz frequency range support controlled, repeatable operation across professional workflows.",
  },
  {
    number: "02",
    title: "Dual-Control Operation",
    copy: "Set treatment parameters on the 7-inch touchscreen, then use dedicated physical controls for efficient in-session adjustment.",
  },
  {
    number: "03",
    title: "Multiple Treatment Applicators",
    copy: "Seven interchangeable applicators provide different contact diameters for a broad range of treatment areas and clinical preferences.",
  },
  {
    number: "04",
    title: "Engineered Aluminum Handpiece",
    copy: "A 7000-series aluminum handpiece combines a durable metal construction with balanced handling for frequent professional use.",
  },
];

const gallery = [
  {
    src: "/images/products/st100-main.jpg",
    title: "Complete ST100 Therapy System",
    copy: "System overview with handpiece, cable, applicators and quick-reference guide.",
    className: "product-gallery-main",
  },
  {
    src: "/images/products/st100-core-features.jpg",
    title: "Configurable Performance",
    copy: "A concise overview of output range, interface and portable system design.",
  },
  {
    src: "/images/products/st100-applicators.jpg",
    title: "Seven Interchangeable Applicators",
    copy: "Multiple diameters support different contact areas and treatment workflows.",
  },
  {
    src: "/images/products/st100-dual-control.jpg",
    title: "Touchscreen and Knob Control",
    copy: "A practical interface designed for setup and direct adjustment during operation.",
  },
  {
    src: "/images/products/st100-clinical-use.jpg",
    title: "Professional Rehabilitation Workflow",
    copy: "A compact platform suited to clinic-based and sports rehabilitation environments.",
    className: "product-gallery-wide",
  },
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

const applications = [
  {
    title: "Pain Management",
    copy: "A configurable platform for professional protocols addressing soft-tissue and musculoskeletal treatment needs.",
  },
  {
    title: "Sports Medicine",
    copy: "Supports structured workflows for sports rehabilitation, recovery and return-to-activity programs.",
  },
  {
    title: "Rehabilitation Therapy",
    copy: "Designed for physiotherapy clinics, rehabilitation centers and mobile professional services.",
  },
  {
    title: "Musculoskeletal Disorders",
    copy: "Multiple applicator sizes help trained professionals work across different anatomical treatment areas.",
  },
];

export default function Products() {
  return (
    <>
      <Header />
      <main className="product-detail-page">
        <section className="product-detail-hero">
          <div className="wrap product-detail-hero-grid">
            <div className="product-detail-copy">
              <p className="kicker">PROFESSIONAL RADIAL SHOCKWAVE THERAPY SYSTEM</p>
              <h1>SHOCKIS<br />ST100</h1>
              <p className="product-detail-lead">
                A professional shockwave therapy solution designed for rehabilitation clinics, healthcare providers and global medical partners.
              </p>
              <Link className="solid-btn" href="/contact">
                Request Information <Arrow />
              </Link>
              <a className="text-btn product-spec-link" href="#technical-specifications">Download Specification <Arrow /></a>
              <div className="product-audience" aria-label="Designed for">
                <span>DESIGNED FOR</span>
                <b>Physiotherapy</b>
                <b>Rehabilitation</b>
                <b>Sports Medicine</b>
                <b>Distribution</b>
              </div>
            </div>
            <div className="product-detail-visual">
              <img src="/images/products/amazon-current/st100-main-current.jpg" width="1189" height="1179" alt="SHOCKIS ST100 radial shockwave therapy system with seven treatment heads" />
              <span>ST100 / RADIAL SHOCKWAVE PLATFORM</span>
            </div>
          </div>
        </section>

        <section className="section product-overview-section">
          <div className="wrap product-overview-grid">
            <div>
              <p className="kicker">PRODUCT OVERVIEW</p>
              <h2>A focused system for<br />professional therapy.</h2>
            </div>
            <div className="product-overview-copy">
              <p>
                The SHOCKIS ST100 brings controlled shockwave performance, intuitive operation and a versatile applicator system into one compact platform. It is designed around the practical needs of healthcare professionals who require clear parameter control and dependable day-to-day usability.
              </p>
              <div className="overview-points">
                <span>Professional platform</span>
                <span>Reliable performance</span>
                <span>Efficient operation</span>
                <span>Flexible applications</span>
              </div>
            </div>
          </div>
        </section>

        <ProfessionalApplicationsSection />

        <section className="product-key-features">
          <div className="wrap">
            <div className="section-heading inverse">
              <div>
                <p className="kicker light">KEY FEATURES</p>
                <h2>Engineered around<br /><em>clinical workflow.</em></h2>
              </div>
              <p>Core Amazon product benefits have been reorganized into a professional device narrative focused on control, flexibility and repeatable use.</p>
            </div>
            <div className="product-feature-cards">
              {features.map((feature) => (
                <article key={feature.number}>
                  <span>{feature.number}</span>
                  <h3>{feature.title}</h3>
                  <p>{feature.copy}</p>
                </article>
              ))}
            </div>
            <div className="handpiece-feature">
              <img src="/images/products/st100-handpiece.jpg" width="1500" height="1500" alt="SHOCKIS aluminum shockwave handpiece construction" />
              <div>
                <p className="kicker">ENGINEERED HANDPIECE</p>
                <h3>Durable construction.<br />Confident handling.</h3>
                <p>The metal handpiece is designed to support efficient transmission and a stable operator experience within demanding professional workflows.</p>
              </div>
            </div>
          </div>
        </section>

        <SevenHeadsSection />
        <ProductFeatureShowcase />
        <WhatsIncludedSection />
        <ProductClinicalLinks />

        <section className="section product-gallery-section">
          <div className="wrap">
            <div className="section-heading">
              <div>
                <p className="kicker">PRODUCT GALLERY</p>
                <h2>Explore the ST100<br />system in detail.</h2>
              </div>
              <p>Current Amazon product assets, reorganized for technical evaluation and professional purchasing review.</p>
            </div>
            <div className="product-gallery-grid">
              {gallery.map((item) => (
                <figure className={item.className || ""} key={item.src}>
                  <div><img src={item.src} alt={item.title} /></div>
                  <figcaption>
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="product-specifications-section" id="technical-specifications">
          <div className="wrap product-specifications-grid">
            <div className="product-specifications-intro">
              <p className="kicker light">TECHNICAL SPECIFICATIONS</p>
              <h2>Clear information for<br />product evaluation.</h2>
              <p>Specifications are based on the current Amazon listing. Final market-specific configuration and regulatory documentation are available on request.</p>
              <Link className="text-btn light" href="/contact">Request technical documentation <span aria-hidden="true">→</span></Link>
            </div>
            <dl className="specifications-table">
              {specifications.map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="section clinical-applications-section">
          <div className="wrap">
            <div className="section-heading">
              <div>
                <p className="kicker">CLINICAL APPLICATIONS</p>
                <h2>Built for modern<br />rehabilitation settings.</h2>
              </div>
              <p>A flexible platform for trained professionals working across physiotherapy, rehabilitation and sports medicine environments.</p>
            </div>
            <div className="clinical-application-grid">
              {applications.map((application, index) => (
                <article key={application.title}>
                  <span>0{index + 1}</span>
                  <h3>{application.title}</h3>
                  <p>{application.copy}</p>
                </article>
              ))}
            </div>
            <p className="application-note">Applications and operating parameters must follow the approved instructions for use and applicable local requirements.</p>
          </div>
        </section>

        <ProductFaqSection />

        <section className="partner-cta product-distributor-cta">
          <div className="wrap">
            <div>
              <p className="kicker light">FOR DISTRIBUTORS &amp; HEALTHCARE PROVIDERS</p>
              <h2>Request Product<br />Information</h2>
            </div>
            <div>
              <p>Contact SHOCKIS for product specifications, distributor opportunities and technical documentation.</p>
              <Link className="solid-btn white" href="/contact">Contact SHOCKIS <Arrow /></Link>
            </div>
          </div>
        </section>
        <ProductSelectionCta />
      </main>
      <Footer />
      <ProductEnhancementStyles />
    </>
  );
}
