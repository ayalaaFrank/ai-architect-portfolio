import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'Modern Villa',
    category: 'Residential',
    image:
      'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Luxury Apartment',
    category: 'Interior Design',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Urban Office',
    category: 'Commercial',
    image:
      'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop',
  },
]

const Projects = () => {
  return (
    <section className="px-8 md:px-20 py-24 bg-white">
      <div className="mb-14">
        <p className="uppercase tracking-[4px] text-sm text-gray-500">
          Featured Work
        </p>

        <h2 className="mt-4 text-4xl md:text-5xl font-light">
          Selected Projects
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
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