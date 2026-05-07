const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-6 bg-white shadow-sm">
      <h1 className="text-2xl font-semibold tracking-wide">
        AYALA ARCHITECTS
      </h1>

      <div className="flex gap-8 text-sm uppercase tracking-wider">
        <a href="#">Home</a>
        <a href="#">Projects</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  )
}

export default Navbar