import React from 'react';

const Logo = ({ size = 'md', showText = true }) => {
  const sizes = {
    sm: { icon: "w-8 h-8 text-lg", text: "text-lg" },
    md: { icon: "w-10 h-10 text-xl", text: "text-xl" },
    lg: { icon: "w-12 h-12 text-2xl", text: "text-2xl" }
  };

  return (
    <div className="flex items-center gap-2 transform -rotate-2">
      <div className={`
        ${sizes[size].icon}
        bg-black text-[#FDFBF7] 
        flex items-center justify-center 
        font-black 
        rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] 
        animate-pulse
      `}>
        W
      </div>
      {showText && (
        <span className={`font-black ${sizes[size].text} tracking-tighter hidden md:block`}>
          WASSEN.
        </span>
      )}
    </div>
  );
};

export default Logo;
