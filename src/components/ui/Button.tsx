import React from 'react';
import { useAppMotion } from './MotionContext';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  className = '',
  disabled,
  ...props
}) => {
  const { isReducedMotion } = useAppMotion();

  // Sliding fill effect styles
  const isPrimary = variant === 'primary';
  const isSecondary = variant === 'secondary';

  const baseStyles = {
    borderRadius: 'var(--tema-radius)',
    borderWidth: 'var(--tema-border-width)',
    textTransform: 'var(--tema-label-transform)' as React.CSSProperties['textTransform'],
    letterSpacing: 'var(--tema-label-tracking)',
    fontFamily: 'var(--tema-font-label)',
  };

  return (
    <button
      {...props}
      disabled={disabled}
      className={`group relative inline-flex items-center justify-center min-h-[44px] min-w-[44px] px-6 py-3 text-xs font-medium cursor-pointer overflow-hidden transition-colors ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      } ${className}`}
      style={{
        ...baseStyles,
        borderColor: isPrimary
          ? 'var(--tema-color-accent)'
          : isSecondary
          ? 'var(--tema-color-border)'
          : 'var(--tema-color-text)',
        backgroundColor: isPrimary
          ? 'var(--tema-color-accent)'
          : 'transparent',
        color: isPrimary
          ? 'var(--tema-color-on-accent)'
          : 'var(--tema-color-text)',
      }}
    >
      {/* Straight sliding fill layer */}
      {!disabled && !isReducedMotion && (
        <span
          aria-hidden="true"
          className="absolute inset-0 w-full h-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
          style={{
            backgroundColor: isPrimary
              ? 'var(--tema-color-text)'
              : 'var(--tema-color-accent)',
          }}
        />
      )}

      {/* Button content */}
      <span
        className={`relative z-10 inline-flex items-center gap-2 whitespace-nowrap transition-colors duration-300 ${
          !isReducedMotion
            ? isPrimary
              ? 'group-hover:text-[var(--tema-color-surface)]'
              : 'group-hover:text-[var(--tema-color-on-accent)]'
            : ''
        }`}
      >
        {children}
      </span>
    </button>
  );
};
