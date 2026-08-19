import { LegalDocument } from "../legal/LegalDocument";

const sections = [
  { title: "Introduction", content: "This notice explains how SHOCKIS Medical handles information submitted through this website. Legal company name, registered address and effective date: TODO — confirm before publication." },
  { title: "Information We Collect", content: "We may collect information you submit, such as your name, business email, organization, country, telephone number and inquiry details, together with basic technical information generated when the website is used." },
  { title: "How We Use Information", content: "Information may be used to respond to inquiries, prepare quotations, provide requested documentation, coordinate support, improve website operations and meet applicable legal obligations." },
  { title: "Cookies and Website Analytics", content: "The website may use necessary cookies and, when configured, analytics tools to understand site performance. Analytics provider, cookie categories and consent settings: TODO — confirm before publication." },
  { title: "Payment Processing", content: "If online payment services are introduced, payment information may be processed by an authorized third-party provider. Payment processor and applicable terms: TODO — confirm before accepting online payments." },
  { title: "Shipping / Order Information", content: "For confirmed orders, we may process delivery contact details, destination information and records needed to coordinate fulfillment. Final shipping workflow and logistics providers: TODO — confirm." },
  { title: "Marketing Communications", content: "Marketing emails will be sent only where permitted and after an appropriate consent or business basis is established. Recipients may unsubscribe using the method included in each communication." },
  { title: "How We Share Information", content: "Information may be shared with service providers or business partners only when reasonably necessary to respond, deliver services, support an order or comply with law. We do not describe personal information as being sold." },
  { title: "Data Security", content: "Reasonable organizational and technical safeguards are used to protect information. No internet transmission or storage method can be guaranteed to be completely secure." },
  { title: "Data Retention", content: "Information is retained only for as long as reasonably needed for the stated purpose, business records and applicable legal requirements. Specific retention schedule: TODO — confirm." },
  { title: "Your Privacy Rights", content: "Depending on your location, you may have rights to request access, correction, deletion, restriction or information about the handling of your personal data. Verification may be required before a request is completed." },
  { title: "Third-Party Services", content: "Links or embedded services provided by third parties are governed by their own privacy practices. Third-party service inventory: TODO — confirm before publication." },
  { title: "Changes to This Privacy Policy", content: "This notice may be updated when website practices or legal requirements change. The effective date and material updates will be displayed on this page." },
  { title: "Contact Information", content: "Privacy questions may be sent to sales@shockis.com. Dedicated privacy email, legal company name and mailing address: TODO — confirm before publication." },
];

export default function PrivacyPolicy(){return <LegalDocument eyebrow="LEGAL" title="Privacy Policy" introduction="A clear overview of how information may be collected, used and protected when you interact with SHOCKIS Medical online." sections={sections}/>;}
