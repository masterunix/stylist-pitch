'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const tags = [
  { label: 'Fashion', top: '15%', left: '10%', delay: 0.2 },
  { label: 'Beauty', top: '25%', right: '15%', delay: 0.4 },
  { label: 'Lifestyle', bottom: '30%', left: '15%', delay: 0.6 },
  { label: 'Creative Direction', top: '45%', right: '10%', delay: 0.8 },
  { label: 'Brand Strategy', bottom: '20%', right: '25%', delay: 1.0 },
];

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  const headline = "Dear Muskan,";

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#FAF7F5] overflow-hidden px-6 lg:px-12 pt-20">
      {/* Decorative dot grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#1C1917 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Floating Tags */}
      {tags.map((tag, i) => (
        <motion.div
          key={tag.label}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5 + tag.delay, duration: 1 }}
          className="absolute hidden md:block"
          style={{ 
            top: tag.top, 
            left: tag.left, 
            right: tag.right, 
            bottom: tag.bottom 
          }}
        >
          <motion.div
            animate={{ 
              y: [0, -10, 0],
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              repeatType: 'reverse',
              ease: 'easeInOut',
              delay: tag.delay
            }}
            className="px-4 py-2 border border-[#1C1917]/10 rounded-full text-xs uppercase tracking-widest text-[#1C1917]/60 bg-white/50 backdrop-blur-sm"
          >
            {tag.label}
          </motion.div>
        </motion.div>
      ))}

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        <motion.div variants={itemVariants} className="mb-6 flex items-center justify-center space-x-4">
          <div className="h-[1px] w-12 bg-[#F2D6D0]" />
          <p className="text-xs md:text-sm uppercase tracking-[0.3em] font-sans text-[#1C1917]/70">
            A Creative Vision for Your Brand
          </p>
          <div className="h-[1px] w-12 bg-[#F2D6D0]" />
        </motion.div>

        <h1 className="text-6xl md:text-8xl font-serif text-[#1C1917] mb-10 tracking-tight flex justify-center flex-wrap gap-x-2 md:gap-x-4">
          {headline.split('').map((char, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block"
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </h1>

        <motion.p 
          variants={itemVariants}
          className="text-lg md:text-xl text-[#1C1917]/80 max-w-2xl mx-auto leading-relaxed font-sans font-light"
        >
          I see your content as much more than social media. With your mix of fashion, beauty, lifestyle and personality-led content, there's extraordinary potential to build an even stronger personal brand around what you already do best.
        </motion.p>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer"
        onClick={() => {
          const nextSection = document.getElementById('vision') || document.querySelector('section:nth-of-type(2)');
          if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
          }
        }}
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-[#1C1917]/50 mb-3">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="text-[#1C1917]/50" size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
