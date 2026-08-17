import { Footer, Header } from "../components";
import { ContactForms } from "./ContactForms";

export default function Contact() {
  return (
    <>
      <Header />
      <main className="contact-clean-page">
        <section className="contact-clean-intro">
          <div className="wrap">
            <h1>Contact Us</h1>
          </div>
        </section>
        <ContactForms />
      </main>
      <Footer />
      <style>{`
        .contact-clean-page{background:#fff}.contact-clean-intro{padding:92px 0 76px;text-align:center;background:#fff}.contact-clean-intro h1{margin:0;color:#0b3762;font-size:clamp(50px,5.5vw,72px);font-weight:520;line-height:1;letter-spacing:-.055em}.contact-form-section{padding:0 0 100px;background:#fff}.contact-form-wrap{max-width:1030px}.contact-form-card{border:1px solid #d3e1e9;background:#fff;box-shadow:0 18px 55px rgba(15,57,91,.08)}.contact-tabs{display:grid;grid-template-columns:1fr 1fr;border-bottom:1px solid #d3e1e9}.contact-tabs button{height:62px;border:0;border-right:1px solid #d3e1e9;background:#f7fafc;color:#61788b;font:inherit;font-size:11px;font-weight:750;cursor:pointer}.contact-tabs button:last-child{border-right:0}.contact-tabs button.active{background:#fff;color:#0b6fb4;box-shadow:inset 0 -2px #0b75bc}.contact-clean-form{display:grid;gap:22px;padding:50px 54px 45px}.contact-form-heading{margin-bottom:5px}.contact-form-heading h2{margin:10px 0 0;color:#123f66;font-size:35px;font-weight:540;letter-spacing:-.035em}.contact-field-grid{display:grid;grid-template-columns:1fr 1fr;gap:21px 20px}.contact-clean-form label{color:#274d6b;font-size:9px;font-weight:720}.contact-clean-form label b{color:#0878bf}.contact-clean-form input,.contact-clean-form select,.contact-clean-form textarea{display:block;width:100%;margin-top:8px;border:1px solid #c9d9e4;background:#fff;color:#122f49;font:inherit;font-size:11px;outline:none;transition:border-color .2s,box-shadow .2s}.contact-clean-form input,.contact-clean-form select{height:48px;padding:0 14px}.contact-clean-form textarea{min-height:145px;padding:14px;resize:vertical}.contact-clean-form input::placeholder,.contact-clean-form textarea::placeholder{color:#8a9dad}.contact-clean-form select:invalid{color:#8a9dad}.contact-clean-form input:focus,.contact-clean-form select:focus,.contact-clean-form textarea:focus{border-color:#1280c7;box-shadow:0 0 0 3px rgba(18,128,199,.1)}.contact-submit{display:inline-flex;width:max-content;min-width:170px;height:50px;align-items:center;justify-content:space-between;gap:25px;margin-top:4px;padding:0 22px;border:1px solid #0a6eaf;background:#0a6eaf;color:#fff;font:inherit;font-size:9px;font-weight:750;cursor:pointer}.contact-submit span{font-size:14px;font-weight:400}.contact-card-paths{display:grid;grid-template-columns:1fr 1fr;gap:18px;margin:0 54px;padding:30px 0 45px;border-top:1px solid #d9e4eb}.contact-card-paths article{padding:27px 29px;background:#f6f9fb}.contact-card-paths h2{margin:10px 0 9px;color:#123f66;font-size:18px;font-weight:600}.contact-card-paths article>p:not(.kicker){min-height:36px;margin:0;color:#657c8e;font-size:10px;line-height:1.7}.contact-card-paths button{display:inline-flex;align-items:center;gap:22px;margin-top:19px;padding:0;border:0;border-bottom:1px solid #8db7d0;background:transparent;color:#0b6fae;font:inherit;font-size:9px;font-weight:750;cursor:pointer}.contact-card-paths button span{font-size:14px;font-weight:400}
        @media(max-width:820px){.contact-clean-intro{padding:68px 0 55px}.contact-clean-intro h1{font-size:48px}.contact-form-section{padding-bottom:72px}.contact-clean-form{padding:38px 23px 35px}.contact-field-grid,.contact-card-paths{grid-template-columns:1fr}.contact-form-heading h2{font-size:30px}.contact-submit{width:100%}.contact-card-paths{margin:0 23px;padding:28px 0 35px}.contact-card-paths article{padding:25px 23px}}
      `}</style>
    </>
  );
}
