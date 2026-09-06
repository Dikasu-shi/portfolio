import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX, HiZoomIn, HiAcademicCap } from 'react-icons/hi';
import { certificatesData } from '../data/portfolioData';

const revealVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 80, damping: 20 }
  }
};

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  // Close modal on escape keypress
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedCert(null);
      }
    };
    if (selectedCert) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedCert]);

  return (
    <section 
      id="certificates" 
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
        <span className="text-xs font-bold uppercase tracking-widest text-primary-blue mb-2 block font-heading">Credentials</span>
        <h2 className="text-3xl sm:text-5xl font-heading font-black text-white">Certificates</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-primary-blue to-accent-cyan mx-auto mt-4 rounded-full" />
      </motion.div>

      {/* Certificates Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificatesData.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { type: 'spring', stiffness: 100, damping: 20, delay: index * 0.1 } 
              }
            }}
            whileHover={cert.imagePath ? { y: -6 } : {}}
            className={`glass-panel rounded-2xl overflow-hidden group border border-white/5 shadow-md flex flex-col h-full relative ${
              cert.imagePath ? 'cursor-none hover:border-white/10 transition-colors duration-300' : 'cursor-default'
            }`}
            onClick={() => cert.imagePath && setSelectedCert(cert)}
          >
            {/* Image Container with Zoom Trigger */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-bg-dark border-b border-white/5 flex items-center justify-center">
              {cert.imagePath ? (
                <>
                  <img
                    src={cert.imagePath}
                    alt={cert.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  {/* Blur Hover Overlay */}
                  <div className="absolute inset-0 bg-bg-dark/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white scale-75 group-hover:scale-100 transition-all duration-300 shadow-lg">
                      <HiZoomIn size={20} />
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center text-text-slate/30 space-y-2">
                  <HiAcademicCap size={48} className="text-white/10 group-hover:text-accent-cyan/20 transition-colors duration-300" />
                  <span className="text-[10px] uppercase tracking-wider font-semibold font-heading">Preview Pending</span>
                </div>
              )}
            </div>

            {/* Certificate Details */}
            <div className="p-5 flex flex-col justify-between flex-grow">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-accent-cyan bg-accent-cyan/10 px-2 py-0.5 rounded-full inline-block mb-3">
                  {cert.issuer}
                </span>
                <h3 className="text-base sm:text-lg font-heading font-bold text-white leading-snug group-hover:text-primary-blue transition-colors duration-300">
                  {cert.title}
                </h3>
              </div>
              <span className="text-xs text-text-slate mt-4 font-light">
                Issued: {cert.date}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Certificate Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-bg-dark/95 backdrop-blur-md p-4 cursor-none"
            onClick={() => setSelectedCert(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedCert.title} certificate image preview`}
          >
            {/* Modal Close Button */}
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-6 right-6 z-50 text-text-slate hover:text-white p-2.5 bg-white/5 hover:bg-white/10 rounded-full transition-colors border border-white/5 hover:border-white/10 active:scale-95 cursor-none"
              aria-label="Close certificate preview"
            >
              <HiX size={24} />
            </button>

            {/* Modal Body Container */}
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative max-w-4xl w-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()} // prevent modal close on clicking details
            >
              {/* Image Frame */}
              <div className="glass-panel p-2 rounded-2xl border border-white/10 shadow-2xl bg-surface-dark overflow-hidden w-full">
                <img
                  src={selectedCert.imagePath}
                  alt={selectedCert.title}
                  className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
                />
                
                {/* Description underlay inside frame */}
                <div className="p-6 text-center border-t border-white/5 mt-2 bg-bg-dark/50 rounded-b-lg">
                  <span className="text-xs uppercase font-bold tracking-widest text-accent-cyan mb-1.5 block">
                    {selectedCert.issuer}
                  </span>
                  <h3 className="text-xl font-heading font-bold text-white mb-1">
                    {selectedCert.title}
                  </h3>
                  <p className="text-xs text-text-slate font-light">
                    Granted in {selectedCert.date}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
