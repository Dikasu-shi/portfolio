import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-5xl mx-auto border-t border-white/[0.06]">
      <div className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
          Projects
        </h2>
        <p className="text-sm text-slate-400">
          Beberapa project frontend yang telah saya buat dan deploy.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project) => (
          <article
            key={project.id}
            className="flex flex-col bg-[#0f172a]/70 border border-white/[0.08] rounded-xl overflow-hidden hover:border-white/20 transition-colors"
          >
            {/* Project Image */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900 border-b border-white/[0.06]">
              <img
                src={project.imagePath}
                alt={`Screenshot ${project.title}`}
                loading="lazy"
                className="w-full h-full object-cover hover:scale-102 transition-transform duration-300"
              />
            </div>

            {/* Project Content */}
            <div className="p-5 flex flex-col flex-grow justify-between">
              <div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium px-2 py-0.5 rounded bg-white/[0.05] text-slate-300 border border-white/[0.05]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-3 pt-3 border-t border-white/[0.06]">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium transition-colors"
                  >
                    <span>View Project</span>
                    <FaExternalLinkAlt size={10} />
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/10 text-xs font-medium transition-colors"
                    aria-label={`GitHub repository ${project.title}`}
                  >
                    <FaGithub size={13} />
                    <span>GitHub</span>
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
