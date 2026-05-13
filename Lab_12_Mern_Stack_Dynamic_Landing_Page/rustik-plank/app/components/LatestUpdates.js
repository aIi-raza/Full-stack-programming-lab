const posts = [
  {
    id: 1,
    title: 'Lorem ipsum',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.',
    bg: 'from-amber-800 to-amber-600',
  },
  {
    id: 2,
    title: 'Lorem ipsum',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.',
    bg: 'from-amber-700 to-yellow-600',
  },
  {
    id: 3,
    title: 'Lorem ipsum',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.',
    bg: 'from-stone-600 to-stone-400',
  },
]

// Inline SVG bedroom scenes
const roomSvgs = [
  // Ornate bedroom
  <svg key="1" viewBox="0 0 200 130" className="w-full h-full">
    <rect x="0" y="0" width="200" height="130" fill="#c8b090" />
    <rect x="0" y="80" width="200" height="50" fill="#8B6914" />
    <rect x="20" y="30" width="160" height="55" rx="3" fill="#D4A84B" />
    <rect x="20" y="20" width="160" height="15" rx="3" fill="#C4903C" />
    <rect x="20" y="10" width="50" height="15" rx="3" fill="#8B6914" />
    <rect x="130" y="10" width="50" height="15" rx="3" fill="#8B6914" />
    <rect x="60" y="35" width="80" height="5" rx="1" fill="#fff" opacity="0.3" />
    <rect x="70" y="45" width="60" height="35" rx="2" fill="#E07B20" opacity="0.2" />
    <rect x="30" y="80" width="10" height="20" fill="#5a3e0a" />
    <rect x="160" y="80" width="10" height="20" fill="#5a3e0a" />
  </svg>,
  // Modern bedroom
  <svg key="2" viewBox="0 0 200 130" className="w-full h-full">
    <rect x="0" y="0" width="200" height="130" fill="#d4c4a0" />
    <rect x="0" y="85" width="200" height="45" fill="#a07830" />
    <rect x="25" y="40" width="150" height="48" rx="2" fill="#C4903C" />
    <rect x="25" y="30" width="150" height="14" rx="2" fill="#D4A84B" />
    <rect x="25" y="20" width="40" height="14" rx="3" fill="#8B6914" />
    <rect x="135" y="20" width="40" height="14" rx="3" fill="#8B6914" />
    <rect x="50" y="42" width="100" height="8" rx="2" fill="#fff" opacity="0.25" />
    <rect x="35" y="85" width="130" height="6" rx="1" fill="#8B6914" />
    <rect x="35" y="89" width="8" height="18" fill="#5a3e0a" />
    <rect x="157" y="89" width="8" height="18" fill="#5a3e0a" />
  </svg>,
  // Simple bedroom
  <svg key="3" viewBox="0 0 200 130" className="w-full h-full">
    <rect x="0" y="0" width="200" height="130" fill="#e0d0b0" />
    <rect x="0" y="90" width="200" height="40" fill="#c8a870" />
    <rect x="30" y="45" width="140" height="48" rx="2" fill="#D4A84B" />
    <rect x="30" y="35" width="140" height="14" rx="2" fill="#C4903C" />
    <rect x="30" y="22" width="38" height="16" rx="3" fill="#8B6914" />
    <rect x="132" y="22" width="38" height="16" rx="3" fill="#8B6914" />
    <rect x="55" y="47" width="90" height="7" rx="2" fill="#fff" opacity="0.3" />
    <rect x="150" y="50" width="20" height="35" rx="2" fill="#C4903C" opacity="0.7" />
    <rect x="155" y="40" width="10" height="12" rx="1" fill="#8B6914" opacity="0.7" />
    <rect x="40" y="90" width="8" height="20" fill="#5a3e0a" />
    <rect x="152" y="90" width="8" height="20" fill="#5a3e0a" />
  </svg>,
]

export default function LatestUpdates() {
  return (
    <section className="py-10 bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-heading text-2xl font-bold text-center text-gray-800 uppercase tracking-widest mb-8">
          Latest Updates
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {posts.map((post, idx) => (
            <div key={post.id}>
              {/* Image */}
              <div className="w-full h-36 overflow-hidden mb-3 bg-amber-100">
                {roomSvgs[idx]}
              </div>

              {/* Title */}
              <h4 className="font-heading font-bold text-sm uppercase text-gray-800 mb-2">
                {post.title}
              </h4>

              {/* Excerpt */}
              <p className="text-xs text-gray-500 leading-relaxed mb-3">{post.excerpt}</p>

              {/* Read More */}
              <button className="border border-gray-400 text-gray-600 text-xs px-5 py-2 uppercase font-semibold hover:border-brand-orange hover:text-brand-orange transition-colors">
                READ MORE
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
