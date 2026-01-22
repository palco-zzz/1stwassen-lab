import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ExternalLink } from 'lucide-react';
import { locations } from '../../../data';

const LocationSection = () => {
  const [activeLocation, setActiveLocation] = useState(0);

  return (
    <section id="location" className="py-32 bg-black text-[#FDFBF7] relative clip-path-jagged">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-6xl font-black uppercase leading-none mb-6">
            DROP IT<br/><span className="text-red-600 stroke-text">HERE.</span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-md">
            Mager ke pusat? Drop aja di point terdekat. Kita jemput bola.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-1 space-y-4">
            {locations.map((loc, index) => (
              <motion.div
                key={loc.id}
                onClick={() => setActiveLocation(index)}
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className={`
                  cursor-pointer group p-6 border-l-4 transition-all duration-300 relative overflow-hidden clickable
                  ${activeLocation === index
                    ? 'bg-[#222] border-red-600 pl-8'
                    : 'bg-transparent border-neutral-700 hover:bg-[#111] hover:border-white'}
                `}
              >
                <div className="relative z-10">
                  <span className={`
                    text-xs font-bold px-2 py-1 rounded mb-2 inline-block
                    ${activeLocation === index ? 'bg-red-600 text-white' : 'bg-neutral-800 text-neutral-400'}
                  `}>
                    {loc.type}
                  </span>
                  <h3 className={`text-2xl font-black uppercase ${activeLocation === index ? 'text-white' : 'text-neutral-400 group-hover:text-white'}`}>
                    {loc.name}
                  </h3>
                  <p className="text-neutral-500 text-sm mt-1 font-mono">{loc.address}</p>
                </div>
                {activeLocation === index && (
                  <motion.div
                    layoutId="activeGlow"
                    className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-transparent pointer-events-none"
                  />
                )}
              </motion.div>
            ))}
          </div>

          <div className="flex-1 relative min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLocation}
                initial={{ opacity: 0, y: 20, rotate: 2 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                exit={{ opacity: 0, y: -20, rotate: -2 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full bg-[#FDFBF7] text-black border-4 border-white rounded-3xl p-8 flex flex-col justify-between shadow-[20px_20px_0px_0px_#cc0000] relative overflow-hidden"
              >
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/shattered-island.png')]"></div>

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <MapPin className="w-12 h-12 text-red-600 fill-current" />
                    <span className="font-black text-6xl opacity-10">0{activeLocation + 1}</span>
                  </div>
                  <h3 className="text-4xl font-black uppercase mb-4 leading-none">{locations[activeLocation].name}</h3>
                  <p className="text-lg font-medium text-neutral-600">{locations[activeLocation].desc}</p>
                  <div className="mt-6 p-4 bg-yellow-100 border-2 border-black rounded-lg transform -rotate-1">
                    <p className="font-mono text-sm font-bold">📍 {locations[activeLocation].address}</p>
                  </div>
                </div>

                <div className="relative z-10 mt-8">
                  <a
                    href={locations[activeLocation].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block bg-black text-white text-center py-4 rounded-xl font-black text-xl hover:bg-red-600 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 cursor-pointer clickable"
                  >
                    OPEN GOOGLE MAPS <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="absolute -top-10 -right-10 w-full h-full border-4 border-dashed border-neutral-600 rounded-full z-0 animate-spin-slow pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
