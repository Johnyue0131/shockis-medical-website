import Link from "next/link";
import { Arrow } from "../components";

export function ProductInformationCta() {
  return (
    <section className="product-information-cta" aria-labelledby="product-information-cta-title">
      <div className="wrap product-information-cta-inner">
        <div>
          <p className="kicker">PRODUCT SUPPORT</p>
          <h2 id="product-information-cta-title">Request Product Information</h2>
          <p>Contact our team for pricing, availability and professional support.</p>
        </div>
        <div className="product-information-cta-actions">
          <Link className="solid-btn" href="/contact">Request Information <Arrow /></Link>
          <Link className="text-btn" href="/contact">Contact Us <Arrow /></Link>
        </div>
      </div>
      <style>{`
        .product-information-cta{padding:76px 0;background:#f5f8fb;border-top:1px solid #dce5ec}.product-information-cta-inner{display:grid;grid-template-columns:1fr auto;gap:80px;align-items:end}.product-information-cta h2{margin:0;color:#0b1f3a;font-size:42px;font-weight:600;line-height:1.07;letter-spacing:-.04em}.product-information-cta-inner>div:first-child>p:last-child{margin:17px 0 0;color:#40566d;font-size:12px;line-height:1.7}.product-information-cta-actions{display:flex;align-items:center;gap:25px;padding-bottom:2px}.product-information-cta-actions .solid-btn{background:#176da5;border-color:#176da5}.product-information-cta-actions .solid-btn:hover{background:#0b4f80;border-color:#0b4f80}
        @media(max-width:760px){.product-information-cta{padding:60px 0}.product-information-cta-inner{grid-template-columns:1fr;gap:30px}.product-information-cta h2{font-size:35px}.product-information-cta-actions{align-items:stretch;flex-direction:column;gap:12px}.product-information-cta-actions a{width:100%;justify-content:space-between}}
      `}</style>
    </section>
  );
}
