import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaGithub, FaFigma } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiVite, SiPostman } from 'react-icons/si';
import { TbBrandVscode } from 'react-icons/tb';
import { skillsData } from '../data/portfolioData';

const getSkillIcon = (iconName, sizeClass = "text-xl") => {
  const iconClass = `${sizeClass} text-white group-hover:text-accent-cyan transition-colors duration-300`;
  switch (iconName) {
    case 'html': return <FaHtml5 className={iconClass} />;
    case 'css': return <FaCss3Alt className={iconClass} />;
    case 'javascript': return <SiJavascript className={iconClass} />;
    case 'react': return <FaReact className={iconClass} />;
    case 'tailwind': return <SiTailwindcss className={iconClass} />;
    case 'git': return <FaGitAlt className={iconClass} />;
    case 'github': return <FaGithub className={iconClass} />;
    case 'vscode': return <TbBrandVscode className={iconClass} />;
    case 'figma': return <FaFigma className={iconClass} />;
    default: return null;
  }
};

const revealVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 70, damping: 18 }
  }
};

export default function Skills() {
  const r = 26;
  const circ = 2 * Math.PI * r;

  return (
    <section 
      id="skills" 
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
        <span className="text-xs font-bold uppercase tracking-widest text-primary-blue mb-2 block font-heading">Capabilities</span>
        <h2 className="text-3xl sm:text-5xl font-heading font-black text-white">Skills & Toolkit</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-primary-blue to-accent-cyan mx-auto mt-4 rounded-full" />
      </motion.div>

      {/* Skills Grid Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Column: Frontend circular dials (Spans 7 cols on lg) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={revealVariants}
          className="lg:col-span-7 glass-panel p-8 rounded-3xl flex flex-col justify-between"
        >
          <div>
            <span className="text-xs font-bold text-primary-blue uppercase tracking-wider block mb-2">Development</span>
            <h3 className="text-xl sm:text-2xl font-heading font-black text-white mb-6">Frontend Architecture</h3>
            <p className="text-sm text-text-slate font-light mb-8 leading-relaxed">
              Crafting semantic markups and structured style states. Circular dials indicate my proficiency based on project work.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {skillsData.frontend.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -4, scale: 1.02 }}
                className="flex flex-col items-center bg-white/[0.015] border border-white/[0.03] hover:border-white/10 p-5 rounded-2xl transition-colors duration-300 group"
              >
                {/* SVG Progress Circle */}
                <div className="relative w-16 h-16 flex items-center justify-center mb-4">
                  <svg className="absolute w-full h-full transform -rotate-90">
                    <circle 
                      cx="32" 
                      cy="32" 
                      r={r} 
                      className="stroke-white/[0.04]" 
                      strokeWidth="3.5" 
                      fill="transparent" 
                    />
                    <motion.circle
                      cx="32"
                      cy="32"
                      r={r}
                      className="stroke-accent-cyan"
                      strokeWidth="3.5"
                      fill="transparent"
                      strokeDasharray={circ}
                      initial={{ strokeDashoffset: circ }}
                      whileInView={{ strokeDashoffset: circ - (skill.level / 100) * circ }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.05 }}
                    />
                  </svg>
                  {/* Technology Icon inside circle */}
                  <div className="relative z-10 p-2 bg-bg-dark rounded-full border border-white/5 shadow-inner">
                    {getSkillIcon(skill.iconName, "text-lg")}
                  </div>
                </div>

                <span className="text-sm font-heading font-bold text-white mb-1">{skill.name}</span>
                <span className="text-xs font-medium text-text-slate">{skill.level}%</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Design & Tools (Spans 5 cols on lg) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={revealVariants}
          className="lg:col-span-5 flex flex-col gap-6"
        >
          {/* Design Panel */}
          <div className="glass-panel p-6 rounded-3xl flex flex-col justify-between flex-grow relative overflow-hidden group hover:border-white/10 transition-colors">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-purple-500/5 to-transparent blur-xl" />
            <div>
              <span className="text-xs font-bold text-purple-400 uppercase tracking-wider block mb-1">Creative</span>
              <h3 className="text-lg font-heading font-bold text-white mb-2">Design & Prototyping</h3>
              <p className="text-xs text-text-slate font-light leading-relaxed mb-4">
                Creating responsive mockups, interactive user flows, and typography guidelines inside Figma.
              </p>
            </div>
            
            {skillsData.design.map((skill, index) => (
              <div 
                key={index} 
                className="flex items-center justify-between p-4 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.04] transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 bg-purple-500/10 rounded-xl">
                    {getSkillIcon(skill.iconName, "text-xl text-purple-400")}
                  </div>
                  <span className="text-sm font-bold text-white">{skill.name}</span>
                </div>
                <span className="text-xs font-bold text-purple-400 bg-purple-500/10 px-2.5 py-1 rounded-full">
                  {skill.level}%
                </span>
              </div>
            ))}
          </div>

          {/* Tools Panel */}
          <div className="glass-panel p-6 rounded-3xl flex flex-col justify-between flex-grow relative overflow-hidden group hover:border-white/10 transition-colors">
            <div>
              <span className="text-xs font-bold text-accent-cyan uppercase tracking-wider block mb-1">Environment</span>
              <h3 className="text-lg font-heading font-bold text-white mb-2">Workflow & Tools</h3>
              <p className="text-xs text-text-slate font-light leading-relaxed mb-4">
                Managing version control directories, repository integrations, and editing workspaces.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {skillsData.tools.map((skill, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-start p-4 bg-white/[0.015] border border-white/5 rounded-2xl hover:border-white/10 transition-colors"
                >
                  <div className="p-2 bg-white/5 rounded-lg mb-3">
                    {getSkillIcon(skill.iconName, "text-base")}
                  </div>
                  <span className="text-xs font-bold text-white mb-1">{skill.name}</span>
                  <span className="text-[10px] text-text-slate font-medium">{skill.level}%</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
