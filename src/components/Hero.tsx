'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Camera, Sparkles, RefreshCw, Heart, Eye } from 'lucide-react';
import Image from 'next/image';

const btsPhotos = [
  {
    src: '/assets/simona-camera.jpg',
    caption: 'Simona on Night Shoot — Creative Direction',
    tag: 'CREATIVE DIRECTOR',
    iso: 'ISO 800',
    shutter: '1/125s',
  },
  {
    src: '/assets/shoot-model-teal.jpg',
    caption: 'Lifestyle & Vibrant Movement Shoot',
    tag: 'LIFESTYLE FORMAT',
    iso: 'ISO 400',
    shutter: '1/250s',
  },
  {
    src: '/assets/shoot-model-orange.jpg',
    caption: 'High-Fashion Streetwear & Styling',
    tag: 'EDITORIAL STYLING',
    iso: 'ISO 200',
    shutter: '1/500s',
  },
];

export default function Hero() {
  const [photoIndex, setPhotoIndex] = useState(0);
  const currentPhoto = btsPhotos[photoIndex];

  const nextPhoto = () => {
    setPhotoIndex((prev) => (prev + 1) % btsPhotos.length);
  };

  return (
    <section className="relative min-h-screen bg-striped-wallpaper pt-28 pb-16 px-4 sm:px-6 lg:px-12 flex flex-col items-center justify-center overflow-hidden">
      {/* Background Ambience / Vignette */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/10 pointer-events-none" />

      {/* Floating Doodle Stars */}
      <div className="absolute top-24 left-6 sm:left-16 text-[#B51A1A] animate-pulse pointer-events-none select-none">
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      </div>
      <div className="absolute top-40 right-8 sm:right-20 text-[#B51A1A] animate-bounce pointer-events-none select-none opacity-80" style={{ animationDuration: '3s' }}>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      </div>

      <div className="max-w-6xl w-full mx-auto relative z-10 flex flex-col items-center">
        
        {/* Personalized Greeting Badge - Solves the mobile word-breaking issue completely */}
        <motion.div
          initial={{ opacity: 0, y: -20, rotate: -2 }}
          animate={{ opacity: 1, y: 0, rotate: -2 }}
          transition={{ duration: 0.6 }}
          className="mb-4 inline-flex items-center space-x-2 px-5 py-2 rounded-full bg-white/95 border-2 border-[#B51A1A] shadow-md transform hover:rotate-0 transition-transform"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#B51A1A] animate-ping" />
          <span className="font-serif italic font-bold text-lg sm:text-2xl text-[#B51A1A] tracking-wide whitespace-nowrap">
            Dear Muskan,
          </span>
          <span className="text-xs font-sans uppercase font-bold tracking-widest text-[#1C1917]/70 pl-2 border-l border-black/15">
            A Curated Pitch
          </span>
        </motion.div>

        {/* The Spiral Sketchbook Centerpiece */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, rotate: -1 }}
          animate={{ opacity: 1, scale: 1, rotate: -1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full bg-[#FCFBF9] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] border border-black/10 relative overflow-hidden my-4"
        >
          {/* Notebook Wire Spiral Overlay on the Left */}
          <div className="absolute top-0 left-0 bottom-0 w-8 sm:w-12 bg-gradient-to-r from-stone-200/60 to-transparent pointer-events-none flex flex-col justify-around py-4 pl-1 sm:pl-2">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="w-4 h-2 sm:w-6 sm:h-3 rounded-full bg-stone-700/80 shadow-inner border border-stone-800"
              />
            ))}
          </div>

          <div className="pl-6 sm:pl-8 md:pl-12">
            {/* Top Row: Pitch Title */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
              <div className="max-w-2xl">
                {/* Red Bold Headline like Page 1 of PDF */}
                <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold text-[#B51A1A] tracking-tight leading-[1.05] drop-shadow-sm">
                  Creative Management<br className="hidden sm:inline" />
                  <span className="text-[#8F1414] font-serif italic font-normal text-2xl sm:text-4xl md:text-5xl inline-block mr-2">&amp;</span>
                  Brand Strategy
                </h1>

                <p className="mt-4 text-sm sm:text-base md:text-lg font-serif text-[#1C1917]/85 max-w-xl leading-relaxed">
                  Elevating your creator career through structured creative direction, high-fashion styling, bespoke brand campaigns, and end-to-end shoot production.
                </p>
              </div>

              {/* Oval Sticker with Gingham Tape from PDF */}
              <div className="relative self-start md:self-auto shrink-0 transform rotate-3 hover:rotate-0 transition-transform">
                <div className="w-48 sm:w-56 md:w-64">
                  <Image
                    src="/assets/oval-sticker-tape.png"
                    alt="Content, Fashion, Shoots, Brand Partnerships, Events"
                    width={500}
                    height={200}
                    className="w-full h-auto drop-shadow-md"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Bottom Row: Interactive Camera Widget with LCD Screen */}
            <div className="mt-8 pt-6 border-t border-stone-200/80 flex flex-col lg:flex-row items-center justify-between gap-8">
              
              {/* Left Details / Value Pillars */}
              <div className="w-full lg:w-1/2 space-y-4 text-left">
                <div className="flex items-center space-x-2 text-xs uppercase font-bold tracking-widest text-[#B51A1A]">
                  <Sparkles className="w-4 h-4" />
                  <span>The Pitch Overview</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#1C1917] leading-snug">
                  "I see your content as much more than social media. Let's build an iconic personal brand."
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
                  Simona Dhamija is pitching directly to Muskan — bringing formal fashion styling training from Pearl Academy, film &amp; new media production from OP Jindal, and hands-on styling expertise to turn daily outfits into signature editorial formats.
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {['Jaipur Born', 'Delhi Based', 'Pearl Academy Masters', 'OP Jindal Film Grad', 'Remote Ready'].map((badge) => (
                    <span
                      key={badge}
                      className="px-3 py-1 rounded-full text-xs font-semibold bg-[#FAF7F5] border border-stone-300 text-stone-700 shadow-2xs"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: The Interactive Camera Device */}
              <div className="w-full lg:w-1/2 flex flex-col items-center">
                <div className="relative w-full max-w-md mx-auto aspect-[1529/828] select-none group">
                  {/* Photo shown inside the LCD Viewfinder */}
                  <div
                    className="absolute overflow-hidden rounded-xs bg-black"
                    style={{
                      left: '11%',
                      top: '6.2%',
                      width: '63.8%',
                      height: '86.8%',
                    }}
                  >
                    <Image
                      src={currentPhoto.src}
                      alt={currentPhoto.caption}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      priority
                    />

                    {/* Camera Viewfinder UI Overlay */}
                    <div className="absolute inset-0 p-2 sm:p-3 flex flex-col justify-between text-white font-mono text-[10px] sm:text-xs pointer-events-none">
                      {/* Top Bar */}
                      <div className="flex justify-between items-center bg-black/40 px-2 py-0.5 rounded-xs backdrop-blur-xs">
                        <div className="flex items-center space-x-1">
                          <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
                          <span className="text-red-500 font-bold">REC</span>
                        </div>
                        <span className="text-stone-300">4K • 60FPS</span>
                        <span>[ 100% ]</span>
                      </div>

                      {/* Viewfinder Crosshair */}
                      <div className="self-center my-auto w-8 h-8 border border-white/30 rounded-full flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-white/60 rounded-full" />
                      </div>

                      {/* Bottom Info Bar */}
                      <div className="flex justify-between items-center bg-black/50 px-2 py-1 rounded-xs backdrop-blur-xs">
                        <span className="text-amber-300 font-bold">{currentPhoto.tag}</span>
                        <div className="flex space-x-2 text-[9px] sm:text-[10px] text-stone-300">
                          <span>{currentPhoto.iso}</span>
                          <span>F/2.8</span>
                          <span>{currentPhoto.shutter}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* The Metallic Camera Body Shell Overlay */}
                  <Image
                    src="/assets/camera-transparent-screen.png"
                    alt="Vintage Camera Body"
                    fill
                    className="object-contain pointer-events-none z-10 drop-shadow-xl"
                    priority
                  />

                  {/* Interactive Tap-to-Switch Button on Camera Shutter / Dial */}
                  <button
                    onClick={nextPhoto}
                    aria-label="Switch Camera View"
                    className="absolute right-3 bottom-3 z-20 px-3 py-1.5 rounded-lg bg-black/80 hover:bg-[#B51A1A] text-white text-[11px] font-bold tracking-wider uppercase transition-colors shadow-md flex items-center space-x-1.5 active:scale-95"
                  >
                    <RefreshCw className="w-3 h-3 animate-spin" style={{ animationDuration: '6s' }} />
                    <span>Next BTS</span>
                  </button>
                </div>

                <div className="mt-2 text-center text-xs text-stone-500 font-sans italic">
                  {currentPhoto.caption} • Click 'Next BTS' to cycle shoot reels
                </div>
              </div>

            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.a
          href="#story"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="mt-6 flex flex-col items-center space-y-1 text-xs font-bold uppercase tracking-widest text-[#B51A1A] hover:text-[#8F1414] transition-colors"
        >
          <span>Turn the Page • Why I Want to Work with You</span>
          <ChevronDown className="w-5 h-5" />
        </motion.a>

      </div>
    </section>
  );
}
