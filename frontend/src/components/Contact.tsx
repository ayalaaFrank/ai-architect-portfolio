import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <section id="contact" className="bg-white px-6 md:px-24 py-32 border-t border-neutral-100">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="max-w-lg"
        >
          <h2 className="text-5xl md:text-7xl font-light tracking-tight mb-8">
            Let's start <br /> <span className="italic text-neutral-400">your project.</span>
          </h2>
          <p className="text-neutral-500 text-lg font-light">
            אנחנו תמיד מחפשים פרויקטים מאתגרים ואנשים שמעריכים עיצוב נקי ומדויק.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="w-full md:w-auto"
        >
          <div className="space-y-8 text-right md:text-left">
             <div>
               <p className="uppercase tracking-widest text-xs text-neutral-400 mb-2">Email us</p>
               <a href="mailto:studio@ayala.com" className="text-2xl font-light hover:text-neutral-500 transition-colors">studio@ayala.com</a>
             </div>
             <div>
               <p className="uppercase tracking-widest text-xs text-neutral-400 mb-2">Call us</p>
               <a href="tel:+972501234567" className="text-2xl font-light">+972 50.123.4567</a>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact