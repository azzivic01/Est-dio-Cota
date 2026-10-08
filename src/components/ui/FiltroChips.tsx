import React from 'react';
import { useAppMotion } from './MotionContext';

interface FiltroChipsProps {
  filtros: string[];
  ativo: string;
  onSelecionar: (filtro: string) => void;
  className?: string;
}

export const FiltroChips: React.FC<FiltroChipsProps> = ({
  filtros,
  ativo,
  onSelecionar,
  className = '',
}) => {
  const { isReducedMotion } = useAppMotion();

  return (
    <div
      role="group"
      aria-label="Filtros de projetos"
      className={`inline-flex flex-wrap items-center bg-[var(--tema-color-bg)] ${className}`}
      style={{
        border: 'var(--tema-border-width) solid var(--tema-color-border)',
        borderRadius: 'var(--tema-radius)',
      }}
    >
      {filtros.map((filtro, index) => {
        const isSelected = ativo === filtro;
        return (
          <button
            key={filtro}
            type="button"
            aria-pressed={isSelected}
            onClick={() => onSelecionar(filtro)}
            className={`relative min-h-[44px] px-5 py-2.5 text-xs font-mono tracking-wider cursor-pointer whitespace-nowrap transition-colors ${
              index > 0
                ? 'border-l border-[var(--tema-color-border)]'
                : ''
            } ${
              isSelected
                ? 'bg-[var(--tema-color-text)] text-[var(--tema-color-surface)] font-medium'
                : 'text-[var(--tema-color-text)] hover:bg-[var(--tema-color-surface)]'
            }`}
            style={{
              fontFamily: 'var(--tema-font-mono)',
              textTransform: 'var(--tema-label-transform)' as React.CSSProperties['textTransform'],
              letterSpacing: 'var(--tema-label-tracking)',
            }}
          >
            {/* Active accent indicator marker */}
            {isSelected && (
              <span
                aria-hidden="true"
                className={`absolute top-0 left-0 right-0 h-[2px] bg-[var(--tema-color-accent)] ${
                  isReducedMotion ? '' : 'transition-all duration-200'
                }`}
              />
            )}
            <span>{filtro}</span>
          </button>
        );
      })}
    </div>
  );
};
