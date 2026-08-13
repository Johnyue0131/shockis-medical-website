import Link from "next/link";
import { Header, Footer, Arrow, ProductVisual } from "./components";

const products = [
  ["01", "Patient Monitoring", "Modular vital-sign monitors for wards, transport and critical care."],
  ["02", "Respiratory Care", "Reliable oxygen therapy and airway management for daily clinical use."],
  ["03", "Surgical Solutions", "Precision instruments and consumables engineered for consistency."],
];

export default function Home() {
  return <><Header />
    <main>
      <section className="hero shell">
        <div className="hero-copy">
          <p className="eyebrow"><span /> GLOBAL MEDTECH PARTNER</p>
          <h1>Precision care.<br/><em>Delivered globally.</em></h1>
          <p className="lead">We help healthcare providers and distributors access dependable medical devices—built with rigorous quality control and global market readiness.</p>
          <div className="actions"><Link className="button primary" href="/products">Explore products <Arrow /></Link><Link className="text-link" href="/contact">Talk to our team <Arrow /></Link></div>
          <div className="proof"><div><b>40+</b><span>Export markets</span></div><div><b>12 yrs</b><span>Manufacturing expertise</span></div><div><b>ISO 13485</b><span>Quality management</span></div></div>
        </div>
        <div className="hero-art" aria-label="Modern patient monitoring device illustration">
          <div className="orbit orbit-a"/><div className="orbit orbit-b"/><div className="device"><div className="device-top"><span>AVEN</span><i/></div><div className="screen"><small>PATIENT 04</small><div className="wave">⌁⌁╲╱⌁⌁╲╱⌁</div><div className="readings"><b>72</b><b>98</b><b>120<small>/80</small></b></div></div><div className="controls"><i/><i/><i/><i/></div></div>
          <div className="float-card"><span className="pulse">●</span><div><small>QUALITY STANDARD</small><b>ISO 13485 Certified</b></div></div>
        </div>
      </section>
      <section className="trust"><div className="shell trust-inner"><span>QUALITY SYSTEMS & MARKET ACCESS</span><b>ISO<br/>13485</b><b>FDA<br/><small>REGISTERED</small></b><b>CE<br/><small>MARK</small></b><b>MDSAP</b></div></section>
      <section className="section shell">
        <div className="section-head"><div><p className="eyebrow"><span/> WHAT WE MAKE</p><h2>Designed around<br/>clinical reality.</h2></div><p>From the ward to the operating room, our portfolio is developed with healthcare professionals in mind.</p></div>
        <div className="product-grid">{products.map((p,i)=><Link href="/products" className="product-card" key={p[0]}><div className="product-image"><span className="num">{p[0]}</span><ProductVisual type={i}/></div><div className="product-info"><h3>{p[1]}</h3><p>{p[2]}</p><span className="round"><Arrow/></span></div></Link>)}</div>
      </section>
      <section className="compliance"><div className="shell compliance-inner"><div><p className="eyebrow light"><span/> REGULATORY CONFIDENCE</p><h2>Compliance isn’t<br/>a checkpoint.<br/><em>It’s our foundation.</em></h2></div><div><p>Our dedicated regulatory team supports documentation, market access, and post-market requirements—so you can move forward with clarity.</p><Link className="button white" href="/fda">Our FDA approach <Arrow/></Link></div></div></section>
    </main><Footer /></>;
}
