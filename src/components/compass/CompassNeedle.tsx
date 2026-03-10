import { motion } from 'motion/react';

export function CompassNeedle({ angle = 0 }: { angle?: number }) {
  return (
    <motion.div 
      className="relative w-2 h-32 flex flex-col items-center justify-center"
      animate={{ rotate: angle }}
      transition={{ type: 'spring', stiffness: 50, damping: 20 }}
    >
      <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-b-[64px] border-l-transparent border-r-transparent border-b-[var(--rose)]" />
      <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-t-[64px] border-l-transparent border-r-transparent border-t-[var(--text-faint)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[var(--gold)] shadow-[0_0_15px_rgba(201,168,76,0.5)] animate-pulse-gold" />
    </motion.div>
  );
}
