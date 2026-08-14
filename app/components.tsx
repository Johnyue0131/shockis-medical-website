import Link from "next/link";

export function Arrow() {
  return <span aria-hidden="true">→</span>;
}

export function Logo() {
  return (
    <Link href="/" className="brand">
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
        <nav>
          <Link href="/">HOME</Link>
          <Link href="/product">PRODUCT</Link>
          <Link href="/indications">INDICATIONS</Link>
          <Link href="/community">COMMUNITY</Link>
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
          <div>
            <Link href="/">HOME</Link>
            <Link href="/product">PRODUCT</Link>
            <Link href="/indications">INDICATIONS</Link>
            <Link href="/community">COMMUNITY</Link>
            <Link href="/about">ABOUT</Link>
            <Link href="/contact">CONTACT</Link>
            <Link href="/shop">SHOP</Link>
          </div>
        </details>
      </div>
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
          <Link href="/product">PRODUCT</Link>
          <Link href="/indications">INDICATIONS</Link>
          <Link href="/community">COMMUNITY</Link>
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
