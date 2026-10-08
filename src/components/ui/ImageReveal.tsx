import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useAppMotion } from './MotionContext';

interface ImageRevealProps {
  src: string;
  alt: string;
  aspectRatio?: '16/9' | '4/3' | '3/4' | '1/1';
  objectPosition?: string;
  className?: string;
  priority?: boolean;
}

export const ImageReveal: React.FC<ImageRevealProps> = ({
  src,
  alt,
  aspectRatio = '16/9',
  objectPosition = 'center center',
  className = '',
  priority = false,
}) => {
  const { isReducedMotion } = useAppMotion();
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const aspectClasses = {
    '16/9': 'aspect-[16/9]',
    '4/3': 'aspect-[4/3]',
    '3/4': 'aspect-[3/4]',
    '1/1': 'aspect-square',
  }[aspectRatio];

  if (hasError) {
    return (
      <div
        className={`w-full ${aspectClasses} bg-[var(--tema-color-border)] flex flex-col items-center justify-center p-4 text-center ${className}`}
        style={{
          border: 'var(--tema-border-width) solid var(--tema-color-border)',
        }}
      >
        <span className="font-mono text-xs text-[var(--tema-color-text-muted)] uppercase tracking-wider">
          [arquivo técnico indisponível]
        </span>
        <span className="text-xs text-[var(--tema-color-text)] mt-1 font-mono">
          {alt}
        </span>
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden w-full ${aspectClasses} bg-[var(--tema-color-bg)] ${className}`}
      style={{
        border: 'var(--tema-border-width) solid var(--tema-color-border)',
      }}
    >
      {/* Background placeholder subtle grid while loading */}
      {!isLoaded && (
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[var(--tema-color-bg)] flex items-center justify-center font-mono text-[11px] text-[var(--tema-color-text-muted)]"
        >
          [carregando chapa técnica]
        </div>
      )}

      {isReducedMotion ? (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          loading={priority ? 'eager' : 'lazy'}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover transition-opacity duration-150 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ objectPosition }}
        />
      ) : (
        <motion.div
          className="w-full h-full"
          initial={{
            clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
            opacity: 0.9,
          }}
          whileInView={{
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            opacity: 1,
          }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <motion.img
            src={src}
            alt={alt}
            referrerPolicy="no-referrer"
            loading={priority ? 'eager' : 'lazy'}
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
            className="w-full h-full object-cover"
            style={{ objectPosition }}
            initial={{ scale: 1.04 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 1.0,
              ease: [0.16, 1, 0.3, 1],
            }}
          />
        </motion.div>
      )}
    </div>
  );
};
