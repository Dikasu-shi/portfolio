import { motion } from 'framer-motion';
import { HiArrowUp } from 'react-icons/hi';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="border-t border-white/5 bg-bg-dark/50 py-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Copyright */}
        <p className="text-xs sm:text-sm text-text-slate font-light text-center sm:text-left">
          &copy; {new Date().getFullYear()} Dika Ahmad Imamul Mutakin. Crafted with React & Tailwind CSS.
        </p>

        {/* Back to Top Button */}
        <motion.button
          onClick={handleScrollToTop}
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.95 }}
          className="w-10 h-10 rounded-full bg-white/5 border border-white/5 hover:border-white/10 flex items-center justify-center text-text-slate hover:text-white hover:bg-white/10 transition-colors shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue cursor-pointer"
          aria-label="Scroll back to top of the page"
        >
          <HiArrowUp size={18} />
        </motion.button>
      </div>
    </footer>
  );
}
