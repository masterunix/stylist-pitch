'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function PitchVision() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
  }

  return (
    <section id="vision" className="w-full py-24 md:py-32 bg-alabaster text-espresso overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start"
        >
          {/* Left Column - 40% */}
          <div className="md:col-span-5 flex flex-col md:sticky md:top-32">
            <motion.div variants={itemVariants} className="text-[120px] leading-none font-serif text-warm-gray/30 tracking-tighter mb-4">
              01
            </motion.div>
            <motion.div variants={itemVariants} className="h-px w-24 bg-warm-gray mb-8"></motion.div>
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-serif tracking-tight">
              The Vision
            </motion.h2>
          </div>

          {/* Right Column - 60% */}
          <div className="md:col-span-7 flex flex-col gap-10 mt-8 md:mt-0">
            <motion.div variants={itemVariants} className="space-y-6 text-lg text-espresso/80 font-sans font-light leading-relaxed">
              <p>
                I see an incredible opportunity to elevate your brand while preserving the authentic connection you've built with your audience. The fashion and lifestyle space is crowded, but your voice stands out.
              </p>
              <p>
                My goal is to partner with you to refine the creative direction, streamline the production process, and bring a cohesive editorial eye to your content, allowing you to focus on what you do best: being the face and voice of your community.
              </p>
            </motion.div>

            <motion.blockquote 
              variants={itemVariants}
              className="pl-8 py-4 border-l-2 border-[#E8DCC4] my-8" 
            >
              <p className="font-serif italic text-2xl md:text-3xl text-espresso leading-snug">
                "I don't want to turn your content into something overly planned or overly commercial. The goal would be to create enough structure behind the scenes so that the content still feels spontaneous, personal and you. My role would be to bring the strategy, ideas and execution support while keeping your personality at the centre."
              </p>
            </motion.blockquote>
            
            <motion.div variants={itemVariants} className="w-full h-px bg-warm-gray/30 mt-8"></motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
