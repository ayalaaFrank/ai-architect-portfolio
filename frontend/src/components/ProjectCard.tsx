type Props = {
  title: string
  category: string
  image: string
}

const ProjectCard = ({ title, category, image }: Props) => {
  return (
    <div className="group overflow-hidden rounded-3xl bg-white shadow-sm">
      <img
        src={image}
        alt={title}
        className="w-full h-[300px] object-cover group-hover:scale-105 transition duration-500"
      />

      <div className="p-6">
        <p className="text-sm uppercase tracking-wider text-gray-500">
          {category}
        </p>

        <h3 className="mt-2 text-2xl font-medium">
          {title}
        </h3>
      </div>
    </div>
  )
}

export default ProjectCard