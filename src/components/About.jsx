import { aboutData } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-20 px-6 max-w-5xl mx-auto border-t border-white/[0.06]">
      <div className="max-w-3xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-6">
          About Me
        </h2>
        <div className="text-base text-slate-300 leading-relaxed">
          <p>{aboutData.description}</p>
        </div>
      </div>
    </section>
  );
}
