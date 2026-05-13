'use client'
import { useState } from 'react'
import { Search, ShoppingCart, Menu, X, Facebook, Twitter, Youtube } from 'lucide-react'

const navCategories = ['BEDS', 'CABINETS', 'BOOKCASES', 'BOXES', 'CHAIRS', 'TABLES']

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <header className="w-full bg-white shadow-sm">
      {/* Top bar */}
      <div className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between py-2">
          {/* Social icons */}
          <div className="flex items-center gap-3">
            <a href="#" aria-label="YouTube" className="text-gray-500 hover:text-brand-orange transition-colors">
              <Youtube size={14} />
            </a>
            <a href="#" aria-label="Google+" className="text-gray-500 hover:text-brand-orange transition-colors text-xs font-bold">G+</a>
            <a href="#" aria-label="Twitter" className="text-gray-500 hover:text-brand-orange transition-colors">
              <Twitter size={14} />
            </a>
            <a href="#" aria-label="Facebook" className="text-gray-500 hover:text-brand-orange transition-colors">
              <Facebook size={14} />
            </a>
          </div>

          {/* Right: phone, account, cart */}
          <div className="flex items-center gap-4 text-xs text-gray-600">
            <span className="hidden sm:block font-semibold">07584 031409</span>
            <a href="#" className="hover:text-brand-orange transition-colors hidden sm:block">
              My Account (login/Register)
            </a>
            <div className="flex items-center gap-1 hover:text-brand-orange cursor-pointer transition-colors">
              <ShoppingCart size={16} />
              <span>0 Item</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex-shrink-0">
          <span className="font-heading text-2xl font-bold">
            <span className="text-brand-orange">R</span>
            <span className="text-gray-800">ustik Plank</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 text-xs">
          {['Home', 'Blog', 'About Us', 'Contact Us'].map((item) => (
            <a
              key={item}
              href="#"
              className="px-3 py-1 text-gray-700 hover:text-brand-orange font-semibold uppercase tracking-wide text-xs transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Category nav */}
      <div className="bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <div className="hidden md:flex items-center gap-0">
            {navCategories.map((cat) => (
              <a
                key={cat}
                href="#"
                className="px-4 py-3 text-xs font-bold text-gray-700 hover:text-brand-orange uppercase tracking-wider transition-colors border-r border-gray-100 last:border-0"
              >
                {cat}
              </a>
            ))}
          </div>

          {/* Search */}
          <div className="flex items-center border border-gray-300 ml-auto my-2">
            <input
              type="text"
              placeholder="search"
              className="px-3 py-1 text-xs outline-none w-32 bg-white"
            />
            <button className="px-2 py-1 text-gray-500 hover:text-brand-orange border-l border-gray-300">
              <Search size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4 space-y-2">
          {['Home', 'Blog', 'About Us', 'Contact Us', ...navCategories].map((item) => (
            <a
              key={item}
              href="#"
              className="block text-sm font-semibold text-gray-700 hover:text-brand-orange py-1 uppercase"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
