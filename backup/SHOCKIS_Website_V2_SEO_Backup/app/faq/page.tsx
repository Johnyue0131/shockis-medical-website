import Link from "next/link";
import { Arrow, Footer, Header, PageIntro } from "../components";

const faqCategories = [
  {
    number: "01",
    title: "About Shockwave Therapy",
    description: "General information about shockwave technology and professional use.",
    questions: [
      {
        question: "What is shockwave therapy?",
        answer: "Shockwave therapy is a non-surgical modality that delivers acoustic pressure waves to a targeted treatment area. It is used by trained professionals within rehabilitation, physiotherapy and sports medicine workflows. Appropriate use depends on the device labeling, clinical assessment and local requirements.",
      },
      {
        question: "How does shockwave therapy work?",
        answer: "A shockwave system generates mechanical pressure pulses that are transmitted through an applicator and coupling medium to the selected area. The operator configures parameters according to the approved instructions for use and an appropriate professional protocol.",
      },
      {
        question: "What conditions can shockwave therapy treat?",
        answer: "Shockwave systems are commonly evaluated for selected musculoskeletal and soft-tissue applications. Exact indications, contraindications and treatment parameters vary by product and market, and must follow the authorized labeling and professional guidance.",
      },
    ],
  },
  {
    number: "02",
    title: "Product Questions",
    description: "Information for professional users evaluating a shockwave system.",
    questions: [
      {
        question: "How do I choose a shockwave therapy system?",
        answer: "Consider the intended professional setting, output controls, applicator options, interface, serviceability, documentation and supplier support. Distributors and healthcare providers should also review the applicable regulatory status for their market.",
      },
      {
        question: "What applications does the device support?",
        answer: "The SHOCKIS ST100 is designed as a configurable platform for professional rehabilitation and physical therapy workflows. Multiple applicator sizes support different contact areas. Final applications and operating parameters must follow the approved instructions for use.",
      },
      {
        question: "What accessories are included?",
        answer: "The current system configuration includes seven treatment applicators, a handpiece and cable, user documents, service parts, maintenance tools and transport cases. Final package contents may vary by order or market and should be confirmed in the commercial specification.",
      },
    ],
  },
  {
    number: "03",
    title: "Business Cooperation",
    description: "Support for distributors, healthcare organizations and OEM partners.",
    questions: [
      {
        question: "Do you support distributors?",
        answer: "Yes. SHOCKIS welcomes cooperation with qualified medical device distributors. Support can include product information, commercial evaluation, available documentation, order coordination and market communication materials.",
      },
      {
        question: "Do you provide OEM/ODM cooperation?",
        answer: "OEM/ODM opportunities can be evaluated according to project scope, target market, order requirements and documentation needs. Contact our team with your company profile and intended market for an initial review.",
      },
      {
        question: "How can I request product information?",
        answer: "Use the Contact page and select the relevant business type. Please include your organization, target market and the product or documentation required so the inquiry can be directed efficiently.",
      },
    ],
  },
  {
    number: "04",
    title: "Documentation & Compliance",
    description: "Technical and market information available during commercial review.",
    questions: [
      {
        question: "What technical documents are available?",
        answer: "Available materials may include product specifications, user documentation, packaging information, accessory details and selected quality or test documentation. Document availability depends on the product configuration, market and stage of cooperation.",
      },
      {
        question: "What regulatory information can be provided?",
        answer: "Verified manufacturer and product regulatory information can be shared for the relevant market during evaluation. Registration, device listing, premarket authorization and quality certification are different concepts and are presented separately when applicable.",
      },
    ],
  },
];

export default function FAQ() {
  return (
    <>
      <Header />
      <main className="faq-page">
        <PageIntro
          index="03"
          kicker="FAQ"
          title="Information for confident evaluation."
          copy="Answers for healthcare professionals, medical device distributors, procurement teams and OEM partners evaluating SHOCKIS and the ST100 Shockwave Therapy System."
        />

        <section className="section faq-content-section">
          <div className="wrap faq-layout">
            <aside className="faq-index">
              <p className="kicker">TOPICS</p>
              <nav aria-label="FAQ categories">
                {faqCategories.map((category) => (
                  <a href={`#faq-${category.number}`} key={category.number}>
                    <span>{category.number}</span>{category.title}
                  </a>
                ))}
              </nav>
              <div className="faq-support-card">
                <small>NEED MORE INFORMATION?</small>
                <p>Contact our team for product, distributor or documentation inquiries.</p>
                <Link className="text-btn" href="/contact">Contact SHOCKIS <Arrow /></Link>
              </div>
            </aside>

            <div className="faq-categories">
              {faqCategories.map((category) => (
                <section id={`faq-${category.number}`} className="faq-category" key={category.number}>
                  <header>
                    <span>{category.number}</span>
                    <div>
                      <h2>{category.title}</h2>
                      <p>{category.description}</p>
                    </div>
                  </header>
                  <div className="faq-question-list">
                    {category.questions.map((item) => (
                      <details key={item.question}>
                        <summary>{item.question}<span aria-hidden="true">+</span></summary>
                        <p>{item.answer}</p>
                      </details>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </section>

        <section className="partner-cta faq-cta">
          <div className="wrap">
            <div>
              <p className="kicker light">PRODUCT &amp; PARTNERSHIP SUPPORT</p>
              <h2>Have a specific<br />question?</h2>
            </div>
            <div>
              <p>Tell us about your organization, market and information requirements. Our team will connect you with the relevant product or cooperation support.</p>
              <Link className="solid-btn white" href="/contact">Request information <Arrow /></Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
