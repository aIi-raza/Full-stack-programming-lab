import Link from "next/link";
import ProductCard from "@/components/ProductCard";

const labels = {
  featured: ["FEATURED", "See All Feature"],
  special: ["SPECIAL", "See All Special"],
  popular: ["POPULAR", "See All Popular"]
};

export default function ProductGrid({ products }) {
  return (
    <section className="container-rustik relative mb-10">
      <div className="grid border-l border-r border-[#e6e6e6] bg-white md:grid-cols-3">
        {Object.entries(labels).map(([badge, [title]]) => (
          <div key={badge} className="flex min-h-[630px] flex-col border-[#e6e6e6] px-8 pt-8 md:border-r last:md:border-r-0">
            <h2 className="serif text-[17px] font-normal uppercase text-[#333]">{title}</h2>
            <div className="mt-4 h-px bg-[#e0e0e0]" />
            <div className="flex-1">
              {products.filter((product) => product.badge === badge).slice(0, 4).map((product) => (
                <ProductCard key={product._id || product.sku} product={product} compact />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="grid overflow-hidden rounded-b-[26px] border-t border-[#e4e4e4] bg-[radial-gradient(circle_at_50%_0,#ffffff_0,#f4f4f4_55%,#eeeeee_100%)] shadow-[0_2px_3px_rgba(0,0,0,0.18)] md:grid-cols-3">
        {Object.entries(labels).map(([badge, [, linkText]]) => (
          <Link key={badge} href={`/shop?badge=${badge}`} className="py-6 text-center text-[12px] text-[#111]">
            {linkText}
          </Link>
        ))}
      </div>
    </section>
  );
}
