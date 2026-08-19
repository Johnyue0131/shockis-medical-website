import Link from "next/link";
import { Footer, Header } from "../components";

const aboutSections = [
  {
    label: "OUR STORY",
    title: <>Built on Focus.<br />Driven by Purpose.</>,
    copy: "SHOCKIS develops professional shockwave therapy systems for healthcare providers, rehabilitation organizations and medical device partners worldwide. Our focused approach connects product engineering with practical professional workflows.",
    image: "/images/about/our-story.jpg",
    alt: "Mountain landscape representing the focused direction of SHOCKIS Medical",
  },
  {
    label: "OUR MISSION",
    title: <>Supporting Professional Care.<br />Enabling Partnership.</>,
    copy: "Our mission is to provide reliable shockwave technology, responsive product support and responsible manufacturing cooperation for professional healthcare markets.",
    image: "/images/shockwave-system-hero.webp",
    alt: "SHOCKIS ST100 shockwave therapy system with seven applicator heads",
  },
  {
    label: "OUR VISION",
    title: <>Focused Technology.<br />Global Possibility.</>,
    copy: "We envision SHOCKIS as a trusted specialist brand connecting focused product development with long-term partnerships across international healthcare markets.",
    image: "/images/about/our-vision.jpg",
    alt: "Connected world representing global medical device partnerships",
  },
];

export default function About() {
  return (
    <>
      <Header />
      <main className="about-core">
        {aboutSections.map((section) => (
          <section className="about-core-banner" key={section.label}>
            <div className="about-core-copy">
              <p className="kicker">{section.label}</p>
              <h1>{section.title}</h1>
              <p className="about-core-description">{section.copy}</p>
            </div>
            <div className="about-core-visual">
              <img src={section.image} alt={section.alt} width="880" height="391" />
            </div>
          </section>
        ))}
        <section className="about-support">
          <div className="wrap">
            <div className="about-support-card">
              <h2>Need help choosing?</h2>
              <p>Contact our team for product information, technical questions and professional support.</p>
              <Link href="/contact">Contact Support</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <style>{`
        .about-core{padding-top:42px;background:#fff}.about-core-banner{display:grid;width:calc(100% - clamp(48px,10vw,180px));max-width:1440px;grid-template-columns:42% 58%;min-height:390px;margin:0 auto 14px;background:#f7fafc}.about-core-copy{display:flex;flex-direction:column;justify-content:center;padding:62px clamp(35px,5.5vw,90px)}.about-core-copy .kicker{margin:0 0 20px}.about-core-copy h1{margin:0;color:#0b3762;font-size:clamp(34px,3.35vw,48px);font-weight:540;line-height:1.09;letter-spacing:-.043em}.about-core-description{max-width:520px;margin:27px 0 0;color:#3f5870;font-size:13px;line-height:1.78}.about-core-visual{position:relative;min-height:390px;overflow:hidden}.about-core-visual:before{content:"";position:absolute;z-index:1;inset:0;background:linear-gradient(90deg,#f7fafc 0%,#f7fafce0 4%,transparent 22%);pointer-events:none}.about-core-visual img{width:100%;height:100%;object-fit:cover;object-position:center}.about-support{padding:64px 0 78px;background:#fff}.about-support-card{padding:70px 45px;text-align:center;background:#0b1f3a;color:#fff}.about-support-card h2{margin:0;color:#fff;font-size:clamp(38px,4.4vw,60px);font-weight:600;line-height:1.05;letter-spacing:-.04em}.about-support-card p{max-width:690px;margin:22px auto 30px;color:#c6d2df;font-size:13px;line-height:1.75}.about-support-card a{display:inline-flex;align-items:center;justify-content:center;min-height:50px;padding:0 27px;background:#fff;color:#0b1f3a;font-size:10px;font-weight:750;text-decoration:none}
        @media(max-width:820px){.about-core{padding-top:24px}.about-core-banner{width:calc(100% - 30px);grid-template-columns:1fr;min-height:0;margin-bottom:12px}.about-core-copy{padding:56px 25px 45px}.about-core-copy h1{font-size:36px}.about-core-description{font-size:12px}.about-core-visual{min-height:260px}.about-core-visual:before{background:linear-gradient(180deg,#f7fafc 0%,transparent 22%)}.about-support{padding:40px 0 52px}.about-support-card{padding:55px 24px}.about-support-card p{font-size:12px}}
      `}</style>
    </>
  );
}
