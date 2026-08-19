"use client";

import Link from "next/link";
import { useState } from "react";

const areas = [
  { id: "shoulder", label: "Shoulder", tag: "SHOULDER", title: "Shoulder Applications", description: "Explore professional education for shoulder tendon, mobility and calcification-related applications.", image: "/images/indications/icons/shoulder.png", topics: [["Calcific Tendinitis", "calcific-tendinitis"], ["Shoulder Tendinopathy", "shoulder-tendinopathy"], ["Shoulder Pain", "shoulder-pain"]] },
  { id: "elbow-wrist-hand", label: "Elbow, Wrist & Hand", tag: "ELBOW, WRIST & HAND", title: "Elbow and Upper-Limb Applications", description: "Review professional application topics for upper-limb tendon and repetitive-load presentations.", image: "/images/indications/icons/elbow.png", topics: [["Tennis Elbow", "tennis-elbow"], ["Golfer's Elbow", "golfers-elbow"], ["Wrist Tendinopathy", "wrist-tendinopathy"]] },
  { id: "back-hip", label: "Back & Hip", tag: "BACK & HIP", title: "Back and Hip Applications", description: "Navigate educational topics for lower-back, hip tendon and myofascial rehabilitation pathways.", image: "/images/indications/icons/back_hip.png", topics: [["Lower Back Pain", "lower-back-pain"], ["Hip Tendinopathy", "hip-tendinopathy"], ["Myofascial Pain", "myofascial-pain"]] },
  { id: "knee-lower-leg", label: "Knee & Lower Leg", tag: "KNEE & LOWER LEG", title: "Knee and Lower-Leg Applications", description: "Explore professional information for knee tendon, loading and lower-leg application topics.", image: "/images/indications/icons/knee.png", topics: [["Patellar Tendinopathy", "patellar-tendinopathy"], ["Knee Pain", "knee-pain"], ["Lower Leg Conditions", "lower-leg-conditions"]] },
  { id: "foot-ankle", label: "Ankle & Foot", tag: "ANKLE & FOOT", title: "Ankle and Foot Applications", description: "Review professional education for plantar fascia, Achilles tendon and heel-related applications.", image: "/images/indications/icons/ankle_foot.png", topics: [["Plantar Fasciitis", "plantar-fasciitis"], ["Achilles Tendinopathy", "achilles-tendinopathy"], ["Heel Pain", "heel-pain"]] },
  { id: "muscle-fascia", label: "Muscle & Fascia", tag: "MUSCLE & FASCIA", title: "Muscle and Fascia Applications", description: "Explore selected muscle and fascial topics for professional rehabilitation environments.", image: "/images/indications/icons/muscle.png", topics: [["Myofascial Trigger Points", "myofascial-trigger-points"], ["Muscle Pain", "muscle-pain"]] },
] as const;

