import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { FiSend, FiCheckCircle } from 'react-icons/fi';
import { heroData } from '../data/portfolioData';

const revealVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 80, damping: 20 }
  }
};

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({ name: '', email: '', message: '' });
      // Reset success banner after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section 
      id="contact" 
      className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Section Header */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={revealVariants}
        className="text-center mb-16"
      >
        <span className="text-xs font-bold uppercase tracking-widest text-primary-blue mb-2 block font-heading">Get in Touch</span>
        <h2 className="text-3xl sm:text-5xl font-heading font-black text-white">Let's Connect</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-primary-blue to-accent-cyan mx-auto mt-4 rounded-full" />
      </motion.div>

      {/* Main Grid: Form & Info */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-5xl mx-auto">
        
        {/* Info Column */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={revealVariants}
          className="lg:col-span-5 flex flex-col justify-between space-y-8"
        >
          <div className="glass-panel p-8 rounded-2xl relative overflow-hidden flex-grow flex flex-col justify-center">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-accent-cyan to-transparent" />
            <h3 className="text-2xl font-heading font-bold text-white mb-4">Let's build something beautiful.</h3>
            <p className="text-sm text-text-slate leading-relaxed mb-8 font-light">
              I am open to talking about internships, junior roles, freelance collaborations, or just chatting about frontend development and design. Feel free to drop a message!
            </p>
            
            {/* Contact Email Link */}
            <div className="flex items-center space-x-3 mb-4 group">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-accent-cyan group-hover:bg-white/10 transition-colors">
                <FaEnvelope size={16} />
              </div>
              <a 
                href={`mailto:${heroData.socials.email}`}
                className="text-sm font-medium text-white hover:text-accent-cyan transition-colors cursor-none"
              >
                {heroData.socials.email}
              </a>
            </div>
          </div>

          {/* Socials card */}
          <div className="glass-panel p-6 rounded-2xl flex items-center justify-around">
            <a
              href={heroData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-white/5 bg-white/[0.02] flex items-center justify-center text-text-slate hover:text-white transition-all hover:scale-110 hover:border-white/15 cursor-none"
              aria-label="GitHub Profile"
            >
              <FaGithub size={18} />
            </a>
            <a
              href={heroData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-white/5 bg-white/[0.02] flex items-center justify-center text-text-slate hover:text-white transition-all hover:scale-110 hover:border-white/15 cursor-none"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedinIn size={18} />
            </a>
            <a
              href={heroData.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-white/5 bg-white/[0.02] flex items-center justify-center text-text-slate hover:text-white transition-all hover:scale-110 hover:border-white/15 cursor-none"
              aria-label="Instagram Profile"
            >
              <FaInstagram size={18} />
            </a>
          </div>
        </motion.div>

        {/* Form Column */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={revealVariants}
          className="lg:col-span-7"
        >
          <div className="glass-panel p-8 rounded-2xl relative overflow-hidden h-full">
            <h3 className="text-xl font-heading font-bold text-white mb-6">Send Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Input */}
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="name" className="text-xs font-semibold text-text-slate uppercase tracking-wider">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full text-sm rounded-xl px-4 py-3 bg-white/[0.03] border border-white/5 focus:border-primary-blue focus:ring-1 focus:ring-primary-blue text-white outline-none placeholder:text-white/20 transition-all duration-300 cursor-none"
                />
              </div>

              {/* Email Input */}
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="email" className="text-xs font-semibold text-text-slate uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full text-sm rounded-xl px-4 py-3 bg-white/[0.03] border border-white/5 focus:border-primary-blue focus:ring-1 focus:ring-primary-blue text-white outline-none placeholder:text-white/20 transition-all duration-300 cursor-none"
                />
              </div>

              {/* Message Input */}
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="message" className="text-xs font-semibold text-text-slate uppercase tracking-wider">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Hey, let's talk about..."
                  className="w-full text-sm rounded-xl px-4 py-3 bg-white/[0.03] border border-white/5 focus:border-primary-blue focus:ring-1 focus:ring-primary-blue text-white outline-none placeholder:text-white/20 transition-all duration-300 resize-none cursor-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-primary-blue to-accent-cyan text-white text-sm font-semibold hover:shadow-lg hover:shadow-primary-blue/20 transition-all duration-300 active:scale-98 flex items-center justify-center space-x-2 disabled:opacity-50 cursor-none"
              >
                {isSubmitting ? (
                  <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Send Message</span>
                    <FiSend size={14} />
                  </>
                )}
              </button>
            </form>

            {/* Success Banner */}
            <AnimatePresence>
              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  className="absolute inset-0 bg-surface-dark/95 flex flex-col items-center justify-center text-center p-6"
                >
                  <FiCheckCircle size={56} className="text-accent-cyan mb-4 animate-bounce" />
                  <h4 className="text-xl font-heading font-bold text-white mb-2">Message Sent!</h4>
                  <p className="text-sm text-text-slate max-w-xs leading-relaxed font-light">
                    Thank you. Your message has been received successfully. I'll get back to you shortly.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
