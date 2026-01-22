import { useMotionValue, useScroll, useVelocity, useSpring, useTransform, useAnimationFrame } from 'framer-motion';

export const useMarquee = (baseVelocity) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], { clamp: false });
  const x = useTransform(baseX, (v) => `${v}%`);

  useAnimationFrame((t, delta) => {
    let moveBy = baseVelocity * (delta / 1000);
    let boostMultiplier = 1 + (Math.abs(velocityFactor.get()) / 100);
    moveBy = moveBy * boostMultiplier;
    let newX = baseX.get() + moveBy;

    if (baseVelocity < 0 && newX <= -50) {
      newX = 0;
    } else if (baseVelocity > 0 && newX >= 0) {
      newX = -50;
    }

    baseX.set(newX);
  });

  return x;
};
