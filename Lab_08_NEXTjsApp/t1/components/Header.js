import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-700 text-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold tracking-wide">MyNextApp</h1>
        <nav className="flex gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-yellow-300 transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-yellow-300 transition-colors">
            About
          </Link>
          <Link href="/contact" className="hover:text-yellow-300 transition-colors">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
