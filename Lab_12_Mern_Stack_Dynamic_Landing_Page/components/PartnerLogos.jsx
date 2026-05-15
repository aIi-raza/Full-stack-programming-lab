const logos = ["f4b", "Australian Government", "QANTAS", "INTERRISK", "GE Money", "Rockwell Collins", "LexisNexis", "ohlmedia"];

export default function PartnerLogos() {
  return (
    <section className="container-rustik flex flex-wrap items-center justify-center gap-7 py-8 grayscale">
      {logos.map((logo, index) => (
        <div key={logo} className={`font-bold ${index === 0 ? "text-[42px] text-[#76b82a]" : "text-[16px] text-[#333]"}`}>
          {logo}
        </div>
      ))}
    </section>
  );
}
