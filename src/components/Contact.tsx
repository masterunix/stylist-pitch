'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Globe, Link, Mail, ExternalLink } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="connect" className="py-24 bg-white px-6 lg:px-12 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-4">
            Let's Create Something Beautiful Together
          </h2>
          <p className="text-stone-500 font-sans text-lg max-w-2xl mx-auto">
            I'm excited to explore this collaboration and see how we can elevate your brand through creative styling and strategic direction.
          </p>
        </motion.div>

        <div className="bg-stone-50 rounded-3xl p-8 md:p-12 shadow-sm border border-stone-100 mb-16 text-left">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-stone-700">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-white border border-stone-200 rounded-lg px-4 py-3 focus:outline-none focus:border-rose-200 focus:ring-1 focus:ring-rose-200 transition-all text-stone-800"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-stone-700">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-white border border-stone-200 rounded-lg px-4 py-3 focus:outline-none focus:border-rose-200 focus:ring-1 focus:ring-rose-200 transition-all text-stone-800"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-stone-700">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full bg-white border border-stone-200 rounded-lg px-4 py-3 focus:outline-none focus:border-rose-200 focus:ring-1 focus:ring-rose-200 transition-all text-stone-800 resize-none"
                    placeholder="Tell me about your vision..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-stone-900 text-white rounded-lg px-6 py-4 flex items-center justify-center gap-2 hover:bg-stone-800 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                    />
                  ) : (
                    <>
                      <span>Send Message</span>
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
                className="text-center py-12"
              >
                <div className="w-16 h-16 bg-rose-50 rounded-full flex items-center justify-center mx-auto mb-6 text-rose-400">
                  <Mail className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif text-stone-900 mb-2">Thank you!</h3>
                <p className="text-stone-500">I'll get back to you shortly.</p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 text-sm text-stone-400 hover:text-stone-600 underline underline-offset-4"
                >
                  Send another message
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center gap-6"
        >
          <a
            href="mailto:simonadhamija2004@gmail.com"
            className="text-stone-600 hover:text-stone-900 text-lg font-medium transition-colors font-serif italic"
          >
            simonadhamija2004@gmail.com
          </a>
          
          <div className="flex items-center gap-6">
            <a href="https://www.instagram.com/simm.png/" target="_blank" rel="noopener noreferrer" className="p-3 bg-stone-50 rounded-full text-stone-600 hover:text-rose-400 hover:bg-rose-50 transition-all group">
              <Globe className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/simona-dhamija-a51799264/" target="_blank" rel="noopener noreferrer" className="p-3 bg-stone-50 rounded-full text-stone-600 hover:text-blue-500 hover:bg-blue-50 transition-all">
              <Link className="w-5 h-5" />
            </a>
            <a href="https://www.behance.net/simonadhamija" target="_blank" rel="noopener noreferrer" className="p-3 bg-stone-50 rounded-full text-stone-600 hover:text-indigo-500 hover:bg-indigo-50 transition-all">
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
