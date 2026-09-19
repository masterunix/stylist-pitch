'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { Heart, Sparkles, Laptop, MapPin, Check } from 'lucide-react';

export default function PhilosophyRemote() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-12 bg-[#8F1414] overflow-hidden flex flex-col items-center justify-center"
    >
      {/* Rich Crimson Crumpled Paper Texture Background from Page 7 */}
      <div className="absolute inset-0 opacity-40 pointer-events-none mix-blend-multiply">
        <Image
          src="/assets/crimson-crumpled.png"
          alt="Crimson crumpled paper texture"
          fill
          className="object-cover"
        />
      </div>

      <div className="max-w-5xl w-full mx-auto relative z-10 space-y-16">
        
        {/* CARD 1: THE MANIFESTO (Page 7 of PDF) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
          animate={isInView ? { opacity: 1, scale: 1, rotate: -2 } : {}}
          transition={{ duration: 0.8 }}
          className="relative bg-[#FAF8F5] rounded-3xl p-8 sm:p-14 md:p-16 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] border-2 border-stone-300 max-w-4xl mx-auto"
        >
          {/* Lavender Washi Tape Strips on Opposite Corners like Page 7 */}
          <div className="absolute -top-4 -left-6 w-36 h-10 washi-tape-purple -rotate-12 shadow-md" />
          <div className="absolute -bottom-4 -right-6 w-36 h-10 washi-tape-purple rotate-6 shadow-md" />

          <div className="text-center space-y-6">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#B51A1A]">
              <Heart className="w-4 h-4 fill-[#B51A1A]" />
              <span>Page 07 // The Creative Philosophy</span>
            </div>

            <p className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-[#1C1917] leading-relaxed max-w-3xl mx-auto">
              "I don't want to turn your content into something overly planned or overly commercial."
            </p>

            <div className="w-16 h-1 bg-[#B51A1A] mx-auto rounded-full" />

            <p className="font-serif text-lg sm:text-2xl md:text-3xl text-stone-800 leading-relaxed max-w-3xl mx-auto">
              The goal would be to create enough structure behind the scenes so that the content still feels <span className="font-bold text-[#B51A1A] underline decoration-wavy">spontaneous, personal and you</span>.
            </p>

            <p className="font-serif text-base sm:text-xl text-stone-600 max-w-2xl mx-auto italic">
              My role would be to bring the strategy, ideas and execution support while keeping your personality at the centre.
            </p>
          </div>
        </motion.div>

        {/* CARD 2: THE REMOTE WORKING MODEL (Page 8 of PDF) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, rotate: 1.5 }}
          animate={isInView ? { opacity: 1, scale: 1, rotate: 1.5 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative bg-[#9B2C24] text-white rounded-3xl p-8 sm:p-12 md:p-14 shadow-[0_25px_50px_rgba(0,0,0,0.5)] border-2 border-[#7A1E18] max-w-3xl mx-auto"
        >
          {/* Blue Washi Tape on Corner like Page 8 */}
          <div className="absolute -top-4 -left-4 w-32 h-9 washi-tape-blue -rotate-6 shadow-md" />
          <div className="absolute -bottom-4 -right-4 w-32 h-9 washi-tape-blue 12 shadow-md" />

          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-white/20 pb-4">
              <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-rose-200">
                <Laptop className="w-4 h-4" />
                <span>Page 08 // Working Structure</span>
              </div>
              <span className="text-xs font-mono bg-white/20 px-3 py-1 rounded-full text-white">
                Delhi ➔ Mumbai (Remote Ready)
              </span>
            </div>

            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
              Seamless Remote Collaboration
            </h3>

            <p className="font-serif text-lg sm:text-xl text-rose-50 leading-relaxed">
              I’m currently based in Delhi while pursuing my Masters in Fashion Styling at Pearl Academy. I’d love to explore if this role could work on a remote basis, as I can comfortably manage:
            </p>

            {/* Remote Capabilities Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-sans text-sm pt-2">
              {[
                'Creative development & moodboards',
                'Comprehensive content strategy',
                'Brand communication & decks',
                'Campaign & deliverable tracking',
                'Shooting schedules & call sheets',
                'Fast follow-ups & pipeline management',
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-2 bg-black/20 p-2.5 rounded-lg">
                  <Check className="w-4 h-4 text-emerald-300 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <p className="font-serif italic text-base text-rose-200 pt-2 border-t border-white/15">
              "Since I’m unable to be based in Mumbai, I’d be happy to discuss a remote working structure that works for you and the requirements of the role."
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
