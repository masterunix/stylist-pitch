'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

const processes = [
  {
    title: 'BRAND APPROACHES',
    steps: ['Review brief', 'Assess brand fit', 'Develop concept', 'Communicate with brand', 'Track deliverables']
  },
  {
    title: 'SHOOT',
    steps: ['Concept', 'Moodboard', 'Styling', 'Location', 'Team', 'Schedule', 'Shoot']
  },
  {
    title: 'CONTENT',
    steps: ['Content ideas', 'Series', 'Calendar', 'Trend research', 'Creative direction', 'Review']
  },
  {
    title: 'EVENTS',
    steps: ['Opportunities', 'Coordination', 'Looks', 'Scheduling', 'Content capture', 'Follow-up']
  }
]

export default function Process() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const columnVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' as const } }
  }

  return (
    <section className="py-24 bg-neutral-50 border-t border-neutral-200" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-20">
          <span className="text-sm tracking-widest text-neutral-400 mb-4 block">03</span>
          <h2 className="text-4xl md:text-5xl font-serif text-neutral-900">From Idea to Execution</h2>
        </div>

        <motion.div
          className="flex flex-col lg:flex-row gap-8 lg:gap-0 lg:divide-x divide-neutral-200"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {processes.map((process, index) => (
            <motion.div 
              key={index} 
              variants={columnVariants}
              className="flex-1 lg:px-8 first:lg:pl-0 last:lg:pr-0"
            >
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-sm font-semibold tracking-widest text-neutral-800">{process.title}</h3>
                <ArrowDown className="w-4 h-4 text-neutral-300 lg:-rotate-90" strokeWidth={1.5} />
              </div>
              
              <ul className="space-y-4">
                {process.steps.map((step, stepIndex) => (
                  <li key={stepIndex} className="text-neutral-500 text-sm font-sans flex items-start">
                    <span className="text-neutral-300 mr-3 text-xs mt-1">{(stepIndex + 1).toString().padStart(2, '0')}</span>
                    {step}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
