import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Zap, ShieldCheck } from 'lucide-react';

const ServicesSection = () => {
  return (
    <section id="services" className="py-32 px-4 md:px-12 max-w-8xl mx-auto bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
      <div className="mb-20 text-center">
        <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase transform -skew-x-6 inline-block border-b-8 border-red-600 leading-[0.8]">
          TREATMENT<br/>MENU
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
        {/* Card 1: Shoes - Big Blob */}
        <motion.div
          whileHover={{ y: -10, rotate: 1 }}
          className="md:col-span-7 bg-[#FDFBF7] border-4 border-black p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] rounded-[2rem] relative overflow-hidden group min-h-[400px] flex flex-col justify-between cursor-pointer"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400 rounded-full filter blur-3xl opacity-20 group-hover:scale-125 transition-transform duration-500"></div>
          <div>
            <Sparkles className="w-16 h-16 text-black mb-6" />
            <h3 className="text-5xl md:text-6xl font-black mb-4 uppercase leading-none">Shoes<br/>Revival</h3>
            <p className="text-xl font-bold font-mono text-neutral-600">Deep Clean, Unyellowing, Repaint.</p>
          </div>
          <div className="flex gap-2 mt-8 flex-wrap">
            {['Canvas', 'Suede', 'Leather'].map(tag => (
              <span key={tag} className="px-4 py-2 border-2 border-black rounded-full text-sm font-bold bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">{tag}</span>
            ))}
          </div>
        </motion.div>

        {/* Card 2: Express */}
        <motion.div
          whileHover={{ scale: 1.02, rotate: -1 }}
          className="md:col-span-5 bg-red-600 border-4 border-black p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] rounded-[1rem] flex flex-col justify-center items-center text-center text-[#FDFBF7] cursor-pointer"
        >
          <Zap className="w-20 h-20 mb-4 fill-yellow-400 stroke-black stroke-2" />
          <h3 className="text-4xl md:text-6xl font-black italic transform -skew-x-12">FAST<br/>SERVICE</h3>
          <div className="mt-6 bg-black text-white px-6 py-2 rounded font-mono font-bold text-lg rotate-2">
            2 - 6 JAM JADI
          </div>
        </motion.div>

        {/* Card 3: Bags */}
        <motion.div
          whileHover={{ y: -5 }}
          className="md:col-span-6 bg-neutral-900 text-[#FDFBF7] border-4 border-black p-10 shadow-[8px_8px_0px_0px_rgba(255,0,0,1)] rounded-[3rem_1rem_3rem_1rem] flex flex-col justify-between cursor-pointer"
        >
          <div className="flex justify-between items-start">
            <ShieldCheck className="w-12 h-12" />
            <span className="text-4xl font-black opacity-20">02</span>
          </div>
          <div className="mt-8">
            <h3 className="text-4xl font-black uppercase">Tas & Koper</h3>
            <p className="text-neutral-400 mt-2 font-mono">Backpack, Carrier, Handbag.</p>
          </div>
        </motion.div>

        {/* Card 4: Helmets */}
        <motion.div
          whileHover={{ y: -5 }}
          className="md:col-span-6 bg-[#FDFBF7] border-4 border-black p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-[1rem_3rem_1rem_3rem] flex flex-col justify-between cursor-pointer"
        >
          <div className="flex justify-between items-start">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white font-bold">H</div>
            <span className="text-4xl font-black opacity-10">03</span>
          </div>
          <div className="mt-8">
            <h3 className="text-4xl font-black uppercase">Helm</h3>
            <p className="text-neutral-600 mt-2 font-mono">Full face & Half face detailing.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
