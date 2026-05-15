const posts = [
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=520",
  "https://images.unsplash.com/photo-1618220179428-22790b461013?w=520",
  "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=520"
];

export default function LatestUpdates() {
  return (
    <section className="container-rustik py-5">
      <h2 className="serif mb-5 text-center text-[23px] font-normal tracking-[0.1em] text-[#333]">Latest Updates</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {posts.map((image, index) => (
          <article key={image}>
            <img src={image} alt={`Latest update ${index + 1}`} className="h-[132px] w-full object-cover" />
            <h3 className="serif mt-2 text-[13px] font-normal text-[#111]">Lorem ipsum</h3>
            <p className="mt-2 text-[10px] leading-[1.35] text-[#b3b3b3]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor .
            </p>
            <div className="mt-2 text-right">
              <button className="detail-button bg-white text-[9px] font-bold uppercase text-[#333]">READ MORE</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
