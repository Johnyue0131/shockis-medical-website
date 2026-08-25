import Image from "next/image";

const amazonProductUrl = "https://www.amazon.com/dp/B0FSZR2N35";

// Screenshots of real five-star Verified Purchase reviews from the official Amazon listing.
// The second rendered set is only a visual duplicate used to create the seamless marquee.
const amazonReviewScreenshots = Array.from({ length: 8 }, (_, index) => ({
  src: `/images/home/amazon-reviews/amazon-five-star-review-${String(index + 1).padStart(2, "0")}.jpg`,
  alt: `Five-star verified-purchase Amazon customer review for the SHOCKIS ST100, screenshot ${index + 1}`,
}));

function ReviewScreenshotSet({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <div className="customer-review-set" aria-hidden={duplicate || undefined}>
      {amazonReviewScreenshots.map((review) => (
        <figure className="customer-review-screenshot" key={`${duplicate ? "duplicate" : "original"}-${review.src}`}>
          <Image
            src={review.src}
            alt={duplicate ? "" : review.alt}
            width={682}
            height={330}
            sizes="(max-width: 560px) 82vw, (max-width: 900px) 62vw, 520px"
            loading={duplicate ? "lazy" : "eager"}
          />
        </figure>
      ))}
    </div>
  );
}

export function CustomerTestimonials() {
  return (
    <section className="customer-testimonials" aria-labelledby="customer-feedback-title">
      <div className="wrap">
        <div className="customer-feedback-heading">
          <div>
            <p className="home-eyebrow">VERIFIED PURCHASE FEEDBACK</p>
            <h2 id="customer-feedback-title">Customer Feedback from Amazon on the SHOCKIS ST100</h2>
          </div>
          <p>
            Explore real five-star verified-purchase feedback published on the official Amazon listing for the SHOCKIS
            ST100 radial shockwave therapy machine. Customer experiences are individual and are not a guarantee of
            results.
          </p>
        </div>
      </div>

      <div
        className="customer-review-marquee"
        role="region"
        aria-label="Five-star verified-purchase feedback screenshots from Amazon"
      >
        <div className="customer-review-track">
          <ReviewScreenshotSet />
          <ReviewScreenshotSet duplicate />
        </div>
      </div>

      <div className="wrap">
        <div className="customer-feedback-footer">
          <p>
            Screenshots show customer feedback published on Amazon. Read the complete, current reviews directly on the
            official product listing.
          </p>
          <a href={amazonProductUrl} target="_blank" rel="noopener noreferrer">
            View Product and Customer Reviews on Amazon <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <style>{`
        .customer-testimonials{padding:100px 0;background:#f3f7fa;border-top:1px solid #dbe5ec;border-bottom:1px solid #dbe5ec;overflow:hidden}.home-visual-refresh .customer-testimonials .home-eyebrow{font-size:13px;letter-spacing:.16em}.customer-feedback-heading{display:grid;grid-template-columns:1.2fr .8fr;gap:100px;align-items:end;margin-bottom:48px}.customer-feedback-heading h2{max-width:760px;margin:0;color:#081d3b;font-size:clamp(42px,4.2vw,58px);font-weight:650;line-height:1.06;letter-spacing:-.045em}.customer-feedback-heading>p{margin:0;color:#52677b;font-size:16px;line-height:1.75}.customer-review-marquee{width:100%;overflow:hidden;-webkit-mask-image:linear-gradient(90deg,transparent,#000 5%,#000 95%,transparent);mask-image:linear-gradient(90deg,transparent,#000 5%,#000 95%,transparent)}.customer-review-track{display:flex;width:max-content;animation:customer-review-scroll 78s linear infinite;will-change:transform}.customer-review-marquee:hover .customer-review-track,.customer-review-marquee:focus-within .customer-review-track{animation-play-state:paused}.customer-review-set{display:flex;flex:none;gap:18px;padding-right:18px}.customer-review-screenshot{flex:none;width:clamp(380px,40vw,540px);margin:0;overflow:hidden;background:#fff;border:1px solid #cbd8e2;box-shadow:0 18px 48px rgba(8,29,59,.08);transition:transform .3s ease,box-shadow .3s ease}.customer-review-screenshot:hover{transform:translateY(-5px) scale(1.012);box-shadow:0 24px 58px rgba(8,29,59,.15)}.customer-review-screenshot img{display:block;width:100%;height:auto}.customer-feedback-footer{display:flex;align-items:center;justify-content:space-between;gap:40px;margin-top:36px}.customer-feedback-footer p{max-width:650px;margin:0;color:#61778a;font-size:15px;line-height:1.7}.customer-feedback-footer a{display:inline-flex;align-items:center;justify-content:space-between;gap:25px;padding:16px 19px;color:#fff;background:#0b1f3a;border:1px solid #0b1f3a;font-size:13px;font-weight:800;transition:.2s}.customer-feedback-footer a:hover{background:#176da5;border-color:#176da5}.customer-feedback-footer a span{font-size:16px}@keyframes customer-review-scroll{to{transform:translateX(-50%)}}@media(max-width:820px){.customer-testimonials{padding:72px 0}.customer-feedback-heading{grid-template-columns:1fr;gap:22px;margin-bottom:34px}.customer-feedback-heading h2{font-size:40px}.customer-feedback-heading>p{font-size:15px}.customer-review-screenshot{width:min(78vw,500px)}.customer-feedback-footer{align-items:flex-start;flex-direction:column;gap:22px}.customer-feedback-footer a{width:100%}}@media(max-width:480px){.customer-feedback-heading h2{font-size:34px}.home-visual-refresh .customer-testimonials .home-eyebrow{font-size:12px}.customer-review-marquee{-webkit-mask-image:none;mask-image:none}.customer-review-screenshot{width:84vw}.customer-feedback-footer a{gap:14px;font-size:12px}}@media(prefers-reduced-motion:reduce){.customer-review-marquee{overflow-x:auto;-webkit-mask-image:none;mask-image:none;scroll-snap-type:x proximity}.customer-review-track{animation:none}.customer-review-screenshot{scroll-snap-align:center}.customer-review-screenshot:hover{transform:none}}
      `}</style>
    </section>
  );
}
