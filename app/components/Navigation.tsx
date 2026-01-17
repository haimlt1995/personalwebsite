export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-blue-900/50 bg-slate-900/90 backdrop-blur-sm shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <a
              href="/"
              className="text-xl font-semibold text-slate-100 hover:text-blue-300 transition-colors"
            >
              Haim Lev Tov
            </a>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-8">
            <a
              href="#about"
              className="text-sm font-medium text-slate-300 hover:text-blue-300 transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-slate-300 hover:text-blue-300 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