export function InteractiveBodyNavigation() {
  const [activeId, setActiveId] = useState<(typeof areas)[number]["id"]>("shoulder");
  const active = areas.find((area) => area.id === activeId) ?? areas[0];

  return (
    <section className="application-detail" aria-labelledby="application-detail-title">
      <div className="wrap">
        <div className="application-detail-heading">
          <p className="kicker">BODY AREA APPLICATIONS</p>
          <h2 id="application-detail-title">Explore professional applications.</h2>
        </div>
        <div className="application-area-tabs" role="tablist" aria-label="Select a body area">
          {areas.map((area) => (
            <button key={area.id} type="button" role="tab" aria-selected={activeId === area.id} className={activeId === area.id ? "active" : ""} onClick={() => setActiveId(area.id)}>
              <img src={area.image} alt="" width="120" height="120" />
              <span>{area.label}</span>
            </button>
          ))}
        </div>
        <div className="application-detail-layout">
          <div className="application-illustration" role="tabpanel" aria-label={`${active.label} illustration`}>
            <span className="application-illustration-orbit" aria-hidden="true" />
            <img src="/images/indications/body-area-application-figure.png" alt="Shockwave therapy body area application illustration" width="1024" height="1536" />
          </div>
          <article className="application-info" aria-live="polite">
            <span className="application-tag">{active.tag}</span>
            <h3>{active.title}</h3>
            <p>{active.description}</p>
            <ul>{active.topics.map(([name, slug]) => <li key={slug}><Link href={`/applications/${slug}`}><span aria-hidden="true">✓</span>{name}</Link></li>)}</ul>
            <Link className="application-learn-more" href={`/applications/${active.topics[0][1]}`}>Learn More <span aria-hidden="true">→</span></Link>
          </article>
        </div>
      </div>
      <style>{`
        .application-detail{padding:105px 0;background:#fff;border-top:1px solid #dbe6ed;border-bottom:1px solid #dbe6ed}.application-detail-heading{text-align:center;margin-bottom:45px}.application-detail-heading .kicker{margin-bottom:14px}.application-detail-heading h2{max-width:700px;margin:0 auto;color:#0a3763;font-size:46px;font-weight:500;line-height:1.08;letter-spacing:-.04em}.application-area-tabs{display:grid;grid-template-columns:repeat(6,1fr);gap:12px;margin-bottom:28px}.application-area-tabs button{display:flex;min-width:0;min-height:154px;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:13px 10px;border:1px solid #d3e1e9;background:#fff;color:#173f62;font:inherit;cursor:pointer;transition:border-color .2s ease,background .2s ease}.application-area-tabs button:hover,.application-area-tabs button.active{border-color:#1681c5;background:#f8fbfd}.application-area-tabs img{width:96px;height:96px;object-fit:contain}.application-area-tabs span{font-size:9px;font-weight:700;line-height:1.35;text-align:center}.application-detail-layout{display:grid;grid-template-columns:1fr 1fr;min-height:510px;border:1px solid #d3e1e9;background:#fff}.application-illustration{position:relative;display:flex;align-items:center;justify-content:center;overflow:hidden;background:#fbfdfe;border-right:1px solid #d3e1e9}.application-illustration img{position:relative;z-index:1;width:auto;max-width:82%;height:470px;object-fit:contain}.application-illustration-orbit{position:absolute;width:370px;height:370px;border:1px solid #d9e9f2;border-radius:50%}.application-illustration-orbit:after{content:"";position:absolute;inset:38px;border:1px solid #e8f1f6;border-radius:50%}.application-info{display:flex;flex-direction:column;justify-content:center;padding:64px 70px}.application-tag{align-self:flex-start;padding:8px 13px;background:#e7f3fb;color:#0875ba;font-size:8px;font-weight:800;letter-spacing:.1em}.application-info h3{max-width:520px;margin:25px 0 18px;color:#0a3763;font-size:39px;font-weight:550;line-height:1.08;letter-spacing:-.035em}.application-info>p{max-width:540px;margin:0;color:#60788c;font-size:11px;line-height:1.82}.application-info ul{display:grid;grid-template-columns:1fr 1fr;gap:14px 28px;list-style:none;margin:32px 0 38px;padding:0}.application-info li a{display:flex;align-items:center;gap:10px;color:#294f6e;font-size:10px;text-decoration:none}.application-info li a>span{display:inline-flex;width:18px;height:18px;align-items:center;justify-content:center;border-radius:50%;background:#e4f2fb;color:#0e7bc0;font-size:9px}.application-learn-more{align-self:flex-start;display:inline-flex;align-items:center;gap:26px;padding:15px 21px;background:#0a6eb5;color:#fff;font-size:9px;font-weight:750;text-decoration:none}.application-learn-more span{font-size:14px;font-weight:400}
        @media(max-width:960px){.application-area-tabs{grid-template-columns:repeat(3,1fr)}.application-detail-layout{grid-template-columns:1fr}.application-illustration{min-height:420px;border-right:0;border-bottom:1px solid #d3e1e9}}
        @media(max-width:620px){.application-detail{padding:72px 0}.application-detail-heading h2{font-size:36px}.application-area-tabs{grid-template-columns:repeat(2,1fr)}.application-area-tabs button{min-height:140px}.application-info{padding:43px 27px}.application-info h3{font-size:31px}.application-info ul{grid-template-columns:1fr}.application-illustration{min-height:350px}.application-illustration-orbit{width:290px;height:290px}}
      `}</style>
    </section>
  );
}
