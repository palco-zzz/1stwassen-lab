import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { testimonials } from '../../../data';

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 px-4 bg-[#FDFBF7] overflow-hidden border-t-4 border-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-32 bg-black -rotate-2 z-0"></div>
          <h2 className="relative z-10 text-5xl md:text-7xl font-black text-white tracking-tighter uppercase transform rotate-2">
            KATA TETANGGA
          </h2>
          <p className="relative z-10 text-white font-mono mt-2">Bukan buzzer, ini beneran.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-8">
          {testimonials.map((testi, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
              className={`
                relative p-6 border-4 border-black ${testi.color} ${testi.rotation}
                shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between min-h-[300px] cursor-default
              `}
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-white/50 backdrop-blur-sm border-2 border-white/20 rotate-1 shadow-sm"></div>

              <div>
                <div className="mb-4">
                  {[1, 2, 3, 4, 5].map(star => (
                    <Star key={star} className="inline-block w-5 h-5 fill-black text-black" />
                  ))}
                </div>
                <p className="font-bold text-lg leading-tight mb-6">"{testi.text}"</p>
              </div>

              <div className="flex items-center gap-3 border-t-2 border-black pt-4">
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white font-bold">
                  {testi.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-black uppercase text-sm">{testi.name}</h4>
                  <p className="text-xs font-mono font-bold opacity-60">{testi.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
