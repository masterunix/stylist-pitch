'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const muskanSkills = [
  "Existing audience",
  "Established voice",
  "On-camera presence",
  "Fashion & lifestyle content",
  "Brand experience",
  "Community"
]

const simonaSkills = [
  "Concept development",
  "Fashion styling",
  "Creative direction",
  "Shoot production",
  "Visual storytelling",
  "Brand thinking",
  "Organisation"
]

export default function SkillsComplement() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  }

  return (
    <section className="w-full py-24 md:py-32 bg-alabaster relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col items-center"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-espresso mb-4">The Synergy</h2>
            <p className="text-espresso/60 font-sans uppercase tracking-widest text-sm">How we complement each other</p>
          </motion.div>

          <div className="flex flex-col md:flex-row items-center md:items-stretch justify-center gap-8 md:gap-12 w-full">
            
            {/* Muskan Card */}
            <motion.div variants={itemVariants} className="flex-1 w-full md:w-auto bg-white/40 backdrop-blur-md border border-warm-gray/20 p-8 md:p-12 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <h3 className="font-serif text-2xl text-espresso mb-8 pb-4 border-b border-warm-gray/20">Muskan <span className="text-espresso/50 italic text-xl">— Creator</span></h3>
              <ul className="space-y-4">
                {muskanSkills.map((skill, index) => (
                  <motion.li 
                    key={index}
                    variants={itemVariants}
                    className="font-sans text-espresso/80 font-light flex items-center group cursor-default"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-warm-gray mr-4 group-hover:bg-[#E8DCC4] transition-colors duration-300"></span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{skill}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Plus / Cross symbol */}
            <motion.div variants={itemVariants} className="flex items-center justify-center py-4 md:py-0">
              <div className="w-12 h-12 flex items-center justify-center rounded-full border border-warm-gray/30 text-espresso/50 font-serif text-2xl bg-white/20 backdrop-blur-sm">
                +
              </div>
            </motion.div>

            {/* Simona Card */}
            <motion.div variants={itemVariants} className="flex-1 w-full md:w-auto bg-white/40 backdrop-blur-md border border-warm-gray/20 p-8 md:p-12 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <h3 className="font-serif text-2xl text-espresso mb-8 pb-4 border-b border-warm-gray/20">Simona <span className="text-espresso/50 italic text-xl">— Creative + Manager</span></h3>
              <ul className="space-y-4">
                {simonaSkills.map((skill, index) => (
                  <motion.li 
                    key={index}
                    variants={itemVariants}
                    className="font-sans text-espresso/80 font-light flex items-center group cursor-default"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-warm-gray mr-4 group-hover:bg-[#E8DCC4] transition-colors duration-300"></span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{skill}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="mt-20 text-center max-w-2xl mx-auto">
            <p className="font-serif italic text-xl text-espresso/80">
              Combining your on-camera magnetism with my behind-the-scenes structural support creates a powerful formula for elevated, scalable content.
            </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}
