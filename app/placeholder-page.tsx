import { Footer, Header } from "./components";

export function PlaceholderPage({ title }: { title: string }) {
  return (
    <>
      <Header />
      <main>
        <section className="page-intro wrap">
          <span className="page-index">01</span>
          <div><h1>{title}</h1></div>
          <p>Coming Soon</p>
        </section>
      </main>
      <Footer />
    </>
  );
}
