import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaGithub, FaFigma } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiVite } from 'react-icons/si';
import { TbBrandVscode } from 'react-icons/tb';
import { techStackData } from '../data/portfolioData';

const getTechIcon = (iconName) => {
  const iconClass = "text-lg text-slate-300 group-hover:text-blue-400 transition-colors";
  switch (iconName) {
    case 'html': return <FaHtml5 className={iconClass} />;
    case 'css': return <FaCss3Alt className={iconClass} />;
    case 'javascript': return <SiJavascript className={iconClass} />;
    case 'react': return <FaReact className={iconClass} />;
    case 'tailwind': return <SiTailwindcss className={iconClass} />;
    case 'vite': return <SiVite className={iconClass} />;
    case 'git': return <FaGitAlt className={iconClass} />;
    case 'github': return <FaGithub className={iconClass} />;
    case 'vscode': return <TbBrandVscode className={iconClass} />;
    case 'figma': return <FaFigma className={iconClass} />;
    default: return null;
  }
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 max-w-5xl mx-auto border-t border-white/[0.06]">
      <div className="mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
          Tech Stack & Tools
        </h2>
        <p className="text-sm text-slate-400">
          Yang saya gunakan untuk membuat dan mengembangkan project.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Languages & Frameworks */}
        <div className="bg-[#0f172a]/60 border border-white/[0.08] rounded-xl p-6">
          <h3 className="text-base font-semibold text-white mb-4 pb-2 border-b border-white/[0.06]">
            Languages & Frameworks
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {techStackData.languagesAndFrameworks.map((item) => (
              <div
                key={item.name}
                className="group flex items-center space-x-2.5 p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04] hover:border-white/10 hover:bg-white/[0.05] transition-colors"
              >
                {getTechIcon(item.iconName)}
                <span className="text-sm font-medium text-slate-200">{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="bg-[#0f172a]/60 border border-white/[0.08] rounded-xl p-6">
          <h3 className="text-base font-semibold text-white mb-4 pb-2 border-b border-white/[0.06]">
            Tools
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {techStackData.tools.map((tool) => (
              <div
                key={tool.name}
                className="group flex items-center space-x-2.5 p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04] hover:border-white/10 hover:bg-white/[0.05] transition-colors"
              >
                {getTechIcon(tool.iconName)}
                <span className="text-sm font-medium text-slate-200">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
