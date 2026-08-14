"use client";

import { useState } from "react";
import { Arrow, Footer, Header } from "../components";

type ContactTab = "inquiry" | "support";

export default function Contact() {
  const [activeTab, setActiveTab] = useState<ContactTab>("inquiry");

  return (
    <>
      <Header />
      <main className="contact-page-new">
        <section className="contact-new-hero">
          <div className="wrap contact-new-hero-grid">
            <div>
              <p className="kicker">CONTACT SHOCKIS</p>
              <h1>Connect with SHOCKIS</h1>
            </div>
            <p>Whether you are looking for a shockwave therapy system, distributor cooperation or technical support, our team is ready to assist you.</p>
          </div>
        </section>

        <section className="contact-new-content">
          <div className="wrap contact-new-layout">
            <div className="contact-tab-area">
              <div className="contact-tabs" role="tablist" aria-label="Contact type">
                <button type="button" role="tab" aria-selected={activeTab === "inquiry"} aria-controls="inquiry-panel" id="inquiry-tab" className={activeTab === "inquiry" ? "active" : ""} onClick={() => setActiveTab("inquiry")}>
                  <span>01</span>Inquiry
                </button>
                <button type="button" role="tab" aria-selected={activeTab === "support"} aria-controls="support-panel" id="support-tab" className={activeTab === "support" ? "active" : ""} onClick={() => setActiveTab("support")}>
                  <span>02</span>Support
                </button>
              </div>

              {activeTab === "inquiry" ? (
                <form className="contact-new-form" role="tabpanel" id="inquiry-panel" aria-labelledby="inquiry-tab">
                  <header>
                    <p className="kicker">PRODUCT &amp; COOPERATION INQUIRY</p>
                    <h2>How can we help?</h2>
                    <p>For distributor inquiries, product information and cooperation requests.</p>
                  </header>
                  <div className="contact-new-form-row">
                    <label htmlFor="inquiry-name">Name <b>*</b><input id="inquiry-name" name="name" required autoComplete="name" placeholder="Your name" /></label>
                    <label htmlFor="inquiry-email">Email <b>*</b><input id="inquiry-email" name="email" required type="email" autoComplete="email" placeholder="name@company.com" /></label>
                  </div>
                  <div className="contact-new-form-row">
                    <label htmlFor="inquiry-company">Company <b>*</b><input id="inquiry-company" name="company" required autoComplete="organization" placeholder="Company or organization" /></label>
                    <label htmlFor="inquiry-country">Country / Region <b>*</b><input id="inquiry-country" name="country" required autoComplete="country-name" placeholder="Country / market" /></label>
                  </div>
                  <label htmlFor="inquiry-business-type">Business Type
                    <select id="inquiry-business-type" name="businessType" defaultValue="">
                      <option value="" disabled>Select business type</option>
                      <option value="distributor">Distributor</option>
                      <option value="clinic-hospital">Clinic / Hospital</option>
                      <option value="rehabilitation-center">Rehabilitation Center</option>
                      <option value="medical-supplier">Medical Supplier</option>
                      <option value="other">Other</option>
                    </select>
                  </label>
                  <label htmlFor="inquiry-product">Product Interest
                    <select id="inquiry-product" name="productInterest" defaultValue="shockwave-system">
                      <option value="shockwave-system">SHOCKIS Shockwave Therapy System</option>
                    </select>
                  </label>
                  <label htmlFor="inquiry-message">Message <b>*</b><textarea id="inquiry-message" name="message" required rows={6} placeholder="Tell us about your organization and requirements." /></label>
                  <button className="solid-btn contact-new-submit" type="submit">Send Inquiry <Arrow /></button>
                </form>
              ) : (
                <form className="contact-new-form" role="tabpanel" id="support-panel" aria-labelledby="support-tab">
                  <header>
                    <p className="kicker">AFTER-SALES &amp; TECHNICAL SUPPORT</p>
                    <h2>Contact support.</h2>
                    <p>Share your product and technical question so our team can assist you efficiently.</p>
                  </header>
                  <div className="contact-new-form-row">
                    <label htmlFor="support-name">Name<input id="support-name" name="name" autoComplete="name" placeholder="Your name" /></label>
                    <label htmlFor="support-email">Email<input id="support-email" name="email" type="email" autoComplete="email" placeholder="name@company.com" /></label>
                  </div>
                  <label htmlFor="support-model">Product Model<input id="support-model" name="productModel" placeholder="e.g. ST100" /></label>
                  <label htmlFor="support-message">Message<textarea id="support-message" name="message" rows={8} placeholder="Describe the product or technical support required." /></label>
                  <button className="solid-btn contact-new-submit" type="submit">Contact Support <Arrow /></button>
                </form>
              )}
            </div>

            <aside className="contact-new-info">
              <p className="kicker">CONTACT INFORMATION</p>
              <h2>SHOCKIS Medical</h2>
              <dl>
                <div><dt>Email</dt><dd><a href="mailto:sales@shockis.com">sales@shockis.com</a></dd></div>
                <div><dt>Response time</dt><dd>Within two business days</dd></div>
              </dl>
              <p>Product information, commercial cooperation and technical support through one focused contact point.</p>
            </aside>
          </div>
        </section>

        <section className="partnership-network-section">
          <div className="wrap partnership-network-grid">
            <div className="partnership-network-copy">
              <p className="kicker">GLOBAL PRESENCE</p>
              <h2>Global Partnership Network</h2>
              <p>SHOCKIS supports healthcare professionals, distributors and medical partners worldwide.</p>
              <div className="partnership-locations" aria-label="SHOCKIS locations">
                <article>
                  <span>01 / ASIA-PACIFIC</span>
                  <h3>Shanghai, China</h3>
                  <p>SHOCKIS Medical Headquarters</p>
                </article>
                <article>
                  <span>02 / NORTH AMERICA</span>
                  <h3>Los Angeles, California</h3>
                  <p>U.S. Service Center</p>
                </article>
              </div>
              <small>Headquarters and service support locations</small>
            </div>

            <div className="network-map" aria-label="World map showing SHOCKIS headquarters in Shanghai and U.S. service center in Los Angeles" role="img">
              <div className="map-meta" aria-hidden="true"><span>120°W</span><span>0°</span><span>120°E</span></div>
              <div className="map-canvas" aria-hidden="true">
                <span className="map-latitude map-latitude-one" />
                <span className="map-latitude map-latitude-two" />
                <span className="map-latitude map-latitude-three" />
                <span className="map-longitude map-longitude-one" />
                <span className="map-longitude map-longitude-two" />
                <span className="map-longitude map-longitude-three" />
                <span className="continent continent-na" />
                <span className="continent continent-sa" />
                <span className="continent continent-eu" />
                <span className="continent continent-af" />
                <span className="continent continent-as" />
                <span className="continent continent-au" />
                <span className="location-connector connector-la" />
                <span className="location-connector connector-sh" />
                <span className="map-marker marker-la"><i /><b>LOS ANGELES<small>U.S. SERVICE CENTER</small></b></span>
                <span className="map-marker marker-shanghai"><i /><b>SHANGHAI<small>HEADQUARTERS</small></b></span>
                <strong className="map-brand">SHOCKIS<small>GLOBAL PARTNERSHIP NETWORK</small></strong>
              </div>
              <div className="map-footer" aria-hidden="true"><span>MEDICAL DEVICE PARTNERSHIP</span><span>31.2304° N · 121.4737° E</span></div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <style>{`
        .contact-page-new{background:#fff}.contact-new-hero{background:linear-gradient(132deg,#f8fbfd 0%,#edf5fb 68%,#e5f1f9 100%);border-bottom:1px solid var(--line)}.contact-new-hero-grid{min-height:420px;display:grid;grid-template-columns:1.1fr .9fr;gap:110px;align-items:end;padding-top:90px;padding-bottom:72px}.contact-new-hero h1{font-size:clamp(58px,6vw,82px);line-height:.98;letter-spacing:-.06em;font-weight:480;color:#0a3763;margin:0}.contact-new-hero-grid>p{padding-left:55px;border-left:1px solid #b8cfdf;color:#536f88;font-size:15px;line-height:1.8;margin:0 0 7px}.contact-new-content{padding:105px 0 125px}.contact-new-layout{display:grid;grid-template-columns:1.25fr .75fr;gap:85px;align-items:start}.contact-tab-area{background:#f2f7fb;border:1px solid #dbe7f0}.contact-tabs{display:grid;grid-template-columns:1fr 1fr;background:#fff;border-bottom:1px solid #d4e2ec}.contact-tabs button{appearance:none;border:0;border-right:1px solid #d4e2ec;background:#fff;color:#6c8294;padding:22px 25px;text-align:left;font:inherit;font-size:12px;font-weight:750;cursor:pointer;transition:background .2s,color .2s}.contact-tabs button:last-child{border-right:0}.contact-tabs button span{font-size:7px;color:#7f9ab0;margin-right:16px}.contact-tabs button.active{background:#0a4f91;color:#fff}.contact-tabs button.active span{color:#9dd2f6}.contact-new-form{padding:46px 50px;display:grid;gap:20px}.contact-new-form>header{padding-bottom:26px;border-bottom:1px solid #cfdee9}.contact-new-form>header h2{font-size:34px;line-height:1.1;letter-spacing:-.035em;font-weight:520;margin:0 0 10px}.contact-new-form>header>p:not(.kicker){font-size:10px;line-height:1.7;color:var(--muted);margin:0}.contact-new-form-row{display:grid;grid-template-columns:1fr 1fr;gap:18px}.contact-new-form label{font-size:8px;letter-spacing:.04em;font-weight:750;color:#244b6d}.contact-new-form label b{color:#0c75bd}.contact-new-form input,.contact-new-form select,.contact-new-form textarea{display:block;width:100%;margin-top:8px;border:1px solid #c9dae7;background:#fff;padding:14px 15px;color:var(--ink);font:inherit;font-size:11px;outline:none;transition:border-color .2s,box-shadow .2s}.contact-new-form input,.contact-new-form select{height:48px}.contact-new-form textarea{resize:vertical;min-height:145px}.contact-new-form input:focus,.contact-new-form select:focus,.contact-new-form textarea:focus{border-color:#1785d1;box-shadow:0 0 0 3px #1785d112}.contact-new-form input::placeholder,.contact-new-form textarea::placeholder{color:#8ba0b2}.contact-new-submit{width:100%;margin-top:3px}.contact-new-info{position:sticky;top:120px;padding:48px 42px;border-top:3px solid #0a5b9f;background:#fff;box-shadow:0 18px 55px #0b4d8210}.contact-new-info h2{font-size:30px;line-height:1.1;letter-spacing:-.035em;font-weight:520;margin:0}.contact-new-info dl{margin:34px 0;border-top:1px solid var(--line)}.contact-new-info dl>div{padding:18px 0;border-bottom:1px solid var(--line)}.contact-new-info dt{font-size:7px;letter-spacing:.13em;text-transform:uppercase;color:#71899c;margin-bottom:7px}.contact-new-info dd{font-size:12px;font-weight:750;margin:0}.contact-new-info>p:not(.kicker){font-size:10px;line-height:1.75;color:var(--muted);margin:0}.partnership-network-section{padding:115px 0;background:linear-gradient(135deg,#f8fbfd 0%,#edf5fb 60%,#e7f2f9 100%);border-top:1px solid var(--line);overflow:hidden}.partnership-network-grid{min-height:580px;display:grid;grid-template-columns:.78fr 1.22fr;gap:95px;align-items:center}.partnership-network-copy h2{font-size:50px;line-height:1.06;letter-spacing:-.045em;font-weight:500;color:#0a3763;margin:0}.partnership-network-copy>p:not(.kicker){max-width:480px;font-size:13px;line-height:1.8;color:#5c7489;margin:25px 0 34px}.partnership-regions{display:grid;grid-template-columns:1fr 1fr;border-top:1px solid #c7dbe9}.partnership-regions span{padding:14px 0;border-bottom:1px solid #c7dbe9;font-size:9px;font-weight:750;color:#345c7e}.partnership-regions span:nth-child(odd){border-right:1px solid #c7dbe9}.partnership-regions span:nth-child(even){padding-left:20px}.partnership-network-copy>small{display:block;margin-top:19px;font-size:7px;letter-spacing:.14em;color:#8097a9;text-transform:uppercase}.network-visual{height:580px;position:relative;display:grid;place-items:center}.network-globe{position:relative;width:440px;height:440px;border-radius:50%;overflow:hidden;background:radial-gradient(circle at 35% 30%,#ffffffd9 0 10%,#bfe1f264 35%,#61acd02e 67%,#147cb51e 100%);border:1px solid #72b7d89c;box-shadow:inset -45px -20px 85px #1f83b635,inset 30px 12px 65px #fff,0 28px 80px #2e7ba11c;animation:networkFloat 7s ease-in-out infinite}.network-globe:before{content:"";position:absolute;inset:10%;border-radius:50%;background:radial-gradient(circle at 58% 45%,#2a8fc80e,transparent 54%)}.globe-latitude,.globe-longitude{position:absolute;border:1px solid #479dc46b;border-radius:50%}.globe-latitude{left:3%;right:3%;height:28%;top:36%}.lat-one{top:14%;height:23%}.lat-three{top:63%;height:23%}.globe-longitude{top:2%;bottom:2%;width:34%;left:33%}.long-one{left:13%;width:74%}.long-three{left:39%;width:22%}.network-node{position:absolute;width:9px;height:9px;border:2px solid #fff;border-radius:50%;background:#087bc0;box-shadow:0 0 0 5px #1686c52a,0 0 22px #0785cf;z-index:4;animation:nodePulse 2.6s ease-in-out infinite}.node-na{left:22%;top:34%}.node-eu{left:48%;top:29%;animation-delay:.4s}.node-ap{right:18%;top:46%;animation-delay:.8s}.node-me{left:56%;top:50%;animation-delay:1.2s}.node-la{left:31%;bottom:25%;animation-delay:1.6s}.network-line{position:absolute;height:1px;background:linear-gradient(90deg,#0a7dbec9,#74c4e868);transform-origin:left center;z-index:3}.line-one{width:122px;left:23%;top:35%;transform:rotate(-5deg)}.line-two{width:145px;left:49%;top:30%;transform:rotate(25deg)}.line-three{width:120px;left:32%;bottom:26%;transform:rotate(-42deg)}.globe-core{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:2;color:#0b6297;font-size:16px;letter-spacing:.12em;text-align:center}.globe-core small{display:block;margin-top:6px;font-size:5px;letter-spacing:.24em;color:#628ba5}.network-orbit{position:absolute;border:1px solid #74b9da6b;border-radius:50%;animation:orbitTurn 18s linear infinite}.orbit-one{width:550px;height:235px;transform:rotate(-18deg)}.orbit-two{width:515px;height:305px;transform:rotate(58deg);animation-duration:24s;animation-direction:reverse}.network-scale{position:absolute;right:0;bottom:20px;display:flex;align-items:center;gap:7px}.network-scale span{font-size:6px;letter-spacing:.16em;color:#65869d;margin-right:7px}.network-scale i{width:4px;height:4px;border-radius:50%;background:#78b9d7}.network-scale i:nth-child(4),.network-scale i:nth-child(5),.network-scale i:nth-child(6){opacity:.45}@keyframes networkFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-9px)}}@keyframes nodePulse{0%,100%{box-shadow:0 0 0 4px #1686c526,0 0 14px #0785cf}50%{box-shadow:0 0 0 9px #1686c50d,0 0 26px #0785cf}}@keyframes orbitTurn{from{rotate:0deg}to{rotate:360deg}}@media(prefers-reduced-motion:reduce){.network-globe,.network-node,.network-orbit{animation:none}}
        .partnership-network-section{padding:112px 0;background:#f5f8fa;border-top:1px solid #dce6ed}.partnership-network-grid{min-height:560px;grid-template-columns:.72fr 1.28fr;gap:90px}.partnership-network-copy h2{max-width:460px}.partnership-network-copy>p:not(.kicker){max-width:445px;margin-bottom:38px}.partnership-locations{border-top:1px solid #cddbe4}.partnership-locations article{position:relative;padding:22px 0 22px 26px;border-bottom:1px solid #cddbe4}.partnership-locations article:before{content:"";position:absolute;left:0;top:27px;width:7px;height:7px;border-radius:50%;background:#0b65a5}.partnership-locations span{display:block;font-size:7px;letter-spacing:.16em;color:#7b91a2;margin-bottom:8px}.partnership-locations h3{font-size:15px;line-height:1.25;font-weight:650;color:#123d62;margin:0 0 4px}.partnership-locations p{font-size:9px;color:#60798d;margin:0}.network-map{position:relative;min-width:0}.map-meta,.map-footer{display:flex;justify-content:space-between;color:#8ca0af;font-size:6px;letter-spacing:.15em;text-transform:uppercase}.map-meta{padding:0 8px 12px}.map-footer{padding:13px 8px 0}.map-canvas{position:relative;height:470px;overflow:hidden;background:#fbfcfd;border:1px solid #d7e2e9}.map-canvas:before{content:"";position:absolute;inset:7% 5%;border:1px solid #d9e4eb;border-radius:50%}.map-canvas:after{content:"";position:absolute;inset:0;background:linear-gradient(90deg,#fff9,transparent 18%,transparent 82%,#fff9);pointer-events:none}.map-latitude,.map-longitude{position:absolute;z-index:0;border-color:#dce7ed;border-style:solid}.map-latitude{left:5%;right:5%;height:1px;border-width:1px 0 0}.map-latitude-one{top:26%}.map-latitude-two{top:50%}.map-latitude-three{top:74%}.map-longitude{top:7%;bottom:7%;width:1px;border-width:0 0 0 1px}.map-longitude-one{left:27%}.map-longitude-two{left:50%}.map-longitude-three{left:73%}.continent{position:absolute;z-index:1;background:#e3e9ed;opacity:.92}.continent-na{left:10%;top:19%;width:25%;height:28%;clip-path:polygon(3% 15%,32% 1%,57% 13%,75% 8%,96% 28%,83% 51%,66% 55%,54% 78%,34% 69%,20% 48%,6% 39%)}.continent-sa{left:28%;top:48%;width:12%;height:35%;clip-path:polygon(8% 0,85% 7%,97% 25%,72% 51%,58% 77%,32% 100%,20% 64%,0 29%)}.continent-eu{left:48%;top:24%;width:13%;height:15%;clip-path:polygon(4% 29%,29% 1%,48% 18%,65% 4%,96% 26%,82% 63%,59% 54%,41% 91%,14% 69%)}.continent-af{left:48%;top:39%;width:17%;height:34%;clip-path:polygon(14% 2%,72% 0,96% 26%,77% 66%,49% 100%,25% 77%,5% 38%)}.continent-as{left:59%;top:20%;width:32%;height:33%;clip-path:polygon(0 24%,19% 4%,47% 9%,69% 0,97% 22%,91% 51%,71% 54%,59% 83%,39% 64%,22% 77%,8% 48%)}.continent-au{right:9%;bottom:15%;width:13%;height:16%;clip-path:polygon(4% 34%,29% 8%,65% 0,97% 27%,84% 72%,48% 97%,12% 74%)}.location-connector{position:absolute;z-index:2;height:1px;background:#8aaabd;transform-origin:left center}.connector-la{left:16%;top:40%;width:75px;transform:rotate(-24deg)}.connector-sh{right:18%;top:39%;width:84px;transform:rotate(24deg)}.map-marker{position:absolute;z-index:4;color:#0b558c}.map-marker>i{position:absolute;width:9px;height:9px;border:2px solid #fff;border-radius:50%;background:#0b65a5;box-shadow:0 0 0 1px #0b65a5}.map-marker>b{display:block;font-size:8px;letter-spacing:.12em;line-height:1.2}.map-marker b small{display:block;margin-top:5px;color:#758b9c;font-size:5px;letter-spacing:.14em}.marker-la{left:14%;top:37%;padding-left:18px}.marker-la>i{left:0;top:1px}.marker-shanghai{right:7%;top:36%;padding-right:18px;text-align:right}.marker-shanghai>i{right:0;top:1px}.map-brand{position:absolute;z-index:3;left:50%;top:50%;transform:translate(-50%,-50%);padding:12px 17px;background:#ffffffdf;border-left:2px solid #0b65a5;color:#174b73;font-size:12px;letter-spacing:.13em}.map-brand small{display:block;margin-top:5px;color:#8093a1;font-size:5px;font-weight:500;letter-spacing:.16em;white-space:nowrap}
        @media(max-width:820px){.contact-new-hero-grid,.contact-new-layout,.partnership-network-grid{grid-template-columns:1fr}.contact-new-hero-grid{min-height:auto;padding-top:70px;padding-bottom:65px;gap:30px}.contact-new-hero h1{font-size:52px}.contact-new-hero-grid>p{padding:25px 0 0;border-left:0;border-top:1px solid #b8cfdf;font-size:13px}.contact-new-content{padding:70px 0 85px}.contact-new-layout{gap:45px}.contact-new-form{padding:30px 22px}.contact-new-form-row{grid-template-columns:1fr}.contact-new-info{position:static;padding:35px 28px}.contact-tabs button{padding:18px 16px}.partnership-network-section{padding:75px 0}.partnership-network-grid{min-height:auto;gap:50px}.partnership-network-copy h2{font-size:38px}.map-canvas{height:330px}.marker-la{left:7%}.marker-shanghai{right:4%}.map-brand{font-size:9px;padding:10px 12px}.map-footer{gap:14px}.map-footer span:last-child{text-align:right}}
      `}</style>
    </>
  );
}
