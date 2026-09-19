'use client';

import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, Sparkles, Camera } from 'lucide-react';

const navLinks = [
  { name: 'Why You', href: '#story' },
  { name: 'Capabilities', href: '#table' },
  { name: 'Synergy', href: '#synergy' },
  { name: 'Opportunity', href: '#opportunity' },
  { name: 'Execution', href: '#execution' },
  { name: 'My Work', href: '#work' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 40);
  });

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'py-3 bg-[#FAF7F5]/90 backdrop-blur-md border-b border-[#B51A1A]/15 shadow-sm' 
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between">
            {/* Logo: Simona x Muskan */}
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group flex items-center space-x-2 text-xl sm:text-2xl font-display font-extrabold tracking-tight text-[#1C1917]"
            >
              <span className="bg-[#B51A1A] text-white px-2.5 py-1 rounded-md text-base sm:text-lg -rotate-3 group-hover:rotate-0 transition-transform">
                SIMONA
              </span>
              <span className="text-[#B51A1A] font-bold text-lg">×</span>
              <span className="underline decoration-[#B51A1A] decoration-wavy underline-offset-4">
                MUSKAN
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-1 sm:space-x-2 bg-white/75 backdrop-blur-md px-4 py-1.5 rounded-full border border-black/5 shadow-sm">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="px-3 py-1 text-xs uppercase tracking-widest font-semibold text-[#1C1917]/80 hover:text-[#B51A1A] hover:bg-[#F2D6D0]/30 rounded-full transition-all"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Right Action: Let's Connect */}
            <div className="hidden sm:flex items-center space-x-3">
              <a
                href="#connect"
                onClick={(e) => handleScroll(e, '#connect')}
                className="relative inline-flex items-center space-x-2 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#B51A1A] hover:bg-[#8F1414] shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Let's Collaborate</span>
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              aria-label="Toggle Menu"
              className="lg:hidden p-2 rounded-lg bg-white/80 border border-black/10 text-[#1C1917] hover:text-[#B51A1A]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Fullscreen Menu */}
      <motion.div
        initial={false}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          pointerEvents: isMobileMenuOpen ? 'auto' : 'none'
        }}
        className="fixed inset-0 z-40 bg-[#FAF7F5]/98 backdrop-blur-xl flex flex-col justify-center px-8 lg:hidden"
      >
        <div className="space-y-6 max-w-sm mx-auto w-full text-center">
          <div className="text-sm uppercase tracking-widest text-[#B51A1A] font-bold">
            Simona Dhamija Pitch Deck
          </div>
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              initial={{ opacity: 0, y: 15 }}
              animate={{ 
                opacity: isMobileMenuOpen ? 1 : 0,
                y: isMobileMenuOpen ? 0 : 15 
              }}
              transition={{ delay: isMobileMenuOpen ? i * 0.08 : 0 }}
              className="block text-2xl font-display font-bold text-[#1C1917] hover:text-[#B51A1A] transition-colors py-2 border-b border-black/5"
            >
              {link.name}
            </motion.a>
          ))}
          <a
            href="#connect"
            onClick={(e) => handleScroll(e, '#connect')}
            className="mt-6 inline-flex items-center justify-center w-full px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider text-white bg-[#B51A1A]"
          >
            Let's Collaborate
          </a>
        </div>
      </motion.div>
    </>
  );
}
