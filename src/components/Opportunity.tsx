'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { Sparkles, ArrowUpRight, Flame } from 'lucide-react';

const opportunities = [
  {
    id: '01',
    category: 'FASHION',
    headline: 'Signature Fashion Formats',
    description: 'Develop more recognisable fashion-led formats rather than individual outfit posts. Transition from simple OOTDs to serialized styling challenges, archival deep-dives, and aesthetic breakdowns.',
    tag: 'RECURRING FORMATS',
  },
  {
    id: '02',
    category: 'LIFESTYLE',
    headline: 'Serialized Everyday Life',
    description: 'Turn everyday lifestyle content into recurring, recognisable series. Build anticipation with episodic week-in-my-life styling rituals, travel capsule wardrobes, and Delhi/Jaipur creator moments.',
    tag: 'EPISODIC CONTENT',
  },
  {
    id: '03',
    category: 'BEAUTY',
    headline: 'Holistic Beauty Storytelling',
    description: 'Integrate beauty into fashion/lifestyle storytelling rather than keeping it isolated. Complete total-look narratives where glam, accessories, and silhouettes inform one another.',
    tag: 'TOTAL LOOKS',
  },
  {
    id: '04',
    category: 'PERSONALITY',
    headline: 'Muskan-First Engagement',
    description: 'Create more formats where Muskan herself becomes the reason people watch, not just the aesthetic. Your unfiltered humor, candid opinions, and point-of-view driving audience retention.',
    tag: 'BRAND LOYALTY',
  },
  {
    id: '05',
    category: 'BRAND CAMPAIGNS',
    headline: 'Native Commercial Storytelling',
    description: 'Make sponsored content feel native to your existing content language rather than like a separate advertisement. Seamless integrations that brands pay a premium for.',
    tag: 'HIGH-VALUE DEALS',
  },
  {
    id: '06',
    category: 'OFFLINE',
    headline: 'Cultural & Event Footprint',
    description: 'Events, fashion week appearances, brand launches, bespoke editorial shoots, and creator collaborations that establish you in the high-fashion industry offline.',
    tag: 'INDUSTRY PRESENCE',
  },
];

export default function Opportunity() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="opportunity"
      ref={ref}
      className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-12 bg-[#FAF7F5] overflow-hidden"
    >
      <div className="max-w-7xl w-full mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#B51A1A] mb-3">
              <Flame className="w-4 h-4 text-[#B51A1A]" />
              <span>Page 05 // Growth Strategy</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold text-[#B51A1A] tracking-tight uppercase pdf-title-shadow">
              Where I See the<br />
              <span className="text-[#1C1917]">Opportunity</span>
            </h2>
          </div>
          <p className="max-w-md text-stone-600 font-serif text-base sm:text-lg leading-relaxed">
            Six strategic verticals to evolve your personal brand from individual viral posts into an enduring fashion media powerhouse.
          </p>
        </div>

        {/* Grid Layout: 6 Opportunity Cards + Ripped Polaroids */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Cards Grid (8 cols) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {opportunities.map((opp, idx) => (
              <motion.div
                key={opp.id}
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group relative bg-white/95 backdrop-blur-md rounded-2xl p-6 sm:p-7 border border-stone-200 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-display font-extrabold text-2xl sm:text-3xl text-[#B51A1A]">
                      {opp.id}
                    </span>
                    <span className="text-[10px] font-sans font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-[#FAF7F5] border border-stone-200 text-stone-600 group-hover:bg-[#B51A1A] group-hover:text-white transition-colors">
                      {opp.tag}
                    </span>
                  </div>

                  <span className="text-xs font-bold uppercase tracking-widest text-stone-400 block mb-1">
                    {opp.category}
                  </span>
                  <h3 className="font-display font-bold text-xl text-[#1C1917] mb-2.5">
                    {opp.headline}
                  </h3>
                  <p className="text-stone-600 font-serif text-sm leading-relaxed">
                    {opp.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-[#B51A1A] font-bold group-hover:translate-x-1 transition-transform">
                  <span>Explore Format Idea</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Authentic Editorial Polaroids from PDF Page 5 (4 cols) */}
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-8 justify-center">
            
            {/* Polaroid 1: Orange Mesh Vest Streetwear */}
            <motion.div
              initial={{ opacity: 0, rotate: 3, y: 20 }}
              animate={isInView ? { opacity: 1, rotate: 3, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="bg-white p-3 sm:p-4 pb-6 rounded-lg shadow-xl border border-stone-200 transform hover:rotate-0 hover:scale-105 transition-all duration-300 relative group"
            >
              {/* Washi Tape on Polaroid */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-6 washi-tape-purple rotate-1 z-10" />

              <div className="relative aspect-[3/4] w-full rounded-xs overflow-hidden bg-stone-100 mb-3">
                <Image
                  src="/assets/shoot-model-orange.jpg"
                  alt="High-Fashion Editorial Shoot - Orange Mesh Vest"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="text-center font-serif italic text-xs text-stone-700">
                "Bold, recognisable silhouettes — Shoot 01"
              </div>
            </motion.div>

            {/* Polaroid 2: Teal Hoodie Creator Shoot */}
            <motion.div
              initial={{ opacity: 0, rotate: -4, y: 20 }}
              animate={isInView ? { opacity: 1, rotate: -4, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="bg-white p-3 sm:p-4 pb-6 rounded-lg shadow-xl border border-stone-200 transform hover:rotate-0 hover:scale-105 transition-all duration-300 relative group"
            >
              {/* Gingham Tape on Polaroid */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-6 washi-tape-gingham -rotate-2 z-10" />

              <div className="relative aspect-[4/3] w-full rounded-xs overflow-hidden bg-stone-100 mb-3">
                <Image
                  src="/assets/shoot-model-teal.jpg"
                  alt="Lifestyle Content - Vibrant Color Story"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="text-center font-serif italic text-xs text-stone-700">
                "Spontaneous, personal &amp; you — Shoot 02"
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
