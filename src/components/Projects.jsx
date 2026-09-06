import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { HiExternalLink, HiOutlineDeviceMobile, HiOutlineDesktopComputer } from 'react-icons/hi';
import { projectsData } from '../data/portfolioData';

const revealVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 70, damping: 18 }
  }
};

export default function Projects() {
  return (
    <section 
      id="projects" 
      className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Section Header */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={revealVariants}
        className="text-center mb-20"
      >
        <span className="text-xs font-bold uppercase tracking-widest text-primary-blue mb-2 block font-heading">Case Studies</span>
        <h2 className="text-3xl sm:text-5xl font-heading font-black text-white">Featured Projects</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-primary-blue to-accent-cyan mx-auto mt-4 rounded-full" />
      </motion.div>

      {/* Alternating Row Projects List */}
      <div className="space-y-32">
        {projectsData.map((project, index) => {
          const isEven = index % 2 === 0;
          
          return (
            <div 
              key={project.id}
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 ${
                isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Left/Right Project Thumbnail with zoom and responsiveness overlays */}
              <motion.div 
                initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ type: 'spring', stiffness: 60, damping: 18, delay: 0.1 }}
                className="w-full lg:w-1/2"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-white/5 shadow-2xl bg-surface-dark group">
                  <img
                    src={project.imagePath}
                    alt={`${project.title} Preview`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Glowing mask gradient cover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/70 via-bg-dark/20 to-transparent pointer-events-none" />

                  {/* Responsive Design Showcase Indicator Badge */}
                  <div className="absolute bottom-5 left-5 glass-panel px-3.5 py-2 rounded-full text-xs font-bold text-white flex items-center space-x-2 shadow-lg">
                    <span className="flex space-x-1 text-accent-cyan">
                      <HiOutlineDesktopComputer size={14} />
                      <HiOutlineDeviceMobile size={14} />
                    </span>
                    <span className="w-[1px] h-3 bg-white/10" />
                    <span className="text-[10px] sm:text-xs text-text-light/90">{project.responsiveness}</span>
                  </div>
                </div>
              </motion.div>

              {/* Left/Right Project Details description */}
              <motion.div 
                initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ type: 'spring', stiffness: 60, damping: 18, delay: 0.2 }}
                className="w-full lg:w-1/2 space-y-6"
              >
                <span className="text-xs font-bold text-accent-cyan uppercase tracking-widest bg-accent-cyan/10 border border-accent-cyan/15 px-3 py-1 rounded-full inline-block">
                  Case Study {index + 1}
                </span>
                
                <h3 className="text-2xl sm:text-4xl font-heading font-black text-white tracking-tight leading-tight">
                  {project.title}
                </h3>
                
                <p className="text-sm sm:text-base text-text-slate leading-relaxed font-light">
                  {project.description}
                </p>

                {/* Short Feature Highlights */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs uppercase font-bold text-white tracking-wider">Key Features</h4>
                  <ul className="space-y-2.5">
                    {project.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start space-x-3 text-sm text-white/80 font-light">
                        <span className="w-5 h-5 rounded-full bg-primary-blue/10 border border-primary-blue/15 flex items-center justify-center text-primary-blue shrink-0 mt-0.5 text-[9px] font-bold">
                          ✓
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-3">
                  {project.technologies.map((tech, techIdx) => (
                    <span 
                      key={techIdx}
                      className="text-xs font-medium text-white/70 bg-white/5 border border-white/5 px-2.5 py-1 rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Live Demo and Code Actions */}
                <div className="flex items-center space-x-4 pt-6">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary-blue to-accent-cyan text-white text-xs font-bold hover:shadow-lg hover:shadow-primary-blue/20 hover:-translate-y-0.5 active:scale-95 transition-all duration-200 flex items-center space-x-2 cursor-none"
                  >
                    <span>Launch Demo</span>
                    <HiExternalLink size={14} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/5 hover:border-white/10 hover:-translate-y-0.5 active:scale-95 transition-all duration-200 flex items-center space-x-2 cursor-none"
                    aria-label={`View code for ${project.title} on GitHub`}
                  >
                    <FaGithub size={14} />
                    <span>View Repository</span>
                  </a>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
