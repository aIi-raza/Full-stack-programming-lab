"use client";
import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { products } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import { Suspense } from "react";

const CAPACITY = ["2 - 4 People", "5-7 People", "8 People And More"];
const SIZES = ["5 - 6 Feet Long", "7 - 8 Feet Long", "8 Feet To Large Size"];
const TYPES = ["Plug and Play 110 Volt", "TV-Stereo Spas", "Corner Spas", "Portable Spas", "Deeper Spas"];
const PRICE_RANGES = ["Under $3,000", "$3,000 To 4,000"];

function CategoryContent() {
  const searchParams = useSearchParams();
  const searchQ = searchParams.get("search") || "";

  const [filters, setFilters] = useState<Record<string, string>>({});
  const [sort, setSort] = useState("default");

  function toggle(ftype: string, val: string) {
    setFilters((prev) => {
      const next = { ...prev };
      if (next[ftype] === val) delete next[ftype];
      else next[ftype] = val;
      return next;
    });
  }

  const filtered = useMemo(() => {
    let list = [...products];
    if (searchQ) {
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQ.toLowerCase()) ||
          p.category.toLowerCase().includes(searchQ.toLowerCase())
      );
    }
    if (filters.capacity) list = list.filter((p) => p.capacity === filters.capacity);
    if (filters.size) list = list.filter((p) => p.size === filters.size);
    if (filters.type) list = list.filter((p) => p.type === filters.type);
    if (filters.priceRange) list = list.filter((p) => p.priceRange === filters.priceRange);
    if (sort === "price-asc") list.sort((a, b) => a.salePrice - b.salePrice);
    if (sort === "price-desc") list.sort((a, b) => b.salePrice - a.salePrice);
    return list;
  }, [searchQ, filters, sort]);

  return (
    <div className="hs-container" style={{ padding: "16px" }}>
      <p style={{ fontSize: 12, color: "#666", marginBottom: 16 }}>
        <Link href="/" style={{ color: "var(--red)" }}>Home</Link> &gt; {searchQ ? `Search: "${searchQ}"` : "Category"}
      </p>
      <div className="cat-layout">
        {/* SIDEBAR FILTERS */}
        <div className="sidebar-hs">
          <h4>Shopping Options</h4>
          <div className="filter-group">
            <h6>Seating Capacity</h6>
            {CAPACITY.map((v) => (
              <button key={v} className={`filter-link${filters.capacity === v ? " active" : ""}`} onClick={() => toggle("capacity", v)}>{v}</button>
            ))}
          </div>
          <div className="filter-group">
            <h6>Choose Sizes</h6>
            {SIZES.map((v) => (
              <button key={v} className={`filter-link${filters.size === v ? " active" : ""}`} onClick={() => toggle("size", v)}>{v}</button>
            ))}
          </div>
          <div className="filter-group">
            <h6>Spas By Type</h6>
            {TYPES.map((v) => (
              <button key={v} className={`filter-link${filters.type === v ? " active" : ""}`} onClick={() => toggle("type", v)}>{v}</button>
            ))}
          </div>
          <div className="filter-group">
            <h6>Price Ranges</h6>
            {PRICE_RANGES.map((v) => (
              <button key={v} className={`filter-link${filters.priceRange === v ? " active" : ""}`} onClick={() => toggle("priceRange", v)}>{v}</button>
            ))}
          </div>
          {Object.keys(filters).length > 0 && (
            <button className="btn-hs btn-red" style={{ fontSize: 11, padding: "5px 12px", marginTop: 8 }} onClick={() => setFilters({})}>Clear Filters</button>
          )}
        </div>

        {/* PRODUCT GRID */}
        <div>
          <div className="cat-toolbar">
            <span><strong>{filtered.length}</strong> Item(s)</span>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <label style={{ fontSize: 12 }}>Sort by:</label>
              <select className="hs-input" style={{ width: "auto", fontSize: 12 }} value={sort} onChange={(e) => setSort(e.target.value)}>
                <option value="default">Default</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>
          {filtered.length === 0 ? (
            <div className="page-box" style={{ textAlign: "center", color: "#888" }}>
              No products found. <button className="inline-link" onClick={() => setFilters({})}>Clear filters</button>
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
              {filtered.map((p, i) => (
                <ProductCard key={p.id} product={p} idx={i} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function CategoryPage() {
  return (
    <Suspense fallback={<div className="hs-container" style={{ padding: 32 }}>Loading...</div>}>
      <CategoryContent />
    </Suspense>
  );
}
