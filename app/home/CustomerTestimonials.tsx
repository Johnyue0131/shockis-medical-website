const testimonials = [
  ["Clinic", "Powerful, reliable and easy to use."],
  ["Distributor", "Clear interface and excellent performance."],
  ["Therapist", "Versatile applicators for different treatments."],
];

export function CustomerTestimonials() {
  return (
    <section className="customer-testimonials" aria-labelledby="customer-reviews-title">
      <div className="wrap">
        <div className="testimonial-heading">
          <p className="kicker" aria-hidden="true">CUSTOMER REVIEWS</p>
          <h2 className="visually-hidden" id="customer-reviews-title">Professional Customer Reviews</h2>
        </div>

        <div className="testimonial-grid">
          {testimonials.map(([type, quote]) => (
            <article className="testimonial-card" key={type}>
              <span className="testimonial-rating" aria-label="Five stars">★★★★★</span>
              <blockquote>“{quote}”</blockquote>
              <b>{type}</b>
            </article>
          ))}
        </div>

        <div className="amazon-review-link">
          <span className="amazon-review-icon" aria-label="Amazon"><b>amazon</b><i aria-hidden="true" /></span>
          <div>
            <p>See more customer reviews on Amazon.</p>
            <button type="button">Visit our Amazon Store →</button>
          </div>
        </div>
      </div>

      <style>{`
        .customer-testimonials{padding:76px 0 72px;background:#f5f8fb}.testimonial-heading{display:block;margin-bottom:30px;text-align:center}.testimonial-heading .kicker{margin:0;text-align:center;color:#081d3b;font-size:46px;font-weight:700;line-height:1.08;letter-spacing:-.035em;white-space:nowrap}.testimonial-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}.testimonial-card{min-height:178px;padding:27px 28px 25px;border:1px solid #c6d3de;background:#fff}.testimonial-rating{display:block;color:#0f67a8;font-size:14px;font-weight:700;letter-spacing:.14em}.testimonial-card blockquote{min-height:58px;margin:22px 0 24px;color:#0b1f3a;font-family:Georgia,serif;font-size:19px;font-weight:600;line-height:1.48}.testimonial-card>b{display:block;padding-top:16px;border-top:1px solid #d5dfe7;color:#334155;font-size:11px;font-weight:800;letter-spacing:.12em;text-transform:uppercase}.amazon-review-link{display:flex;align-items:center;justify-content:center;gap:16px;margin-top:25px;text-align:left}.amazon-review-icon{position:relative;width:78px;height:42px;display:flex;align-items:center;justify-content:center;flex:0 0 auto;color:#111827;background:transparent}.amazon-review-icon b{font-family:Arial,sans-serif;font-size:18px;font-weight:700;letter-spacing:-.06em}.amazon-review-icon i{position:absolute;left:20px;bottom:4px;width:41px;height:10px;border-bottom:3px solid #f59e0b;border-radius:0 0 60% 60%;transform:rotate(3deg)}.amazon-review-icon i:after{content:"";position:absolute;right:-1px;bottom:-4px;border-left:5px solid #f59e0b;border-top:3px solid transparent;border-bottom:3px solid transparent;transform:rotate(18deg)}.amazon-review-link p{margin:0 0 4px;color:#334155;font-size:12px;font-weight:600;line-height:1.45}.amazon-review-link button{color:#0b1f3a;font-size:12px;font-weight:800;border:0;border-bottom:1px solid #7f94a6;padding:0 0 2px;background:transparent;cursor:pointer}.amazon-review-link button:hover{color:#176da5;border-bottom-color:#176da5}@media(max-width:760px){.customer-testimonials{padding:60px 0 58px}.testimonial-heading{margin-bottom:24px}.testimonial-heading .kicker{font-size:clamp(28px,9vw,36px);white-space:normal}.testimonial-grid{grid-template-columns:1fr;gap:12px}.testimonial-card{min-height:0;padding:24px}.testimonial-card blockquote{min-height:0;margin:18px 0 21px}.amazon-review-link{margin-top:22px;justify-content:center}}
      `}</style>
    </section>
  );
}
