import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';
import { heroTexts } from '../../../data';

const Hero = ({ onBookNow, mousePosition }) => {
  const [textIndex, setTextIndex] = useState(0);
  const { scrollYProgress } = useScroll();

  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 100]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % heroTexts.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <header id="home" className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20 px-4">
      <motion.div
        style={{ x: mousePosition.x * -2, y: mousePosition.y * -2 }}
        className="absolute top-20 right-[10%] w-32 h-32 bg-red-600 rounded-full mix-blend-multiply filter blur-xl opacity-20"
      />
      <motion.div
        style={{ x: mousePosition.x * 2, y: mousePosition.y * 2 }}
        className="absolute bottom-20 left-[10%] w-48 h-48 bg-black rounded-full mix-blend-multiply filter blur-2xl opacity-10"
      />

      <div className="z-10 text-center relative w-full max-w-[100vw] overflow-hidden">
        <motion.div
          initial={{ rotate: -5, scale: 0.8, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          transition={{ type: "spring", bounce: 0.5 }}
          className="inline-block border-2 border-black bg-[#FDFBF7] px-4 py-2 mb-6 rounded-[255px_15px_225px_15px_/_15px_225px_15px_255px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
        >
          <p className="text-sm font-mono font-bold tracking-widest uppercase">✨ Purworejo's Finest</p>
        </motion.div>

        <motion.div
          style={{ scale: heroScale, y: heroY }}
          className="w-full px-2 text-[9vw] md:text-[8vw] leading-[0.9] md:leading-[0.85] font-black tracking-tighter text-black mix-blend-darken flex flex-col items-center"
        >
          <span>JANGAN BIARIN</span>
          <div className="h-[1.1em] relative w-full flex justify-center items-center overflow-hidden my-1 md:my-2">
            <AnimatePresence mode="wait">
              <motion.span
                key={textIndex}
                initial={{ y: 100, opacity: 0, rotate: 5 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                exit={{ y: -100, opacity: 0, rotate: -5 }}
                transition={{ duration: 0.5, ease: "backOut" }}
                className={`absolute whitespace-nowrap ${heroTexts[textIndex].color} ${heroTexts[textIndex].text.length > 15 ? 'text-[0.7em]' : ''}`}
              >
                {heroTexts[textIndex].text}
              </motion.span>
            </AnimatePresence>
          </div>
          <span>BESTIE.</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-lg md:text-2xl font-medium max-w-xl mx-auto text-neutral-600 leading-snug px-4"
        >
          Shoes & Apparel Treatment paling valid di Purworejo. <br/>
          <span className="bg-red-600 text-white px-1 font-bold">Anti Ribet</span> bikin barang lo fresh lagi.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex justify-center gap-4 cursor-pointer clickable"
          whileHover={{ scale: 1.1 }}
          onClick={onBookNow}
        >
          <div className="w-16 h-16 rounded-full border-2 border-black flex items-center justify-center animate-spin-slow">
            <Star className="w-8 h-8 fill-black" />
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Hero;
