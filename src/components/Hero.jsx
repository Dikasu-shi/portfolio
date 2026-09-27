import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { heroData } from '../data/portfolioData';

export default function Hero() {
  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const topOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
      <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-10">
        
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-sm font-medium text-blue-400 mb-2">
            Halo, saya
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-3">
            {heroData.name}
          </h1>
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-300 mb-4">
            {heroData.title}
          </h2>
          <p className="text-base text-slate-400 max-w-xl leading-relaxed mb-8">
            {heroData.description}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-8">
            <a
              href="#projects"
              onClick={(e) => handleScrollTo(e, 'projects')}
              className="px-6 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, 'contact')}
              className="px-6 py-2.5 rounded-lg border border-white/10 hover:border-white/25 hover:bg-white/5 text-slate-200 text-sm font-medium transition-colors"
            >
              Contact Me
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-center md:justify-start space-x-4">
            <a
              href={heroData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              <FaGithub size={19} />
            </a>
            <a
              href={heroData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              <FaLinkedinIn size={19} />
            </a>
            <a
              href={heroData.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
              className="p-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              <FaInstagram size={19} />
            </a>
          </div>
        </div>

        {/* Profile Avatar */}
        <div className="shrink-0">
          <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-2 border-white/10 bg-slate-800 shadow-md">
            <img
              src={heroData.avatar}
              alt={heroData.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
