import { motion } from 'framer-motion';
import { aboutData } from '../data/portfolioData';
import { FiCheckCircle, FiLayout, FiSmartphone, FiFigma } from 'react-icons/fi';

const revealVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 60, damping: 18, duration: 0.6 }
  }
};

export default function About() {
  return (
    <section 
      id="about" 
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
        <h2 className="text-3xl sm:text-5xl font-heading font-black text-white">About Me</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-primary-blue to-accent-cyan mx-auto mt-4 rounded-full" />
      </motion.div>

      {/* Balanced Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        
        {/* Bento Box 1: Introduction Bio (Spans 2 cols on lg) */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={revealVariants}
          className="lg:col-span-2 glass-panel p-8 sm:p-10 rounded-3xl flex flex-col justify-between relative overflow-hidden group hover:border-white/10 transition-colors duration-300"
        >
          <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary-blue to-transparent" />
          <div>
            <span className="text-xs font-bold text-primary-blue uppercase tracking-widest block mb-4">Focus & Mindset</span>
            <h3 className="text-2xl sm:text-3xl font-heading font-black text-white mb-6 leading-tight">
              Designing Interfaces, <br className="hidden sm:inline" />
              Building Experiences.
            </h3>
            <p className="text-text-slate leading-relaxed font-light text-base sm:text-lg mb-6">
              {aboutData.introduction}
            </p>
          </div>
          <div className="text-xs text-text-slate/70 border-t border-white/5 pt-4 flex items-center justify-between">
            <span>Dika Ahmad Imamul Mutakin</span>
            <span className="text-accent-cyan font-medium">Aspiring Frontend Developer</span>
          </div>
        </motion.div>

        {/* Bento Box 2: Figma to Code SVG (Spans 1 col) */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={revealVariants}
          className="glass-panel p-8 rounded-3xl flex flex-col justify-between relative overflow-hidden group hover:border-white/10 transition-colors duration-300 min-h-[300px]"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-cyan to-transparent" />
          <div>
            <span className="text-xs font-bold text-accent-cyan uppercase tracking-widest block mb-3">Workflow</span>
            <h3 className="text-lg font-heading font-bold text-white mb-2">Figma to React</h3>
            <p className="text-xs text-text-slate font-light leading-relaxed">
              Focusing on transforming visual Figma designs into clean, semantic, and reusable React components with precise spacing and responsive layouts.
            </p>
          </div>

          {/* SVG Figma-To-Code Illustration */}
          <div className="flex items-center justify-center py-6 bg-white/[0.02] rounded-2xl border border-white/5 mt-4 relative overflow-hidden" aria-hidden="true">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-blue/5 to-accent-cyan/5 blur-xl opacity-30" />
            <svg width="150" height="50" viewBox="0 0 150 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[130px] relative z-10">
              {/* Figma Vector Graphic */}
              <g transform="translate(10, 8)">
                <path d="M8 0C3.58 0 0 3.58 0 8C0 10.26 0.94 12.3 2.45 13.75C0.94 15.2 0 17.24 0 19.5C0 23.92 3.58 27.5 8 27.5C10.26 27.5 12.3 26.56 13.75 25.05C15.2 26.56 17.24 27.5 19.5 27.5C23.92 27.5 27.5 23.92 27.5 19.5C27.5 17.24 26.56 15.2 25.05 13.75C26.56 12.3 27.5 10.26 27.5 8C27.5 3.58 23.92 0 19.5 0L8 0Z" fill="#2E2E2E" opacity="0.3"/>
                <circle cx="8" cy="8" r="4" fill="#F24E1E"/>
                <path d="M19.5 8C19.5 5.79 17.71 4 15.5 4C13.29 4 11.5 5.79 11.5 8C11.5 10.21 13.29 12 15.5 12C17.71 12 19.5 10.21 19.5 8Z" fill="#A259FF"/>
                <circle cx="8" cy="19.5" r="4" fill="#0ACF83"/>
                <path d="M19.5 19.5C19.5 17.29 17.71 15.5 15.5 15.5C13.29 15.5 11.5 17.29 11.5 19.5C11.5 21.71 13.29 23.5 15.5 23.5C17.71 23.5 19.5 21.71 19.5 19.5Z" fill="#1ABC9C"/>
              </g>
              {/* Arrow */}
              <path d="M60 25H90M90 25L82 17M90 25L82 33" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              {/* React Brackets Code */}
              <g transform="translate(110, 10)">
                <path d="M10 5L2 15L10 25M20 5L28 15L20 25" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16 2L12 28" stroke="#06B6D4" strokeWidth="1.5" />
              </g>
            </svg>
          </div>
        </motion.div>

        {/* Bento Box 3: Core Focus & Learning Stack (Spans 1 col on lg) */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={revealVariants}
          className="glass-panel p-8 rounded-3xl flex flex-col justify-between relative overflow-hidden group hover:border-white/10 transition-colors duration-300"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-blue to-transparent" />
          <div>
            <span className="text-xs font-bold text-primary-blue uppercase tracking-widest block mb-3">Continuous Learning</span>
            <h3 className="text-lg font-heading font-bold text-white mb-4">Core Stack</h3>
            <p className="text-xs text-text-slate font-light leading-relaxed mb-6">
              {aboutData.learningJourney}
            </p>
          </div>

          {/* Stepper focus checklist widget */}
          <div className="space-y-3 bg-white/[0.01] p-4 rounded-2xl border border-white/5">
            <div className="flex items-center space-x-2 text-xs font-medium text-white">
              <FiCheckCircle className="text-accent-cyan shrink-0" />
              <span>React & Component Logic</span>
            </div>
            <div className="flex items-center space-x-2 text-xs font-medium text-white">
              <FiCheckCircle className="text-accent-cyan shrink-0" />
              <span>Tailwind CSS Modern Styling</span>
            </div>
            <div className="flex items-center space-x-2 text-xs font-medium text-white">
              <FiCheckCircle className="text-accent-cyan shrink-0" />
              <span>JavaScript (ES6+) Fundamentals</span>
            </div>
            <div className="flex items-center space-x-2 text-xs font-medium text-white">
              <FiCheckCircle className="text-accent-cyan shrink-0" />
              <span>Responsive Web Layouts</span>
            </div>
          </div>
        </motion.div>

        {/* Bento Box 4: Core Principles (Spans 2 cols on lg) */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={revealVariants}
          className="lg:col-span-2 glass-panel p-8 sm:p-10 rounded-3xl relative overflow-hidden group hover:border-white/10 transition-colors duration-300 flex flex-col justify-between"
        >
          <div className="absolute top-0 left-0 w-2.5 h-full bg-gradient-to-b from-accent-cyan to-transparent" />
          <div>
            <span className="text-xs font-bold text-accent-cyan uppercase tracking-widest block mb-4">Principles</span>
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-6">Frontend Approach</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                <div className="w-8 h-8 rounded-xl bg-primary-blue/10 flex items-center justify-center text-primary-blue">
                  <FiLayout size={16} />
                </div>
                <h4 className="text-sm font-heading font-bold text-white">Clean Component Design</h4>
                <p className="text-xs text-text-slate font-light leading-relaxed">
                  Modular, reusable React components with clear state flow and semantic markup.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                <div className="w-8 h-8 rounded-xl bg-accent-cyan/10 flex items-center justify-center text-accent-cyan">
                  <FiSmartphone size={16} />
                </div>
                <h4 className="text-sm font-heading font-bold text-white">Responsive & Mobile-First</h4>
                <p className="text-xs text-text-slate font-light leading-relaxed">
                  Fluid layouts and intuitive touch targets crafted for all screen viewports.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                <div className="w-8 h-8 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400">
                  <FiFigma size={16} />
                </div>
                <h4 className="text-sm font-heading font-bold text-white">Design Translation</h4>
                <p className="text-xs text-text-slate font-light leading-relaxed">
                  Accurate visual hierarchy, typography, and spacing from Figma to browser.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
