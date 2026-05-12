import { useState, useEffect } from 'react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const linkClass = "hover:text-neutral-900 transition-colors duration-300 relative group"
  const underlineClass = "absolute bottom-0 left-0 w-0 h-px bg-neutral-950 group-hover:w-full transition-all duration-300"

  return (
    <header
      className={`
        fixed
        top-0
        left-0
        w-full
        z-50
        transition-all
        duration-500
        ${isScrolled ? 'bg-white/95 backdrop-blur-sm border-b border-neutral-100 py-4 shadow-sm' : 'bg-transparent py-6'}
      `}
    >
      <nav
        className="
          max-w-[1500px]
          mx-auto
          flex
          items-center
          justify-between
          px-6
          md:px-12
        "
      >
        {/* Logo */}
        <h1
          className={`
            text-2xl
            tracking-[0.25em]
            font-light
            transition-colors
            duration-500
            ${isScrolled ? 'text-neutral-950' : 'text-white'}
          `}
        >
          EFRAT
        </h1>

        {/* Links */}
        <div
          className={`
            hidden
            md:flex
            items-center
            gap-12
            text-sm
            uppercase
            tracking-[0.2em]
            font-medium
            transition-colors
            duration-500
            ${isScrolled ? 'text-neutral-700' : 'text-white/90'}
          `}
        >
          <a href="#" className={linkClass}>
            Home
            <span className={underlineClass}></span>
          </a>

          <a href="#" className={linkClass}>
            Projects
            <span className={underlineClass}></span>
          </a>

          <a href="#" className={linkClass}>
            About
            <span className={underlineClass}></span>
          </a>

          <a
            href="#"
            className={`
              border
              px-6
              py-2.5
              rounded-full
              text-xs
              font-semibold
              transition-all
              duration-300
              ${isScrolled
                ? 'border-neutral-900 text-neutral-950 hover:bg-neutral-950 hover:text-white'
                : 'border-white/50 text-white hover:bg-white hover:text-neutral-950'
              }
            `}
          >
            Contact
          </a>
        </div>
        
        {/* Mobile Menu Button - (Simplified, needs state and menu) */}
        <button className="md:hidden text-white group">
          <span className={`block w-6 h-px mb-1.5 transition-transform ${isScrolled ? 'bg-neutral-950' : 'bg-white'}`}></span>
          <span className={`block w-6 h-px mb-1.5 ${isScrolled ? 'bg-neutral-950' : 'bg-white'}`}></span>
          <span className={`block w-6 h-px ${isScrolled ? 'bg-neutral-950' : 'bg-white'}`}></span>
        </button>

      </nav>
    </header>
  )
}

export default Navbar