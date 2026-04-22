import ProductList from "../../components/ProductList";
import Link from "next/link";

export default function ProductsPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-3xl font-bold text-indigo-700">All Products</h2>
        <Link href="/" className="text-sm text-indigo-600 hover:underline">
          ← Back to Home
        </Link>
      </div>
      <p className="text-gray-500 text-sm mb-4">
        Click "View Details" on any product to see more information.
      </p>
      <ProductList />
    </div>
  );
}
