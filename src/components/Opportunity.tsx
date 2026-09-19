'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Sparkles, Heart, Palette, Star, Zap, Calendar } from 'lucide-react'

const opportunities = [
  {
    id: '01',
    category: 'FASHION',
    description: 'Develop more recognisable fashion-led formats rather than individual outfit posts.',
    icon: Sparkles
  },
  {
    id: '02',
    category: 'LIFESTYLE',
    description: 'Turn everyday lifestyle content into recurring, recognisable series.',
    icon: Heart
  },
  {
    id: '03',
    category: 'BEAUTY',
    description: 'Integrate beauty into fashion/lifestyle storytelling rather than keeping it isolated.',
    icon: Palette
  },
  {
    id: '04',
    category: 'PERSONALITY',
    description: 'Create more formats where Muskan herself becomes the reason people watch, not just the aesthetic.',
    icon: Star
  },
  {
    id: '05',
    category: 'BRAND CAMPAIGNS',
    description: 'Make sponsored content feel native to her existing content language rather than like a separate advertisement.',
    icon: Zap
  },
  {
    id: '06',
    category: 'OFFLINE',
    description: 'Events, launches, shoots, creator collaborations and fashion opportunities.',
    icon: Calendar
  }
]

export default function Opportunity() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } }
  }

  return (
    <section id="lookbook" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <span className="text-sm tracking-widest text-neutral-400 mb-4 block">02</span>
          <h2 className="text-4xl md:text-5xl font-serif text-neutral-900">Where I See the Opportunity</h2>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {opportunities.map((opp) => {
            const Icon = opp.icon
            return (
              <motion.div
                key={opp.id}
                variants={itemVariants}
                className="group p-8 border border-neutral-200 bg-neutral-50/50 backdrop-blur-sm hover:border-[#fcdbc3] hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <div className="flex justify-between items-start mb-8">
                  <span className="text-xs tracking-widest text-neutral-400 group-hover:text-[#e8bfa1] transition-colors">{opp.id}</span>
                  <Icon className="w-5 h-5 text-neutral-300 group-hover:text-[#e8bfa1] transition-colors" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-serif text-neutral-900 mb-4 group-hover:text-[#d4a373] transition-colors">{opp.category}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed font-sans">{opp.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
