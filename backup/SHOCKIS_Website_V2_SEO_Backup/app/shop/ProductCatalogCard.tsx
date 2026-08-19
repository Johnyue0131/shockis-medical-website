import Link from "next/link";

export type ShopCatalogItem = {
  name: string;
  description: string;
  image?: string;
  imageAlt?: string;
  status?: "coming-soon";
};

export function ProductCatalogCard({ item }: { item: ShopCatalogItem }) {
  return (
    <article className="shop-catalog-card">
      <div className={`shop-catalog-image${item.image ? " has-product" : " is-placeholder"}`}>
        {item.image ? (
          <img src={item.image} width="1189" height="1179" alt={item.imageAlt ?? item.name} />
        ) : (
          <div className="shop-placeholder-mark" aria-hidden="true"><i /><span>SHOCKIS<small>SYSTEM COMPONENT</small></span></div>
        )}
        {item.status === "coming-soon" && <strong>Coming Soon</strong>}
      </div>
      <div className="shop-catalog-copy">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <Link href="/request-quote">Request Quote <span aria-hidden="true">→</span></Link>
      </div>
    </article>
  );
}
