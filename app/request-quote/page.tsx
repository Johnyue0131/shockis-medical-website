import { Arrow, Footer, Header } from "../components";

const quoteSteps = [
  ["01", "Send product details", "Share the product model, estimated quantity and destination market."],
  ["02", "Confirm requirements", "Our team reviews configuration, documentation and shipping requirements with you."],
  ["03", "Receive quotation", "We confirm availability and prepare a quotation based on the agreed requirements."],
];

export default function RequestQuote() {
  return (
    <>
      <Header />
      <main className="quote-v2-page">
        <section className="quote-v2-hero">
          <div className="quote-v2-product-bg" aria-hidden="true" />
          <div className="wrap quote-v2-hero-content">
            <p className="kicker">REQUEST A QUOTE</p>
            <h1>Request pricing for your<br />SHOCKIS Shockwave Therapy System</h1>
            <p>Tell us your product model, quantity, destination country and requirements.<br /><br />Our team will confirm availability, shipping details and provide quotation.</p>
            <div className="quote-v2-trust" aria-label="SHOCKIS capabilities">
              <span>FDA Registered</span>
              <span>ISO 13485 Quality System</span>
              <span>Global Medical Partner</span>
            </div>
          </div>
        </section>

        <section className="quote-v2-content">
          <div className="wrap quote-v2-layout">
            <aside className="quote-v2-process">
              <p className="kicker">QUOTE PROCESS</p>
              <h2>How Quote Works</h2>
              <p>One focused process for professional purchasers, healthcare providers and medical device partners.</p>
              <div className="quote-v2-steps">
                {quoteSteps.map(([number, title, copy]) => (
                  <article key={number}>
                    <span>{number}</span>
                    <div><h3>{title}</h3><p>{copy}</p></div>
                  </article>
                ))}
              </div>
            </aside>

            <form className="quote-v2-form">
              <header>
                <p className="kicker">INQUIRY FORM</p>
                <h2>Tell us what you need.</h2>
                <p>Provide your business and product requirements so our team can prepare the appropriate quotation.</p>
              </header>

              <div className="quote-v2-form-row">
                <label htmlFor="quote-full-name">Full Name <b>*</b><input id="quote-full-name" name="fullName" required autoComplete="name" placeholder="Your full name" /></label>
                <label htmlFor="quote-business-email">Business Email <b>*</b><input id="quote-business-email" name="email" required type="email" autoComplete="email" placeholder="name@company.com" /></label>
              </div>

              <label htmlFor="quote-company-name">Company Name <b>*</b><input id="quote-company-name" name="company" required autoComplete="organization" placeholder="Company or organization" /></label>

              <label htmlFor="quote-buyer-type">Buyer Type
                <select id="quote-buyer-type" name="buyerType" defaultValue="">
                  <option value="" disabled>Select buyer type</option>
                  <option value="distributor">Distributor</option>
                  <option value="clinic">Clinic</option>
                  <option value="hospital">Hospital</option>
                  <option value="oem-partner">OEM Partner</option>
                  <option value="other">Other</option>
                </select>
              </label>

              <div className="quote-v2-form-row">
                <label htmlFor="quote-product-model">Product Model<input id="quote-product-model" name="productModel" defaultValue="Shockwave Therapy System" /></label>
                <label htmlFor="quote-quantity">Quantity<input id="quote-quantity" name="quantity" type="number" min="1" placeholder="Estimated units" /></label>
              </div>

              <label htmlFor="quote-country-region">Country / Region<input id="quote-country-region" name="countryRegion" autoComplete="country-name" placeholder="Destination country or region" /></label>
              <label htmlFor="quote-message">Message<textarea id="quote-message" name="message" rows={6} placeholder="Product configuration, delivery, documentation or cooperation requirements." /></label>

              <button className="solid-btn quote-v2-submit" type="submit">Submit Inquiry <Arrow /></button>
              <small>Your information will only be used to respond to this business inquiry.</small>
            </form>
          </div>
        </section>
      </main>
      <Footer />
      <style>{`
        .quote-v2-page{background:#fff}.quote-v2-hero{position:relative;min-height:650px;overflow:hidden;background:linear-gradient(110deg,#f8fbfd 0%,#eef5fa 55%,#e6f1f8 100%);border-bottom:1px solid var(--line)}.quote-v2-product-bg{position:absolute;inset:0 0 0 48%;background:linear-gradient(90deg,#eef5fa 0%,#eef5fad4 12%,#f5f9fb33 48%,#f5f9fb0d),url('/images/products/st100-main.jpg') center/contain no-repeat;opacity:.34;mix-blend-mode:multiply}.quote-v2-hero-content{position:relative;z-index:1;min-height:650px;padding:105px 0 78px;display:flex;flex-direction:column;justify-content:center;align-items:flex-start}.quote-v2-hero h1{max-width:900px;font-size:clamp(52px,5.5vw,76px);line-height:1.01;letter-spacing:-.058em;font-weight:480;color:#0a3763;margin:0}.quote-v2-hero-content>p:not(.kicker){max-width:650px;font-size:14px;line-height:1.75;color:#526f87;margin:29px 0 38px}.quote-v2-trust{display:flex;gap:10px;flex-wrap:wrap}.quote-v2-trust span{padding:11px 14px;background:#ffffffd6;border:1px solid #bfd4e2;color:#315d7e;font-size:8px;font-weight:750;letter-spacing:.06em}.quote-v2-content{padding:115px 0 130px}.quote-v2-layout{display:grid;grid-template-columns:.72fr 1.28fr;gap:100px;align-items:start}.quote-v2-process{position:sticky;top:125px}.quote-v2-process h2{font-size:48px;line-height:1.05;letter-spacing:-.045em;font-weight:500;color:#0a3763;margin:0}.quote-v2-process>p:not(.kicker){max-width:440px;font-size:11px;line-height:1.8;color:#647c8f;margin:25px 0 40px}.quote-v2-steps{border-top:1px solid #cadbe6}.quote-v2-steps article{display:grid;grid-template-columns:42px 1fr;gap:18px;padding:22px 0;border-bottom:1px solid #cadbe6}.quote-v2-steps article>span{font-size:8px;color:#1681c6}.quote-v2-steps h3{font-size:15px;color:#153f63;margin:0 0 7px}.quote-v2-steps p{font-size:9px;line-height:1.7;color:#6c8192;margin:0}.quote-v2-form{padding:48px 50px;background:#f1f6fa;border:1px solid #dbe7f0;display:grid;gap:20px}.quote-v2-form header{padding-bottom:27px;border-bottom:1px solid #cfdee9}.quote-v2-form header h2{font-size:34px;line-height:1.1;letter-spacing:-.035em;font-weight:520;margin:0 0 11px}.quote-v2-form header>p:not(.kicker){font-size:10px;line-height:1.7;color:var(--muted);margin:0}.quote-v2-form-row{display:grid;grid-template-columns:1fr 1fr;gap:18px}.quote-v2-form label{font-size:8px;letter-spacing:.04em;font-weight:750;color:#244b6d}.quote-v2-form label b{color:#0b73b8}.quote-v2-form input,.quote-v2-form select,.quote-v2-form textarea{display:block;width:100%;margin-top:8px;border:1px solid #c9dae7;background:#fff;padding:14px 15px;color:var(--ink);font:inherit;font-size:11px;outline:none;transition:border-color .2s,box-shadow .2s}.quote-v2-form input,.quote-v2-form select{height:48px}.quote-v2-form textarea{resize:vertical;min-height:145px}.quote-v2-form input:focus,.quote-v2-form select:focus,.quote-v2-form textarea:focus{border-color:#1785d1;box-shadow:0 0 0 3px #1785d112}.quote-v2-form input::placeholder,.quote-v2-form textarea::placeholder{color:#8ba0b2}.quote-v2-submit{width:100%;margin-top:4px}.quote-v2-form>small{text-align:center;font-size:7px;color:#71899c;line-height:1.6}
        @media(max-width:820px){.quote-v2-hero,.quote-v2-hero-content{min-height:auto}.quote-v2-hero-content{padding:80px 0 70px}.quote-v2-hero h1{font-size:47px}.quote-v2-product-bg{inset:24% -28% 0 28%;opacity:.16}.quote-v2-layout{grid-template-columns:1fr;gap:50px}.quote-v2-content{padding:75px 0 85px}.quote-v2-process{position:static}.quote-v2-process h2{font-size:38px}.quote-v2-form{padding:30px 22px}.quote-v2-form-row{grid-template-columns:1fr}.quote-v2-form header h2{font-size:30px}}
      `}</style>
    </>
  );
}
