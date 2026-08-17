import Link from "next/link"; import {Header,Footer,Arrow,ProductImage} from "./components";
import { CustomerTestimonials } from "./home/CustomerTestimonials";
import { HomepageVisualRefresh } from "./home/HomepageVisualRefresh";
const accessories=[
  ["Applicator Heads","/images/products/st100-applicators.jpg","SHOCKIS shockwave therapy applicator heads"],
  ["Handpiece","/images/products/st100-handpiece.jpg","SHOCKIS shockwave therapy handpiece"],
  ["Cables","/images/products/amazon-current/st100-package-contents.jpg","SHOCKIS system cables and package components"],
  ["Cases","/images/products/amazon-current/st100-main-current.jpg","SHOCKIS system transport and storage accessories"],
  ["Custom Accessories","/images/products/amazon-current/st100-seven-heads.jpg","SHOCKIS custom accessory options"],
];
export default function Home(){return <><Header/><main className="home-visual-refresh">
  <section className="home-hero hero-light"><div className="hero-background" aria-hidden="true"/><div className="wrap home-hero-grid"><div className="hero-copy"><p className="kicker">GLOBAL MEDICAL DEVICE MANUFACTURER</p><h1>Focused<br/>technology.<br/><em>Reliable therapy.</em></h1><p>Professional shockwave therapy systems<br/>for healthcare providers, distributors<br/>and OEM partners worldwide.</p><div className="hero-actions"><Link className="solid-btn" href="/products">Explore the system <Arrow/></Link></div></div></div></section>
  <section className="trust-strip"><div className="wrap">
    <div className="trust-intro"><span className="trust-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 3 4.5 6v5.2c0 4.5 3 8.1 7.5 9.8 4.5-1.7 7.5-5.3 7.5-9.8V6L12 3Z"/><path d="m8.7 12 2.1 2.1 4.5-4.7"/></svg></span><span>COMPLIANCE &amp; PARTNERSHIP<br/>CAPABILITIES</span></div>
    <div><span className="trust-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="m3 9 9-5 9 5"/><path d="M5 10h14M6 10v7m4-7v7m4-7v7m4-7v7M4 18h16M3 21h18"/></svg></span><span><b>FDA</b><small>U.S. Market Pathway</small></span></div>
    <div><span className="trust-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.5 3.8 5.5 3.8 9S14.5 18.5 12 21c-2.5-2.5-3.8-5.5-3.8-9S9.5 5.5 12 3Z"/></svg></span><span><b>FSA / HSA</b><small>Multi-Market Support</small></span></div>
    <div><span className="trust-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="m8.5 12.5 3 3a2 2 0 0 0 2.8 0l4.2-4.2"/><path d="m15.5 8.5-2-2a2 2 0 0 0-2.8 0L5.5 11.7"/><path d="m2.5 8 3-3 3 3-3 3-3-3Zm13 8 3-3 3 3-3 3-3-3Z"/></svg></span><span><b>OEM / ODM</b><small>Flexible Cooperation</small></span></div>
  </div></section>
  <section className="section wrap home-product-overview"><div className="section-heading"><div><p className="kicker">CORE PRODUCT</p><h2>Engineered for Professional Use.</h2></div></div><div className="product-feature"><div className="feature-image"><ProductImage/><span>PRODUCT SYSTEM / 01</span></div><div className="feature-copy"><p className="kicker">SHOCKWAVE THERAPY SYSTEM</p><h3>Clear operation.<br/>Consistent output.</h3><ul><li><span>01</span><div><b>Dual operation</b></div></li><li><span>02</span><div><b>Ergonomic handpiece</b></div></li><li><span>03</span><div><b>Seven applicator heads</b></div></li></ul><Link className="text-btn product-detail-link" href="/products">View Product Details <Arrow/></Link></div></div></section>
  <section className="home-accessories"><div className="wrap"><div className="home-accessories-heading"><p className="kicker">ACCESSORIES</p><h2>Custom Accessories. Built to Match.</h2></div><div className="home-accessories-grid">{accessories.map(([name,image,alt])=><Link href="/accessories" className="home-accessory-item" key={name}><span><img src={image} alt={alt}/></span><b>{name}</b></Link>)}</div><div className="home-accessories-cta"><Link className="text-btn" href="/accessories">View All Accessories <Arrow/></Link></div></div></section>
  {false && <>
    <section className="section wrap"><div className="section-heading"><div><p className="kicker">QUALITY & MANUFACTURING</p><h2>From design intent<br/>to released product.</h2></div><div><p>Documented controls connect product requirements, supplier quality, assembly, inspection and final release.</p><Link className="text-btn" href="/quality">Explore quality assurance <Arrow/></Link></div></div><div className="process"><div><span>01</span><b>Design control</b></div><div><span>02</span><b>Supplier quality</b></div><div><span>03</span><b>Controlled assembly</b></div><div><span>04</span><b>Inspection & release</b></div></div></section>
    <section className="partner-cta"><div className="wrap"><div><p className="kicker light">GLOBAL PARTNERSHIP</p><h2>Bring a focused therapy<br/>solution to your market.</h2></div><div><p>We support distributor evaluation, OEM discussions and hospital procurement with clear product, quality and commercial documentation.</p><Link className="solid-btn white" href="/contact">Talk to our team <Arrow/></Link></div></div></section>
  </>}
  <CustomerTestimonials/>
  <HomepageVisualRefresh/>
</main><Footer/></>}
