import React from 'react';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'md',
  className = '',
  ...props 
}) => {
  const baseStyles = "font-bold border-2 border-black transition-all cursor-pointer clickable";
  
  const variants = {
    primary: "bg-red-600 text-white hover:translate-x-[1px] hover:translate-y-[1px] shadow-[4px_4px_0px_0px_black] hover:shadow-none",
    secondary: "bg-black text-white hover:bg-red-600",
    outline: "bg-white hover:bg-neutral-100",
    whatsapp: "bg-[#25D366] text-white shadow-[4px_4px_0px_0px_black]"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm rounded-lg",
    md: "px-6 py-3 text-base rounded-xl",
    lg: "px-8 py-4 text-lg rounded-xl"
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
