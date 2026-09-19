'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { Sparkles, Heart, GraduationCap, MapPin, Award } from 'lucide-react';

export default function PitchVision() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="story"
      ref={ref}
      className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-12 bg-[#B51A1A] overflow-hidden flex items-center justify-center"
    >
      {/* Hand-Drawn Fashion Doodles Pattern from Page 2 of PDF */}
      <div className="absolute inset-0 opacity-15 pointer-events-none mix-blend-overlay">
        <Image
          src="/assets/fashion-doodles.png"
          alt="Fashion Illustrations Pattern"
          fill
          className="object-cover"
        />
      </div>

      {/* Decorative Washi Tapes on Edges */}
      <div className="absolute top-8 left-10 w-28 h-8 washi-tape-purple rotate-12 pointer-events-none z-20" />
      <div className="absolute bottom-8 right-12 w-32 h-8 washi-tape-blue -rotate-6 pointer-events-none z-20" />

      <div className="max-w-4xl w-full mx-auto relative z-10">
        
        {/* Tilted Big Bold Headline from Page 2 of PDF */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotate: -2 }}
          animate={isInView ? { opacity: 1, y: 0, rotate: -2 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <div className="inline-block relative">
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold text-white tracking-tight uppercase pdf-white-title-shadow transform -rotate-1">
              Why I Want to<br />
              <span className="text-[#FFF275] drop-shadow-md">Work With You</span>
            </h2>
            {/* Page marker */}
            <span className="absolute -top-6 -right-6 sm:-right-10 bg-white text-[#B51A1A] font-bold text-xs px-3 py-1 rounded-full shadow-md rotate-12">
              02 // PITCH
            </span>
          </div>
        </motion.div>

        {/* Floating Crumpled White Paper Sheet */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative bg-[#FAF8F5] rounded-xl sm:rounded-2xl p-8 sm:p-12 md:p-16 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] border border-stone-200 overflow-hidden"
        >
          {/* Subtle Crumpled Paper Texture Overlay */}
          <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-multiply">
            <Image
              src="/assets/crumpled-white-paper.jpg"
              alt="Crumpled paper texture"
              fill
              className="object-cover"
            />
          </div>

          {/* Paper Tape Strips at Corners */}
          <div className="absolute -top-3 left-10 w-24 h-7 washi-tape-gingham rotate-3 shadow-sm" />
          <div className="absolute -bottom-3 right-10 w-24 h-7 washi-tape-blue -rotate-3 shadow-sm" />

          {/* Letter / Pitch Body Copy */}
          <div className="relative z-10 space-y-6 text-[#1C1917] font-serif text-lg sm:text-xl md:text-2xl leading-relaxed text-center sm:text-left">
            <p className="font-sans text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#B51A1A] mb-4">
              A Personal Note From Simona
            </p>

            <p className="first-letter:text-5xl first-letter:font-display first-letter:font-extrabold first-letter:text-[#B51A1A] first-letter:float-left first-letter:mr-3 first-letter:leading-none">
              I’m <strong className="font-bold text-[#B51A1A]">Simona</strong>, 22, originally from Jaipur and currently based in Delhi, pursuing my Masters in Fashion Styling at <strong className="underline decoration-[#B51A1A]">Pearl Academy</strong>. I graduated in Film &amp; New Media from <strong className="underline decoration-[#B51A1A]">OP Jindal Global University</strong> and have experience across styling, creative direction, content, social media and shoot production.
            </p>

            <p>
              I’ve watched your journey since school, and seeing how you’ve grown your content into a full-fledged creator career is what made me want to reach out.
            </p>

            <blockquote className="my-6 p-6 rounded-xl bg-[#F2D6D0]/35 border-l-4 border-[#B51A1A] text-left italic text-xl sm:text-2xl font-serif text-[#5C1D24] leading-snug">
              "I see your content as much more than social media. With your mix of fashion, beauty, lifestyle and personality-led content, I feel there’s a lot of potential to build an even stronger personal brand around what you already do best."
            </blockquote>

            <p className="font-medium text-stone-900">
              I’d love to be the person behind the ideas, opportunities, shoots and brand collaborations that help take it further.
            </p>

            {/* Micro Credential Badges */}
            <div className="pt-6 border-t border-stone-200 flex flex-wrap items-center justify-center sm:justify-start gap-3 text-xs font-sans font-semibold text-stone-700">
              <span className="flex items-center space-x-1.5 bg-white px-3 py-1.5 rounded-full border border-stone-300 shadow-2xs">
                <MapPin className="w-3.5 h-3.5 text-[#B51A1A]" />
                <span>Jaipur ➔ Delhi</span>
              </span>
              <span className="flex items-center space-x-1.5 bg-white px-3 py-1.5 rounded-full border border-stone-300 shadow-2xs">
                <GraduationCap className="w-3.5 h-3.5 text-[#B51A1A]" />
                <span>Masters in Fashion Styling (Pearl Academy)</span>
              </span>
              <span className="flex items-center space-x-1.5 bg-white px-3 py-1.5 rounded-full border border-stone-300 shadow-2xs">
                <Award className="w-3.5 h-3.5 text-[#B51A1A]" />
                <span>Film &amp; New Media (OP Jindal)</span>
              </span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
