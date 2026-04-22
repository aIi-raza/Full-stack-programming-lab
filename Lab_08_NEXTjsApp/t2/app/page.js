import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center mt-12">
      <h2 className="text-4xl font-bold text-indigo-700 mb-4">Welcome to ShopNext</h2>
      <p className="text-gray-600 text-lg mb-8">
        Browse our collection of quality tech products.
      </p>
      <Link
        href="/products"
        className="bg-indigo-600 text-white px-8 py-3 rounded-lg text-base font-medium hover:bg-indigo-700 transition"
      >
        View All Products
      </Link>
    </div>
  );
}
