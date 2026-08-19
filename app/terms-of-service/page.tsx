import { LegalDocument } from "../legal/LegalDocument";

const sections = [
  { title: "Introduction", content: "These terms provide a preliminary framework for use of the SHOCKIS Medical website and related business inquiries. Effective date: TODO — confirm before publication." },
  { title: "Company and Contact Information", content: "SHOCKIS Medical is the brand presented on this website. Legal company name, registered address and formal notice contact: TODO — confirm." },
  { title: "Website Information", content: "Website information is provided for general product and business reference and may be revised without notice. It is not medical advice or a substitute for professional clinical judgment." },
  { title: "Product Information", content: "Product descriptions, images and specifications are intended to support evaluation. Availability, configuration, regulatory status and permitted use may vary by market and must be confirmed in formal documentation." },
  { title: "Quotes and Orders", content: "Website inquiries do not create an order. A transaction is formed only after requirements, product configuration and commercial terms are confirmed through an authorized quotation or agreement." },
  { title: "Pricing and Payments", content: "Pricing, currency, taxes, payment schedule and payment method will be stated in the applicable quotation or agreement. Payment processor and standard payment terms: TODO — confirm." },
  { title: "Shipping", content: "Shipping method, destination responsibilities, lead time, import requirements and transfer of risk will be defined in the applicable quotation or agreement. Standard shipping policy: TODO — confirm." },
  { title: "Returns and Refunds", content: "Returns and refunds are subject to the agreed commercial terms, product condition and applicable law. Return window, authorization process and restocking conditions: TODO — confirm." },
  { title: "Warranty", content: "Any warranty applies only as stated in the product documentation or signed agreement. Warranty period, exclusions and service procedure: TODO — confirm." },
  { title: "Product Use", content: "Products must be evaluated, installed and used by appropriately qualified parties in accordance with applicable instructions, professional standards and local requirements." },
  { title: "Intellectual Property", content: "Website text, graphics, trademarks, product materials and other content are protected by applicable intellectual property rights. No rights are granted except for reasonable viewing and evaluation." },
  { title: "Website Use", content: "Users must not misuse the website, interfere with its operation, attempt unauthorized access or use content in a way that violates law or third-party rights." },
  { title: "User Communications", content: "Information submitted through website forms should be accurate and appropriate for the inquiry. Do not submit confidential patient information or sensitive medical records through general contact forms." },
  { title: "Privacy", content: "Handling of personal information is described in the SHOCKIS Medical Privacy Policy. Users should review that notice before submitting information." },
  { title: "Limitation of Liability", content: "Any limitation of liability must be interpreted under applicable law and the controlling commercial agreement. Final limitation language: TODO — obtain legal review before publication." },
  { title: "Changes to These Terms", content: "These terms may be updated to reflect changes in website services, business practices or legal requirements. The current version will be posted on this page." },
  { title: "Governing Law", content: "Governing law, jurisdiction and dispute-resolution terms: TODO — confirm with qualified legal counsel before publication." },
  { title: "Contact Information", content: "General questions may be sent to sales@shockis.com. Legal company name, registered address and formal legal contact: TODO — confirm." },
];

export default function TermsOfService(){return <LegalDocument eyebrow="LEGAL" title="Terms of Service" introduction="Preliminary terms for website use, product inquiries, quotations and future commercial transactions with SHOCKIS Medical." sections={sections}/>;}
