import Link from "next/link";
import { Footer, Header } from "../../components";

const articles = [
  ["Shockwave Therapy Guide", "shockwave-therapy-guide"],
  ["Radial vs Focused Shockwave Therapy", "radial-vs-focused-shockwave-therapy"],
  ["How Clinics Use Shockwave Devices", "how-clinics-use-shockwave-devices"],
  ["Treatment Applications", "treatment-applications"],
];

export default function KnowledgeBasePage() {
  return <><Header /><main><section className="page-intro wrap"><span className="page-index">01</span><div><h1>Knowledge Base</h1></div><p>Coming Soon</p></section><section className="section wrap"><div className="control-list">{articles.map(([title, slug], index) => <article key={slug}><span>{String(index + 1).padStart(2, "0")}</span><div><h3><Link href={`/resources/knowledge-base/${slug}`}>{title}</Link></h3></div><p>Coming Soon</p></article>)}</div></section></main><Footer /></>;
}
