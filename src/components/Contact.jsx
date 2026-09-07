import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { FiSend, FiCheckCircle, FiAlertCircle, FiRefreshCw } from 'react-icons/fi';
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
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const validateForm = () => {
    const errs = {};
    if (!formState.name.trim() || formState.name.trim().length < 2) {
      errs.name = 'Please enter your name (at least 2 characters).';
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formState.email.trim() || !emailRegex.test(formState.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }

    if (!formState.message.trim() || formState.message.trim().length < 10) {
      errs.message = 'Please enter a message of at least 10 characters.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (errorMessage) {
      setErrorMessage('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('https://formsubmit.co/ajax/dikaim104@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formState.name.trim(),
          email: formState.email.trim(),
          message: formState.message.trim(),
          _subject: `Portfolio Contact: Message from ${formState.name.trim()}`,
          _template: 'table'
        })
      });

      const data = await response.json();

      if (response.ok && (data.success === 'true' || data.success === true)) {
        setIsSuccess(true);
        setFormState({ name: '', email: '', message: '' });
        setErrors({});
      } else {
        throw new Error(data.message || 'Unable to deliver message right now. Please try again or use direct email.');
      }
    } catch (err) {
      console.error('Contact Form Submission Error:', err);
      setErrorMessage(
        err.message || 'Network error occurred. Please check your connection or email directly.'
      );
    } finally {
      setIsSubmitting(false);
    }
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

      {/* Main Grid: Info & Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-5xl mx-auto">
        
        {/* Info Column */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={revealVariants}
          className="lg:col-span-5 flex flex-col justify-between space-y-8"
        >
          <div className="glass-panel p-8 rounded-3xl relative overflow-hidden flex-grow flex flex-col justify-center">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-accent-cyan to-transparent" />
            <h3 className="text-2xl font-heading font-bold text-white mb-4">Let's start a conversation.</h3>
            <p className="text-sm text-text-slate leading-relaxed mb-8 font-light">
              I am open to discuss frontend developer internship opportunities, collaborative projects, or general tech conversations. Feel free to reach out directly through email or social media!
            </p>
            
            {/* Direct Email Link */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center space-x-3.5 group">
              <div className="w-10 h-10 rounded-xl bg-primary-blue/10 border border-primary-blue/20 flex items-center justify-center text-primary-blue group-hover:text-accent-cyan transition-colors">
                <FaEnvelope size={16} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-semibold text-text-slate tracking-wider">Direct Email</span>
                <a 
                  href={`mailto:${heroData.socials.email}`}
                  className="text-sm font-medium text-white hover:text-accent-cyan transition-colors"
                >
                  {heroData.socials.email}
                </a>
              </div>
            </div>
          </div>

          {/* Socials Connection Card */}
          <div className="glass-panel p-6 rounded-3xl flex items-center justify-around border border-white/5">
            <a
              href={heroData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center space-y-1.5 group"
              aria-label="GitHub Profile"
            >
              <div className="w-12 h-12 rounded-2xl border border-white/5 bg-white/[0.02] flex items-center justify-center text-text-slate group-hover:text-white group-hover:border-accent-cyan/30 group-hover:bg-accent-cyan/10 transition-all duration-300">
                <FaGithub size={18} />
              </div>
              <span className="text-[11px] font-medium text-text-slate group-hover:text-white transition-colors">GitHub</span>
            </a>

            <a
              href={heroData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center space-y-1.5 group"
              aria-label="LinkedIn Profile"
            >
              <div className="w-12 h-12 rounded-2xl border border-white/5 bg-white/[0.02] flex items-center justify-center text-text-slate group-hover:text-white group-hover:border-primary-blue/30 group-hover:bg-primary-blue/10 transition-all duration-300">
                <FaLinkedinIn size={18} />
              </div>
              <span className="text-[11px] font-medium text-text-slate group-hover:text-white transition-colors">LinkedIn</span>
            </a>

            <a
              href={heroData.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center space-y-1.5 group"
              aria-label="Instagram Profile"
            >
              <div className="w-12 h-12 rounded-2xl border border-white/5 bg-white/[0.02] flex items-center justify-center text-text-slate group-hover:text-white group-hover:border-pink-500/30 group-hover:bg-pink-500/10 transition-all duration-300">
                <FaInstagram size={18} />
              </div>
              <span className="text-[11px] font-medium text-text-slate group-hover:text-white transition-colors">Instagram</span>
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
          <div className="glass-panel p-8 sm:p-10 rounded-3xl relative overflow-hidden h-full border border-white/5">
            <h3 className="text-xl font-heading font-bold text-white mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {/* Full Name Field */}
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="contact-name" className="text-xs font-semibold text-text-slate uppercase tracking-wider">
                  Your Name <span className="text-accent-cyan">*</span>
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="e.g. Dika"
                  className={`w-full text-sm rounded-xl px-4 py-3 bg-white/[0.03] border text-white outline-none placeholder:text-white/20 transition-all duration-200 focus:ring-1 ${
                    errors.name 
                      ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/30' 
                      : 'border-white/10 focus:border-primary-blue focus:ring-primary-blue'
                  }`}
                  aria-invalid={errors.name ? 'true' : 'false'}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <span id="name-error" className="text-xs text-red-400 font-light flex items-center space-x-1">
                    <FiAlertCircle size={12} className="inline mr-1 shrink-0" />
                    {errors.name}
                  </span>
                )}
              </div>

              {/* Email Address Field */}
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="contact-email" className="text-xs font-semibold text-text-slate uppercase tracking-wider">
                  Email Address <span className="text-accent-cyan">*</span>
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className={`w-full text-sm rounded-xl px-4 py-3 bg-white/[0.03] border text-white outline-none placeholder:text-white/20 transition-all duration-200 focus:ring-1 ${
                    errors.email 
                      ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/30' 
                      : 'border-white/10 focus:border-primary-blue focus:ring-primary-blue'
                  }`}
                  aria-invalid={errors.email ? 'true' : 'false'}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <span id="email-error" className="text-xs text-red-400 font-light flex items-center space-x-1">
                    <FiAlertCircle size={12} className="inline mr-1 shrink-0" />
                    {errors.email}
                  </span>
                )}
              </div>

              {/* Message Field */}
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="contact-message" className="text-xs font-semibold text-text-slate uppercase tracking-wider">
                  Message <span className="text-accent-cyan">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows="4"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className={`w-full text-sm rounded-xl px-4 py-3 bg-white/[0.03] border text-white outline-none placeholder:text-white/20 transition-all duration-200 resize-none focus:ring-1 ${
                    errors.message 
                      ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/30' 
                      : 'border-white/10 focus:border-primary-blue focus:ring-primary-blue'
                  }`}
                  aria-invalid={errors.message ? 'true' : 'false'}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && (
                  <span id="message-error" className="text-xs text-red-400 font-light flex items-center space-x-1">
                    <FiAlertCircle size={12} className="inline mr-1 shrink-0" />
                    {errors.message}
                  </span>
                )}
              </div>

              {/* Error Message Notification */}
              {errorMessage && (
                <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-xs text-red-300 flex items-start justify-between space-x-2">
                  <div className="flex items-start space-x-2">
                    <FiAlertCircle size={16} className="text-red-400 shrink-0 mt-0.5" />
                    <span>{errorMessage}</span>
                  </div>
                  <a 
                    href={`mailto:${heroData.socials.email}?subject=Portfolio%20Contact&body=${encodeURIComponent(formState.message)}`}
                    className="underline text-accent-cyan hover:text-white shrink-0 ml-2 font-medium"
                  >
                    Open Mail
                  </a>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-primary-blue to-accent-cyan text-white text-sm font-semibold hover:shadow-lg hover:shadow-primary-blue/20 transition-all duration-300 active:scale-98 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {isSubmitting ? (
                  <span className="flex items-center space-x-2">
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending Message...</span>
                  </span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <FiSend size={14} />
                  </>
                )}
              </button>
            </form>

            {/* Success Overlay Banner */}
            <AnimatePresence>
              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-surface-dark/95 backdrop-blur-md flex flex-col items-center justify-center text-center p-8 z-20"
                >
                  <div className="w-16 h-16 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 flex items-center justify-center text-accent-cyan mb-4">
                    <FiCheckCircle size={32} />
                  </div>
                  <h4 className="text-2xl font-heading font-bold text-white mb-2">Message Sent!</h4>
                  <p className="text-sm text-text-slate max-w-xs leading-relaxed font-light mb-6">
                    Thank you! Your message has been sent directly to <span className="text-white font-medium">dikaim104@gmail.com</span>. I will respond as soon as possible.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="px-6 py-2.5 rounded-xl border border-white/10 text-xs font-semibold text-white hover:bg-white/5 transition-colors flex items-center space-x-2"
                  >
                    <FiRefreshCw size={12} />
                    <span>Send Another Message</span>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
