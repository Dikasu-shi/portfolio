import { FaGithub, FaLinkedinIn, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { heroData } from '../data/portfolioData';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 max-w-5xl mx-auto border-t border-white/[0.06]">
      <div className="max-w-2xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-8">
          Contact
        </h2>

        {/* Contact Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          {/* Email */}
          <a
            href={`mailto:${heroData.socials.email}`}
            className="flex items-center space-x-3.5 p-4 rounded-xl bg-[#0f172a]/60 border border-white/[0.08] hover:border-blue-500/40 hover:bg-[#0f172a] transition-all group"
          >
            <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
              <FaEnvelope size={18} />
            </div>
            <div>
              <p className="text-xs text-slate-400 font-medium">Email</p>
              <p className="text-sm font-semibold text-white">{heroData.socials.email}</p>
            </div>
          </a>

          {/* GitHub */}
          <a
            href={heroData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3.5 p-4 rounded-xl bg-[#0f172a]/60 border border-white/[0.08] hover:border-white/25 hover:bg-[#0f172a] transition-all group"
          >
            <div className="p-2.5 rounded-lg bg-white/5 text-slate-300 group-hover:bg-white group-hover:text-slate-900 transition-colors">
              <FaGithub size={18} />
            </div>
            <div>
              <p className="text-xs text-slate-400 font-medium">GitHub</p>
              <p className="text-sm font-semibold text-white">@Dikasu-shi</p>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href={heroData.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3.5 p-4 rounded-xl bg-[#0f172a]/60 border border-white/[0.08] hover:border-blue-500/40 hover:bg-[#0f172a] transition-all group"
          >
            <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <FaLinkedinIn size={18} />
            </div>
            <div>
              <p className="text-xs text-slate-400 font-medium">LinkedIn</p>
              <p className="text-sm font-semibold text-white">Dika Ahmad</p>
            </div>
          </a>

          {/* Instagram */}
          <a
            href={heroData.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3.5 p-4 rounded-xl bg-[#0f172a]/60 border border-white/[0.08] hover:border-pink-500/40 hover:bg-[#0f172a] transition-all group"
          >
            <div className="p-2.5 rounded-lg bg-pink-500/10 text-pink-400 group-hover:bg-pink-500 group-hover:text-white transition-colors">
              <FaInstagram size={18} />
            </div>
            <div>
              <p className="text-xs text-slate-400 font-medium">Instagram</p>
              <p className="text-sm font-semibold text-white">@dikkkaaasu</p>
            </div>
          </a>

        </div>
      </div>
    </section>
  );
}
