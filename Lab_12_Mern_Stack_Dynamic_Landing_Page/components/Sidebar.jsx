"use client";

import { useRouter, useSearchParams } from "next/navigation";

const categories = ["beds", "cabinets", "bookcases", "boxes", "chairs", "tables"];

export default function Sidebar({ selectedCategory }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  function changeCategory(category, checked) {
    const params = new URLSearchParams(searchParams.toString());
    if (checked) {
      params.set("category", category);
    } else if (params.get("category") === category) {
      params.delete("category");
    }
    router.push(`/shop${params.toString() ? `?${params.toString()}` : ""}`);
  }

  return (
    <aside className="space-y-7 border border-[#dedede] bg-white p-5 shadow-[0_2px_10px_rgba(0,0,0,0.03)]">
      <div>
        <h3 className="serif mb-4 text-[17px] font-bold">Price Range</h3>
        <input type="range" min="50" max="500" defaultValue="250" className="w-full" />
        <div className="mt-2 flex justify-between text-[12px] text-[#777]"><span>£50</span><span>£500</span></div>
      </div>
      <div>
        <h3 className="serif mb-4 text-[17px] font-bold">Categories</h3>
        <div className="space-y-3 text-[13px] capitalize">
          {categories.map((category) => (
            <label key={category} className="flex cursor-pointer items-center gap-2">
              <input
                type="checkbox"
                checked={selectedCategory === category}
                onChange={(event) => changeCategory(category, event.target.checked)}
              />
              {category}
            </label>
          ))}
        </div>
      </div>
      <div>
        <h3 className="serif mb-4 text-[17px] font-bold">Sort By</h3>
        <select className="w-full border border-[#ccc] bg-white p-2 text-[13px]">
          <option>Default sorting</option>
          <option>Price low to high</option>
          <option>Price high to low</option>
          <option>Newest</option>
        </select>
      </div>
    </aside>
  );
}
