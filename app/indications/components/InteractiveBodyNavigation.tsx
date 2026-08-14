"use client";

import Link from "next/link";
import { useState } from "react";

const areas = [
  { id: "shoulder", label: "Shoulder", title: "Shoulder Tendon and Mobility Topics", description: "Explore professional education for shoulder tendon, calcification and mobility-related presentations.", topics: [["Calcific Tendinitis", "calcific-tendinitis"], ["Shoulder Tendinopathy", "shoulder-tendinopathy"], ["Frozen Shoulder", "frozen-shoulder"]], button: "View Shoulder Topics", spot: "spot-shoulder" },
  { id: "elbow-wrist-hand", label: "Elbow, Wrist & Hand", title: "Tennis and Elbow Tendon Topics", description: "Review upper-limb tendon and overuse topics for professional rehabilitation pathways.", topics: [["Tennis Elbow", "tennis-elbow"], ["Golfer's Elbow", "golfers-elbow"]], button: "View Elbow Topics", spot: "spot-elbow" },
  { id: "back-hip", label: "Back & Hip", title: "Back and Hip Pain Topics", description: "Navigate educational content for lower-back, hip tendon and myofascial presentations.", topics: [["Lower Back Pain", "lower-back-pain"], ["Hip Tendinopathy", "hip-tendinopathy"], ["Myofascial Pain", "myofascial-pain"]], button: "View Back Topics", spot: "spot-back" },
  { id: "knee-lower-leg", label: "Knee & Lower Leg", title: "Knee and Lower-Leg Topics", description: "Explore knee tendon, load-related pain and lower-leg application topics.", topics: [["Patellar Tendinopathy", "patellar-tendinopathy"], ["Knee Pain", "knee-pain"], ["Lower Leg Conditions", "lower-leg-conditions"]], button: "View Knee Topics", spot: "spot-knee" },
  { id: "foot-ankle", label: "Foot & Ankle", title: "Foot and Heel Topics", description: "Review plantar fascia, Achilles tendon and heel-related rehabilitation topics.", topics: [["Plantar Fasciitis", "plantar-fasciitis"], ["Achilles Tendinopathy", "achilles-tendinopathy"], ["Heel Pain", "heel-pain"]], button: "View Foot Topics", spot: "spot-foot" },
  { id: "muscle-fascia", label: "Muscle & Fascia", title: "Muscle and Fascia Topics", description: "Explore professional information for selected muscle and myofascial presentations.", topics: [["Myofascial Trigger Points", "myofascial-trigger-points"], ["Muscle Pain", "muscle-pain"]], button: "View Muscle Topics", spot: "spot-muscle" },
] as const;

