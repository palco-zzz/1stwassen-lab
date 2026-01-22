import React from 'react';
import { motion } from 'framer-motion';
import { Package, Sparkles, Truck } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: "DROP / PICKUP",
    desc: "Antar ke Main Lab, Drop Point, atau chat WA buat kita jemput.",
    icon: <Package className="w-8 h-8 md:w-10 md:h-10 text-white" />,
    color: "bg-black",
    textColor: "text-white",
    rotate: "-rotate-2"
  },
  {
    id: 2,
    title: "MAGIC PROCESS",
    desc: "Tim ahli kami bakal nyuci, repaint, & benerin sepatu lo penuh cinta.",
    icon: <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-black" />,
    color: "bg-yellow-400",
    textColor: "text-black",
    rotate: "rotate-1"
  },
  {
    id: 3,
    title: "SIAP FLEXING",
    desc: "Udah ganteng? Kita kabarin. Tinggal ambil atau kita anter balik.",
    icon: <Truck className="w-8 h-8 md:w-10 md:h-10 text-white" />,
    color: "bg-red-600",
    textColor: "text-white",
    rotate: "-rotate-2"
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 px-4 max-w-7xl mx-auto bg-[url('https://www.transparenttextures.com/patterns/cardboard-flat.png')]">
      <div className="text-center mb-16">
        <span className="inline-block bg-yellow-400 border-2 border-black text-black font-bold px-4 py-1 text-sm mb-4 transform -rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          GAMPANG BANGET
        </span>
        <h2 className="text-6xl md:text-7xl font-black tracking-tighter uppercase mb-4">
          CARA <span className="text-transparent stroke-text">MAIN.</span>
        </h2>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-0 relative">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10, rotate: 0 }}
              className={`
                relative z-10 w-full md:w-[350px] p-8 border-4 border-black ${step.color} ${step.textColor} ${step.rotate}
                shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-3xl flex flex-col items-center text-center cursor-default
              `}
            >
              <div className="w-16 h-16 border-4 border-black bg-white rounded-full flex items-center justify-center mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                {step.icon}
              </div>
              <h3 className="text-2xl font-black uppercase mb-3">{step.title}</h3>
              <p className="font-bold font-mono text-sm opacity-80">{step.desc}</p>

              <div className="absolute -top-4 -left-4 w-10 h-10 bg-white border-4 border-black text-black font-black flex items-center justify-center rounded-full text-lg">
                {step.id}
              </div>
            </motion.div>

            {index !== steps.length - 1 && (
              <div className="hidden md:flex w-24 h-24 items-center justify-center relative z-0 transform -translate-y-4">
                <svg viewBox="0 0 100 50" className="w-full h-full text-black/20 fill-none stroke-current stroke-[3] transform rotate-12">
                  <path d="M10,25 Q50,5 90,25" markerEnd="url(#arrowhead)" />
                </svg>
              </div>
            )}

            {index !== steps.length - 1 && (
              <div className="md:hidden h-12 w-1 bg-black/20 rounded-full my-2"></div>
            )}
          </React.Fragment>
        ))}

        <svg style={{ display: 'none' }}>
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
            </marker>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default HowItWorksSection;
