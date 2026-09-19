'use client';

import React from 'react';
import Image from 'next/image';
import { Mail, Phone, ExternalLink, ArrowRight, Sparkles, MapPin } from 'lucide-react';

const portfolioLinks = [
  {
    platform: 'Behance',
    handle: 'behance.net/simonadhamija',
    url: 'https://www.behance.net/simonadhamija',
    desc: 'Editorial fashion styling, concept moodboards & full shoot productions',
    badge: 'PORTFOLIO',
    color: 'hover:border-blue-300 hover:bg-blue-50/60',
  },
  {
    platform: 'Instagram',
    handle: '@simm.png',
    url: 'https://www.instagram.com/simm.png/',
    desc: 'Visual diary, day-to-day fashion POV & creative styling curations',
    badge: 'DAILY CURATION',
    color: 'hover:border-rose-300 hover:bg-rose-50/60',
  },
  {
    platform: 'LinkedIn',
    handle: 'simona-dhamija',
    url: 'https://www.linkedin.com/in/simona-dhamija-a51799264/',
    desc: 'Film & Media degree from OP Jindal, Pearl Academy styling credentials',
    badge: 'CREDENTIALS',
    color: 'hover:border-sky-300 hover:bg-sky-50/60',
  },
];

export default function Contact() {
  return (
    <section
      id="work"
      className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-12 bg-[#FAF7F5] overflow-hidden flex flex-col justify-center"
    >
      {/* Lined Notebook Paper Background from Page 9 of PDF */}
      <div className="absolute inset-0 opacity-25 pointer-events-none mix-blend-multiply">
        <Image
          src="/assets/lined-paper-wide.jpg"
          alt="Lined paper texture"
          fill
          className="object-cover"
        />
      </div>

      <div className="max-w-5xl w-full mx-auto relative z-10 space-y-12">
        
        {/* Header from Page 9: "my work-" in chunky red */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b-2 border-[#B51A1A] pb-4">
          <div>
            <span className="text-xs uppercase font-bold tracking-widest text-stone-500 block mb-1">
              Page 09 // Live Archives &amp; Direct Reach
            </span>
            <h2 className="text-5xl sm:text-7xl font-display font-extrabold text-[#B51A1A] tracking-tight">
              my work-
            </h2>
          </div>
          <p className="font-serif italic text-stone-600 text-sm sm:text-base mt-2 sm:mt-0">
            Explore live styling portfolios, creative projects &amp; moodboards
          </p>
        </div>

        {/* 3 Interactive Portfolio Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioLinks.map((item) => (
            <a
              key={item.platform}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group bg-white/95 backdrop-blur-md rounded-2xl p-7 border-2 border-stone-200 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${item.color} flex flex-col justify-between`}
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] font-mono font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-stone-100 text-stone-700">
                    {item.badge}
                  </span>
                  <ExternalLink className="w-4 h-4 text-stone-400 group-hover:text-[#B51A1A] transition-colors" />
                </div>

                <h3 className="font-display font-extrabold text-2xl text-[#1C1917] mb-1 group-hover:text-[#B51A1A] transition-colors">
                  {item.platform}
                </h3>
                <p className="font-mono text-xs text-[#B51A1A] font-semibold mb-3">
                  {item.handle}
                </p>
                <p className="font-serif text-sm text-stone-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center space-x-1.5 text-xs font-bold text-stone-800 group-hover:text-[#B51A1A]">
                <span>Open in New Tab</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          ))}
        </div>

        {/* Direct Contact Card (Email & Phone as featured on Page 9) */}
        <div
          id="connect"
          className="relative bg-white/95 backdrop-blur-md rounded-3xl p-8 sm:p-12 border-2 border-stone-200 shadow-lg overflow-hidden"
        >
          {/* Decorative Washi Tape */}
          <div className="absolute -top-3.5 left-12 w-32 h-7 washi-tape-gingham rotate-1 shadow-xs" />
          <div className="absolute -bottom-3.5 right-12 w-28 h-7 washi-tape-purple -rotate-2 shadow-xs" />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-lg space-y-2">
              <div className="flex items-center space-x-2 text-xs uppercase font-bold tracking-widest text-[#B51A1A]">
                <Sparkles className="w-4 h-4" />
                <span>Let's Connect</span>
              </div>
              <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-[#1C1917]">
                Ready to talk next steps?
              </h3>
              <p className="font-serif text-stone-600 text-base leading-relaxed">
                Reach out directly via email, phone, or WhatsApp to set up a chat, discuss upcoming shoot concepts, or review moodboards.
              </p>
            </div>

            {/* Direct Channel Buttons */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-4 shrink-0">
              <a
                href="mailto:simonadhamija2004@gmail.com"
                className="flex items-center space-x-3.5 p-4 rounded-2xl bg-[#FAF8F5] border-2 border-stone-200 hover:border-[#B51A1A] hover:bg-rose-50/50 transition-all group shadow-xs"
              >
                <div className="p-3 rounded-xl bg-[#B51A1A] text-white group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <span className="text-[10px] font-mono font-bold text-stone-400 uppercase tracking-wider block">
                    Email
                  </span>
                  <span className="font-sans font-semibold text-stone-900 text-sm sm:text-base">
                    simonadhamija2004@gmail.com
                  </span>
                </div>
              </a>

              <a
                href="tel:+918952945525"
                className="flex items-center space-x-3.5 p-4 rounded-2xl bg-[#FAF8F5] border-2 border-stone-200 hover:border-[#B51A1A] hover:bg-rose-50/50 transition-all group shadow-xs"
              >
                <div className="p-3 rounded-xl bg-emerald-600 text-white group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <span className="text-[10px] font-mono font-bold text-stone-400 uppercase tracking-wider block">
                    Phone / WhatsApp
                  </span>
                  <span className="font-sans font-semibold text-stone-900 text-sm sm:text-base">
                    +91 8952945525
                  </span>
                </div>
              </a>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-stone-100 flex flex-wrap items-center justify-between gap-4 text-xs font-serif text-stone-500">
            <span className="flex items-center space-x-1">
              <MapPin className="w-3.5 h-3.5 text-[#B51A1A]" />
              <span>Based in Delhi NCR • Masters in Fashion Styling (Pearl Academy)</span>
            </span>
            <span>Available for remote creative management &amp; travel shoots worldwide.</span>
          </div>
        </div>

      </div>
    </section>
  );
}
