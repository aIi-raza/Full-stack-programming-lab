import { products } from "../../../components/ProductList";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function ProductDetailPage({ params }) {
  const product = products.find((p) => p.id === parseInt(params.id));

  if (!product) {
    notFound();
  }

  return (
    <div className="max-w-xl mx-auto mt-10">
      <Link
        href="/products"
        className="text-indigo-600 text-sm hover:underline mb-6 inline-block"
      >
        ← Back to Products
      </Link>

      <div className="bg-white rounded-xl shadow-md p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">{product.title}</h2>
        <p className="text-gray-500 text-base mb-6">{product.description}</p>

        <div className="border-t pt-4 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-400">Price</p>
            <p className="text-2xl font-bold text-indigo-700">Rs. {product.price}</p>
          </div>
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition font-medium">
            Add to Cart
          </button>
        </div>

        <div className="mt-6 bg-indigo-50 rounded-lg p-4">
          <p className="text-sm text-gray-500">
            <span className="font-semibold text-gray-700">Product ID:</span> {product.id}
          </p>
          <p className="text-sm text-gray-500 mt-1">
            <span className="font-semibold text-gray-700">Category:</span> Electronics
          </p>
          <p className="text-sm text-gray-500 mt-1">
            <span className="font-semibold text-gray-700">Availability:</span>{" "}
            <span className="text-green-600 font-medium">In Stock</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: String(product.id),
  }));
}
