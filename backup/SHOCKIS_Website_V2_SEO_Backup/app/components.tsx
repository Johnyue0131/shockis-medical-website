import Link from "next/link";

export function Arrow() {
  return <span aria-hidden="true">→</span>;
}

export function Logo() {
  return (
    <Link href="/" className="brand" aria-label="SHOCKIS Medical home">
      <span className="brand-symbol">S</span>
      <span>SHOCKIS<small>MEDICAL</small></span>
    </Link>
  );
}

export function Header() {
  return (
    <header className="site-header">
      <div className="wrap nav">
        <Logo />
        <nav aria-label="Primary navigation">
          <Link href="/">HOME</Link>
          <div className="nav-dropdown">
            <button type="button" aria-haspopup="true">PRODUCTS <span aria-hidden="true">⌄</span></button>
            <div className="nav-dropdown-menu nav-products-menu">
              <Link href="/product">SHOCKWAVE THERAPY SYSTEM</Link>
              <Link href="/accessories">ACCESSORIES</Link>
            </div>
          </div>
          <Link href="/indications">INDICATIONS</Link>
          <div className="nav-dropdown">
            <button type="button" aria-haspopup="true">RESOURCES <span aria-hidden="true">⌄</span></button>
            <div className="nav-dropdown-menu">
              <Link href="/faq">FAQ</Link>
              <Link href="/downloads">DOWNLOADS</Link>
              <Link href="/blog">BLOG</Link>
            </div>
          </div>
          <Link href="/about">ABOUT</Link>
          <Link href="/contact">CONTACT</Link>
          <Link href="/shop">SHOP</Link>
        </nav>
        <div className="nav-tools">
          <span><i /> Global supply</span>
          <Link className="outline-btn" href="/contact">Request information <Arrow /></Link>
        </div>
        <details className="mobile-nav">
          <summary>Menu</summary>
          <div role="navigation" aria-label="Mobile navigation">
            <Link href="/">HOME</Link>
            <span className="mobile-nav-label">PRODUCTS</span>
            <Link className="mobile-nav-child" href="/product">SHOCKWAVE THERAPY SYSTEM</Link>
            <Link className="mobile-nav-child" href="/accessories">ACCESSORIES</Link>
            <Link href="/indications">INDICATIONS</Link>
            <span className="mobile-nav-label">RESOURCES</span>
            <Link className="mobile-nav-child" href="/faq">FAQ</Link>
            <Link className="mobile-nav-child" href="/downloads">DOWNLOADS</Link>
            <Link className="mobile-nav-child" href="/blog">BLOG</Link>
            <Link href="/about">ABOUT</Link>
            <Link href="/contact">CONTACT</Link>
            <Link href="/shop">SHOP</Link>
          </div>
        </details>
      </div>
      <style>{`
        .nav nav{align-items:center}.nav-dropdown{position:relative;height:85px;display:flex;align-items:center}.nav-dropdown>button{height:100%;padding:0;border:0;background:transparent;color:inherit;font:inherit;font-weight:inherit;cursor:pointer}.nav-dropdown>button span{margin-left:5px;color:#67839a}.nav-dropdown-menu{position:absolute;left:-22px;top:72px;width:155px;padding:10px;background:#fffffff7;border:1px solid var(--line);box-shadow:0 18px 45px #082d4e17;display:grid;opacity:0;visibility:hidden;transform:translateY(7px);transition:.2s}.nav-dropdown-menu.nav-products-menu{width:235px}.nav-dropdown-menu a{padding:11px 12px;color:#355b78;font-size:10px;letter-spacing:.04em}.nav-dropdown-menu a:after{display:none}.nav-dropdown-menu a:hover{background:var(--pale);color:var(--blue)}.nav-dropdown:hover .nav-dropdown-menu,.nav-dropdown:focus-within .nav-dropdown-menu{opacity:1;visibility:visible;transform:translateY(0)}.mobile-nav-label{padding-top:8px;border-top:1px solid var(--line);font-size:8px;letter-spacing:.14em;color:#698198}.mobile-nav-child{padding-left:12px;color:#456985}
        @media(max-width:820px){.nav-dropdown{display:none}}
      `}</style>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-main">
        <div className="footer-brand">
          <Logo />
          <p>Professional shockwave therapy systems and accessories.</p>
          <a href="mailto:sales@shockis.com">sales@shockis.com</a>
          <div className="footer-socials" aria-label="Social media">
            <a href="#" aria-label="SHOCKIS Medical on YouTube">YouTube</a>
            <a href="#" aria-label="SHOCKIS Medical social media">Social Media</a>
          </div>
        </div>
        <div className="footer-links">
          <b>Explore</b>
          <Link href="/product">Products</Link>
          <Link href="/indications">Indications</Link>
          <Link href="/accessories">Accessories</Link>
          <Link href="/faq">Resources</Link>
          <Link href="/downloads">Downloads</Link>
        </div>
        <div className="footer-links">
          <b>Support</b>
          <Link href="/contact">Contact</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/shipping-returns">Shipping &amp; Returns</Link>
          <Link href="/refund-policy">Refund Policy</Link>
          <Link href="/warranty-policy">Warranty Policy</Link>
        </div>
        <div className="footer-newsletter">
          <b>Stay Updated</b>
          <p>Get product updates, resources and company news.</p>
          <form action="#" method="post">
            <div className="footer-subscribe-row">
              <label className="sr-only" htmlFor="footer-email">Email address</label>
              <input id="footer-email" name="email" type="email" placeholder="Email address" required />
              <button type="submit">Subscribe</button>
            </div>
            <label className="footer-consent">
              <input name="marketing-consent" type="checkbox" required />
              <span>I agree to receive SHOCKIS Medical updates by email. I can unsubscribe at any time.</span>
            </label>
          </form>
        </div>
      </div>
      <div className="wrap footer-base">
        <span>© 2026 SHOCKIS Medical. All rights reserved.</span>
        <span className="footer-disclaimer">Product information only. Not medical advice.</span>
        <span className="footer-legal"><Link href="/privacy-policy">Privacy Policy</Link><Link href="/terms-of-service">Terms of Service</Link></span>
      </div>
      <style>{`
        .site-footer{background:#061f3d;color:#fff;padding:66px 0 24px}.site-footer .footer-main{grid-template-columns:1.15fr .72fr .86fr 1.45fr;gap:58px;padding-bottom:50px}.site-footer .footer-main>div{font-size:11px;color:#a9bdcd}.site-footer .footer-main b{margin:0 0 10px;color:#fff;font-size:10px;font-weight:750;letter-spacing:.12em}.site-footer .footer-brand p{max-width:260px;margin:18px 0 15px;color:#a9bdcd;line-height:1.65}.site-footer .footer-brand>a{color:#fff;font-weight:650}.site-footer .footer-socials{display:flex;flex-direction:row;gap:16px;margin-top:21px}.site-footer .footer-socials a{color:#8fc8ec;font-size:9px;font-weight:700}.site-footer .footer-links{gap:13px}.site-footer .footer-links a{color:#a9bdcd;transition:color .2s}.site-footer .footer-links a:hover,.site-footer .footer-socials a:hover,.site-footer .footer-legal a:hover{color:#82c8f2}.site-footer .footer-newsletter{display:block}.site-footer .footer-newsletter>p{margin:4px 0 18px;color:#a9bdcd;line-height:1.6}.site-footer .footer-subscribe-row{display:grid;grid-template-columns:1fr auto}.site-footer .footer-subscribe-row input{min-width:0;height:43px;border:1px solid #58738b;border-right:0;background:#fff;color:#0b1f3a;padding:0 13px;font:inherit;outline:none}.site-footer .footer-subscribe-row input:focus{border-color:#82c8f2}.site-footer .footer-subscribe-row button{height:43px;border:1px solid #82c8f2;background:#176da5;color:#fff;padding:0 17px;font:inherit;font-size:9px;font-weight:800;cursor:pointer}.site-footer .footer-subscribe-row button:hover{background:#2484bd}.site-footer .footer-consent{display:grid;grid-template-columns:14px 1fr;gap:9px;align-items:start;margin-top:13px;color:#91a9bc;font-size:8px;line-height:1.55;cursor:pointer}.site-footer .footer-consent input{width:13px;height:13px;margin:1px 0 0;accent-color:#2484bd}.site-footer .footer-base{display:grid;grid-template-columns:auto 1fr auto;gap:30px;align-items:center;color:#829bb0}.site-footer .footer-disclaimer{text-align:center}.site-footer .footer-legal{display:flex;gap:20px}.site-footer .sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}
        @media(max-width:980px){.site-footer .footer-main{grid-template-columns:1fr 1fr;gap:44px 60px}.site-footer .footer-base{grid-template-columns:1fr auto}.site-footer .footer-disclaimer{grid-column:1/-1;grid-row:2;text-align:left}}
        @media(max-width:620px){.site-footer{padding-top:55px}.site-footer .footer-main{grid-template-columns:1fr;gap:36px;padding-bottom:42px}.site-footer .footer-subscribe-row{grid-template-columns:1fr}.site-footer .footer-subscribe-row input{border-right:1px solid #58738b;border-bottom:0}.site-footer .footer-base{grid-template-columns:1fr;gap:12px}.site-footer .footer-disclaimer{grid-column:auto;grid-row:auto;text-align:left}.site-footer .footer-legal{flex-wrap:wrap}}
      `}</style>
    </footer>
  );
}

export function PageIntro({ index, kicker, title, copy }: { index: string; kicker: string; title: string; copy: string }) {
  return (
    <section className="page-intro wrap">
      <span className="page-index">{index}</span>
      <div><p className="kicker">{kicker}</p><h1>{title}</h1></div>
      <p>{copy}</p>
    </section>
  );
}

export function ProductImage({ className = "" }: { className?: string }) {
  return <img className={className} src="/images/shockwave-system-hero.webp" width="1536" height="1024" alt="SHOCKIS professional radial shockwave therapy system with applicator heads" />;
}
