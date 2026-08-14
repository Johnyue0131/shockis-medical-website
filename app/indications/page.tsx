import { Footer, Header } from "../components";
import { bodyAreas, commonIndications } from "./data";
import { BodyAreaCard } from "./components/BodyAreaCard";
import { IndicationCard } from "./components/IndicationCard";
import { IndicationHero } from "./components/IndicationHero";
import { InteractiveBodyNavigation } from "./components/InteractiveBodyNavigation";
import { IndicationsStyles } from "./components/IndicationsStyles";

export default function Indications() {
  return (
    <>
      <Header />
      <main className="indications-site">
        <IndicationHero title="Shockwave Therapy Applications" subtitle="Explore common clinical applications of SHOCKIS shockwave therapy systems for rehabilitation and healthcare professionals." />
        <InteractiveBodyNavigation />
        <section className="indication-region-nav">
          <div className="wrap">
            <div className="indication-section-heading">
              <div><p className="kicker">COMMON INDICATIONS</p><h2>Explore by clinical<br />application.</h2></div>
              <p>Review common musculoskeletal applications and open a dedicated educational page for each condition.</p>
            </div>
            <div className="indication-region-grid">
              {commonIndications.map((indication, index) => <IndicationCard key={indication.slug} indication={indication} index={index} />)}
            </div>
          </div>
        </section>
        <section className="body-area-section">
          <div className="wrap">
            <div className="indication-section-heading">
              <div><p className="kicker">BROWSE BY BODY AREA</p><h2>Explore by<br />Body Area.</h2></div>
              <p>Navigate condition education by anatomical region and open the relevant SHOCKIS clinical application page.</p>
            </div>
            <div className="body-area-grid">
              {bodyAreas.map((area) => <BodyAreaCard key={area.number} area={area} />)}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <IndicationsStyles />
      <style>{`
        .body-area-section{padding:115px 0;background:#f3f7fa}.body-area-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}.body-area-card{overflow:hidden;border:1px solid #d0dfe8;background:#fff;transition:transform .25s ease,box-shadow .25s ease}.body-area-card:hover{transform:translateY(-4px);box-shadow:0 20px 46px #174d7412}.body-area-placeholder{position:relative;min-height:175px;overflow:hidden;background:linear-gradient(145deg,#eaf3f8,#dcebf3)}.body-area-placeholder>span{position:absolute;top:21px;left:24px;color:#167dbb;font-size:8px;letter-spacing:.13em}.body-area-placeholder i{position:absolute;border:1px solid #abc9da;border-radius:50%}.body-area-placeholder i:first-of-type{width:200px;height:200px;right:-55px;top:-10px}.body-area-placeholder i:last-of-type{width:110px;height:110px;right:-10px;top:35px}.body-area-placeholder b{position:absolute;left:24px;bottom:20px;color:#5f7d91;font-size:7px;font-weight:600;letter-spacing:.14em}.body-area-copy{padding:27px 28px 25px}.body-area-copy h3{margin:0 0 12px;color:#123f66;font-size:20px;font-weight:600}.body-area-copy>p{min-height:38px;margin:0;color:#6a8193;font-size:9px;line-height:1.7}.body-area-copy ul{list-style:none;margin:24px 0 0;padding:0;border-top:1px solid #dce7ee}.body-area-copy li{border-bottom:1px solid #dce7ee}.body-area-copy a{display:flex;justify-content:space-between;align-items:center;padding:13px 0;color:#234d6d;font-size:9px;font-weight:700;text-decoration:none}.body-area-copy a span{color:#1681c5;font-size:14px;font-weight:400;transition:transform .2s ease}.body-area-copy a:hover{color:#0873ba}.body-area-copy a:hover span{transform:translateX(4px)}
        @media(max-width:820px){.body-area-section{padding:75px 0}.body-area-grid{grid-template-columns:1fr}.body-area-copy>p{min-height:0}}
      `}</style>
    </>
  );
}
