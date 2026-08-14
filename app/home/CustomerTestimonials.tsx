"use client";

import { useEffect, useRef } from "react";

const testimonials = [
  ["Clinic", "Excellent shockwave therapy system. Reliable performance and easy operation."],
  ["Healthcare Provider", "The interface is clear, and the system fits naturally into a professional rehabilitation workflow."],
  ["Professional User", "Seven treatment heads provide a practical range of options in one focused system."],
  ["Rehabilitation Center", "A compact platform with straightforward controls and an organized accessory configuration."],
  ["Medical Partner", "Professional communication and product information support made evaluation more efficient."],
];

export function CustomerTestimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const move = (direction: number) => {
    const track = trackRef.current;
    if (!track) return;
    const distance = Math.min(track.clientWidth * 0.82, 430);
    const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 8;
    const atStart = track.scrollLeft <= 8;
    if (direction > 0 && atEnd) track.scrollTo({ left: 0, behavior: "smooth" });
    else if (direction < 0 && atStart) track.scrollTo({ left: track.scrollWidth, behavior: "smooth" });
    else track.scrollBy({ left: distance * direction, behavior: "smooth" });
  };

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;
    const timer = window.setInterval(() => move(1), 5200);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="customer-testimonials" aria-labelledby="customer-experiences-title">
      <div className="wrap">
        <div className="testimonial-heading">
          <div><p className="kicker">CUSTOMER EXPERIENCES</p><h2 id="customer-experiences-title">Trusted by Healthcare Professionals</h2></div>
          <div><p>SHOCKIS supports healthcare providers with reliable shockwave therapy solutions.</p><div className="testimonial-controls"><button type="button" onClick={() => move(-1)} aria-label="Previous customer experience">←</button><button type="button" onClick={() => move(1)} aria-label="Next customer experience">→</button></div></div>
        </div>
        <div className="testimonial-track" ref={trackRef} tabIndex={0} aria-label="Customer experience cards">
          {testimonials.map(([type, quote], index) => (
            <article className="testimonial-card" key={`${type}-${index}`}>
              <div className="testimonial-placeholder" aria-hidden="true"><span>REVIEW SCREENSHOT</span><i /><i /><b>PLACEHOLDER</b></div>
              <div className="testimonial-card-copy"><span className="testimonial-rating" aria-label="Five star rating">★★★★★</span><blockquote>“{quote}”</blockquote><div><span>0{index + 1}</span><b>{type}</b></div></div>
            </article>
          ))}
        </div>
        <p className="testimonial-note">Placeholder content for layout review. Replace with verified, permission-cleared customer review screenshots before publication.</p>
      </div>
      <style>{`
        .customer-testimonials{padding:112px 0;background:#fff;overflow:hidden}.testimonial-heading{display:grid;grid-template-columns:1fr .72fr;gap:100px;align-items:end;margin-bottom:58px}.testimonial-heading h2{max-width:780px;margin:0;color:#0a3763;font-size:50px;font-weight:500;line-height:1.06;letter-spacing:-.045em}.testimonial-heading>div:last-child>p{margin:0;color:#627a8e;font-size:11px;line-height:1.82}.testimonial-controls{display:flex;gap:8px;margin-top:23px}.testimonial-controls button{display:grid;width:42px;height:42px;place-items:center;border:1px solid #b9cfdd;background:#fff;color:#0a5c96;font-size:15px;cursor:pointer;transition:background .2s ease,color .2s ease}.testimonial-controls button:hover{background:#0a5c96;color:#fff}.testimonial-track{display:flex;gap:18px;overflow-x:auto;padding:0 0 17px;scroll-snap-type:x mandatory;scrollbar-width:thin;scrollbar-color:#afc9d9 #edf4f8}.testimonial-track:focus-visible{outline:2px solid #1780bf;outline-offset:5px}.testimonial-card{min-width:min(390px,82vw);overflow:hidden;border:1px solid #d2e1e9;background:#fff;scroll-snap-align:start}.testimonial-placeholder{position:relative;height:210px;overflow:hidden;background:linear-gradient(145deg,#f1f7fa,#e0edf4)}.testimonial-placeholder>span{position:absolute;top:23px;left:25px;color:#668397;font-size:7px;letter-spacing:.14em}.testimonial-placeholder i{position:absolute;border:1px solid #aac9da;border-radius:50%}.testimonial-placeholder i:first-of-type{width:220px;height:220px;right:-45px;top:-5px}.testimonial-placeholder i:last-of-type{width:120px;height:120px;right:5px;top:45px}.testimonial-placeholder b{position:absolute;left:25px;bottom:22px;color:#3e6b87;font-size:8px;letter-spacing:.13em}.testimonial-card-copy{padding:28px 28px 25px}.testimonial-rating{color:#1681c5;font-size:12px;letter-spacing:.15em}.testimonial-card blockquote{min-height:92px;margin:25px 0 27px;color:#264e6c;font-family:Georgia,serif;font-size:16px;line-height:1.55}.testimonial-card-copy>div{display:flex;justify-content:space-between;padding-top:18px;border-top:1px solid #d9e5ec}.testimonial-card-copy>div span{color:#1681c5;font-size:8px}.testimonial-card-copy>div b{color:#5f7b8e;font-size:8px;letter-spacing:.12em;text-transform:uppercase}.testimonial-note{margin:16px 0 0;color:#7a8e9d;font-size:7px;line-height:1.6}.testimonial-track::-webkit-scrollbar{height:5px}.testimonial-track::-webkit-scrollbar-track{background:#edf4f8}.testimonial-track::-webkit-scrollbar-thumb{background:#afc9d9}
        @media(max-width:820px){.customer-testimonials{padding:75px 0}.testimonial-heading{grid-template-columns:1fr;gap:25px;margin-bottom:40px}.testimonial-heading h2{font-size:37px}.testimonial-card{min-width:85vw}.testimonial-placeholder{height:190px}}
      `}</style>
    </section>
  );
}
