import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { heroData } from '../data/portfolioData';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 20 }
  }
};

export default function Hero() {
  const handleScrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleScrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden px-6 md:px-12"
    >
      {/* Floating Slow Motion Geometric Shapes */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <motion.div
          className="absolute top-[20%] left-[10%] w-32 h-32 rounded-full border border-white/5 border-dashed"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute bottom-[25%] left-[15%] w-16 h-16 border border-accent-cyan/10 rounded-lg"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-[30%] right-[15%] w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[50px] border-b-primary-blue/5"
          animate={{
            y: [0, 40, 0],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-[15%] right-[20%] w-24 h-24 rounded-full border border-white/5"
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Main Content Area */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center z-10"
      >
        {/* Profile Image Avatar */}
        <motion.div 
          variants={itemVariants}
          className="relative w-28 h-28 sm:w-32 sm:h-32 mx-auto mb-6 group"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-blue to-accent-cyan opacity-25 blur-md group-hover:opacity-40 transition-opacity duration-500" />
          <div className="relative w-full h-full rounded-full overflow-hidden border border-white/10 group-hover:border-accent-cyan transition-colors duration-500 shadow-xl bg-surface-dark">
            <img 
              src="/assets/avatar.jpg" 
              alt="Dika Ahmad Imamul Mutakin Profile" 
              className="w-full h-full object-cover scale-[1.05] group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        </motion.div>

        {/* Greetings Tag */}
        <motion.div 
          variants={itemVariants}
          className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
          <span className="text-xs font-semibold uppercase tracking-wider text-accent-cyan">Available for Frontend Internship</span>
        </motion.div>

        {/* Hello & Name */}
        <motion.h1 
          variants={itemVariants}
          className="text-4xl sm:text-6xl md:text-7xl font-heading font-black tracking-tight mb-6 leading-[1.1] text-gradient-primary"
        >
          Hi, I'm <span className="text-gradient-accent">{heroData.name}</span>
        </motion.h1>

        {/* Title */}
        <motion.h2 
          variants={itemVariants}
          className="text-xl sm:text-2xl md:text-3xl font-heading font-semibold text-white/90 mb-6"
        >
          {heroData.title}
        </motion.h2>

        {/* Short Subtitle / Bio */}
        <motion.p 
          variants={itemVariants}
          className="text-base sm:text-lg text-text-slate max-w-2xl mx-auto mb-10 leading-relaxed font-light"
        >
          {heroData.subtitle}
        </motion.p>

        {/* Call to Actions */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          {/* View Projects */}
          <button
            onClick={handleScrollToProjects}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-primary-blue to-accent-cyan text-white text-sm font-semibold hover:shadow-lg hover:shadow-primary-blue/30 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center space-x-2 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue cursor-pointer"
          >
            <span>View Projects</span>
            <HiOutlineArrowRight size={16} />
          </button>

          {/* Contact Me CTA */}
          <button
            onClick={handleScrollToContact}
            className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/10 hover:border-white/20 text-white text-sm font-semibold transition-all duration-300 hover:bg-white/5 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue cursor-pointer"
          >
            Get in Touch
          </button>
        </motion.div>

        {/* Social Icons */}
        <motion.div 
          variants={itemVariants}
          className="flex items-center justify-center space-x-6"
        >
          <a
            href={heroData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="w-12 h-12 rounded-full border border-white/5 hover:border-white/20 bg-white/[0.02] flex items-center justify-center text-text-slate hover:text-white transition-all hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue"
          >
            <FaGithub size={20} />
          </a>
          <a
            href={heroData.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="w-12 h-12 rounded-full border border-white/5 hover:border-white/20 bg-white/[0.02] flex items-center justify-center text-text-slate hover:text-white transition-all hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue"
          >
            <FaLinkedinIn size={20} />
          </a>
          <a
            href={heroData.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Profile"
            className="w-12 h-12 rounded-full border border-white/5 hover:border-white/20 bg-white/[0.02] flex items-center justify-center text-text-slate hover:text-white transition-all hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue"
          >
            <FaInstagram size={20} />
          </a>
        </motion.div>
      </motion.div>

      {/* Background Soft Glow Light */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[30%] bg-gradient-to-t from-primary-blue/10 to-transparent blur-[120px] pointer-events-none" 
        aria-hidden="true"
      />
    </section>
  );
}
