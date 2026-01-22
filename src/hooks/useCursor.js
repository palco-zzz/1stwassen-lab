import { useState, useEffect } from 'react';
import { useSpring } from 'framer-motion';

export const useCursor = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const cursorX = useSpring(0, { stiffness: 500, damping: 28 });
  const cursorY = useSpring(0, { stiffness: 500, damping: 28 });

  useEffect(() => {
    const moveCursor = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      setMousePosition({
        x: (e.clientX - centerX) / 50,
        y: (e.clientY - centerY) / 50
      });
    };

    const checkHover = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer') ||
        target.classList.contains('clickable')
      ) {
        setCursorVariant("hover");
      } else {
        setCursorVariant("default");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", checkHover);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", checkHover);
    };
  }, [cursorX, cursorY]);

  const variants = {
    default: {
      height: 32,
      width: 32,
      x: -16,
      y: -16,
      borderWidth: 2,
      borderColor: "#000000",
      backgroundColor: "transparent",
      mixBlendMode: "normal"
    },
    hover: {
      height: 64,
      width: 64,
      x: -32,
      y: -32,
      borderWidth: 0,
      backgroundColor: "#DC2626",
      opacity: 0.5,
      mixBlendMode: "multiply",
    }
  };

  return {
    cursorPos,
    cursorVariant,
    cursorX,
    cursorY,
    mousePosition,
    variants
  };
};
