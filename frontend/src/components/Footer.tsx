const Footer = () => {
  const currentYear = new Date().getFullYear();

  const linkClass = "text-neutral-400 hover:text-white transition-colors duration-300"

  return (
    <footer className="bg-neutral-950 text-white px-6 md:px-16 lg:px-24 py-20 md:py-28">
      <div className="grid md:grid-cols-4 gap-12 lg:gap-16 max-w-[1500px] mx-auto">
        <div className="md:col-span-2 pr-10">
          <h2 className="text-2xl font-light tracking-[0.25em] text-white">
            AYALA <span className="text-neutral-500">ARCHITECTS</span>
          </h2>

          <p className="mt-8 text-neutral-400 leading-relaxed font-light max-w-md">
            Designing timeless spaces with modern elegance
            and architectural precision.
          </p>
        </div>

        <div>
          <h3 className="uppercase tracking-[0.2em] text-xs text-neutral-300 mb-6 font-semibold">
            Navigation
          </h3>

          <ul className="space-y-4 text-sm font-light">
            <li><a href="#" className={linkClass}>Home</a></li>
            <li><a href="#" className={linkClass}>Projects</a></li>
            <li><a href="#" className={linkClass}>About</a></li>
            <li><a href="#" className={linkClass}>Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="uppercase tracking-[0.2em] text-xs text-neutral-300 mb-6 font-semibold">
            Contact
          </h3>

          <p className="leading-relaxed text-neutral-400 text-sm font-light space-y-2">
            <span>Tel Aviv, Israel</span><br />
            <a href="mailto:studio@ayala-architects.com" className={linkClass}>studio@ayala-architects.com</a><br />
            <a href="tel:+972501234567" className={linkClass}>+972 50-123-4567</a>
          </p>
        </div>
      </div>

      <div className="max-w-[1500px] mx-auto border-t border-neutral-800 mt-16 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500 tracking-wide font-light">
        <p>© {currentYear} AYALA ARCHITECTS. All rights reserved.</p>
        <div className="flex gap-6">
            <a href="#" className="hover:text-neutral-300 transition">Privacy Policy</a>
            <a href="#" className="hover:text-neutral-300 transition">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer