export function HomepageVisualRefresh() {
  return (
    <style>{`
      body:has(.home-visual-refresh) .site-header {
        background: #ffffff;
        border-bottom-color: #d9e2ea;
        box-shadow: 0 1px 0 rgba(11, 31, 58, 0.04);
        backdrop-filter: none;
      }

      body:has(.home-visual-refresh) .site-header .brand,
      body:has(.home-visual-refresh) .site-header nav a,
      body:has(.home-visual-refresh) .site-header nav button {
        color: #081d3b;
        font-weight: 600;
      }

      body:has(.home-visual-refresh) .site-header nav a:hover,
      body:has(.home-visual-refresh) .site-header nav button:hover {
        color: #176da5;
      }

      body:has(.home-visual-refresh) .site-header .nav-tools > span {
        color: #40566d;
      }

      body:has(.home-visual-refresh) .site-header .outline-btn {
        color: #0b1f3a;
        border-color: #0b1f3a;
      }

      body:has(.home-visual-refresh) .site-header .outline-btn:hover {
        color: #ffffff;
        background: #0b1f3a;
      }

      .home-visual-refresh {
        color: #0b1f3a;
        background: #ffffff;
      }

      .home-visual-refresh .home-hero.hero-light {
        background: #061f3d;
      }

      .home-visual-refresh .home-hero-grid {
        min-height: 620px;
      }

      .home-visual-refresh .hero-light .hero-copy {
        width: 52%;
        padding: 78px 30px 55px 0;
      }

      .home-visual-refresh .hero-background {
        background-image:
          linear-gradient(90deg, rgba(6, 31, 61, 1) 0%, rgba(6, 31, 61, 1) 38%, rgba(6, 31, 61, 0.9) 51%, rgba(6, 31, 61, 0.38) 72%, rgba(6, 31, 61, 0.56) 100%),
          url('/images/shockis-hero-wide-v2.webp') !important;
        background-position: center center, center center !important;
        background-size: 100% 100%, cover !important;
        background-repeat: no-repeat !important;
      }

      .home-visual-refresh .kicker {
        color: #176da5;
        font-weight: 800;
        letter-spacing: 0.17em;
      }

      .home-visual-refresh .hero-copy h1,
      .home-visual-refresh .section-heading h2,
      .home-visual-refresh .feature-copy h3 {
        color: #0b1f3a;
        font-weight: 600;
        letter-spacing: -0.035em;
      }

      .home-visual-refresh .hero-copy h1 {
        color: #ffffff;
        font-size: clamp(54px, 5.1vw, 74px);
        font-weight: 700;
        line-height: 0.98;
      }

      .home-visual-refresh .hero-copy h1 em {
        color: #82c9ef;
        font-weight: 600;
      }

      .home-visual-refresh .home-hero .kicker {
        color: #8ed0f2;
        font-weight: 700;
        letter-spacing: 0.15em;
      }

      .home-visual-refresh .hero-copy > p:not(.kicker),
      .home-visual-refresh .section-heading > div > p,
      .home-visual-refresh .feature-copy > p,
      .home-visual-refresh .testimonial-heading > div:last-child > p {
        color: #40566d;
        font-weight: 450;
        line-height: 1.75;
      }

      .home-visual-refresh .home-hero .hero-copy > p:not(.kicker) {
        color: #e2e8f0;
        margin: 24px 0 28px;
        font-size: 18px;
        font-weight: 500;
        line-height: 1.6;
      }

      .home-visual-refresh .home-hero .solid-btn {
        color: #0b1f3a;
        background: #ffffff;
        border-color: #ffffff;
      }

      .home-visual-refresh .home-hero .solid-btn:hover {
        color: #ffffff;
        background: #176da5;
        border-color: #176da5;
      }

      .home-visual-refresh .home-hero .text-btn {
        color: #ffffff;
        border-bottom-color: rgba(255, 255, 255, 0.56);
      }

      .home-visual-refresh .home-hero .text-btn:hover {
        color: #82c9ef;
        border-bottom-color: #82c9ef;
      }

      .home-visual-refresh .solid-btn {
        color: #ffffff;
        background: #0b1f3a;
        border-color: #0b1f3a;
        font-weight: 700;
      }

      .home-visual-refresh .solid-btn:hover {
        background: #163a5f;
        border-color: #163a5f;
      }

      .home-visual-refresh .text-btn {
        color: #0b1f3a;
        border-bottom-color: #7e91a4;
        font-weight: 700;
      }

      .home-visual-refresh .text-btn:hover {
        color: #176da5;
        border-bottom-color: #176da5;
      }

      .home-visual-refresh .hero-meta {
        border-top-color: rgba(255, 255, 255, 0.24);
      }

      .home-visual-refresh .hero-meta span {
        color: #9db5c7;
      }

      .home-visual-refresh .hero-meta b {
        color: #ffffff;
        font-weight: 700;
      }

      .home-visual-refresh .hero-model {
        color: #ffffff;
        background: rgba(6, 31, 61, 0.76);
        border: 1px solid rgba(255, 255, 255, 0.2);
      }

      .home-visual-refresh .trust-strip {
        background: #ffffff;
        border-color: #dce4eb;
      }

      .home-visual-refresh .trust-strip .wrap > span,
      .home-visual-refresh .trust-strip small {
        color: #475569;
        font-weight: 500;
      }

      .home-visual-refresh .trust-strip b {
        color: #081d3b;
        font-weight: 700;
      }

      .home-visual-refresh .trust-strip .wrap > span {
        color: #081d3b;
        font-weight: 700;
        letter-spacing: 0.15em;
      }

      .home-visual-refresh .trust-strip > .wrap {
        height: 196px;
        grid-template-columns: 1.18fr repeat(3, 1fr);
        column-gap: 0;
      }

      .home-visual-refresh .trust-strip .wrap > div {
        display: grid;
        grid-template-columns: 64px 1fr;
        gap: 22px;
        align-items: center;
        min-height: 70px;
        padding: 0 30px;
        border-left: 1px solid #dce4eb;
      }

      .home-visual-refresh .trust-strip .wrap > div:first-child {
        padding-left: 0;
        border-left: 0;
      }

      .home-visual-refresh .trust-icon {
        width: 56px;
        height: 56px;
        display: grid;
        place-items: center;
        color: #245da5;
        background: #eef5ff;
        border-radius: 50%;
      }

      .home-visual-refresh .trust-icon svg {
        width: 27px;
        height: 27px;
        fill: none;
        stroke: currentColor;
        stroke-width: 1.7;
        stroke-linecap: round;
        stroke-linejoin: round;
      }

      .home-visual-refresh .trust-intro > span:last-child {
        color: #081d3b;
        font-size: 12px;
        font-weight: 700;
        line-height: 1.55;
        letter-spacing: 0.04em;
      }

      .home-visual-refresh .trust-strip b {
        font-size: 18px;
        line-height: 1.25;
      }

      .home-visual-refresh .trust-strip small {
        margin-top: 7px;
        color: #334155;
        font-size: 13px;
        font-weight: 600;
        line-height: 1.45;
        text-transform: none;
      }

      .home-visual-refresh > .section {
        background: #ffffff;
      }

      .home-visual-refresh .home-product-overview {
        padding-top: 78px;
        padding-bottom: 82px;
      }

      .home-visual-refresh .home-product-overview .section-heading {
        grid-template-columns: 1fr;
        align-items: end;
        text-align: center;
        margin-bottom: 34px;
      }

      .home-visual-refresh .home-product-overview .section-heading .kicker {
        text-align: center;
        margin: 0;
        color: #081d3b;
        font-size: 46px;
        font-weight: 700;
        line-height: 1.08;
        letter-spacing: -0.035em;
        white-space: nowrap;
      }

      .home-visual-refresh .product-feature {
        height: 410px;
        min-height: 410px;
        grid-template-columns: 1.35fr 0.65fr;
        border: 1px solid #d8e1e8;
        box-shadow: 0 18px 44px rgba(11, 31, 58, 0.055);
      }

      .home-visual-refresh .feature-copy {
        padding: 42px 40px;
        background: #ffffff;
      }

      .home-visual-refresh .home-product-overview .feature-copy .kicker {
        color: #0f5f9f;
        font-size: 11px;
        font-weight: 800;
      }

      .home-visual-refresh .home-product-overview .feature-image img {
        width: 100%;
        height: 100%;
        padding: 0;
        object-fit: cover;
        object-position: center;
      }

      .home-visual-refresh .home-product-overview .feature-copy h3 {
        margin-bottom: 22px;
        font-size: 26px;
        line-height: 1.16;
      }

      .home-visual-refresh .home-product-overview .feature-copy ul {
        margin: 20px 0 26px;
      }

      .home-visual-refresh .feature-copy li {
        grid-template-columns: 30px 1fr;
        padding: 13px 0;
        border-top-color: #d8e1e8;
      }

      .home-visual-refresh .feature-copy li > span,
      .home-visual-refresh .feature-image > span {
        color: #176da5;
        font-size: 10px;
        font-weight: 750;
      }

      .home-visual-refresh .feature-copy li b {
        color: #0b1f3a;
        font-size: 15px;
        font-weight: 700;
      }

      .home-visual-refresh .product-detail-link {
        font-size: 13px;
        margin-top: 2px;
      }

      .home-visual-refresh .home-accessories {
        padding: 76px 0 74px;
        background: #ffffff;
        border-top: 1px solid #e1e8ee;
      }

      .home-visual-refresh .home-accessories-heading {
        max-width: 720px;
        margin: 0 auto 34px;
        text-align: center;
      }

      .home-visual-refresh .home-accessories-heading .kicker {
        margin: 0;
        color: #081d3b;
        font-size: 46px;
        font-weight: 700;
        line-height: 1.08;
        letter-spacing: -0.035em;
        white-space: nowrap;
      }

      .home-visual-refresh .home-accessories-grid {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 16px;
      }

      .home-visual-refresh .home-accessory-item {
        display: block;
        color: #0b1f3a;
        text-align: center;
      }

      .home-visual-refresh .home-accessory-item > span {
        display: block;
        height: 148px;
        overflow: hidden;
        background: #f5f8fb;
      }

      .home-visual-refresh .home-accessory-item img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        mix-blend-mode: multiply;
        transition: transform 0.25s ease;
      }

      .home-visual-refresh .home-accessory-item b {
        display: block;
        margin-top: 13px;
        color: #0b1f3a;
        font-size: 14px;
        font-weight: 750;
      }

      .home-visual-refresh .home-accessory-item:hover {
        color: #176da5;
      }

      .home-visual-refresh .home-accessory-item:hover img {
        transform: scale(1.025);
      }

      .home-visual-refresh .home-accessories-cta {
        display: flex;
        justify-content: center;
        margin-top: 28px;
      }

      .home-visual-refresh .home-accessories-cta .text-btn {
        font-size: 13px;
      }

      .home-visual-refresh .feature-copy li small {
        color: #52677b;
        line-height: 1.55;
      }

      .home-visual-refresh .blue-section {
        background: #0b1f3a;
      }

      .home-visual-refresh .blue-section .section-heading h2,
      .home-visual-refresh .blue-section .reason-grid h3 {
        color: #ffffff;
      }

      .home-visual-refresh .blue-section .section-heading h2 em {
        color: #84c9ed;
      }

      .home-visual-refresh .blue-section .section-heading > p,
      .home-visual-refresh .blue-section .reason-grid p {
        color: #d5e1ec;
        line-height: 1.7;
      }

      .home-visual-refresh .blue-section .kicker.light,
      .home-visual-refresh .blue-section .reason-grid span {
        color: #84c9ed;
      }

      .home-visual-refresh .blue-section .reason-grid article {
        border-color: rgba(213, 225, 236, 0.24);
      }

      .home-visual-refresh .customer-testimonials {
        background: #f5f8fb;
      }

      .home-visual-refresh .customer-testimonials .kicker {
        color: #176da5;
        font-weight: 800;
      }

      .home-visual-refresh .testimonial-heading h2 {
        color: #081d3b;
        font-weight: 700;
        letter-spacing: -0.035em;
      }

      .home-visual-refresh .testimonial-card {
        background: #ffffff;
        border-color: #cbd7e1;
        box-shadow: none;
      }

      .home-visual-refresh .testimonial-card blockquote {
        color: #17324d;
        line-height: 1.7;
      }

      .home-visual-refresh .testimonial-card-copy > div b,
      .home-visual-refresh .testimonial-note {
        color: #52677b;
      }

      .home-visual-refresh .testimonial-rating,
      .home-visual-refresh .testimonial-card-copy > div span {
        color: #176da5;
      }

      .home-visual-refresh .testimonial-controls button {
        color: #0b1f3a;
        background: #ffffff;
        border-color: #aebdca;
      }

      .home-visual-refresh .testimonial-controls button:hover {
        color: #ffffff;
        background: #0b1f3a;
        border-color: #0b1f3a;
      }

      @media (max-width: 760px) {
        .home-visual-refresh .home-hero-grid {
          min-height: 610px;
        }

        .home-visual-refresh .hero-light .hero-copy {
          width: 100%;
          padding: 58px 0 300px;
        }

        .home-visual-refresh .hero-background {
          background-image:
            linear-gradient(180deg, rgba(6, 31, 61, 0.98) 0%, rgba(6, 31, 61, 0.9) 54%, rgba(6, 31, 61, 0.45) 82%, rgba(6, 31, 61, 0.6) 100%),
            url('/images/shockis-hero-wide-v2.webp') !important;
          background-position: 66% center !important;
          background-size: cover, cover !important;
        }

        .home-visual-refresh .hero-light .hero-copy:before {
          background: linear-gradient(180deg, rgba(6, 31, 61, 0.98), rgba(6, 31, 61, 0.84) 72%, transparent);
        }

        .home-visual-refresh .hero-copy h1 {
          line-height: 1.02;
        }

        .home-visual-refresh .home-hero .hero-copy > p:not(.kicker) {
          font-size: 16px;
        }

        .home-visual-refresh .trust-strip > .wrap {
          height: auto;
          padding-top: 28px;
          padding-bottom: 28px;
        }

        .home-visual-refresh .trust-strip .wrap > div {
          grid-template-columns: 48px 1fr;
          gap: 14px;
          min-height: 64px;
          padding: 0 14px;
        }

        .home-visual-refresh .trust-icon {
          width: 44px;
          height: 44px;
        }

        .home-visual-refresh .trust-icon svg {
          width: 22px;
          height: 22px;
        }

        .home-visual-refresh .home-product-overview {
          padding-top: 62px;
          padding-bottom: 66px;
        }

        .home-visual-refresh .home-product-overview .section-heading {
          grid-template-columns: 1fr;
          gap: 20px;
          margin-bottom: 28px;
        }

        .home-visual-refresh .home-product-overview .section-heading .kicker {
          font-size: clamp(28px, 9vw, 36px);
          white-space: normal;
        }

        .home-visual-refresh .product-feature {
          grid-template-columns: 1fr;
          height: auto;
          min-height: 0;
        }

        .home-visual-refresh .home-product-overview .feature-image {
          min-height: 340px;
        }

        .home-visual-refresh .home-product-overview .feature-image img {
          padding: 0;
        }

        .home-visual-refresh .feature-copy {
          padding: 34px 26px 38px;
        }

        .home-visual-refresh .home-accessories {
          padding: 60px 0 58px;
        }

        .home-visual-refresh .home-accessories-heading {
          margin-bottom: 28px;
        }

        .home-visual-refresh .home-accessories-heading .kicker {
          font-size: clamp(28px, 9vw, 36px);
          white-space: normal;
        }

        .home-visual-refresh .home-accessories-grid {
          grid-template-columns: repeat(2, 1fr);
          gap: 22px 12px;
        }

        .home-visual-refresh .home-accessory-item:last-child {
          grid-column: 1 / -1;
          width: calc(50% - 6px);
          justify-self: center;
        }

        .home-visual-refresh .home-accessory-item > span {
          height: 132px;
        }
      }
    `}</style>
  );
}
