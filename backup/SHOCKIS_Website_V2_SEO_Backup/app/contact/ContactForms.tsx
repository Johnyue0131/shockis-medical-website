"use client";

import { useState } from "react";

type ContactTab = "inquiry" | "support";

export function ContactForms() {
  const [activeTab, setActiveTab] = useState<ContactTab>("inquiry");

  function selectTab(tab: ContactTab) {
    setActiveTab(tab);
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      <section className="contact-form-section" id="contact-form">
        <div className="wrap contact-form-wrap">
          <div className="contact-form-card">
            <div className="contact-tabs" role="tablist" aria-label="Contact form type">
              <button type="button" role="tab" aria-selected={activeTab === "inquiry"} className={activeTab === "inquiry" ? "active" : ""} onClick={() => setActiveTab("inquiry")}>Inquiry</button>
              <button type="button" role="tab" aria-selected={activeTab === "support"} className={activeTab === "support" ? "active" : ""} onClick={() => setActiveTab("support")}>Support</button>
            </div>

            {activeTab === "inquiry" ? (
              <form className="contact-clean-form" aria-label="Product and cooperation inquiry" onSubmit={(event) => event.preventDefault()}>
                <div className="contact-form-heading"><p className="kicker">BUSINESS INQUIRY</p><h2>Tell us how we can help.</h2></div>
                <div className="contact-field-grid">
                  <label htmlFor="inquiry-name">Name <b>*</b><input id="inquiry-name" name="name" required autoComplete="name" placeholder="Your name" /></label>
                  <label htmlFor="inquiry-email">Email <b>*</b><input id="inquiry-email" name="email" required type="email" autoComplete="email" placeholder="Your email address" /></label>
                  <label htmlFor="inquiry-company">Company<input id="inquiry-company" name="company" autoComplete="organization" placeholder="Company name" /></label>
                  <label htmlFor="inquiry-phone">Phone<input id="inquiry-phone" name="phone" type="tel" autoComplete="tel" placeholder="Phone number" /></label>
                  <label htmlFor="inquiry-country">Country / Region<input id="inquiry-country" name="country" autoComplete="country-name" placeholder="Your country or region" /></label>
                  <label htmlFor="inquiry-product">Interested Product<select id="inquiry-product" name="product" defaultValue=""><option value="" disabled>Please select</option><option value="shockwave-therapy-system">Shockwave Therapy System</option><option value="accessories">Accessories</option><option value="oem-odm">OEM / ODM Cooperation</option></select></label>
                </div>
                <label htmlFor="inquiry-message">Message <b>*</b><textarea id="inquiry-message" name="message" required rows={6} placeholder="Tell us about your needs..." /></label>
                <button className="contact-submit" type="submit">Send Inquiry <span aria-hidden="true">→</span></button>
              </form>
            ) : (
              <form className="contact-clean-form" aria-label="Technical support request" onSubmit={(event) => event.preventDefault()}>
                <div className="contact-form-heading"><p className="kicker">TECHNICAL SUPPORT</p><h2>How can our team assist?</h2></div>
                <div className="contact-field-grid">
                  <label htmlFor="support-name">Name <b>*</b><input id="support-name" name="name" required autoComplete="name" placeholder="Your name" /></label>
                  <label htmlFor="support-email">Email <b>*</b><input id="support-email" name="email" required type="email" autoComplete="email" placeholder="Your email address" /></label>
                  <label htmlFor="support-company">Company<input id="support-company" name="company" autoComplete="organization" placeholder="Company name" /></label>
                  <label htmlFor="support-model">Product Model<input id="support-model" name="productModel" placeholder="Enter your product model" /></label>
                  <label htmlFor="support-order">Order Number<input id="support-order" name="orderNumber" placeholder="Enter your order number" /></label>
                </div>
                <label htmlFor="support-message">Message <b>*</b><textarea id="support-message" name="message" required rows={6} placeholder="Describe your support request..." /></label>
                <button className="contact-submit" type="submit">Contact Support <span aria-hidden="true">→</span></button>
              </form>
            )}
            <div className="contact-card-paths">
              <article>
                <p className="kicker">SALES INQUIRY</p>
                <h2>Sales Inquiry</h2>
                <p>Product quotation, distributor cooperation and OEM partnership.</p>
                <button type="button" onClick={() => selectTab("inquiry")}>Contact Sales <span aria-hidden="true">→</span></button>
              </article>
              <article>
                <p className="kicker">TECHNICAL SUPPORT</p>
                <h2>Technical Support</h2>
                <p>Product information, documentation and after-sales support.</p>
                <button type="button" onClick={() => selectTab("support")}>Contact Support <span aria-hidden="true">→</span></button>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
