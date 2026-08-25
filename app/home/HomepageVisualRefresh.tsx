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

      body:has(.home-visual-refresh) .site-header .outline-btn {
        color: #0b1f3a;
        border-color: #0b1f3a;
      }

      body:has(.home-visual-refresh) .site-header .nav {
        gap: 22px;
      }

      .home-visual-refresh {
        color: #0b1f3a;
        background: #ffffff;
      }

      .home-visual-refresh .home-eyebrow {
        margin: 0 0 18px;
        color: #176da5;
        font-size: 11px;
        font-weight: 800;
        line-height: 1.4;
        letter-spacing: 0.18em;
      }

      .home-hero {
        position: relative;
        min-height: 680px;
        overflow: hidden;
        color: #ffffff;
        background: #061f3d;
      }

      .home-hero-image {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
        object-position: center;
      }

      .home-hero-background {
        position: absolute;
        inset: 0;
        background: linear-gradient(90deg, rgba(6, 31, 61, 1) 0%, rgba(6, 31, 61, 0.98) 37%, rgba(6, 31, 61, 0.86) 54%, rgba(6, 31, 61, 0.3) 76%, rgba(6, 31, 61, 0.46) 100%);
      }

      .home-hero-inner {
        position: relative;
        z-index: 1;
        min-height: 680px;
        display: flex;
        align-items: center;
      }

      .home-hero-copy {
        width: min(700px, 63%);
        padding: 70px 0 55px;
      }

      .home-hero .home-eyebrow {
        color: #8ed0f2;
        font-size: 13px;
        letter-spacing: 0.16em;
      }

      .home-hero h1 {
        margin: 0;
        color: #ffffff;
        font-size: clamp(50px, 5.25vw, 76px);
        font-weight: 680;
        line-height: 0.99;
        letter-spacing: -0.052em;
      }

      .home-hero h1 span {
        display: block;
        margin-top: 12px;
        color: #82c9ef;
        font-family: Georgia, serif;
        font-size: 0.61em;
        font-weight: 400;
        line-height: 1.12;
        letter-spacing: -0.035em;
      }

      .home-hero-summary {
        max-width: 630px;
        margin: 27px 0 31px;
        color: #d8e3ec;
        font-size: 18px;
        font-weight: 500;
        line-height: 1.75;
      }

      .home-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 14px;
        align-items: center;
      }

      .home-primary-btn,
      .home-secondary-btn {
        min-height: 48px;
        display: inline-flex;
        align-items: center;
        justify-content: space-between;
        gap: 28px;
        padding: 0 19px;
        font-size: 13px;
        font-weight: 800;
        transition: 0.2s ease;
      }

      .home-primary-btn {
        color: #ffffff;
        background: #176da5;
        border: 1px solid #176da5;
      }

      .home-primary-btn:hover {
        background: #2484bd;
        border-color: #2484bd;
        transform: translateY(-2px);
      }

      .home-secondary-btn {
        color: #0b1f3a;
        background: transparent;
        border: 1px solid #91a5b6;
      }

      .home-secondary-btn:hover {
        color: #176da5;
        border-color: #176da5;
      }

      .home-secondary-btn--light {
        color: #ffffff;
        border-color: rgba(255, 255, 255, 0.55);
      }

      .home-secondary-btn--light:hover {
        color: #82c9ef;
        border-color: #82c9ef;
      }

      .home-primary-btn--white {
        color: #0b1f3a;
        background: #ffffff;
        border-color: #ffffff;
      }

      .home-audience-list {
        display: flex;
        flex-wrap: wrap;
        gap: 18px 30px;
        margin-top: 47px;
        padding-top: 21px;
        border-top: 1px solid rgba(255, 255, 255, 0.22);
      }

      .home-audience-list span {
        color: #a9bfd0;
        font-size: 11px;
        font-weight: 750;
        letter-spacing: 0.14em;
        text-transform: uppercase;
      }

      .home-section {
        padding: 104px 0;
      }

      .home-section-heading {
        display: grid;
        grid-template-columns: 1.15fr 0.85fr;
        gap: 95px;
        align-items: end;
        margin-bottom: 51px;
      }

      .home-section-heading h2 {
        max-width: 720px;
        margin: 0;
        color: #081d3b;
        font-size: clamp(43px, 4.4vw, 60px);
        font-weight: 650;
        line-height: 1.04;
        letter-spacing: -0.048em;
      }

      .home-section-heading > p {
        margin: 0;
        color: #52677b;
        font-size: 16px;
        line-height: 1.75;
      }

      .home-why,
      .home-applications {
        color: #ffffff;
        background: #071f3c;
      }

      .home-why {
        padding: 56px 0 60px;
      }

      .home-why .home-section-heading {
        margin-bottom: 28px;
      }

      .home-why .home-eyebrow {
        font-size: 13px;
        letter-spacing: 0.16em;
      }

      .home-section-heading--inverse h2 {
        color: #ffffff;
      }

      .home-section-heading--inverse > p {
        color: #bdd0de;
      }

      .home-section-heading--inverse .home-eyebrow {
        color: #82c9ef;
      }

      .home-capability-grid {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 12px;
      }

      .home-capability-grid article {
        flex: 1 1 0;
        min-width: 0;
        overflow: hidden;
        background: rgba(255, 255, 255, 0.035);
        border: 1px solid rgba(255, 255, 255, 0.18);
        transition:
          flex-grow 360ms cubic-bezier(0.22, 1, 0.36, 1),
          transform 360ms cubic-bezier(0.22, 1, 0.36, 1),
          opacity 280ms ease,
          border-color 280ms ease,
          box-shadow 360ms ease;
      }

      .home-capability-image {
        position: relative;
        overflow: hidden;
        aspect-ratio: 1.85 / 1;
        background: #0a294b;
      }

      .home-capability-image::after {
        position: absolute;
        inset: 0;
        content: "";
        background: linear-gradient(180deg, rgba(7, 31, 60, 0.04), rgba(7, 31, 60, 0.24));
        pointer-events: none;
      }

      .home-capability-image img {
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
        transition: transform 460ms cubic-bezier(0.22, 1, 0.36, 1);
      }

      .home-capability-grid article:hover .home-capability-image img {
        transform: scale(1.07);
      }

      @media (hover: hover) and (pointer: fine) and (min-width: 981px) {
        .home-capability-grid {
          display: flex;
          overflow: visible;
        }

        .home-capability-grid:hover article:not(:hover) {
          flex-grow: 0.92;
          opacity: 0.78;
        }

        .home-capability-grid article:hover {
          flex-grow: 1.32;
          z-index: 1;
          transform: translateY(-7px);
          opacity: 1;
          border-color: rgba(130, 201, 239, 0.56);
          box-shadow: 0 20px 42px rgba(0, 10, 26, 0.3);
        }
      }

      .home-capability-copy {
        padding: 18px 20px 20px;
      }

      .home-capability-grid h3 {
        margin: 0 0 11px;
        color: #ffffff;
        font-size: 19px;
        font-weight: 650;
        line-height: 1.25;
      }

      .home-capability-grid p {
        margin: 0;
        color: #aebfcd;
        font-size: 14px;
        line-height: 1.7;
      }

      .home-featured {
        background: #ffffff;
      }

      .home-product-card {
        display: grid;
        grid-template-columns: 1.22fr 0.78fr;
        min-height: 545px;
        border: 1px solid #d4dee6;
        box-shadow: 0 24px 60px rgba(11, 31, 58, 0.07);
      }

      .home-product-image {
        position: relative;
        min-height: 520px;
        overflow: hidden;
        background: #f1f5f8;
      }

      .home-product-image img {
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
      }

      .home-product-image > span {
        position: absolute;
        left: 23px;
        bottom: 22px;
        padding: 9px 11px;
        color: #176da5;
        background: rgba(255, 255, 255, 0.92);
        font-size: 7px;
        font-weight: 800;
        letter-spacing: 0.16em;
      }

      .home-product-copy {
        padding: 53px 43px 48px;
      }

      .home-product-copy h3 {
        margin: 0 0 19px;
        color: #0b1f3a;
        font-size: 33px;
        font-weight: 650;
        line-height: 1.12;
        letter-spacing: -0.038em;
      }

      .home-product-copy > p:not(.home-eyebrow) {
        margin: 0;
        color: #52677b;
        font-size: 15px;
        line-height: 1.72;
      }

      .home-product-copy ul {
        margin: 27px 0 31px;
        padding: 0;
        list-style: none;
      }

      .home-product-copy li {
        display: grid;
        grid-template-columns: 34px 1fr;
        padding: 15px 0;
        border-top: 1px solid #d9e3ea;
      }

      .home-product-copy li:last-child {
        border-bottom: 1px solid #d9e3ea;
      }

      .home-product-copy li span {
        color: #176da5;
        font-size: 11px;
      }

      .home-product-copy li b {
        color: #183651;
        font-size: 14px;
      }

      .home-solutions,
      .home-knowledge {
        background: #ffffff;
      }

      .home-solution-grid,
      .home-knowledge-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 16px;
      }

      .home-solution-grid article,
      .home-knowledge-grid article {
        min-height: 325px;
        display: flex;
        flex-direction: column;
        padding: 30px;
        border: 1px solid #cfdbe4;
        background: #ffffff;
        transition: 0.2s ease;
      }

      .home-solution-grid article:hover,
      .home-knowledge-grid article:hover {
        transform: translateY(-4px);
        box-shadow: 0 20px 45px rgba(11, 31, 58, 0.08);
        border-color: #a7bfce;
      }

      .home-solution-grid article > span,
      .home-knowledge-grid article > span {
        color: #176da5;
        font-size: 9px;
        font-weight: 800;
      }

      .home-solution-grid h3,
      .home-knowledge-grid h3 {
        margin: 75px 0 14px;
        color: #0b1f3a;
        font-size: 24px;
        font-weight: 650;
        letter-spacing: -0.025em;
      }

      .home-solution-grid p,
      .home-knowledge-grid p {
        margin: 0 0 29px;
        color: #5a7083;
        font-size: 14px;
        line-height: 1.7;
      }

      .home-solution-grid a,
      .home-knowledge-grid a {
        width: max-content;
        display: inline-flex;
        gap: 18px;
        margin-top: auto;
        padding-bottom: 5px;
        color: #0b1f3a;
        border-bottom: 1px solid #91a5b6;
        font-size: 13px;
        font-weight: 800;
      }

      .home-solutions .home-eyebrow {
        font-size: 13px;
        letter-spacing: 0.16em;
      }

      .home-solutions .home-section-heading h2 {
        font-size: clamp(46px, 4.7vw, 64px);
      }

      .home-solution-grid article {
        min-width: 0;
        min-height: 470px;
        padding: 0;
        overflow: hidden;
        transition:
          flex-grow 460ms cubic-bezier(0.22, 1, 0.36, 1),
          transform 360ms cubic-bezier(0.22, 1, 0.36, 1),
          opacity 300ms ease,
          border-color 300ms ease,
          box-shadow 360ms ease;
      }

      .home-solution-image {
        position: relative;
        height: 195px;
        flex: 0 0 auto;
        overflow: hidden;
        background: #dce6ed;
      }

      .home-solution-image::after {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(180deg, rgba(7, 31, 60, 0.03), rgba(7, 31, 60, 0.25));
        pointer-events: none;
      }

      .home-solution-image img {
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
        transition: transform 460ms cubic-bezier(0.22, 1, 0.36, 1);
      }

      .home-solution-copy {
        display: flex;
        flex: 1;
        flex-direction: column;
        padding: 25px 28px 28px;
      }

      .home-solution-grid h3 {
        margin: 0 0 13px;
        font-size: 25px;
        line-height: 1.2;
      }

      .home-solution-grid p {
        margin: 0 0 24px;
        font-size: 15px;
        line-height: 1.68;
      }

      .home-solution-grid article:hover .home-solution-image img,
      .home-solution-grid article:focus-within .home-solution-image img {
        transform: scale(1.075);
      }

      @media (hover: hover) and (pointer: fine) and (min-width: 981px) {
        .home-solution-grid {
          display: flex;
          overflow: visible;
        }

        .home-solution-grid article {
          flex: 1 1 0;
        }

        .home-solution-grid:hover article:not(:hover) {
          flex-grow: 0.93;
          opacity: 0.78;
        }

        .home-solution-grid article:hover {
          flex-grow: 1.18;
          z-index: 1;
          transform: translateY(-7px);
          opacity: 1;
          border-color: #8fb2c8;
          box-shadow: 0 23px 48px rgba(11, 31, 58, 0.14);
        }
      }

      .home-knowledge .home-eyebrow {
        font-size: 13px;
        letter-spacing: 0.16em;
      }

      .home-knowledge .home-section-heading h2 {
        font-size: clamp(46px, 4.7vw, 64px);
      }

      .home-knowledge-grid article {
        min-width: 0;
        min-height: 470px;
        padding: 0;
        overflow: hidden;
        transition:
          flex-grow 460ms cubic-bezier(0.22, 1, 0.36, 1),
          transform 360ms cubic-bezier(0.22, 1, 0.36, 1),
          opacity 300ms ease,
          border-color 300ms ease,
          box-shadow 360ms ease;
      }

      .home-knowledge-image {
        position: relative;
        height: 195px;
        flex: 0 0 auto;
        overflow: hidden;
        background: #e7eef3;
      }

      .home-knowledge-image::after {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(180deg, rgba(7, 31, 60, 0.02), rgba(7, 31, 60, 0.2));
        pointer-events: none;
      }

      .home-knowledge-image img {
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
        transition: transform 460ms cubic-bezier(0.22, 1, 0.36, 1);
      }

      .home-knowledge-copy {
        display: flex;
        flex: 1;
        flex-direction: column;
        padding: 25px 28px 28px;
      }

      .home-knowledge-grid h3 {
        margin: 0 0 13px;
        font-size: 25px;
        line-height: 1.2;
      }

      .home-knowledge-grid p {
        margin: 0 0 24px;
        font-size: 15px;
        line-height: 1.68;
      }

      .home-knowledge-grid article:hover .home-knowledge-image img,
      .home-knowledge-grid article:focus-within .home-knowledge-image img {
        transform: scale(1.075);
      }

      @media (hover: hover) and (pointer: fine) and (min-width: 981px) {
        .home-knowledge-grid {
          display: flex;
          overflow: visible;
        }

        .home-knowledge-grid article {
          flex: 1 1 0;
        }

        .home-knowledge-grid:hover article:not(:hover) {
          flex-grow: 0.93;
          opacity: 0.78;
        }

        .home-knowledge-grid article:hover {
          flex-grow: 1.18;
          z-index: 1;
          transform: translateY(-7px);
          opacity: 1;
          border-color: #8fb2c8;
          box-shadow: 0 23px 48px rgba(11, 31, 58, 0.14);
        }
      }

      .home-application-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 12px;
      }

      .home-application-grid > a {
        position: relative;
        min-width: 0;
        min-height: 375px;
        display: flex;
        flex-direction: column;
        padding: 0;
        overflow: hidden;
        border: 1px solid rgba(255, 255, 255, 0.24);
        background: rgba(255, 255, 255, 0.015);
        transition:
          flex-grow 460ms cubic-bezier(0.22, 1, 0.36, 1),
          transform 360ms cubic-bezier(0.22, 1, 0.36, 1),
          opacity 300ms ease,
          border-color 300ms ease,
          box-shadow 360ms ease;
      }

      .home-applications .home-eyebrow {
        font-size: 13px;
        letter-spacing: 0.16em;
      }

      .home-applications .home-section-heading h2 {
        font-size: clamp(46px, 4.7vw, 64px);
      }

      .home-application-image {
        position: relative;
        height: 190px;
        flex: 0 0 auto;
        overflow: hidden;
        background: #0b2a4b;
      }

      .home-application-image::after {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(180deg, rgba(5, 24, 48, 0.04), rgba(5, 24, 48, 0.48));
        pointer-events: none;
      }

      .home-application-image img {
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
        filter: saturate(0.82) contrast(1.04);
        transition: transform 460ms cubic-bezier(0.22, 1, 0.36, 1);
      }

      .home-application-copy {
        position: relative;
        display: flex;
        flex: 1;
        flex-direction: column;
        padding: 24px 25px 28px;
      }

      .home-application-grid small {
        margin: 0;
        color: #9eb6c7;
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 0.13em;
        text-transform: uppercase;
      }

      .home-application-grid h3 {
        max-width: 240px;
        margin: 12px 0 0;
        color: #ffffff;
        font-size: 25px;
        font-weight: 650;
        line-height: 1.2;
      }

      .home-application-grid b {
        position: absolute;
        right: 25px;
        bottom: 24px;
        color: #82c9ef;
        font-size: 18px;
        font-weight: 400;
      }

      .home-application-grid > a:hover,
      .home-application-grid > a:focus-visible {
        transform: translateY(-7px);
        border-color: rgba(130, 201, 239, 0.62);
        box-shadow: 0 22px 44px rgba(0, 10, 26, 0.32);
      }

      .home-application-grid > a:hover .home-application-image img,
      .home-application-grid > a:focus-visible .home-application-image img {
        transform: scale(1.075);
      }

      @media (hover: hover) and (pointer: fine) and (min-width: 1101px) {
        .home-application-grid {
          display: flex;
          overflow: visible;
        }

        .home-application-grid > a {
          flex: 1 1 0;
        }

        .home-application-grid:hover > a:not(:hover) {
          flex-grow: 0.93;
          opacity: 0.76;
        }

        .home-application-grid > a:hover {
          flex-grow: 1.2;
          z-index: 1;
          opacity: 1;
        }
      }

      .home-section-link {
        width: max-content;
        display: flex;
        gap: 20px;
        margin: 31px auto 0;
        padding: 8px 0;
        color: #0b1f3a;
        border-bottom: 1px solid #8ca1b2;
        font-size: 13px;
        font-weight: 800;
      }

      .home-section-link--light {
        color: #ffffff;
        border-color: rgba(255, 255, 255, 0.52);
      }

      .home-final-cta {
        padding: 91px 0;
        color: #ffffff;
        background: linear-gradient(135deg, #075fa9, #06355f);
      }

      .home-final-cta > .wrap {
        display: grid;
        grid-template-columns: 1fr 0.8fr;
        gap: 110px;
        align-items: center;
      }

      .home-final-cta .home-eyebrow {
        color: #a9dcf7;
      }

      .home-final-cta h2 {
        margin: 0;
        color: #ffffff;
        font-size: clamp(43px, 4.5vw, 61px);
        font-weight: 650;
        line-height: 1.04;
        letter-spacing: -0.048em;
      }

      .home-final-cta > .wrap > div:last-child > p {
        margin: 0 0 27px;
        color: #c8dae7;
        font-size: 16px;
        line-height: 1.75;
      }

      .home-visual-refresh :is(.home-section, .customer-testimonials, .home-final-cta) .home-eyebrow {
        font-family: "Avenir Next", Inter, "Segoe UI", Arial, sans-serif;
        font-size: 14px;
        font-weight: 800;
        line-height: 1.4;
        letter-spacing: 0.16em;
      }

      .home-visual-refresh :is(.home-section-heading, .customer-feedback-heading) h2,
      .home-visual-refresh .home-final-cta h2 {
        font-family: "Avenir Next", Inter, "Segoe UI", Arial, sans-serif;
        font-size: clamp(40px, 3.9vw, 54px);
        font-weight: 650;
        line-height: 1.06;
        letter-spacing: -0.044em;
      }

      @media (max-width: 1350px) and (min-width: 821px) {
        body:has(.home-visual-refresh) .site-header .wrap.nav {
          width: calc(100% - 40px);
        }

        body:has(.home-visual-refresh) .site-header .nav nav {
          gap: 22px;
          font-size: 10px;
        }

        body:has(.home-visual-refresh) .site-header .nav-tools > span {
          display: none;
        }
      }

      @media (max-width: 980px) {
        .home-hero-copy {
          width: 72%;
        }

        .home-section-heading {
          gap: 55px;
        }

        .home-capability-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
        }

        .home-product-card {
          grid-template-columns: 1fr 0.85fr;
        }

        .home-application-grid {
          grid-template-columns: repeat(2, 1fr);
        }
      }

      @media (max-width: 820px) {
        .home-hero,
        .home-hero-inner {
          min-height: 680px;
        }

        .home-hero-image {
          object-position: 67% center;
        }

        .home-hero-background {
          background: linear-gradient(180deg, rgba(6, 31, 61, 0.98) 0%, rgba(6, 31, 61, 0.92) 51%, rgba(6, 31, 61, 0.56) 80%, rgba(6, 31, 61, 0.72) 100%);
        }

        .home-hero-copy {
          width: 100%;
          padding: 58px 0 180px;
        }

        .home-hero h1 {
          font-size: clamp(43px, 10vw, 61px);
        }

        .home-hero-summary {
          font-size: 14px;
        }

        .home-section {
          padding: 75px 0;
        }

        .home-section-heading,
        .home-final-cta > .wrap {
          grid-template-columns: 1fr;
          gap: 25px;
        }

        .home-section-heading {
          margin-bottom: 38px;
        }

        .home-section-heading h2,
        .customer-feedback-heading h2,
        .home-final-cta h2 {
          font-size: 38px;
        }

        .home-product-card,
        .home-solution-grid,
        .home-knowledge-grid {
          grid-template-columns: 1fr;
        }

        .home-product-image {
          min-height: 400px;
        }

        .home-solution-grid article,
        .home-knowledge-grid article {
          min-height: 275px;
        }

        .home-knowledge-grid article {
          min-height: 430px;
        }

        .home-final-cta {
          padding: 74px 0;
        }
      }

      @media (max-width: 620px) {
        .home-actions {
          align-items: stretch;
          flex-direction: column;
        }

        .home-primary-btn,
        .home-secondary-btn {
          width: 100%;
        }

        .home-audience-list {
          gap: 14px 20px;
        }

        .home-capability-grid,
        .home-application-grid {
          grid-template-columns: 1fr;
        }

        .home-capability-grid article {
          min-height: 0;
        }

        .home-capability-grid h3 {
          margin-top: 0;
        }

        .home-product-image {
          min-height: 320px;
        }

        .home-product-copy {
          padding: 37px 25px 39px;
        }

        .home-application-grid > a {
          min-height: 225px;
          border-right: 1px solid rgba(255, 255, 255, 0.22);
          border-bottom: 1px solid rgba(255, 255, 255, 0.22);
        }
      }

      @media (prefers-reduced-motion: reduce) {
        .home-capability-grid article,
        .home-capability-image img,
        .home-knowledge-grid article,
        .home-knowledge-image img {
          transition: none;
        }

        .home-capability-grid article:hover,
        .home-capability-grid article:hover .home-capability-image img,
        .home-knowledge-grid article:hover,
        .home-knowledge-grid article:hover .home-knowledge-image img {
          transform: none;
        }
      }
    `}</style>
  );
}
