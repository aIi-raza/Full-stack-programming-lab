const footerColumns = [
  {
    title: 'INFORMATIONS',
    color: 'text-brand-orange',
    links: ['Terms and conditions', 'About us', 'Sitemap', 'Contact', 'Return policy', 'Suppliers'],
  },
  {
    title: 'MY ACCOUNT',
    color: 'text-brand-orange',
    links: ['Your Account', 'Information', 'Addresses', 'Orders history', 'Delivery Information', 'Search Terms'],
  },
  {
    title: 'HELP AND MORE',
    color: 'text-brand-orange',
    links: ['New products', 'Top sellers', 'Manufacturers', 'Suppliers', 'Specials'],
  },
  {
    title: 'LINKS',
    color: 'text-brand-orange',
    links: ['Delivery', 'Service', 'Gift Cards', 'Mobile', 'Manufacturers'],
  },
]

export default function Footer() {
  return (
    <footer className="bg-gray-200 pt-8 pb-4">
      <div className="max-w-6xl mx-auto px-4">
        {/* Footer columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h5 className={`font-heading font-bold text-xs uppercase tracking-widest mb-3 ${col.color}`}>
                {col.title}
              </h5>
              <ul className="space-y-1">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-xs text-gray-600 hover:text-brand-orange transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-300 pt-4 text-center">
          <p className="text-xs text-gray-500">
            © 2014 Rustik Plank Furniture. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
