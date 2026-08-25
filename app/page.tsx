import Link from "next/link";
import { Arrow, Footer, Header } from "./components";
import { CustomerTestimonials } from "./home/CustomerTestimonials";
import { HomepageVisualRefresh } from "./home/HomepageVisualRefresh";

const capabilities = [
  [
    "Medical Device Engineering",
    "Engineering-led development for professional radial shockwave therapy equipment.",
    "/images/home/shockwave-medical-device-engineering.jpg",
    "Engineer developing electronics for professional shockwave therapy equipment",
  ],
  [
    "Shockwave Product Development",
    "Practical system design shaped around clinical workflows and partner requirements.",
    "/images/home/shockwave-product-development-prototyping.jpg",
    "Prototype development equipment used during shockwave therapy product design",
  ],
  [
    "Quality-Focused Manufacturing",
    "Structured production, inspection and release processes for professional devices.",
    "/images/home/shockwave-quality-focused-manufacturing.jpg",
    "Technician inspecting equipment during a quality-focused manufacturing process",
  ],
  [
    "OEM Shockwave Device Solutions",
    "Flexible product configuration and customization support for qualified OEM projects.",
    "/images/home/shockwave-oem-device-collaboration.jpg",
    "Engineer and business partner reviewing a customized OEM device design",
  ],
  [
    "Global Distributor Support",
    "Commercial and technical cooperation for medical equipment distributors worldwide.",
    "/images/home/shockwave-global-distributor-support.jpg",
    "International port representing global shockwave equipment distributor support",
  ],
];

const solutions = [
  [
    "Shockwave Therapy for Healthcare Providers",
    "Professional radial shockwave therapy systems for rehabilitation clinics, physical therapy practices and medical professionals.",
    "Explore Applications",
    "/applications",
    "/images/home/shockwave-therapy-healthcare-provider-clinic.jpg",
    "Physical therapist supporting a patient in a professional rehabilitation clinic",
  ],
  [
    "Medical Equipment Distributors",
    "Partner with SHOCKIS Medical to supply professional shockwave therapy equipment in your market.",
    "Distributor Program",
    "/distributors",
    "/images/home/medical-equipment-distributor-logistics.jpg",
    "Medical logistics specialist preparing equipment for distribution",
  ],
  [
    "OEM Shockwave Device Partners",
    "From shockwave product development to customized medical device solutions, SHOCKIS supports qualified OEM cooperation.",
    "OEM Solutions",
    "/oem-solutions",
    "/images/home/oem-shockwave-device-prototype-development.jpg",
    "Engineer developing a precision prototype for an OEM medical device project",
  ],
];

const applications = [
  [
    "Plantar Fasciitis",
    "Foot & ankle",
    "/applications/plantar-fasciitis",
    "/images/home/plantar-fasciitis-shockwave-therapy-application.jpg",
    "Plantar foot pain distribution associated with plantar fasciitis",
  ],
  [
    "Tennis Elbow",
    "Elbow",
    "/applications/tennis-elbow",
    "/images/home/tennis-elbow-shockwave-therapy-application.jpg",
    "Highlighted lateral elbow pain area associated with tennis elbow",
  ],
  [
    "Achilles Tendinopathy",
    "Foot & ankle",
    "/applications/achilles-tendinopathy",
    "/images/home/achilles-tendinopathy-shockwave-therapy-application.jpg",
    "Clinical image of the heel and Achilles tendon insertion area",
  ],
  [
    "Shoulder Pain",
    "Shoulder",
    "/applications/shoulder-pain",
    "/images/home/shoulder-pain-shockwave-therapy-application.jpg",
    "Physical therapist assessing shoulder movement in a rehabilitation clinic",
  ],
];

