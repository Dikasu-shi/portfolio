import { heroData } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#070a12] py-8 px-6 text-sm text-slate-400">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Name */}
        <p className="font-medium text-slate-300 text-center sm:text-left text-xs sm:text-sm">
          {heroData.name}
        </p>

        {/* Links */}
        <div className="flex items-center space-x-3 text-xs text-slate-400">
          <a
            href={heroData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <span>·</span>
          <a
            href={heroData.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <span>·</span>
          <a
            href={heroData.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Instagram
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-slate-500 text-center sm:text-right">
          &copy; {new Date().getFullYear()} Dika Ahmad Imamul Mutakin
        </p>

      </div>
    </footer>
  );
}
