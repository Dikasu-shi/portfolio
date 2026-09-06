import { motion } from 'framer-motion';
import { aboutData } from '../data/portfolioData';
import { FiCheckCircle } from 'react-icons/fi';

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

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        
        {/* Bento Box 1: Large Bio Description (Spans 2 cols on lg) */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={revealVariants}
          className="lg:col-span-2 glass-panel p-8 sm:p-10 rounded-3xl flex flex-col justify-between relative overflow-hidden group hover:border-white/10 transition-colors duration-300"
        >
          <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary-blue to-transparent" />
          <div>
            <span className="text-xs font-bold text-primary-blue uppercase tracking-widest block mb-4">Philosophy</span>
            <h3 className="text-2xl sm:text-3xl font-heading font-black text-white mb-6 leading-tight">
              Designing Interfaces, <br className="hidden sm:inline" />
              Coding Experiences.
            </h3>
            <p className="text-text-slate leading-relaxed font-light text-base sm:text-lg mb-6">
              {aboutData.introduction}
            </p>
          </div>
          <div className="text-xs text-text-slate/60 italic mt-4 border-t border-white/5 pt-4">
            - Dika Ahmad Imamul Mutakin, Frontend Developer
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
              Obsessed with transforming designs into clean, semantic components. Maintaining spacing, typography integrity, and responsive grid layouts.
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
              {/* Animated Arrow */}
              <path d="M60 25H90M90 25L82 17M90 25L82 33" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              {/* React Brackets Code */}
              <g transform="translate(110, 10)">
                <path d="M10 5L2 15L10 25M20 5L28 15L20 25" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16 2L12 28" stroke="#06B6D4" strokeWidth="1.5" />
              </g>
            </svg>
          </div>
        </motion.div>

        {/* Bento Box 3: Focus & Steps (Spans 1 col on lg) */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={revealVariants}
          className="glass-panel p-8 rounded-3xl flex flex-col justify-between relative overflow-hidden group hover:border-white/10 transition-colors duration-300"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-blue to-transparent" />
          <div>
            <span className="text-xs font-bold text-primary-blue uppercase tracking-widest block mb-3">Current Path</span>
            <h3 className="text-lg font-heading font-bold text-white mb-4">Core Focus</h3>
            <p className="text-xs text-text-slate font-light leading-relaxed mb-6">
              {aboutData.learningJourney}
            </p>
          </div>

          {/* Stepper focus timeline widget */}
          <div className="space-y-3 bg-white/[0.01] p-4 rounded-2xl border border-white/5">
            <div className="flex items-center space-x-2 text-xs font-medium text-white">
              <FiCheckCircle className="text-accent-cyan" />
              <span>React Architectures</span>
            </div>
            <div className="flex items-center space-x-2 text-xs font-medium text-white">
              <FiCheckCircle className="text-accent-cyan" />
              <span>Tailwind Custom Design</span>
            </div>
            <div className="flex items-center space-x-2 text-xs font-medium text-white">
              <FiCheckCircle className="text-accent-cyan" />
              <span>JavaScript ES6+ Logic</span>
            </div>
            <div className="flex items-center space-x-2 text-xs font-medium text-white/50">
              <div className="w-3 h-3 rounded-full border border-white/20 animate-pulse-slow" />
              <span>Responsive Web Optimization</span>
            </div>
          </div>
        </motion.div>

        {/* Bento Box 4: Timeline (Spans 2 cols on lg) */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={revealVariants}
          className="lg:col-span-2 glass-panel p-8 sm:p-10 rounded-3xl relative overflow-hidden group hover:border-white/10 transition-colors duration-300"
        >
          <div className="absolute top-0 left-0 w-2.5 h-full bg-gradient-to-b from-accent-cyan to-transparent" />
          <span className="text-xs font-bold text-accent-cyan uppercase tracking-widest block mb-6">Milestones</span>
          <h3 className="text-xl font-heading font-bold text-white mb-8">Learning & Timeline</h3>
          
          <div className="relative pl-6 border-l border-white/15 space-y-8">
            {aboutData.timeline.map((item, index) => (
              <div 
                key={index}
                className="relative"
              >
                {/* Node */}
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-accent-cyan border-4 border-bg-dark shadow-[0_0_10px_rgba(6,182,212,0.4)]" />
                
                {/* Date */}
                <span className="text-[10px] sm:text-xs font-bold text-accent-cyan tracking-wider uppercase bg-white/5 border border-white/10 px-2 py-0.5 rounded">
                  {item.year}
                </span>

                {/* Info */}
                <div className="mt-3">
                  <h4 className="text-base sm:text-lg font-heading font-bold text-white">{item.title}</h4>
                  <p className="text-xs sm:text-sm text-white/70 font-semibold">{item.institution}</p>
                  <p className="text-xs sm:text-sm text-text-slate mt-1.5 font-light leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
