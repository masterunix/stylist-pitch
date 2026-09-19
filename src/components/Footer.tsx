'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Sparkles, Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-striped-wallpaper pt-20 pb-12 px-4 sm:px-6 lg:px-12 overflow-hidden flex flex-col items-center">
      <div className="max-w-4xl w-full mx-auto relative z-10 flex flex-col items-center">
        
        {/* Page 10: The Cork Board with "thankyou." and Pink Gem Flower */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, rotate: -1.5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: -1.5 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full aspect-[3103/1700] max-w-2xl mx-auto drop-shadow-[0_25px_35px_rgba(0,0,0,0.3)] mb-12 select-none"
        >
          {/* Corkboard Background Frame */}
          <Image
            src="/assets/cork-board.png"
            alt="Wooden Framed Corkboard"
            fill
            className="object-contain"
          />

          {/* Pink Crystal Gem Flower Sticker from Page 10 */}
          <div className="absolute top-[12%] right-[14%] w-14 h-14 sm:w-20 sm:h-20 z-20 pointer-events-none drop-shadow-lg transform rotate-12 animate-pulse" style={{ animationDuration: '4s' }}>
            <Image
              src="/assets/pink-gem-flower.png"
              alt="Pink Gem Crystal Flower"
              width={160}
              height={160}
              className="w-full h-auto"
            />
          </div>

          {/* Bold White Lowercase "thankyou." text */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <h2 className="font-display font-black text-5xl sm:text-7xl md:text-8xl text-white tracking-tight pdf-title-shadow transform -rotate-1">
              thankyou.
            </h2>
          </div>
        </motion.div>

        {/* Closing Signature Card */}
        <div className="bg-white/95 backdrop-blur-md rounded-2xl px-8 py-6 border border-black/10 shadow-lg text-center max-w-lg w-full flex flex-col items-center space-y-3">
          <div className="flex items-center space-x-2 text-xs uppercase font-bold tracking-widest text-[#B51A1A]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Simona × Muskan</span>
            <Sparkles className="w-3.5 h-3.5" />
          </div>

          <p className="font-serif italic text-stone-700 text-sm sm:text-base">
            "Looking forward to creating unforgettable creative and fashion moments together."
          </p>

          <div className="pt-2 flex items-center justify-between w-full text-xs text-stone-500 font-mono border-t border-stone-100">
            <span>© 2024 Simona Dhamija</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center space-x-1 text-[#B51A1A] font-bold hover:underline"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
