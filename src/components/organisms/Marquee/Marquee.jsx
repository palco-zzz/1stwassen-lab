import React from 'react';
import { motion } from 'framer-motion';
import { useMarquee } from '../../../hooks';

const Marquee = () => {
  const marqueeX = useMarquee(-3);
  const marqueeXReverse = useMarquee(3);

  return (
    <>
      <div className="py-8 bg-black border-y-4 border-black rotate-1 scale-105 origin-left z-20 relative overflow-hidden">
        <motion.div style={{ x: marqueeX }} className="flex gap-12 whitespace-nowrap">
          {[1, 2, 3, 4, 1, 2, 3, 4].map((i, index) => (
            <span key={index} className="text-6xl md:text-8xl font-black text-[#FDFBF7] tracking-tighter italic">
              WASSEN LAB <span className="text-transparent stroke-text">PREMIUM</span> CARE
            </span>
          ))}
        </motion.div>
      </div>

      <div className="py-8 bg-red-600 border-b-4 border-black -rotate-1 scale-105 origin-right z-10 relative overflow-hidden -mt-2">
        <motion.div style={{ x: marqueeXReverse }} className="flex gap-12 whitespace-nowrap">
          {[1, 2, 3, 4, 1, 2, 3, 4].map((i, index) => (
            <span key={index} className="text-4xl md:text-6xl font-bold text-black tracking-widest uppercase">
              SHOES • BAGS • HELMETS • CAPS • <span className="text-white">REPAINT</span> •
            </span>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Marquee;
