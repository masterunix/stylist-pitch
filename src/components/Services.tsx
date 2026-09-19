'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { Sparkles, CheckCircle2 } from 'lucide-react';

const pillars = [
  {
    num: '01',
    title: 'FASHION',
    desc: 'Bespoke Wardrobe & Editorial Looks',
    skills: ['Styling', 'Trends', 'Visual identity', 'Fashion storytelling'],
    color: 'bg-rose-50 border-rose-200 text-rose-900',
  },
  {
    num: '02',
    title: 'CREATIVE',
    desc: 'Art Direction & Ideation',
    skills: ['Concepts', 'Moodboards', 'Art direction', 'Storytelling'],
    color: 'bg-amber-50 border-amber-200 text-amber-900',
  },
  {
    num: '03',
    title: 'PRODUCTION',
    desc: 'Seamless Shoot Management',
    skills: ['Shoot planning', 'Sourcing', 'Team coordination', 'Execution'],
    color: 'bg-sky-50 border-sky-200 text-sky-900',
  },
  {
    num: '04',
    title: 'BRANDING',
    desc: 'High-Impact Personal Identity',
    skills: ['Personal brand', 'Brand positioning', 'Campaign concepts'],
    color: 'bg-emerald-50 border-emerald-200 text-emerald-900',
  },
  {
    num: '05',
    title: 'PARTNERSHIPS',
    desc: 'Commercial & Sponsor Alignment',
    skills: ['Brand opportunities', 'Campaign coordination', 'Deliverables', 'Communication'],
    color: 'bg-indigo-50 border-indigo-200 text-indigo-900',
  },
  {
    num: '06',
    title: 'MANAGEMENT',
    desc: 'Structure & Execution Support',
    skills: ['Schedules', 'Follow-ups', 'Deadlines', 'Events', 'Organisation'],
    color: 'bg-stone-50 border-stone-200 text-stone-900',
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="table"
      ref={ref}
      className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-12 bg-[#FAF7F5] overflow-hidden flex items-center justify-center"
    >
      {/* Lined Notebook Paper Texture Background */}
      <div className="absolute inset-0 opacity-25 pointer-events-none mix-blend-multiply">
        <Image
          src="/assets/lined-paper.jpg"
          alt="Lined notebook paper texture"
          fill
          className="object-cover"
        />
      </div>

      <div className="max-w-7xl w-full mx-auto relative z-10">
        
        {/* Top Header Card with Red Pushpin */}
        <div className="relative mb-14 text-center">
          {/* Authentic 3D Red Pushpin from PDF Page 3 */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-16 h-16 sm:w-20 sm:h-20 z-20 pointer-events-none drop-shadow-xl transform -rotate-12">
            <Image
              src="/assets/red-pushpin.png"
              alt="Red 3D Pushpin"
              width={100}
              height={100}
              className="w-full h-auto"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block bg-white/95 backdrop-blur-md px-8 py-6 rounded-2xl border-2 border-stone-300 shadow-lg"
          >
            <div className="flex items-center justify-center space-x-2 text-xs uppercase font-bold tracking-widest text-[#B51A1A] mb-1">
              <Sparkles className="w-4 h-4" />
              <span>Full Scope of Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-[#B51A1A] tracking-tight uppercase">
              What I Bring to the Table
            </h2>
            <p className="text-stone-600 font-serif text-sm sm:text-base max-w-xl mx-auto mt-2">
              From creative direction to logistics and brand partnerships — 6 pillars of end-to-end support designed to let you shine on camera.
            </p>
          </motion.div>
        </div>

        {/* 6-Column Card Grid (Page 3 of the PDF) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.num}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="group bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-stone-200 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header Number & Title */}
                <div className="flex justify-between items-center mb-3">
                  <span className="font-display font-extrabold text-2xl sm:text-3xl text-[#B51A1A]">
                    {pillar.num}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#B51A1A] group-hover:scale-150 transition-transform" />
                </div>

                <h3 className="font-display font-bold text-lg sm:text-xl text-[#1C1917] tracking-tight mb-1">
                  {pillar.title}
                </h3>
                <p className="text-xs text-stone-500 font-sans mb-4 leading-tight">
                  {pillar.desc}
                </p>

                {/* Skills Bullet List */}
                <ul className="space-y-2.5 pt-3 border-t border-stone-100">
                  {pillar.skills.map((skill, sIdx) => (
                    <li key={sIdx} className="flex items-center space-x-2 text-xs sm:text-sm text-stone-700 font-sans">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#B51A1A] shrink-0" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Decorative Indicator */}
              <div className="mt-6 pt-3 border-t border-dashed border-stone-200 text-[10px] uppercase font-bold tracking-widest text-stone-400 group-hover:text-[#B51A1A] transition-colors">
                Pillar {pillar.num}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
