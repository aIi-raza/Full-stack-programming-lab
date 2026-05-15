export default function StorePickup() {
  return (
    <section className="container-rustik mt-6 bg-[#fffac9] px-10 py-7">
      <div className="grid items-center gap-5 md:grid-cols-[0.85fr_1.55fr]">
        <div>
          <div className="text-[34px] font-extrabold leading-none text-[#00bfa7]">BUY ONLINE</div>
          <div className="text-[17px] font-extrabold tracking-[0.32em] text-[#ef4b4b]">PICK UP IN STORE</div>
        </div>
        <div className="border-l border-[#d6d29c] pl-6">
          <div className="text-[25px] font-light leading-none text-[#333]">NOW AVAILABLE IN OUR STORE SYSTEM</div>
          <div className="mt-2 text-[10px] uppercase text-[#333]">AVAILABLE ON SELECT PRODUCTS. <span className="text-rust underline">LEARN MORE</span></div>
        </div>
      </div>
    </section>
  );
}
