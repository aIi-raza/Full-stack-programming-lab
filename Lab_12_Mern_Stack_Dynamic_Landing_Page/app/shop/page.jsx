import ProductCard from "@/components/ProductCard";
import Sidebar from "@/components/Sidebar";
import { getProducts } from "@/lib/products";

export default async function ShopPage({ searchParams }) {
  const products = await getProducts({
    category: searchParams.category,
    badge: searchParams.badge,
    search: searchParams.search
  });

  return (
    <main className="container-rustik py-10">
      <div className="mb-7 flex items-end justify-between border-b border-[#ddd] pb-4">
        <div>
          <h1 className="serif text-[32px] font-bold">Shop</h1>
          <p className="text-[13px] text-[#777]">Home &gt; Shop</p>
        </div>
        <span className="text-[13px] text-[#777]">{products.length} products</span>
      </div>
      <div className="grid gap-7 lg:grid-cols-[250px_1fr]">
        <Sidebar selectedCategory={searchParams.category} />
        <div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => <ProductCard key={product._id} product={product} />)}
          </div>
          <div className="mt-8 flex justify-center gap-2">
            {[1, 2, 3].map((page) => (
              <button key={page} className={`h-9 w-9 border ${page === 1 ? "bg-rust text-white" : "bg-white"}`}>{page}</button>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
