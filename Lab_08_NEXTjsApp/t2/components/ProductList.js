import Link from "next/link";

const products = [
  {
    id: 1,
    title: "Wireless Headphones",
    description: "Premium over-ear headphones with active noise cancellation.",
    price: 4999,
  },
  {
    id: 2,
    title: "Mechanical Keyboard",
    description: "Compact TKL keyboard with RGB lighting and tactile switches.",
    price: 3499,
  },
  {
    id: 3,
    title: "USB-C Hub",
    description: "7-in-1 hub with HDMI, USB 3.0, SD card reader and more.",
    price: 1999,
  },
  {
    id: 4,
    title: "Webcam 1080p",
    description: "Full HD webcam with built-in microphone for video calls.",
    price: 2799,
  },
];

export { products };

export default function ProductList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-xl shadow-md p-5 flex flex-col justify-between hover:shadow-lg transition"
        >
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {product.title}
            </h3>
            <p className="text-gray-500 text-sm mb-4">{product.description}</p>
          </div>
          <div className="flex items-center justify-between mt-auto">
            <span className="text-indigo-700 font-bold text-base">
              Rs. {product.price}
            </span>
            <Link
              href={`/products/${product.id}`}
              className="bg-indigo-600 text-white text-sm px-4 py-1.5 rounded-lg hover:bg-indigo-700 transition"
            >
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
