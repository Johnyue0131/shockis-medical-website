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
          <p className="kicker">CUSTOMER REVIEWS</p>
          <h2 id="customer-reviews-title">Trusted by Professionals.</h2>
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
          <span className="amazon-review-icon" aria-hidden="true">A</span>
          <div>
            <p>See more customer reviews on Amazon.</p>
            <a href="#">Visit our Amazon Store →</a>
          </div>
        </div>
      </div>

      <style>{`
        .customer-testimonials{padding:76px 0 72px;background:#f5f8fb}.testimonial-heading{display:block;margin-bottom:30px;text-align:center}.testimonial-heading .kicker{margin-bottom:14px;text-align:center}.testimonial-heading h2{margin:0;color:#081d3b;font-size:46px;font-weight:700;line-height:1.08;letter-spacing:-.035em;white-space:nowrap}.testimonial-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}.testimonial-card{min-height:178px;padding:27px 28px 25px;border:1px solid #d4dfe8;background:#fff}.testimonial-rating{display:block;color:#176da5;font-size:12px;letter-spacing:.14em}.testimonial-card blockquote{min-height:52px;margin:22px 0 24px;color:#17324d;font-family:Georgia,serif;font-size:16px;font-weight:600;line-height:1.5}.testimonial-card>b{display:block;padding-top:16px;border-top:1px solid #e0e7ed;color:#52677b;font-size:9px;font-weight:750;letter-spacing:.12em;text-transform:uppercase}.amazon-review-link{display:flex;align-items:center;gap:14px;margin-top:25px}.amazon-review-icon{width:34px;height:34px;display:grid;place-items:center;flex:0 0 auto;border:1px solid #bdccd8;color:#176da5;background:#fff;font-size:11px;font-weight:800}.amazon-review-link p{margin:0 0 4px;color:#40566d;font-size:10px;line-height:1.4}.amazon-review-link a{color:#0b1f3a;font-size:10px;font-weight:750;border-bottom:1px solid #9eafbd;padding-bottom:2px}.amazon-review-link a:hover{color:#176da5;border-bottom-color:#176da5}
        @media(max-width:760px){.customer-testimonials{padding:60px 0 58px}.testimonial-heading{margin-bottom:24px}.testimonial-heading h2{font-size:clamp(28px,9vw,36px);white-space:normal}.testimonial-grid{grid-template-columns:1fr;gap:12px}.testimonial-card{min-height:0;padding:24px}.testimonial-card blockquote{min-height:0;margin:18px 0 21px}.amazon-review-link{margin-top:22px}}
      `}</style>
    </section>
  );
}
