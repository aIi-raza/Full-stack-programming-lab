import ProductCard from "@/components/ProductCard";
import ProductDetailActions from "@/components/ProductDetailActions";
import { getProduct, getProducts } from "@/lib/products";
import { notFound } from "next/navigation";

export default async function ProductDetailPage({ params }) {
  const product = await getProduct(params.id);
  if (!product) notFound();
  const related = (await getProducts({ category: product.category })).filter((item) => item._id !== product._id).slice(0, 4);

  return (
    <main className="container-rustik py-10">
      <div className="mb-7 text-[13px] text-[#777]">Home &gt; {product.category} &gt; {product.name}</div>
      <section className="grid gap-9 lg:grid-cols-[1fr_1fr]">
        <div>
          <div className="border border-[#dedede] bg-white p-6">
            <img src={product.images[0]} alt={product.name} className="h-[430px] w-full object-contain" />
          </div>
          <div className="mt-4 grid grid-cols-4 gap-3">
            {product.images.slice(0, 4).map((image) => (
              <div key={image} className="border border-[#ddd] bg-white p-2">
                <img src={image} alt={product.name} className="h-24 w-full object-contain" />
              </div>
            ))}
          </div>
        </div>
        <div>
          <h1 className="serif text-[38px] font-bold text-[#222]">{product.name}</h1>
          <div className="mt-2 text-rust">★★★★★ <span className="text-[12px] text-[#777]">(12 reviews)</span></div>
          <div className="mt-5 flex items-end gap-3">
            <span className="serif text-[42px] font-bold text-rust">£{product.price.toFixed(2)}</span>
            {product.originalPrice && <span className="pb-2 text-[#999] line-through">£{product.originalPrice.toFixed(2)}</span>}
          </div>
          <p className="mt-5 max-w-[560px] text-[14px] leading-7 text-[#666]">{product.description}</p>
          <ProductDetailActions productId={product._id} />
          <dl className="mt-7 grid grid-cols-[90px_1fr] gap-y-2 text-[13px]">
            <dt className="font-bold">SKU:</dt><dd>{product.sku}</dd>
            <dt className="font-bold">Category:</dt><dd className="capitalize">{product.category}</dd>
            <dt className="font-bold">Tags:</dt><dd>{product.tags.join(", ")}</dd>
          </dl>
        </div>
      </section>
      <section className="mt-12 border border-[#dedede] bg-white">
        <div className="flex border-b border-[#dedede] text-[13px] font-bold uppercase">
          {["Description", "Reviews", "Shipping Info"].map((tab, index) => (
            <div key={tab} className={`px-6 py-4 ${index === 0 ? "bg-rust text-white" : ""}`}>{tab}</div>
          ))}
        </div>
        <div className="p-6 text-[14px] leading-7 text-[#666]">
          {product.description} Crafted from durable timber with a rustic finish, this piece brings traditional character into everyday rooms. Reviews praise its sturdy construction, and shipping is free for standard delivery.
        </div>
      </section>
      <section className="mt-12">
        <h2 className="serif mb-5 text-center text-[26px]">Related Products</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((item) => <ProductCard key={item._id} product={item} />)}
        </div>
      </section>
    </main>
  );
}
