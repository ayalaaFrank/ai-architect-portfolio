const About = () => {
  return (
    <section className="px-8 md:px-20 py-24 bg-[#f8f7f4]">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="uppercase tracking-[4px] text-sm text-gray-500">
            About Studio
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-light leading-tight">
            Creating timeless
            architectural experiences.
          </h2>
        </div>

        <div>
          <p className="text-lg leading-9 text-gray-600">
            We believe architecture is more than buildings —
            it is the connection between people, light,
            materials and emotion.

            Our studio focuses on clean aesthetics,
            functional spaces and modern elegance.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About