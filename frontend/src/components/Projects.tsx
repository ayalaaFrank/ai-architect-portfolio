import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'Modern Villa',
    category: 'Residential',
    image:
      'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Luxury Apartment',
    category: 'Interior Design',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Urban Office',
    category: 'Commercial',
    image:
      'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop',
  },
  { // הוספת פרויקט רביעי לגריד מלא
    title: 'Minimalist Retreat',
    category: 'Hospitality',
    image:
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=1600&auto=format&fit=crop',
  },
]

const Projects = () => {
  return (
    <section className="bg-[#f9f8f6] px-6 md:px-16 lg:px-24 py-28 md:py-36">
      {/* Heading */}
      <div className="mb-20 md:mb-28 max-w-4xl mx-auto text-center">
        <p
          className="
            uppercase
            tracking-[0.25em]
            text-xs
            text-neutral-500
            mb-4
            font-medium
          "
        >
          Featured Projects
        </p>

        <h2
          className="
            text-4xl
            md:text-5xl
            font-light
            leading-tight
            text-neutral-950
          "
        >
          Spaces designed for
          <span className="text-neutral-400"> modern living.</span>
        </h2>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-x-10 gap-y-16 lg:gap-x-16 lg:gap-y-24 max-w-[1500px] mx-auto">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            category={project.category}
            image={project.image}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects