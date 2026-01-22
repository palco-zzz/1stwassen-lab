import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { useCursor } from '../../../hooks';
import {
  Navbar,
  Hero,
  Marquee,
  ServicesSection,
  HowItWorksSection,
  PricelistSection,
  TestimonialsSection,
  LocationSection,
  Footer,
  OrderModal
} from '../../organisms';

const HomePage = () => {
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const { cursorPos, cursorVariant, cursorX, cursorY, mousePosition, variants } = useCursor();

  return (
    <div className="bg-[#FDFBF7] text-neutral-900 font-sans overflow-x-hidden selection:bg-black selection:text-[#FDFBF7] relative md:cursor-none">
      {/* Order Modal */}
      <OrderModal isOpen={isOrderOpen} onClose={() => setIsOrderOpen(false)} />

      {/* Custom Cursor (Desktop Only) */}
      <motion.div
        className="hidden md:block pointer-events-none fixed top-0 left-0 z-[9999]"
        style={{ x: cursorX, y: cursorY }}
      >
        <motion.div
          className="rounded-full"
          variants={variants}
          animate={cursorVariant}
          transition={{ type: "spring", stiffness: 500, damping: 28 }}
        />
      </motion.div>

      <motion.div
        className="hidden md:block fixed top-0 left-0 w-3 h-3 bg-black rounded-full pointer-events-none z-[10000]"
        style={{ x: cursorPos.x - 6, y: cursorPos.y - 6 }}
      />

      {/* Visual Polish (Texture & Noise) */}
      <div className="fixed inset-0 z-[100] pointer-events-none opacity-40 mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/crinkled-paper.png')]"></div>
      <div
        className="fixed inset-0 z-[100] pointer-events-none opacity-20 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")`
        }}
      ></div>

      {/* Main Content */}
      <Navbar onBookNow={() => setIsOrderOpen(true)} />
      <Hero onBookNow={() => setIsOrderOpen(true)} mousePosition={mousePosition} />
      <Marquee />
      <ServicesSection />
      <HowItWorksSection />
      <PricelistSection />
      <TestimonialsSection />
      <LocationSection />
      <Footer />

      {/* Floating WhatsApp Button */}
      <motion.div
        onClick={() => setIsOrderOpen(true)}
        whileHover={{ scale: 1.1, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 border-2 border-black rounded-full shadow-[4px_4px_0px_0px_black] z-50 flex items-center justify-center cursor-pointer clickable"
      >
        <MessageCircle className="w-8 h-8 fill-white text-[#25D366]" />
      </motion.div>

      {/* Global Styles */}
      <style>{`
        .stroke-text {
          -webkit-text-stroke: 1px black;
          color: transparent;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default HomePage;
