import { Arrow, Footer, Header } from "../components";

export default function RequestQuote() {
  return (
    <>
      <Header />
      <main className="quote-page">
        <section className="quote-hero">
          <div className="wrap quote-hero-grid">
            <div>
              <p className="kicker">B2B PRODUCT INQUIRY</p>
              <h1>Request a Quote for SHOCKIS Shockwave Therapy System</h1>
            </div>
            <p>Collect customer requirements and provide product information, pricing and cooperation support.</p>
          </div>
        </section>

        <section className="quote-content">
          <div className="wrap quote-layout">
            <aside className="quote-product-panel">
              <div className="quote-product-image">
                <img src="/images/products/st100-main.jpg" width="1189" height="1179" alt="SHOCKIS Shockwave Therapy System with applicators" />
                <span>SELECTED PRODUCT / ST100</span>
              </div>
              <div className="quote-product-info">
                <small>PRODUCT INFORMATION</small>
                <h2>SHOCKIS Shockwave<br />Therapy System</h2>
                <p>Professional shockwave therapy platform for rehabilitation clinics, healthcare providers and medical device partners.</p>
                <dl>
                  <div><dt>Product</dt><dd>Shockwave Therapy System</dd></div>
                  <div><dt>Inquiry type</dt><dd>Product &amp; cooperation quotation</dd></div>
                </dl>
              </div>
            </aside>

            <form className="quote-form">
              <header>
                <span>REQUIREMENT DETAILS</span>
                <h2>Tell us about your inquiry.</h2>
                <p>Required fields help us prepare the appropriate product and cooperation information for your market.</p>
              </header>

              <div className="quote-form-row">
                <label htmlFor="quote-name">Name <b>*</b>
                  <input id="quote-name" name="name" required autoComplete="name" placeholder="Your name" />
                </label>
                <label htmlFor="quote-email">Email <b>*</b>
                  <input id="quote-email" name="email" required type="email" autoComplete="email" placeholder="name@company.com" />
                </label>
              </div>

              <div className="quote-form-row">
                <label htmlFor="quote-company">Company <b>*</b>
                  <input id="quote-company" name="company" required autoComplete="organization" placeholder="Company or organization" />
                </label>
                <label htmlFor="quote-country">Country <b>*</b>
                  <input id="quote-country" name="country" required autoComplete="country-name" placeholder="Country / market" />
                </label>
              </div>

              <label htmlFor="quote-phone">Phone
                <input id="quote-phone" name="phone" type="tel" autoComplete="tel" placeholder="Country code and phone number" />
              </label>

              <label htmlFor="quote-company-type">Company Type
                <select id="quote-company-type" name="companyType" defaultValue="">
                  <option value="" disabled>Select company type</option>
                  <option value="distributor">Distributor</option>
                  <option value="clinic-hospital">Clinic / Hospital</option>
                  <option value="rehabilitation-center">Rehabilitation Center</option>
                  <option value="medical-supplier">Medical Supplier</option>
                  <option value="other">Other</option>
                </select>
              </label>

              <label htmlFor="quote-product">Interested Product
                <select id="quote-product" name="interestedProduct" defaultValue="shockwave-system">
                  <option value="shockwave-system">SHOCKIS Shockwave Therapy System</option>
                </select>
              </label>

              <label htmlFor="quote-quantity">Quantity
                <select id="quote-quantity" name="quantity" defaultValue="">
                  <option value="" disabled>Select estimated quantity</option>
                  <option value="1-5">1–5 Units</option>
                  <option value="5-20">5–20 Units</option>
                  <option value="20-plus">20+ Units</option>
                </select>
              </label>

              <label htmlFor="quote-message">Message
                <textarea id="quote-message" name="message" rows={6} placeholder="Tell us about your market, application, documentation or cooperation requirements." />
              </label>

              <button className="solid-btn quote-submit" type="submit">Request Quote <Arrow /></button>
              <small className="quote-privacy">Your information will only be used to respond to this business inquiry.</small>
            </form>
          </div>
        </section>
      </main>
      <Footer />
      <style>{`
        .quote-page{background:#fff}.quote-hero{background:linear-gradient(132deg,#f7fafc 0%,#edf5fb 62%,#e4f0f8 100%);border-bottom:1px solid var(--line)}.quote-hero-grid{min-height:440px;display:grid;grid-template-columns:1.2fr .8fr;gap:100px;align-items:end;padding-top:90px;padding-bottom:75px}.quote-hero h1{max-width:800px;font-size:clamp(48px,5vw,69px);line-height:1.02;letter-spacing:-.055em;font-weight:480;color:#0a3763;margin:0}.quote-hero-grid>p{padding-left:55px;border-left:1px solid #b8cfdf;color:#536f88;font-size:14px;line-height:1.8;margin:0 0 8px}.quote-content{padding:105px 0 125px}.quote-layout{display:grid;grid-template-columns:.82fr 1.18fr;gap:85px;align-items:start}.quote-product-panel{position:sticky;top:120px;border:1px solid var(--line);background:#fff}.quote-product-image{height:470px;position:relative;background:#f1f6fa;overflow:hidden}.quote-product-image img{width:100%;height:100%;object-fit:contain;mix-blend-mode:multiply}.quote-product-image span{position:absolute;left:20px;bottom:20px;background:#ffffffe8;padding:8px 10px;font-size:7px;letter-spacing:.16em;color:#426984}.quote-product-info{padding:36px}.quote-product-info>small,.quote-form>header>span{font-size:7px;letter-spacing:.17em;color:#176db4;font-weight:800}.quote-product-info h2{font-size:28px;line-height:1.12;letter-spacing:-.035em;font-weight:520;margin:13px 0}.quote-product-info>p{font-size:10px;line-height:1.75;color:var(--muted)}.quote-product-info dl{margin:26px 0 0;border-top:1px solid var(--line)}.quote-product-info dl>div{display:flex;justify-content:space-between;gap:20px;padding:13px 0;border-bottom:1px solid var(--line)}.quote-product-info dt{font-size:8px;color:#738a9d}.quote-product-info dd{font-size:9px;font-weight:700;text-align:right;margin:0}.quote-form{padding:48px 50px;background:#f1f6fa;border:1px solid #dbe7f0;display:grid;gap:20px}.quote-form>header{padding-bottom:27px;margin-bottom:2px;border-bottom:1px solid #cfdee9}.quote-form>header h2{font-size:34px;line-height:1.1;letter-spacing:-.035em;font-weight:520;margin:12px 0}.quote-form>header p{font-size:10px;line-height:1.7;color:var(--muted);margin:0}.quote-form-row{display:grid;grid-template-columns:1fr 1fr;gap:18px}.quote-form label{font-size:8px;letter-spacing:.04em;font-weight:750;color:#244b6d}.quote-form label b{color:#0b73b8}.quote-form input,.quote-form select,.quote-form textarea{width:100%;display:block;margin-top:8px;border:1px solid #c9dae7;background:#fff;padding:14px 15px;color:var(--ink);font:inherit;font-size:11px;outline:none;transition:border-color .2s,box-shadow .2s}.quote-form input,.quote-form select{height:48px}.quote-form textarea{resize:vertical;min-height:145px}.quote-form input:focus,.quote-form select:focus,.quote-form textarea:focus{border-color:#1785d1;box-shadow:0 0 0 3px #1785d112}.quote-form input::placeholder,.quote-form textarea::placeholder{color:#8ba0b2}.quote-submit{width:100%;margin-top:4px}.quote-privacy{text-align:center;font-size:7px;color:#71899c;line-height:1.6}
        @media(max-width:820px){.quote-hero-grid,.quote-layout{grid-template-columns:1fr}.quote-hero-grid{min-height:auto;padding-top:70px;padding-bottom:65px;gap:30px}.quote-hero h1{font-size:46px}.quote-hero-grid>p{padding:25px 0 0;border-left:0;border-top:1px solid #b8cfdf;font-size:13px}.quote-content{padding:70px 0 85px}.quote-layout{gap:45px}.quote-product-panel{position:static}.quote-product-image{height:390px}.quote-form{padding:30px 22px}.quote-form-row{grid-template-columns:1fr}.quote-form>header h2{font-size:30px}}
      `}</style>
    </>
  );
}
