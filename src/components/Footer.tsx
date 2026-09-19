'use client';

import { motion } from 'framer-motion';
import { Globe, Link, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-white border-t border-stone-100 py-8 px-6 lg:px-12"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-stone-500 text-sm font-sans">
          © {new Date().getFullYear()} Simona × Muskan
        </p>

        <div className="flex items-center gap-4">
          <a href="https://www.instagram.com/simm.png/" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-stone-800 transition-colors">
            <span className="sr-only">Instagram</span>
            <Globe className="w-4 h-4" />
          </a>
          <a href="https://www.linkedin.com/in/simona-dhamija-a51799264/" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-stone-800 transition-colors">
            <span className="sr-only">LinkedIn</span>
            <Link className="w-4 h-4" />
          </a>
          <a href="https://www.behance.net/simonadhamija" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-stone-800 transition-colors">
            <span className="sr-only">Behance</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <p className="text-stone-400 text-sm italic font-serif">
          Crafted with intention
        </p>
      </div>
    </motion.footer>
  );
}
