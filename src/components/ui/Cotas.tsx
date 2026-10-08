import React from 'react';
import { motion } from 'motion/react';
import { useAppMotion } from './MotionContext';

interface CotasProps {
  cotaHorizontal?: string;
  cotaVertical?: string;
  className?: string;
  variant?: 'light' | 'accent' | 'contrast';
  forceVisible?: boolean;
}

export const Cotas: React.FC<CotasProps> = ({
  cotaHorizontal = '[medida]',
  cotaVertical = '[medida]',
  className = '',
  variant = 'contrast',
  forceVisible = false,
}) => {
  const { isReducedMotion } = useAppMotion();

  // Color selection based on variant
  const strokeColor =
    variant === 'accent'
      ? 'var(--tema-color-accent)'
      : variant === 'light'
      ? 'var(--tema-color-surface)'
      : 'var(--tema-color-text)';

  const textColor =
    variant === 'accent'
      ? 'var(--tema-color-accent-ink)'
      : variant === 'light'
      ? 'var(--tema-color-surface)'
      : 'var(--tema-color-text)';

  const textBg =
    variant === 'light'
      ? 'var(--tema-color-text)'
      : 'var(--tema-color-surface)';

  const transitionConfig = isReducedMotion
    ? { duration: 0 }
    : {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1] as const,
      };

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 z-10 transition-opacity duration-300 ${
        forceVisible ? 'opacity-100' : 'opacity-85 group-hover:opacity-100 group-focus-within:opacity-100'
      } ${className}`}
    >
      <svg
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <marker
            id={`arrow-h-start-${variant}`}
            viewBox="0 0 8 8"
            refX="0"
            refY="4"
            markerWidth="5"
            markerHeight="5"
            orient="auto"
          >
            <path d="M 6 1 L 1 4 L 6 7" fill="none" stroke={strokeColor} strokeWidth="1" />
          </marker>
          <marker
            id={`arrow-h-end-${variant}`}
            viewBox="0 0 8 8"
            refX="8"
            refY="4"
            markerWidth="5"
            markerHeight="5"
            orient="auto"
          >
            <path d="M 2 1 L 7 4 L 2 7" fill="none" stroke={strokeColor} strokeWidth="1" />
          </marker>
          <marker
            id={`arrow-v-start-${variant}`}
            viewBox="0 0 8 8"
            refX="0"
            refY="4"
            markerWidth="5"
            markerHeight="5"
            orient="auto"
          >
            <path d="M 6 1 L 1 4 L 6 7" fill="none" stroke={strokeColor} strokeWidth="1" />
          </marker>
          <marker
            id={`arrow-v-end-${variant}`}
            viewBox="0 0 8 8"
            refX="8"
            refY="4"
            markerWidth="5"
            markerHeight="5"
            orient="auto"
          >
            <path d="M 2 1 L 7 4 L 2 7" fill="none" stroke={strokeColor} strokeWidth="1" />
          </marker>
        </defs>

        {/* --- COTA HORIZONTAL (embaixo) --- */}
        {/* Linha de chamada esquerda */}
        <motion.line
          x1="12"
          y1="85%"
          x2="12"
          y2="97%"
          stroke={strokeColor}
          strokeWidth="1"
          strokeDasharray="2 2"
          initial={{ opacity: isReducedMotion ? 1 : 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={transitionConfig}
        />
        {/* Linha de chamada direita */}
        <motion.line
          x1="calc(100% - 12px)"
          y1="85%"
          x2="calc(100% - 12px)"
          y2="97%"
          stroke={strokeColor}
          strokeWidth="1"
          strokeDasharray="2 2"
          initial={{ opacity: isReducedMotion ? 1 : 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={transitionConfig}
        />
        {/* Linha principal horizontal de cota */}
        <motion.line
          x1="16"
          y1="93%"
          x2="calc(100% - 16px)"
          y2="93%"
          stroke={strokeColor}
          strokeWidth="1"
          markerStart={`url(#arrow-h-start-${variant})`}
          markerEnd={`url(#arrow-h-end-${variant})`}
          initial={{ pathLength: isReducedMotion ? 1 : 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={transitionConfig}
        />

        {/* --- COTA VERTICAL (à esquerda) --- */}
        {/* Linha de chamada superior */}
        <motion.line
          x1="15%"
          y1="12"
          x2="3%"
          y2="12"
          stroke={strokeColor}
          strokeWidth="1"
          strokeDasharray="2 2"
          initial={{ opacity: isReducedMotion ? 1 : 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={transitionConfig}
        />
        {/* Linha de chamada inferior */}
        <motion.line
          x1="15%"
          y1="calc(100% - 12px)"
          x2="3%"
          y2="calc(100% - 12px)"
          stroke={strokeColor}
          strokeWidth="1"
          strokeDasharray="2 2"
          initial={{ opacity: isReducedMotion ? 1 : 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={transitionConfig}
        />
        {/* Linha principal vertical de cota */}
        <motion.line
          x1="7%"
          y1="16"
          x2="7%"
          y2="calc(100% - 16px)"
          stroke={strokeColor}
          strokeWidth="1"
          markerStart={`url(#arrow-v-start-${variant})`}
          markerEnd={`url(#arrow-v-end-${variant})`}
          initial={{ pathLength: isReducedMotion ? 1 : 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={transitionConfig}
        />
      </svg>

      {/* Rótulo da cota horizontal centralizado */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
        <span
          className="inline-block px-1.5 py-0.5 text-[11px] font-mono tracking-wider shadow-none"
          style={{
            backgroundColor: textBg,
            color: textColor,
            border: `var(--tema-border-width) solid ${strokeColor}`,
            fontFamily: 'var(--tema-font-mono)',
          }}
        >
          {cotaHorizontal}
        </span>
      </div>

      {/* Rótulo da cota vertical centralizado na lateral */}
      <div className="absolute top-1/2 left-2 -translate-y-1/2 -rotate-90 origin-center">
        <span
          className="inline-block px-1.5 py-0.5 text-[11px] font-mono tracking-wider shadow-none"
          style={{
            backgroundColor: textBg,
            color: textColor,
            border: `var(--tema-border-width) solid ${strokeColor}`,
            fontFamily: 'var(--tema-font-mono)',
          }}
        >
          {cotaVertical}
        </span>
      </div>
    </div>
  );
};
