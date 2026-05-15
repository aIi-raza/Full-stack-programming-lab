const columns = [
  ["INFORMATIONS", "Terms and conditions", "About us", "Sitemap", "Contact", "Return policy", "Suppliers"],
  ["MY ACCOUNT", "Your Account", "Information", "Addresses", "Orders history", "Delivery Information", "Search Terms"],
  ["HELP AND MORE", "New products", "Top sellers", "Manufacturers", "Suppliers", "Specials"],
  ["LINKS", "Delivery", "Service", "Gift Cards", "Mobile", "Manufacturers"]
];

const logos = [
  { label: "f4b", className: "text-[39px] font-black text-[#66aa2a]" },
  { label: "Australian Government", className: "text-[9px] font-bold text-[#111]" },
  { label: "QANTAS", className: "text-[15px] font-black italic text-[#111]" },
  { label: "INTERRISK", className: "text-[13px] font-bold text-[#287f91]" },
  { label: "GE Money", className: "text-[12px] font-bold text-[#2d68a3]" },
  { label: "Rockwell Collins", className: "text-[14px] font-black italic text-[#111]" },
  { label: "LexisNexis", className: "text-[15px] font-semibold text-[#111]" },
  { label: "ohlmedia", className: "text-[14px] font-bold text-[#d89025]" }
];

function LogoStrip() {
  return (
    <div className="bg-white">
      <div className="container-rustik flex flex-wrap items-center justify-center gap-x-6 gap-y-3 pb-8 pt-5 grayscale">
        {logos.map((logo) => (
          <div key={logo.label} className={`flex h-[34px] items-center justify-center whitespace-nowrap ${logo.className}`}>
            {logo.label}
          </div>
        ))}
      </div>
    </div>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <h3 className="serif mb-8 text-[23px] font-bold uppercase leading-none text-rust">{title}</h3>
      <ul className="space-y-[12px] text-[12px] font-semibold leading-none text-[#555]">
        {links.map((link) => (
          <li key={link}>{link}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="mt-0 bg-white">
      <LogoStrip />
      <div className="relative bg-rust pb-[22px]">
        <div className="relative mx-auto min-h-[290px] w-[calc(100%-4px)] overflow-hidden rounded-b-[64px] bg-[radial-gradient(circle_at_50%_46%,#f7f7f7_0,#e9e9e9_34%,#c9c9c9_100%)] shadow-[0_2px_4px_rgba(0,0,0,0.45)]">
          <div className="container-rustik grid gap-8 px-9 pb-10 pt-9 sm:grid-cols-2 lg:grid-cols-4">
            {columns.map(([title, ...links]) => (
              <FooterColumn key={title} title={title} links={links} />
            ))}
          </div>
          <div className="absolute inset-x-0 bottom-6 text-center text-[10px] font-semibold text-[#8b8b8b]">
            © 2014 Rustik Plank Furniture . All Rights Reserved .
          </div>
        </div>
      </div>
    </footer>
  );
}
