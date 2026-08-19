import Link from "next/link";
import { Arrow, Footer, Header } from "../components";
import { ProductCatalogCard, type ShopCatalogItem } from "./ProductCatalogCard";

const catalogItems: ShopCatalogItem[] = [
  {
    name: "Shockwave Therapy System",
    description: "Professional radial shockwave therapy system for rehabilitation clinics and healthcare providers.",
    image: "/images/products/st100-main.jpg",
    imageAlt: "SHOCKIS professional radial shockwave therapy system",
  },
  { name: "Treatment Applicators", description: "Future treatment applicator configurations for SHOCKIS shockwave therapy systems.", status: "coming-soon" },
  { name: "Replacement Parts", description: "System-compatible service and replacement components for professional support.", status: "coming-soon" },
  { name: "Foot Switch", description: "A future hands-free control option for selected professional system workflows.", status: "coming-soon" },
  { name: "Consumables", description: "Professional-use consumables and supporting materials for system operation.", status: "coming-soon" },
  { name: "Accessories Kit", description: "A coordinated accessory configuration for future clinical and distributor requirements.", status: "coming-soon" },
];

export default function Shop() {
  return (
    <>
      <Header />
      <main className="shop-page">
        <section className="shop-hero">
          <div className="wrap shop-hero-grid">
            <div className="shop-hero-copy">
              <p className="kicker light">SHOCKIS SHOP</p>
              <h1>Professional Shockwave<br />Therapy System</h1>
              <p>Discover SHOCKIS professional shockwave therapy system for rehabilitation clinics, healthcare providers and global medical partners.</p>
              <Link className="solid-btn white" href="#product-catalog">View Product <Arrow /></Link>
            </div>
          </div>
        </section>

        <section className="shop-catalog-section" id="product-catalog">
          <div className="wrap">
            <div className="shop-catalog-heading">
              <div><p className="kicker">PRODUCT CATALOG</p><h2>Professional systems<br />and supporting components.</h2></div>
              <p>Explore the current SHOCKIS system and accessory categories planned for future professional and distributor requirements.</p>
            </div>
            <div className="shop-catalog-grid">
              {catalogItems.map((item) => <ProductCatalogCard key={item.name} item={item} />)}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <style>{`
        .shop-page{overflow:hidden;background:#fff}.shop-hero{position:relative;background:linear-gradient(132deg,#061f3d 0%,#073b69 62%,#075991 100%);color:#fff;overflow:hidden}.shop-hero:before,.shop-hero:after{content:"";position:absolute;border:1px solid #7fc6ef1f;border-radius:50%;pointer-events:none}.shop-hero:before{width:360px;height:360px;right:-80px;top:-180px}.shop-hero:after{width:240px;height:240px;right:95px;bottom:-175px}.shop-hero-grid{position:relative;z-index:1;height:240px}.shop-hero-copy{max-width:870px;height:240px;padding:24px 0;display:flex;flex-direction:column;justify-content:center;align-items:flex-start}.shop-hero-copy h1{font-size:clamp(38px,4vw,52px);line-height:1.02;letter-spacing:-.05em;font-weight:480;color:#fff;margin:0}.shop-hero-copy>p:not(.kicker){max-width:700px;color:#bfd2e1;font-size:11px;line-height:1.55;margin:13px 0 16px}.shop-hero-copy .solid-btn{min-height:40px;padding-top:0;padding-bottom:0}.shop-catalog-section{padding:115px 0 125px}.shop-catalog-heading{display:grid;grid-template-columns:1.25fr .75fr;gap:90px;align-items:end;margin-bottom:58px}.shop-catalog-heading h2{font-size:50px;line-height:1.06;letter-spacing:-.045em;font-weight:500;margin:0}.shop-catalog-heading>p{color:var(--muted);font-size:12px;line-height:1.8;margin:0}.shop-catalog-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px}.shop-catalog-card{display:flex;flex-direction:column;min-width:0;background:#fff;border:1px solid #d8e4ec;transition:transform .2s,box-shadow .2s}.shop-catalog-card:hover{transform:translateY(-4px);box-shadow:0 20px 50px #0b4d8214}.shop-catalog-image{position:relative;height:330px;overflow:hidden;background:#f1f6fa;border-bottom:1px solid #d8e4ec}.shop-catalog-image.has-product img{width:100%;height:100%;object-fit:contain;mix-blend-mode:multiply}.shop-catalog-image.is-placeholder{display:grid;place-items:center;background:linear-gradient(145deg,#f8fbfd,#eaf3f8)}.shop-catalog-image.is-placeholder:before,.shop-catalog-image.is-placeholder:after{content:"";position:absolute;border:1px solid #c6dce9;border-radius:50%}.shop-catalog-image.is-placeholder:before{width:230px;height:230px}.shop-catalog-image.is-placeholder:after{width:155px;height:155px}.shop-placeholder-mark{position:relative;z-index:1;text-align:center;color:#406985}.shop-placeholder-mark>i{display:block;width:8px;height:8px;margin:0 auto 15px;border-radius:50%;background:#0d78bd}.shop-placeholder-mark>span{font-size:11px;font-weight:750;letter-spacing:.14em}.shop-placeholder-mark small{display:block;margin-top:6px;font-size:5px;font-weight:600;letter-spacing:.17em;color:#7790a2}.shop-catalog-image>strong{position:absolute;z-index:2;top:18px;right:18px;padding:9px 11px;background:#fff;color:#52728a;font-size:7px;letter-spacing:.13em;text-transform:uppercase}.shop-catalog-copy{display:flex;flex:1;flex-direction:column;padding:27px 27px 25px}.shop-catalog-copy h3{font-size:19px;line-height:1.25;color:#123f66;margin:0 0 12px}.shop-catalog-copy p{min-height:55px;font-size:10px;line-height:1.75;color:#697f91;margin:0 0 25px}.shop-catalog-copy a{display:flex;justify-content:space-between;margin-top:auto;padding-top:15px;border-top:1px solid #dbe6ed;color:#0a5f9f;font-size:9px;font-weight:800}.shop-catalog-copy a:hover{color:#083f70}
        @media(max-width:1000px){.shop-catalog-grid{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:820px){.shop-hero-grid,.shop-hero-copy{height:auto;min-height:240px}.shop-hero-copy{padding:38px 0}.shop-hero-copy h1{font-size:39px}.shop-hero:before{width:320px;height:320px;right:-165px;top:-120px}.shop-catalog-section{padding:75px 0 85px}.shop-catalog-heading{grid-template-columns:1fr;gap:25px;margin-bottom:40px}.shop-catalog-heading h2{font-size:38px}}
        @media(max-width:620px){.shop-catalog-grid{grid-template-columns:1fr}.shop-catalog-image{height:300px}}
      `}</style>
    </>
  );
}
