import React from 'react';
import { useAppMotion } from './MotionContext';

interface LinkAnimadoProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  className?: string;
  accentColor?: boolean;
}

export const LinkAnimado: React.FC<LinkAnimadoProps> = ({
  href,
  children,
  className = '',
  accentColor = false,
  ...props
}) => {
  const { isReducedMotion } = useAppMotion();

  return (
    <a
      href={href}
      {...props}
      className={`group relative inline-flex items-center min-h-[44px] px-2 py-2 text-xs font-mono tracking-wider transition-colors cursor-pointer ${className}`}
      style={{
        fontFamily: 'var(--tema-font-label)',
        textTransform: 'var(--tema-label-transform)' as React.CSSProperties['textTransform'],
        letterSpacing: 'var(--tema-label-tracking)',
        color: accentColor
          ? 'var(--tema-color-accent-ink)'
          : 'var(--tema-color-text)',
      }}
    >
      <span className="relative z-10">{children}</span>
      {/* Straight sliding underline */}
      <span
        aria-hidden="true"
        className={`absolute bottom-2 left-2 right-2 h-[1px] origin-left bg-[var(--tema-color-accent)] ${
          isReducedMotion
            ? 'opacity-0 group-hover:opacity-100'
            : 'scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]'
        }`}
      />
    </a>
  );
};
