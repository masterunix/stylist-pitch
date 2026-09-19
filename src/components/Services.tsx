'use client';

import { motion } from 'framer-motion';
import { Palette, Camera, Handshake, LayoutGrid } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Creative Direction & Styling',
    description: 'Concept development, moodboards, fashion styling, and visual storytelling for every piece of content.',
  },
  {
    icon: Camera,
    title: 'Shoot Production',
    description: 'End-to-end production from concept to execution: location, team, scheduling, and creative oversight.',
  },
  {
    icon: Handshake,
    title: 'Brand Strategy & Partnerships',
    description: 'Brief review, brand fit assessment, concept development, communication, and deliverable tracking.',
  },
  {
    icon: LayoutGrid,
    title: 'Content Strategy & Planning',
    description: 'Content calendars, series development, trend research, and maintaining your authentic voice.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-stone-50 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-sm font-mono tracking-widest text-stone-500">04 //</span>
          <h2 className="text-3xl md:text-4xl font-serif text-stone-900">What I Bring to the Table</h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group p-8 rounded-2xl bg-white border border-stone-100 hover:border-rose-100 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="w-12 h-12 rounded-full bg-stone-50 flex items-center justify-center mb-6 group-hover:bg-rose-50 transition-colors duration-300">
                <service.icon className="w-6 h-6 text-stone-700 group-hover:text-rose-400 transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-serif text-stone-900 mb-3">{service.title}</h3>
              <p className="text-stone-600 leading-relaxed font-sans">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
