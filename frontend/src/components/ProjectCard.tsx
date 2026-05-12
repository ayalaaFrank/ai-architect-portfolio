import { motion } from 'framer-motion'

type Props = {
  title: string
  category: string
  image: string
}

const ProjectCard = ({ title, category, image }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="
        relative
        overflow-hidden
        group
        aspect-[4/5] // יחס גובה-רוחב קבוע למראה נקי
        cursor-pointer
        bg-neutral-100
      "
    >
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="
          w-full
          h-full
          object-cover
          transition-transform
          duration-1000
          ease-[0.22, 1, 0.36, 1] // אנימציית Zoom-in חלקה מאוד
          group-hover:scale-105
        "
      />

      {/* Subtle Overlay */}
      <div
        className="
          absolute
          inset-0
          bg-neutral-950/20 // אובליי עדין יותר
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-500
        "
      />

      {/* Content */}
      <div
        className="
          absolute
          bottom-0
          left-0
          w-full
          p-8
          z-10
          flex
          flex-col
          justify-end
        "
      >
        <div className="overflow-hidden"> {/* אנימציית טקסט עולה */}
          <p
            className="
              uppercase
              tracking-[0.25em]
              text-xs
              text-white/80
              mb-2
              font-medium
              transform
              translate-y-full
              group-hover:translate-y-0
              transition-transform
              duration-500
              delay-100
            "
          >
            {category}
          </p>
        </div>

        <div className="overflow-hidden"> {/* אנימציית טקסט עולה */}
          <h3
            className="
              text-3xl
              md:text-4xl
              font-light
              text-white
              leading-snug
              transform
              translate-y-full
              group-hover:translate-y-0
              transition-transform
              duration-500
              delay-200
            "
          >
            {title}
          </h3>
        </div>
      </div>
      
    </motion.div>
  )
}

export default ProjectCard