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
    <footer>
      <div className="wrap footer-main">
        <div>
          <Logo />
          <p>Focused shockwave technology.<br />Built with quality. Supplied globally.</p>
        </div>
        <div>
          <b>Explore</b>
          <Link href="/">HOME</Link>
          <Link href="/product">PRODUCTS</Link>
          <Link href="/accessories">ACCESSORIES</Link>
          <Link href="/indications">INDICATIONS</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/downloads">DOWNLOADS</Link>
          <Link href="/blog">BLOG</Link>
        </div>
        <div>
          <b>Company</b>
          <Link href="/about">ABOUT</Link>
          <Link href="/contact">CONTACT</Link>
          <Link href="/shop">SHOP</Link>
        </div>
        <div>
          <b>Contact</b>
          <a href="mailto:global@avenmedical.com">global@avenmedical.com</a>
          <span>Mon–Fri, 09:00–18:00 GMT+8</span>
        </div>
      </div>
      <div className="wrap footer-base">
        <span>© 2026 SHOCKIS Medical. All rights reserved.</span>
        <span>Privacy · Terms</span>
      </div>
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
