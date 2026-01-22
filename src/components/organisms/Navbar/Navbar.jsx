import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from '../../atoms/Logo';
import { navLinks } from '../../../data';

const Navbar = ({ onBookNow }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 pointer-events-none"
      >
        <div className={`
          pointer-events-auto
          flex items-center justify-between
          px-4 py-3
          bg-[#FDFBF7]/90 backdrop-blur-sm
          border-2 border-black
          shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
          transition-all duration-300
          ${scrolled ? "w-[90%] md:w-[60%] rounded-full" : "w-[95%] md:w-[90%] rounded-[2rem]"}
        `}>
          <a href="#home" onClick={(e) => handleSmoothScroll(e, '#home')} className="cursor-pointer">
            <Logo />
          </a>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="text-sm font-bold uppercase tracking-wider hover:underline decoration-2 decoration-wavy underline-offset-4 decoration-red-600 transition-all cursor-pointer"
              >
                {link.title}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onBookNow}
              className="hidden md:flex px-6 py-2 bg-red-600 text-[#FDFBF7] text-sm font-bold border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all rounded-lg items-center gap-2 cursor-pointer clickable"
            >
              BOOK NOW
            </button>
            <button
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden w-10 h-10 bg-black text-white flex items-center justify-center rounded-lg border-2 border-black"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed inset-0 bg-[#FDFBF7] z-[60] flex flex-col justify-center items-center border-l-4 border-black"
          >
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-6 w-12 h-12 border-2 border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors clickable"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="flex flex-col gap-6 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-5xl font-black uppercase tracking-tighter hover:text-red-600 transition-colors transform hover:-skew-x-12 clickable"
                >
                  {link.title}
                </a>
              ))}
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  onBookNow();
                }}
                className="mt-4 px-8 py-4 bg-red-600 text-white border-4 border-black rounded-xl font-black text-2xl shadow-[6px_6px_0px_0px_black] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all clickable"
              >
                BOOK SEKARANG
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
