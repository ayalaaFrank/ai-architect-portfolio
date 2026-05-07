const Hero = () => {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center px-10 md:px-24 bg-[#f8f7f4]">
      <p className="uppercase tracking-[6px] text-sm mb-6 text-gray-500">
        Modern Architecture Studio
      </p>

      <h1 className="text-5xl md:text-7xl font-light leading-tight max-w-4xl">
        Designing spaces
        <br />
        that inspire.
      </h1>

      <p className="mt-8 max-w-xl text-gray-600 text-lg leading-8">
        Creating elegant and functional architectural experiences with a
        modern minimalist approach.
      </p>

      <button className="mt-10 w-fit px-8 py-4 bg-black text-white rounded-full hover:opacity-90 transition">
        Explore Projects
      </button>
    </section>
  )
}

export default Hero