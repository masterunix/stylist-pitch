'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { Sparkles, Users, Crown, Wand2 } from 'lucide-react';

const muskanPoints = [
  'Existing audience & loyal followers',
  'Established, authentic creator voice',
  'Magnetic on-camera presence',
  'Rich fashion & lifestyle content pipeline',
  'Proven brand collaboration experience',
  'Engaged, hyper-active community',
];

const simonaPoints = [
  'Concept development & creative formats',
  'Formal fashion styling & wardrobe curation',
  'Editorial creative direction',
  'End-to-end shoot production & logistics',
  'Compelling visual storytelling',
  'Strategic brand thinking & positioning',
  'Meticulous organisation & calendar rigor',
];

export default function SkillsComplement() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="synergy"
      ref={ref}
      className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-12 bg-[#F5EDE4] overflow-hidden flex items-center justify-center"
    >
      {/* Warm Crumpled Kraft Paper Background from Page 4 of PDF */}
      <div className="absolute inset-0 opacity-40 pointer-events-none mix-blend-multiply">
        <Image
          src="/assets/kraft-crumpled.jpg"
          alt="Kraft crumpled paper texture"
          fill
          className="object-cover"
        />
      </div>

      <div className="max-w-6xl w-full mx-auto relative z-10">
        
        {/* Tilted Chunky Red Headline from Page 4 */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotate: 1 }}
          animate={isInView ? { opacity: 1, y: 0, rotate: 1 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-block relative">
            <span className="text-xs uppercase font-bold tracking-widest text-[#B51A1A] block mb-2">
              04 // The Partnership Formula
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold text-[#B51A1A] tracking-tight uppercase pdf-title-shadow">
              Why Our Skills Complement<br className="hidden sm:inline" /> Each Other
            </h2>
          </div>
        </motion.div>

        {/* Side-by-Side Dual Scrapbook Cards with Synergy Junction */}
        <div className="grid grid-cols-1 lg:grid-cols-11 gap-8 items-stretch">
          
          {/* Muskan Card (Left Column - 5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -40, rotate: -1 }}
            animate={isInView ? { opacity: 1, x: 0, rotate: -1 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-5 bg-white/95 backdrop-blur-md rounded-2xl p-8 sm:p-10 border-2 border-[#1C1917]/10 shadow-[0_15px_35px_rgba(0,0,0,0.1)] relative"
          >
            {/* Top Washi Tape */}
            <div className="absolute -top-3.5 left-12 w-28 h-7 washi-tape-purple rotate-2 shadow-xs" />

            <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-stone-200">
              <div className="p-2.5 rounded-xl bg-amber-100 text-amber-800">
                <Crown className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-amber-700">In Front of Camera</span>
                <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-[#1C1917]">
                  MUSKAN
                </h3>
                <p className="font-serif italic text-sm text-stone-500">The Creator &amp; Community Powerhouse</p>
              </div>
            </div>

            <ul className="space-y-3.5 font-serif text-base sm:text-lg text-stone-800">
              {muskanPoints.map((pt, i) => (
                <li key={i} className="flex items-start space-x-3">
                  <span className="text-[#B51A1A] font-bold text-xl leading-none mt-0.5">•</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-4 border-t border-dashed border-stone-200 text-xs font-sans text-stone-500 italic">
              Your focus: Storytelling, connecting with audience, on-camera delivery.
            </div>
          </motion.div>

          {/* Synergy Center Connector (1 col) */}
          <div className="lg:col-span-1 flex lg:flex-col items-center justify-center py-2 lg:py-0">
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="w-16 h-16 rounded-full bg-[#B51A1A] text-white flex items-center justify-center font-display font-extrabold text-2xl shadow-xl border-4 border-white transform hover:rotate-90 transition-transform"
            >
              +
            </motion.div>
          </div>

          {/* Simona Card (Right Column - 5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 40, rotate: 1 }}
            animate={isInView ? { opacity: 1, x: 0, rotate: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 bg-[#FAF8F5]/95 backdrop-blur-md rounded-2xl p-8 sm:p-10 border-2 border-[#B51A1A]/30 shadow-[0_15px_35px_rgba(181,26,26,0.12)] relative"
          >
            {/* Top Washi Tape */}
            <div className="absolute -top-3.5 right-12 w-28 h-7 washi-tape-blue -rotate-2 shadow-xs" />

            <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-stone-200">
              <div className="p-2.5 rounded-xl bg-rose-100 text-[#B51A1A]">
                <Wand2 className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#B51A1A]">Behind the Scenes</span>
                <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-[#B51A1A]">
                  SIMONA
                </h3>
                <p className="font-serif italic text-sm text-stone-500">Creative Direction + Brand Manager</p>
              </div>
            </div>

            <ul className="space-y-3.5 font-serif text-base sm:text-lg text-stone-800">
              {simonaPoints.map((pt, i) => (
                <li key={i} className="flex items-start space-x-3">
                  <span className="text-[#B51A1A] font-bold text-xl leading-none mt-0.5">•</span>
                  <span className="font-medium">{pt}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-4 border-t border-dashed border-stone-200 text-xs font-sans text-[#B51A1A] italic font-semibold">
              My focus: Architecture, shoot production, styling, brand deck pitches.
            </div>
          </motion.div>

        </div>

        {/* Bottom Connecting Synergy Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center max-w-2xl mx-auto p-6 bg-white/80 rounded-xl border border-stone-300 shadow-sm"
        >
          <p className="font-serif italic text-lg sm:text-xl text-stone-900 leading-relaxed">
            "Combining your on-camera magnetism with my behind-the-scenes structural support creates a powerful formula for elevated, scalable content."
          </p>
        </motion.div>

      </div>
    </section>
  );
}
