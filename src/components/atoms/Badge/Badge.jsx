import React from 'react';

const Badge = ({ 
  children, 
  variant = 'default',
  rotate = false,
  className = '' 
}) => {
  const variants = {
    default: "bg-black text-white",
    outline: "bg-white border-2 border-black",
    yellow: "bg-yellow-400 text-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
    red: "bg-red-600 text-white",
    price: "bg-yellow-300 border border-black"
  };

  const rotateClass = rotate ? "transform -rotate-2" : "";

  return (
    <span className={`
      inline-block px-4 py-1 font-bold text-sm uppercase
      ${variants[variant]}
      ${rotateClass}
      ${className}
    `}>
      {children}
    </span>
  );
};

export default Badge;
