import CTAButton from './CTAButton'

function FlutterLogo({ className = 'h-5 w-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.314 0L2.3 12L7.157 16.857L23.743 0H14.314Z" fill="#47C5FB" />
      <path d="M14.286 11.429L7.143 18.571L12 23.429L19.143 16.286L14.286 11.429Z" fill="#02569B" />
      <path d="M7.143 18.571L12 13.714L16.857 18.571L12 23.429L7.143 18.571Z" fill="#01579B" />
      <path d="M12 13.714L14.286 11.429L19.143 16.286L16.857 18.571L12 13.714Z" fill="#00B0FF" />
    </svg>
  )
}

function Navbar({ onReserve }) {
  const links = [
    { href: '#learn', label: "What You'll Learn" },
    { href: '#curriculum', label: 'Curriculum' },
    { href: '#instructor', label: 'Instructor' },
    { href: '#reviews', label: 'Reviews' },
  ]

  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 bg-white shadow-sm">
      <nav className="page-shell flex items-center justify-between py-3">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-sky-400/20 via-blue-500/15 to-indigo-500/20 border border-sky-300/50 p-1.5 shadow-sm">
            <FlutterLogo className="h-full w-full" />
          </span>
          <div>
            <span className="text-base font-extrabold text-gray-900 block leading-tight">Flutter Mobile App Development</span>
            <span className="text-[10px] font-semibold text-indigo-600 uppercase tracking-widest block">2-Days Live Workshop (4 Hours)</span>
          </div>
        </a>
        <div className="hidden items-center gap-8 lg:flex">
          {[
            { href: '#learn', label: "What You'll Learn" },
            { href: '#curriculum', label: '2-Days Schedule' },
            { href: '#instructor', label: 'Workshop Host' },
            { href: '#reviews', label: 'Reviews' },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-600 transition hover:text-indigo-600"
            >
              {link.label}
            </a>
          ))}
        </div>
        <CTAButton label="Book Seat — ₹50" onClick={onReserve} className="py-2.5 px-5 text-xs sm:text-sm" />
      </nav>
    </header>
  )
}

export default Navbar
