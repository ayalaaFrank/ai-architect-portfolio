import { motion } from 'framer-motion' 

const About = () => {
  const containerVariants: any = { 
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants: any = { 
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  }

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className="px-6 md:px-16 lg:px-24 py-28 md:py-36 bg-white"
    >
      <div className="grid md:grid-cols-[1fr,1.2fr] gap-16 md:gap-24 items-start">
        {/* Left */}
        <motion.div variants={itemVariants} className="md:sticky md:top-32">
          <p
            className="
              uppercase
              tracking-[0.2em]
              text-xs
              text-neutral-500
              mb-5
              font-medium
            "
          >
            About Studio
          </p>

          <h2
            className="
              text-4xl
              md:text-5xl
              lg:text-6xl
              font-light
              leading-tight
              text-neutral-950
              max-w-xl
            "
          >
            Creating timeless
            <span className="block text-neutral-400">architectural experiences.</span>
          </h2>
        </motion.div>

        {/* Right */}
        <motion.div variants={itemVariants}>
          <p
            className="
              text-lg
              md:text-xl
              leading-relaxed
              text-neutral-700
              font-light
              max-w-2xl
            "
          >
            We believe architecture is more than buildings —
            it is the connection between people, light,
            materials and emotion.
            <br />
            <br />
            Our studio focuses on clean aesthetics,
            functional spaces and modern elegance.
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default About