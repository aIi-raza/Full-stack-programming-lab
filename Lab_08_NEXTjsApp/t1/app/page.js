import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center mt-10">
      <h2 className="text-4xl font-bold text-blue-700 mb-4">Welcome to MyNextApp</h2>
      <p className="text-gray-600 text-lg mb-8">
        This is a multi-page Next.js application built for Lab 08.
      </p>
      <div className="flex justify-center gap-4">
        <Link
          href="/about"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Learn About Us
        </Link>
        <Link
          href="/contact"
          className="bg-gray-700 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}
