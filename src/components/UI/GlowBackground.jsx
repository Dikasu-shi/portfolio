import { motion } from 'framer-motion';

export default function GlowBackground() {
  return (
    <div className="fixed inset-0 -z-50 w-full h-full overflow-hidden bg-bg-dark pointer-events-none">
      {/* Glowing Bubble 1 - GPU Accelerated */}
      <motion.div
        className="absolute top-[10%] left-[5%] w-[35vw] h-[35vw] max-w-[500px] min-w-[300px] rounded-full bg-primary-blue/12 blur-[120px] will-change-transform [transform:translate3d(0,0,0)] backface-visible-hidden"
        animate={{
          x: [0, 60, -30, 0],
          y: [0, -40, 30, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Glowing Bubble 2 - GPU Accelerated */}
      <motion.div
        className="absolute bottom-[20%] right-[10%] w-[40vw] h-[40vw] max-w-[600px] min-w-[350px] rounded-full bg-accent-cyan/8 blur-[130px] will-change-transform [transform:translate3d(0,0,0)] backface-visible-hidden"
        animate={{
          x: [0, -70, 40, 0],
          y: [0, 50, -40, 0],
        }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Glowing Bubble 3 - GPU Accelerated */}
      <motion.div
        className="absolute top-[45%] left-[40%] w-[25vw] h-[25vw] max-w-[400px] min-w-[250px] rounded-full bg-purple-500/8 blur-[110px] will-change-transform [transform:translate3d(0,0,0)] backface-visible-hidden"
        animate={{
          x: [0, 40, -40, 0],
          y: [0, 40, -50, 0],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Subtle Digital Grid Overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" 
        aria-hidden="true"
      />
    </div>
  );
}
