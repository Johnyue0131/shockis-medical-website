import { Arrow, Footer, Header } from "../components";

export default function Contact() {
  return (
    <>
      <Header />
      <main className="contact-direct-page">
        <section className="contact-direct-section">
          <div className="wrap contact-direct-layout">
            <div className="contact-direct-intro">
              <p className="kicker">CONTACT SHOCKIS</p>
              <h1>Start a conversation.</h1>
              <p>Tell us about your organization,<br />market and product requirements.</p>

              <div className="contact-direct-details">
                <h2>SHOCKIS Medical</h2>
                <dl>
                  <div><dt>Email</dt><dd><a href="mailto:sales@shockis.com">sales@shockis.com</a></dd></div>
                  <div><dt>Response time</dt><dd>Within two business days</dd></div>
                </dl>
              </div>
            </div>

            <form className="contact-direct-form">
              <header>
                <p className="kicker">INQUIRY FORM</p>
                <h2>How can we help?</h2>
              </header>

              <div className="contact-direct-form-row">
                <label htmlFor="contact-name">Name <b>*</b><input id="contact-name" name="name" required autoComplete="name" placeholder="Your name" /></label>
                <label htmlFor="contact-email">Business Email <b>*</b><input id="contact-email" name="email" required type="email" autoComplete="email" placeholder="name@company.com" /></label>
              </div>

              <div className="contact-direct-form-row">
                <label htmlFor="contact-company">Company Name <b>*</b><input id="contact-company" name="company" required autoComplete="organization" placeholder="Company or organization" /></label>
                <label htmlFor="contact-country">Country / Region <b>*</b><input id="contact-country" name="country" required autoComplete="country-name" placeholder="Country or market" /></label>
              </div>

              <label htmlFor="contact-inquiry-type">Inquiry Type
                <select id="contact-inquiry-type" name="inquiryType" defaultValue="">
                  <option value="" disabled>Select inquiry type</option>
                  <option value="distributor">Distributor</option>
                  <option value="clinic">Clinic</option>
                  <option value="hospital">Hospital</option>
                  <option value="oem-partner">OEM Partner</option>
                  <option value="other">Other</option>
                </select>
              </label>

              <label htmlFor="contact-message">Message<textarea id="contact-message" name="message" rows={7} placeholder="Tell us about your product, market or cooperation requirements." /></label>
              <button className="solid-btn contact-direct-submit" type="submit">Send Inquiry <Arrow /></button>
              <small>Your information will only be used to respond to this business inquiry.</small>
            </form>
          </div>
        </section>
      </main>
      <Footer />
      <style>{`
        .contact-direct-page{background:#fff}.contact-direct-section{padding:82px 0 115px}.contact-direct-layout{display:grid;grid-template-columns:.8fr 1.2fr;gap:110px;align-items:start}.contact-direct-intro{padding-top:18px}.contact-direct-intro h1{max-width:520px;font-size:clamp(54px,5vw,72px);line-height:1.01;letter-spacing:-.055em;font-weight:480;color:#0a3763;margin:0}.contact-direct-intro>p:not(.kicker){font-size:14px;line-height:1.85;color:#5d768a;margin:28px 0 58px}.contact-direct-details{padding-top:32px;border-top:1px solid #cadbe6}.contact-direct-details h2{font-size:23px;line-height:1.2;color:#153f63;margin:0}.contact-direct-details dl{margin:28px 0 0}.contact-direct-details dl>div{padding:17px 0;border-top:1px solid #d5e2ea}.contact-direct-details dt{font-size:7px;letter-spacing:.14em;text-transform:uppercase;color:#71899c;margin-bottom:7px}.contact-direct-details dd{font-size:11px;font-weight:750;margin:0}.contact-direct-form{padding:48px 50px;background:#f1f6fa;border:1px solid #dbe7f0;display:grid;gap:20px}.contact-direct-form header{padding-bottom:25px;border-bottom:1px solid #cfdee9}.contact-direct-form header h2{font-size:34px;line-height:1.1;letter-spacing:-.035em;font-weight:520;margin:0}.contact-direct-form-row{display:grid;grid-template-columns:1fr 1fr;gap:18px}.contact-direct-form label{font-size:8px;letter-spacing:.04em;font-weight:750;color:#244b6d}.contact-direct-form label b{color:#0b73b8}.contact-direct-form input,.contact-direct-form select,.contact-direct-form textarea{display:block;width:100%;margin-top:8px;border:1px solid #c9dae7;background:#fff;padding:14px 15px;color:var(--ink);font:inherit;font-size:11px;outline:none;transition:border-color .2s,box-shadow .2s}.contact-direct-form input,.contact-direct-form select{height:48px}.contact-direct-form textarea{resize:vertical;min-height:170px}.contact-direct-form input:focus,.contact-direct-form select:focus,.contact-direct-form textarea:focus{border-color:#1785d1;box-shadow:0 0 0 3px #1785d112}.contact-direct-form input::placeholder,.contact-direct-form textarea::placeholder{color:#8ba0b2}.contact-direct-submit{width:100%;margin-top:3px}.contact-direct-form>small{text-align:center;font-size:7px;line-height:1.6;color:#71899c}
        @media(max-width:820px){.contact-direct-section{padding:65px 0 80px}.contact-direct-layout{grid-template-columns:1fr;gap:50px}.contact-direct-intro{padding-top:0}.contact-direct-intro h1{font-size:48px}.contact-direct-intro>p:not(.kicker){margin-bottom:40px}.contact-direct-form{padding:30px 22px}.contact-direct-form-row{grid-template-columns:1fr}.contact-direct-form header h2{font-size:30px}}
      `}</style>
    </>
  );
}
