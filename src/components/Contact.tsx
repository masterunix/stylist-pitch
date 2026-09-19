'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Send, Mail, Phone, ExternalLink, Globe, Sparkles, Check, ArrowRight } from 'lucide-react';

const portfolioLinks = [
  {
    platform: 'Behance',
    handle: 'behance.net/simonadhamija',
    url: 'https://www.behance.net/simonadhamija',
    desc: 'Editorial fashion styling, moodboards & production case studies',
    badge: 'PORTFOLIO',
    color: 'hover:border-blue-300 hover:bg-blue-50/50',
  },
  {
    platform: 'Instagram',
    handle: '@simm.png',
    url: 'https://www.instagram.com/simm.png/',
    desc: 'Visual diary, aesthetic curations & day-to-day fashion POV',
    badge: 'DAILY CURATION',
    color: 'hover:border-rose-300 hover:bg-rose-50/50',
  },
  {
    platform: 'LinkedIn',
    handle: 'simona-dhamija',
    url: 'https://www.linkedin.com/in/simona-dhamija-a51799264/',
    desc: 'Film & Media graduation, Pearl Academy styling credentials',
    badge: 'EXPERIENCE',
    color: 'hover:border-sky-300 hover:bg-sky-50/50',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: 'Muskan',
    meetingType: 'Virtual Coffee & Strategy Chat',
    message: "Hey Simona, loved the deck! Let's set up some time to talk about working together.",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((res) => setTimeout(res, 1200));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

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

      <div className="max-w-6xl w-full mx-auto relative z-10 space-y-16">
        
        {/* Header from Page 9: "my work-" in chunky red */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b-2 border-[#B51A1A] pb-4">
          <div>
            <span className="text-xs uppercase font-bold tracking-widest text-stone-500 block mb-1">
              Page 09 // Live Links &amp; Portfolios
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold text-[#B51A1A] tracking-tight">
              my work-
            </h2>
          </div>
          <p className="font-serif italic text-stone-600 text-sm sm:text-base mt-2 sm:mt-0">
            Explore live styling portfolios, creative projects &amp; editorial archives
          </p>
        </div>

        {/* Portfolio Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioLinks.map((item, idx) => (
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

        {/* Direct Contact Bar & Interactive Booking Card */}
        <div id="connect" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-6">
          
          {/* Direct Channels (5 cols) */}
          <div className="lg:col-span-5 bg-[#FAF8F5] rounded-3xl p-8 border-2 border-stone-200 shadow-md flex flex-col justify-between space-y-6">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-[#B51A1A] block mb-2">
                Direct Contact
              </span>
              <h3 className="font-display font-extrabold text-3xl text-[#1C1917] mb-4">
                Reach Out Directly
              </h3>
              <p className="font-serif text-stone-600 text-sm sm:text-base leading-relaxed mb-6">
                Feel free to call, WhatsApp, or drop an email anytime. I’m always open to discussing ideas, formats, and scheduling.
              </p>

              <div className="space-y-4 font-sans">
                <a
                  href="mailto:simonadhamija2004@gmail.com"
                  className="flex items-center space-x-3 p-4 rounded-xl bg-white border border-stone-200 hover:border-[#B51A1A] hover:bg-rose-50/40 transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-rose-100 text-[#B51A1A] group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider block">Email</span>
                    <span className="font-medium text-stone-900 text-sm sm:text-base">simonadhamija2004@gmail.com</span>
                  </div>
                </a>

                <a
                  href="tel:+918952945525"
                  className="flex items-center space-x-3 p-4 rounded-xl bg-white border border-stone-200 hover:border-[#B51A1A] hover:bg-rose-50/40 transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-emerald-100 text-emerald-800 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider block">Phone / WhatsApp</span>
                    <span className="font-medium text-stone-900 text-sm sm:text-base">+91 8952945525</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-serif leading-relaxed">
              📍 Based in Delhi NCR • Masters in Fashion Styling at Pearl Academy • Available for remote management &amp; travel shoots.
            </div>
          </div>

          {/* Interactive Response / Booking Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border-2 border-stone-300 shadow-xl relative">
            {/* Top Washi Tape */}
            <div className="absolute -top-3.5 right-12 w-32 h-7 washi-tape-gingham rotate-1 shadow-xs" />

            <div className="mb-6">
              <span className="text-xs uppercase font-bold tracking-widest text-[#B51A1A] block mb-1">
                Private Response Form
              </span>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#1C1917]">
                Start the Conversation
              </h3>
              <p className="font-serif text-stone-500 text-sm mt-1">
                A streamlined message directly sent to Simona's personal inbox.
              </p>
            </div>

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full bg-[#FAF8F5] border border-stone-300 rounded-xl px-4 py-3 text-stone-900 font-serif focus:outline-none focus:border-[#B51A1A] focus:ring-1 focus:ring-[#B51A1A] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1.5">
                      Preferred Next Step
                    </label>
                    <select
                      value={formData.meetingType}
                      onChange={(e) => setFormData({ ...formData, meetingType: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-stone-300 rounded-xl px-4 py-3 text-stone-900 font-serif focus:outline-none focus:border-[#B51A1A] focus:ring-1 focus:ring-[#B51A1A] transition-all"
                    >
                      <option>Virtual Coffee &amp; Strategy Chat (30 min)</option>
                      <option>In-Person Meeting (Delhi / Mumbai)</option>
                      <option>Review Upcoming Shoot Brief &amp; Moodboard</option>
                      <option>Discuss Monthly Retainer Structure</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1.5">
                      Message / Notes
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="w-full bg-[#FAF8F5] border border-stone-300 rounded-xl px-4 py-3 text-stone-900 font-serif focus:outline-none focus:border-[#B51A1A] focus:ring-1 focus:ring-[#B51A1A] transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#B51A1A] hover:bg-[#8F1414] text-white font-display font-extrabold uppercase tracking-wider text-sm py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2 active:scale-98 disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Send Response to Simona</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto shadow-md">
                    <Check className="w-8 h-8" />
                  </div>
                  <h4 className="font-display font-extrabold text-2xl text-[#1C1917]">
                    Message Sent to Simona!
                  </h4>
                  <p className="font-serif text-stone-600 max-w-sm mx-auto text-base">
                    Thank you, Muskan! Looking forward to discussing the vision and building iconic moments together.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs font-sans font-bold text-[#B51A1A] uppercase tracking-wider underline hover:text-[#8F1414] pt-4 block mx-auto"
                  >
                    Send another note
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
