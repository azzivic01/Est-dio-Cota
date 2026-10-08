import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { useAppMotion } from './MotionContext';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
}) => {
  const { isReducedMotion } = useAppMotion();
  const modalRef = useRef<HTMLDivElement>(null);
  const previouslyFocusedElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      previouslyFocusedElement.current = document.activeElement as HTMLElement;

      // Lock body scroll
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      // Focus first focusable element inside modal
      const timer = setTimeout(() => {
        const focusableElements = modalRef.current?.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements && focusableElements.length > 0) {
          focusableElements[0].focus();
        } else {
          modalRef.current?.focus();
        }
      }, 50);

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          e.preventDefault();
          onClose();
          return;
        }

        if (e.key === 'Tab') {
          if (!modalRef.current) return;
          const focusable = Array.from(
            modalRef.current.querySelectorAll<HTMLElement>(
              'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            )
          ).filter((el) => !el.hasAttribute('disabled') && el.offsetParent !== null);

          if (focusable.length === 0) {
            e.preventDefault();
            return;
          }

          const first = focusable[0];
          const last = focusable[focusable.length - 1];

          if (e.shiftKey) {
            if (document.activeElement === first) {
              e.preventDefault();
              last.focus();
            }
          } else {
            if (document.activeElement === last) {
              e.preventDefault();
              first.focus();
            }
          }
        }
      };

      document.addEventListener('keydown', handleKeyDown);

      return () => {
        document.body.style.overflow = originalOverflow;
        document.removeEventListener('keydown', handleKeyDown);
        clearTimeout(timer);
        if (previouslyFocusedElement.current) {
          previouslyFocusedElement.current.focus();
        }
      };
    }
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="presentation"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6"
        >
          {/* Backdrop with scrim */}
          <motion.div
            aria-hidden="true"
            onClick={onClose}
            className="fixed inset-0 bg-[var(--tema-color-text)]/60 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: isReducedMotion ? 0.1 : 0.2 }}
          />

          {/* Modal Container */}
          <motion.div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-label={title}
            tabIndex={-1}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[var(--tema-color-surface)] shadow-2xl z-10 flex flex-col"
            style={{
              border: 'var(--tema-border-width) solid var(--tema-color-border)',
              borderRadius: 'var(--tema-radius-lg)',
            }}
            initial={
              isReducedMotion
                ? { opacity: 0 }
                : { opacity: 0, scale: 0.98, y: 12 }
            }
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={
              isReducedMotion
                ? { opacity: 0 }
                : { opacity: 0, scale: 0.98, y: 8 }
            }
            transition={{
              duration: isReducedMotion ? 0.15 : 0.25,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {/* Modal Header bar */}
            <div
              className="flex items-center justify-between px-6 py-4 bg-[var(--tema-color-bg)] sticky top-0 z-20"
              style={{
                borderBottom: 'var(--tema-border-width) solid var(--tema-color-border)',
              }}
            >
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-[var(--tema-color-accent)] inline-block" />
                <span
                  className="font-mono text-xs tracking-wider uppercase text-[var(--tema-color-text-muted)]"
                  style={{ fontFamily: 'var(--tema-font-mono)' }}
                >
                  Prancha Técnica // Detalhamento
                </span>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Fechar modal de projeto"
                className="inline-flex items-center justify-center min-w-[44px] min-h-[44px] -mr-2 text-[var(--tema-color-text)] hover:text-[var(--tema-color-accent-ink)] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-8 flex-1">{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
