'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { ArrowDown, Layers, CheckCircle } from 'lucide-react';

const workflows = [
  {
    title: 'BRAND APPROACHES',
    tagline: 'Inbound & Outbound Partnerships',
    steps: [
      'Review brief & brand alignment',
      'Assess brand fit & fee negotiation',
      'Develop authentic native concept',
      'Communicate & liaison with brand team',
      'Track deliverables & proof of performance',
    ],
  },
  {
    title: 'SHOOT PRODUCTION',
    tagline: 'From Moodboard to Final Wrap',
    steps: [
      'Creative concept & visual narrative',
      'Curated moodboard & color palettes',
      'Fashion styling & garment pulls',
      'Location scouting & venue booking',
      'Production team (hair, makeup, photo)',
      'Call sheet & shooting schedule',
      'On-set shoot direction',
    ],
  },
  {
    title: 'CONTENT PIPELINE',
    tagline: 'Always-On Organic Cadence',
    steps: [
      'Original content ideas & format testing',
      'Episodic series development',
      'Monthly editorial calendar',
      'Trend research & viral sound tracking',
      'Creative direction on edits & covers',
      'Final review & performance analytics',
    ],
  },
  {
    title: 'EVENTS & OFFLINE',
    tagline: 'Industry Visibility & Red Carpets',
    steps: [
      'High-profile event opportunities',
      'RSVP & guest list coordination',
      'Event look styling & fittings',
      'Scheduling & transit logistics',
      'On-ground content capture',
      'Post-event follow-up & PR seeding',
    ],
  },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="execution"
      ref={ref}
      className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-12 bg-[#F6F2EA] overflow-hidden flex items-center justify-center"
    >
      {/* Vintage Aged Paper Texture Background from Page 6 of PDF */}
      <div className="absolute inset-0 opacity-35 pointer-events-none mix-blend-multiply">
        <Image
          src="/assets/vintage-paper.jpg"
          alt="Vintage aged paper texture"
          fill
          className="object-cover"
        />
      </div>

      <div className="max-w-7xl w-full mx-auto relative z-10">
        
        {/* Header from Page 6 */}
        <div className="text-center mb-16">
          <div className="inline-block relative">
            <span className="text-xs uppercase font-bold tracking-widest text-[#B51A1A] block mb-2">
              06 // Step-by-Step Architecture
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold text-[#B51A1A] tracking-tight uppercase pdf-title-shadow">
              From Idea to Execution
            </h2>
            <div className="mt-3 inline-block px-4 py-1 rounded-md bg-[#1C1917] text-[#FFF275] font-display font-bold text-xs uppercase tracking-widest -rotate-2">
              For Example —
            </div>
          </div>
          <p className="mt-4 text-stone-700 font-serif text-base sm:text-lg max-w-xl mx-auto">
            A battle-tested operational pipeline that removes every logistical burden from your plate while safeguarding your authentic creative voice.
          </p>
        </div>

        {/* 4 Terracotta Workflow Blocks matching Page 6 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {workflows.map((flow, idx) => (
            <motion.div
              key={flow.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-[#9B2C24] text-white rounded-2xl p-6 sm:p-7 shadow-xl border border-[#7A1E18] flex flex-col justify-between relative group hover:-translate-y-2 transition-all duration-300"
            >
              {/* Top Washi Tape Corner */}
              <div className="absolute -top-3 left-6 w-20 h-6 washi-tape-purple -rotate-3 opacity-90" />

              <div>
                {/* Header */}
                <div className="text-center pb-5 mb-5 border-b border-white/20">
                  <h3 className="font-display font-extrabold text-xl tracking-wider uppercase text-white mb-1">
                    {flow.title}
                  </h3>
                  <p className="text-[11px] font-sans text-rose-200 uppercase tracking-widest">
                    {flow.tagline}
                  </p>
                  <div className="flex justify-center mt-3 text-white/70 group-hover:text-white group-hover:translate-y-1 transition-all">
                    <ArrowDown className="w-5 h-5 animate-bounce" style={{ animationDuration: '2s' }} />
                  </div>
                </div>

                {/* Vertical Process Steps */}
                <ul className="space-y-3 font-serif text-sm sm:text-base leading-snug">
                  {flow.steps.map((step, sIdx) => (
                    <li
                      key={sIdx}
                      className="flex items-start space-x-2.5 p-2 rounded-lg bg-black/10 hover:bg-black/20 transition-colors"
                    >
                      <span className="font-mono text-xs text-rose-200 font-bold shrink-0 mt-0.5">
                        {(sIdx + 1).toString().padStart(2, '0')}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer Indicator */}
              <div className="mt-6 pt-4 border-t border-white/15 flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-rose-200">
                <span>Phase {idx + 1}</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