const knowledgeTopics = [
  [
    "What Is Shockwave Therapy?",
    "An introduction to shockwave therapy technology, terminology and professional use considerations.",
    "/resources/knowledge-base/shockwave-therapy-guide",
    "/images/home/what-is-shockwave-therapy-technology.jpg",
    "Schlieren visualization of shockwave propagation for shockwave therapy education",
  ],
  [
    "Radial vs Focused Shockwave Therapy",
    "Understand the fundamental differences between radial and focused shockwave technologies.",
    "/resources/knowledge-base/radial-vs-focused-shockwave-therapy",
    "/images/home/radial-vs-focused-shockwave-therapy.jpg",
    "Educational sound-wave diagram illustrating wave generation and propagation",
  ],
  [
    "How Clinics Use Shockwave Devices",
    "A practical overview of how shockwave systems can fit into professional rehabilitation workflows.",
    "/resources/knowledge-base/how-clinics-use-shockwave-devices",
    "/images/home/shockwave-device-clinical-workflow.jpg",
    "Physical therapy teaching clinic with professional rehabilitation treatment tables",
  ],
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="home-visual-refresh">
        <section className="home-hero" aria-labelledby="homepage-hero-title">
          <img
            className="home-hero-image"
            src="/images/shockis-professional-shockwave-therapy-machines-seven-applicator-heads.jpg"
            alt="SHOCKIS professional shockwave therapy machine with seven applicator heads for clinics"
          />
          <div className="home-hero-background" aria-hidden="true" />
          <div className="wrap home-hero-inner">
            <div className="home-hero-copy">
              <p className="home-eyebrow">PROFESSIONAL MEDICAL DEVICE MANUFACTURER</p>
              <h1 id="homepage-hero-title">
                Professional Shockwave Therapy Machines
                <span>for Clinics, Distributors and OEM Partners</span>
              </h1>
              <p className="home-hero-summary">
                SHOCKIS Medical is a professional shockwave therapy equipment manufacturer developing radial
                shockwave systems for rehabilitation clinics, physical therapy practices, medical equipment
                distributors and OEM partners worldwide.
              </p>
              <div className="home-actions">
                <Link className="home-primary-btn" href="/contact">
                  Request Quote <Arrow />
                </Link>
                <Link className="home-secondary-btn home-secondary-btn--light" href="/products/shockwave-therapy-system">
                  Explore Products <Arrow />
                </Link>
              </div>
              <div className="home-audience-list" aria-label="SHOCKIS Medical customer groups">
                <span>Healthcare providers</span>
                <span>Distributors</span>
                <span>OEM partners</span>
              </div>
            </div>
          </div>
        </section>

        <section className="home-section home-why" aria-labelledby="why-shockis-title">
          <div className="wrap">
            <div className="home-section-heading home-section-heading--inverse">
              <div>
                <p className="home-eyebrow">WHY SHOCKIS</p>
                <h2 id="why-shockis-title">A Shockwave Therapy Equipment Manufacturer and Technology Partner</h2>
              </div>
              <p>
                SHOCKIS combines medical device engineering, shockwave product development and quality-focused
                manufacturing to support clinics, distributors and OEM customers through long-term cooperation.
              </p>
            </div>
            <div className="home-capability-grid">
              {capabilities.map(([title, copy, image, alt]) => (
                <article key={title}>
                  <div className="home-capability-image">
                    <img src={image} alt={alt} loading="lazy" />
                  </div>
                  <div className="home-capability-copy">
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="home-section home-featured" aria-labelledby="featured-system-title">
          <div className="wrap">
            <div className="home-section-heading">
              <div>
                <p className="home-eyebrow">SHOCKWAVE THERAPY MACHINES</p>
                <h2 id="featured-system-title">SHOCKIS ST100</h2>
              </div>
              <p>
                The SHOCKIS ST100 is a portable professional radial shockwave therapy machine designed around
                practical control and configurable physical therapy workflows.
              </p>
            </div>
            <div className="home-product-card">
              <div className="home-product-image">
                <img
                  src="/images/products/shockis-st100-radial-shockwave-therapy-machine.jpg"
                  alt="SHOCKIS ST100 professional radial shockwave therapy machine with handpiece and seven applicator heads"
                />
                <span>ST100 / PROFESSIONAL SYSTEM</span>
              </div>
              <div className="home-product-copy">
                <p className="home-eyebrow">ENGINEERED FOR PROFESSIONAL WORKFLOWS</p>
                <h3>Clinic-Ready Control and Reliable Operation</h3>
                <p>
                  This professional shockwave therapy system combines touchscreen setup with physical adjustment
                  controls, an ergonomic handpiece and seven applicator heads for adaptable clinic workflows.
                </p>
                <ul>
                  <li><span>01</span><b>Dual-control operating workflow</b></li>
                  <li><span>02</span><b>Ergonomic aluminum handpiece</b></li>
                  <li><span>03</span><b>Seven interchangeable applicator heads</b></li>
                </ul>
                <div className="home-actions">
                  <Link className="home-primary-btn" href="/products/shockwave-therapy-system">
                    View Product Details <Arrow />
                  </Link>
                  <Link className="home-secondary-btn" href="/contact">
                    Request Information <Arrow />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CustomerTestimonials />

        <section className="home-section home-solutions" aria-labelledby="customer-solutions-title">
          <div className="wrap">
            <div className="home-section-heading">
              <div>
                <p className="home-eyebrow">CUSTOMER SOLUTIONS</p>
                <h2 id="customer-solutions-title">Shockwave Therapy Solutions for Clinics, Distributors and OEM Partners</h2>
              </div>
              <p>
                Explore professional shockwave therapy equipment for clinical practice, distribution partnerships
                and customized medical device development projects.
              </p>
            </div>
            <div className="home-solution-grid">
              {solutions.map(([title, copy, cta, href, image, alt]) => (
                <article key={title}>
                  <div className="home-solution-image">
                    <img src={image} alt={alt} loading="lazy" />
                  </div>
                  <div className="home-solution-copy">
                    <h3>{title}</h3>
                    <p>{copy}</p>
                    <Link href={href}>{cta} <Arrow /></Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="home-section home-applications" aria-labelledby="clinical-applications-title">
          <div className="wrap">
            <div className="home-section-heading home-section-heading--inverse">
              <div>
                <p className="home-eyebrow">CLINICAL APPLICATIONS</p>
                <h2 id="clinical-applications-title">Clinical Applications of Radial Shockwave Therapy</h2>
              </div>
              <p>
                Review educational information about common musculoskeletal applications considered in professional
                extracorporeal shockwave therapy and rehabilitation practice.
              </p>
            </div>
            <div className="home-application-grid">
              {applications.map(([title, area, href, image, alt]) => (
                <Link href={href} key={title}>
                  <div className="home-application-image">
                    <img src={image} alt={alt} loading="lazy" />
                  </div>
                  <div className="home-application-copy">
                    <small>{area}</small>
                    <h3>{title}</h3>
                    <b aria-hidden="true">→</b>
                  </div>
                </Link>
              ))}
            </div>
            <Link className="home-section-link home-section-link--light" href="/applications">
              Explore All Applications <Arrow />
            </Link>
          </div>
        </section>

        <section className="home-section home-knowledge" aria-labelledby="knowledge-base-title">
          <div className="wrap">
            <div className="home-section-heading">
              <div>
                <p className="home-eyebrow">KNOWLEDGE BASE</p>
                <h2 id="knowledge-base-title">Shockwave Therapy Resources for Healthcare Professionals</h2>
              </div>
              <p>
                Build a clearer understanding of radial and focused shockwave technology, therapy equipment selection
                and professional device workflows.
              </p>
            </div>
            <div className="home-knowledge-grid">
              {knowledgeTopics.map(([title, copy, href, image, alt]) => (
                <article key={title}>
                  <div className="home-knowledge-image">
                    <img src={image} alt={alt} loading="lazy" />
                  </div>
                  <div className="home-knowledge-copy">
                    <h3>{title}</h3>
                    <p>{copy}</p>
                    <Link href={href}>Read Topic <Arrow /></Link>
                  </div>
                </article>
              ))}
            </div>
            <Link className="home-section-link" href="/resources/knowledge-base">
              Visit the Knowledge Base <Arrow />
            </Link>
          </div>
        </section>

        <section className="home-final-cta" aria-labelledby="partner-shockis-title">
          <div className="wrap">
            <div>
              <p className="home-eyebrow">GLOBAL PARTNERSHIP</p>
              <h2 id="partner-shockis-title">Partner with a Professional Shockwave Therapy Manufacturer</h2>
            </div>
            <div>
              <p>
                Talk with SHOCKIS Medical about radial shockwave therapy machines, distributor cooperation or OEM
                medical device development.
              </p>
              <Link className="home-primary-btn home-primary-btn--white" href="/contact">
                Request Quote <Arrow />
              </Link>
            </div>
          </div>
        </section>
        <HomepageVisualRefresh />
      </main>
      <Footer />
    </>
  );
}
