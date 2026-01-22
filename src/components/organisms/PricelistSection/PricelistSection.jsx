import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Clock, ArrowRight } from 'lucide-react';
import { pricelist } from '../../../data';

const PricelistSection = () => {
  const [activeTab, setActiveTab] = useState('shoes');
  const tabsContainerRef = useRef(null);

  const scrollTabs = (direction) => {
    if (tabsContainerRef.current) {
      const scrollAmount = 150;
      const currentScroll = tabsContainerRef.current.scrollLeft;
      tabsContainerRef.current.scrollTo({
        left: direction === 'left' ? currentScroll - scrollAmount : currentScroll + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="pricelist" className="py-24 px-4 bg-yellow-50 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-full h-20 bg-repeat-x opacity-10" style={{ backgroundImage: "radial-gradient(circle, black 2px, transparent 2.5px)", backgroundSize: "20px 20px" }}></div>

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <span className="inline-block bg-black text-white px-4 py-1 font-mono font-bold text-sm mb-4 rotate-3">NO HIDDEN FEES</span>
          <h2 className="text-6xl md:text-7xl font-black tracking-tighter">PRICELIST</h2>
        </div>

        <div className="relative">
          <div
            onClick={() => scrollTabs('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-40 md:hidden bg-gradient-to-r from-yellow-50 to-transparent pr-4 pl-1 py-4 flex items-center cursor-pointer active:scale-95 transition-transform clickable"
          >
            <ChevronLeft className="w-6 h-6 text-black animate-pulse" />
          </div>

          <div
            onClick={() => scrollTabs('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-40 md:hidden bg-gradient-to-l from-yellow-50 to-transparent pl-4 pr-1 py-4 flex items-center cursor-pointer active:scale-95 transition-transform clickable"
          >
            <ChevronRight className="w-6 h-6 text-black animate-pulse" />
          </div>

          <div
            ref={tabsContainerRef}
            className="flex justify-start md:justify-center -mb-1 px-12 md:px-4 pt-4 overflow-x-auto no-scrollbar gap-2 snap-x relative z-30 scroll-smooth"
          >
            {['shoes', 'bags', 'helmets', 'others'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`
                  flex-shrink-0 snap-center
                  px-6 md:px-8 py-3 md:py-4 rounded-t-2xl font-black uppercase text-sm md:text-base border-x-4 border-t-4 border-black transition-all relative cursor-pointer clickable
                  ${activeTab === tab
                    ? 'bg-white z-30 -translate-y-2 pb-6'
                    : 'bg-neutral-300 text-neutral-500 hover:bg-neutral-200'}
                `}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white border-4 border-black rounded-b-3xl rounded-tr-3xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] p-6 md:p-12 min-h-[400px] relative z-20">
          <div className="absolute top-6 left-6 w-4 h-4 border-2 border-black rounded-full flex items-center justify-center"><div className="w-full h-[2px] bg-black rotate-45"></div></div>
          <div className="absolute top-6 right-6 w-4 h-4 border-2 border-black rounded-full flex items-center justify-center"><div className="w-full h-[2px] bg-black rotate-45"></div></div>
          <div className="absolute bottom-6 left-6 w-4 h-4 border-2 border-black rounded-full flex items-center justify-center"><div className="w-full h-[2px] bg-black rotate-45"></div></div>
          <div className="absolute bottom-6 right-6 w-4 h-4 border-2 border-black rounded-full flex items-center justify-center"><div className="w-full h-[2px] bg-black rotate-45"></div></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 md:gap-y-8 mt-4">
            <AnimatePresence mode="wait">
              {pricelist[activeTab].map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: index * 0.05 }}
                  className="border-b-2 border-dashed border-neutral-300 pb-4 group"
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2 gap-2">
                    <h3 className="font-black text-lg md:text-xl uppercase group-hover:text-red-600 transition-colors leading-tight">{item.name}</h3>
                    <div className="self-start sm:self-auto">
                      <span className="font-bold font-mono text-base md:text-lg bg-yellow-300 px-2 py-0.5 border border-black transform -rotate-1 inline-block">{item.price}</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-neutral-500 text-sm leading-relaxed">{item.desc}</p>
                    <span className="font-bold text-xs flex items-center gap-1 opacity-60 bg-neutral-100 w-fit px-2 py-1 rounded-full"><Clock className="w-3 h-3" /> {item.time}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://wa.me/6285259499125"
            className="inline-flex items-center gap-3 text-lg font-black border-b-4 border-red-600 hover:text-red-600 transition-colors cursor-pointer clickable"
          >
            KONSULTASI GRATIS VIA WA <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricelistSection;
