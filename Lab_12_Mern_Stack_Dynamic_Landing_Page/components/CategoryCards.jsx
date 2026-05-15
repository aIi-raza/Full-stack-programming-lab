const cards = [
  ["CHAIRS", "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=300", "/shop?category=chairs"],
  ["BEDS", "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=300", "/shop?category=beds"],
  ["TABALES", "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300", "/shop?category=tables"]
];

export default function CategoryCards() {
  return (
    <section className="container-rustik grid gap-4 py-6 md:grid-cols-3">
      {cards.map(([title, image, href]) => (
        <a key={title} href={href} className="flex h-[112px] items-start justify-between overflow-hidden bg-[#f4f4f4] px-2 py-3 shadow-[0_2px_7px_rgba(0,0,0,0.18)]">
          <div className="serif leading-[0.95]">
            <div className="text-[23px] font-normal text-[#111]">{title}</div>
            <div className="text-[20px] font-normal text-rust">COLLECTION</div>
          </div>
          <img src={image} alt={title} className="mt-[-3px] h-[98px] w-[142px] object-contain mix-blend-multiply" />
        </a>
      ))}
    </section>
  );
}