export function InteractiveBodyNavigation() {
  const [activeId, setActiveId] = useState<(typeof areas)[number]["id"]>("shoulder");
  const active = areas.find((area) => area.id === activeId) ?? areas[0];

  return (
    <section className="interactive-body-nav" aria-labelledby="interactive-body-title">
      <div className="wrap">
        <div className="interactive-body-heading">
          <div><p className="kicker">INTERACTIVE BODY AREA NAVIGATION</p><h2 id="interactive-body-title">Start with the body area.</h2></div>
          <p>Select a highlighted region to explore common shockwave therapy education topics for healthcare professionals.</p>
        </div>
        <div className="interactive-body-layout">
          <div className="body-map-panel">
            <span className="body-map-label">BODY AREA PLACEHOLDER</span>
            <div className="body-silhouette" aria-hidden="true"><i className="head"/><i className="torso"/><i className="arm left"/><i className="arm right"/><i className="leg left"/><i className="leg right"/></div>
            {areas.map((area) => <button key={area.id} type="button" className={`body-hotspot ${area.spot}${activeId === area.id ? " active" : ""}`} aria-label={`View ${area.label} topics`} aria-pressed={activeId === area.id} onClick={() => setActiveId(area.id)}><span /></button>)}
            <div className="body-map-index">{areas.map((area) => <button key={area.id} type="button" className={activeId === area.id ? "active" : ""} onClick={() => setActiveId(area.id)}>{area.label}</button>)}</div>
          </div>
          <article className="interactive-topic-card" aria-live="polite">
            <div className="interactive-topic-meta"><span>{String(areas.findIndex((area) => area.id === active.id) + 1).padStart(2, "0")}</span><b>{active.label}</b></div>
            <h3>{active.title}</h3>
            <p>{active.description}</p>
            <ul>{active.topics.map(([name, slug]) => <li key={slug}><Link href={`/indications/${slug}`}>{name}<span aria-hidden="true">→</span></Link></li>)}</ul>
            <a className="interactive-area-link" href={`#body-area-${active.id}`}>{active.button} <span aria-hidden="true">→</span></a>
          </article>
        </div>
      </div>
      <style>{`
        .interactive-body-nav{padding:112px 0;background:#fff;border-bottom:1px solid var(--line)}.interactive-body-heading{display:grid;grid-template-columns:1fr .72fr;gap:100px;align-items:end;margin-bottom:58px}.interactive-body-heading h2{margin:0;color:#0a3763;font-size:49px;font-weight:500;line-height:1.07;letter-spacing:-.045em}.interactive-body-heading>p{margin:0;color:#627a8e;font-size:11px;line-height:1.82}.interactive-body-layout{display:grid;grid-template-columns:1.08fr .92fr;min-height:610px;border:1px solid #cfdee8}.body-map-panel{position:relative;overflow:hidden;background:linear-gradient(145deg,#f3f8fb,#e7f1f7);border-right:1px solid #cfdee8}.body-map-label{position:absolute;top:25px;left:28px;color:#668499;font-size:7px;letter-spacing:.15em}.body-silhouette{position:absolute;left:50%;top:48%;width:210px;height:455px;transform:translate(-50%,-50%)}.body-silhouette i{position:absolute;display:block;background:#c6d8e3}.body-silhouette .head{width:62px;height:62px;left:74px;border-radius:50%}.body-silhouette .torso{width:105px;height:220px;left:52px;top:71px;border-radius:48% 48% 35% 35%}.body-silhouette .arm{width:28px;height:230px;top:82px;border-radius:20px;transform-origin:top}.body-silhouette .arm.left{left:39px;transform:rotate(10deg)}.body-silhouette .arm.right{right:39px;transform:rotate(-10deg)}.body-silhouette .leg{width:34px;height:190px;top:271px;border-radius:20px}.body-silhouette .leg.left{left:61px;transform:rotate(3deg)}.body-silhouette .leg.right{right:61px;transform:rotate(-3deg)}.body-hotspot{position:absolute;width:28px;height:28px;padding:0;border:1px solid #137bb8;border-radius:50%;background:#fff9;cursor:pointer;transition:transform .2s ease,background .2s ease}.body-hotspot span{display:block;width:8px;height:8px;margin:auto;border-radius:50%;background:#137bb8}.body-hotspot:hover,.body-hotspot.active{transform:scale(1.18);background:#137bb8}.body-hotspot.active span,.body-hotspot:hover span{background:#fff}.spot-shoulder{left:calc(50% + 42px);top:145px}.spot-elbow{left:calc(50% + 88px);top:245px}.spot-back{left:calc(50% - 13px);top:250px}.spot-knee{left:calc(50% + 22px);top:420px}.spot-foot{left:calc(50% - 58px);top:525px}.spot-muscle{left:calc(50% - 87px);top:215px}.body-map-index{position:absolute;left:25px;bottom:25px;display:flex;max-width:190px;flex-wrap:wrap;gap:7px}.body-map-index button{padding:7px 9px;border:1px solid #c0d5e2;background:#ffffffb8;color:#527289;font-size:7px;cursor:pointer}.body-map-index button.active{border-color:#137bb8;background:#137bb8;color:#fff}.interactive-topic-card{display:flex;flex-direction:column;padding:56px 55px;background:#fff}.interactive-topic-meta{display:flex;justify-content:space-between;align-items:center;padding-bottom:25px;border-bottom:1px solid #d6e3eb}.interactive-topic-meta span{color:#1780bf;font-size:8px}.interactive-topic-meta b{color:#668298;font-size:8px;letter-spacing:.12em;text-transform:uppercase}.interactive-topic-card h3{max-width:480px;margin:65px 0 17px;color:#103e64;font-size:31px;font-weight:550;line-height:1.13;letter-spacing:-.025em}.interactive-topic-card>p{margin:0;color:#687f91;font-size:10px;line-height:1.78}.interactive-topic-card ul{list-style:none;margin:35px 0 0;padding:0;border-top:1px solid #d9e5ec}.interactive-topic-card li{border-bottom:1px solid #d9e5ec}.interactive-topic-card li a{display:flex;justify-content:space-between;padding:14px 0;color:#254e6d;font-size:10px;font-weight:700;text-decoration:none}.interactive-topic-card li a span{color:#1580bd;font-size:14px;font-weight:400}.interactive-area-link{display:flex;justify-content:space-between;margin-top:auto;padding:18px 20px;background:#083f6d;color:#fff;font-size:9px;font-weight:700;text-decoration:none}.interactive-area-link span{font-size:14px;font-weight:400}
        @media(max-width:820px){.interactive-body-nav{padding:75px 0}.interactive-body-heading,.interactive-body-layout{grid-template-columns:1fr}.interactive-body-heading{gap:25px;margin-bottom:40px}.interactive-body-heading h2{font-size:37px}.interactive-body-layout{min-height:0}.body-map-panel{min-height:570px;border-right:0;border-bottom:1px solid #cfdee8}.interactive-topic-card{min-height:535px;padding:38px 27px}.interactive-topic-card h3{margin-top:45px;font-size:28px}.body-map-index{max-width:260px}}
      `}</style>
    </section>
  );
}
