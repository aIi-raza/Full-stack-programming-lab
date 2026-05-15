export default function HotDeal() {
  return (
    <section className="container-rustik mt-2">
      <h2 className="serif mb-3 text-center text-[23px] font-normal tracking-[0.12em] text-[#333]">Hot Deal</h2>
      <div className="grid gap-3 md:grid-cols-2">
        <div className="relative h-[260px] overflow-hidden border border-[#e4e4e4] bg-white p-2">
          <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800" alt="Elite living room" className="h-full w-full object-cover" />
          <div className="absolute left-3 top-12 w-[230px] bg-white/75 px-3 py-3">
            <div className="serif text-[25px] leading-none text-[#222]">Elite Collection</div>
            <div className="serif text-[16px] text-rust">Design Furniture</div>
          </div>
          <div className="absolute bottom-6 right-7 flex h-[78px] w-[78px] items-center justify-center rounded-full bg-rust text-center text-white">
            <div>
              <div className="text-[30px] font-bold leading-none">35%</div>
              <div className="mt-1 text-[12px] text-[#111]">Sale OFF</div>
            </div>
          </div>
        </div>
        <div className="relative h-[260px] overflow-hidden border border-[#e4e4e4] bg-white p-2">
          <img src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=800" alt="Reclaimed wood room" className="h-full w-full object-cover" />
          <div className="absolute right-7 top-6 text-right">
            <div className="serif text-[27px] tracking-[0.12em] text-[#222]">Reclaimed and hand crafted</div>
            <div className="mt-5 text-[32px] font-normal text-rust">Sale OFF</div>
            <div className="text-[62px] font-normal leading-[0.9] text-black">50%</div>
          </div>
        </div>
      </div>
    </section>
  );
}
