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

function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-900 px-4 py-12 text-gray-400 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col justify-between gap-8 sm:flex-row sm:items-start">
        {/* brand */}
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400/20 via-blue-500/15 to-indigo-500/20 border border-sky-400/30 p-1.5 shadow-sm">
              <FlutterLogo className="h-full w-full" />
            </span>
            <p className="text-base font-bold text-white">Beta-Labs — 2-Days Flutter Mobile App Development</p>
          </div>
          <p className="mt-[2px] text-xs text-indigo-400">An Innovation with AI</p>
          <p className="mt-3 text-sm text-gray-300">Email: info@beta-labs.in</p>
          <p className="mt-1 text-sm text-gray-300">Mobile: +91 9729280731</p>
          <p className="mt-1 text-xs text-gray-400">Knowledge Park II, Greater Noida, UP</p>
          <p className="mt-2 text-xs text-gray-500">
            © {new Date().getFullYear()} Beta-Labs. All rights reserved.
          </p>
        </div>

        {/* nav */}
        <nav className="flex flex-col gap-2 text-sm font-medium sm:items-end">
          {[
            { href: '#learn', label: "What You'll Learn" },
            { href: '#curriculum', label: 'Curriculum' },
            { href: '#instructor', label: 'Instructor' },
            { href: '#faq', label: 'FAQ' },
          ].map(({ href, label }) => (
            <a key={href} href={href} className="transition hover:text-white">
              {label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}

export default Footer
