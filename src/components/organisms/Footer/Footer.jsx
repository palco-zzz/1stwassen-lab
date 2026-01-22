import React from 'react';
import { Instagram, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#FDFBF7] text-black py-12 px-6 border-t-4 border-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-black tracking-tighter uppercase">WASSEN LAB.</h2>
          <p className="font-mono text-sm mt-2 font-bold">EST. 2024 • PURWOREJO</p>
          <p className="font-mono text-xs mt-1 font-bold">
            Design by <a href="https://www.instagram.com/zxenxi" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-colors">ZXENXI</a>
          </p>
        </div>
        <div className="flex gap-4">
          <a href="https://www.instagram.com/wassen.lab/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 border-2 border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all cursor-pointer clickable">
            <Instagram />
          </a>
          <a href="https://www.tiktok.com/@wassen.lab?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" className="w-12 h-12 border-2 border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all cursor-pointer clickable">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
              <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
            </svg>
          </a>
          <a href="https://wa.me/6285259499125" target="_blank" rel="noopener noreferrer" className="w-12 h-12 border-2 border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all cursor-pointer clickable">
            <MessageCircle />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
