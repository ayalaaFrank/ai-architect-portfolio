import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Image with Parallax Effect */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.6 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
          alt="Modern Architecture"
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-center px-6 md:px-16 lg:px-24">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p className="mb-6 text-xs uppercase tracking-[0.4em] text-white/70">
            Aesthetics • Function • Emotion
          </p>
          <h1 className="max-w-4xl text-5xl font-light leading-tight text-white md:text-7xl lg:text-8xl">
            Designing Space <br />
            <span className="text-neutral-400">Defining Life.</span>
          </h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-12"
          >
            <a 
              href="#projects" 
              className="group relative inline-flex items-center gap-4 text-sm uppercase tracking-widest text-white"
            >
              <span className="h-px w-12 bg-white transition-all group-hover:w-20"></span>
              View Projects
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/30"
      >
        <div className="h-12 w-px bg-gradient-to-b from-white to-transparent"></div>
      </motion.div>
    </section>
  )
}

export default Hero