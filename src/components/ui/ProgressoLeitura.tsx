import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { useAppMotion } from './MotionContext';

export const ProgressoLeitura: React.FC = () => {
  const { isReducedMotion } = useAppMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  if (isReducedMotion) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-50 pointer-events-none"
      style={{ height: 'var(--tema-border-width)' }}
    >
      <motion.div
        className="h-full origin-left bg-[var(--tema-color-accent)]"
        style={{ scaleX }}
      />
    </div>
  );
};
