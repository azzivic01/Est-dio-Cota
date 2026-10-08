import React, { useState, useRef, useCallback } from 'react';
import { Cotas } from './Cotas';
import { ImageAsset } from '../../content';

interface AntesDepoisProps {
  antes: {
    imagem: ImageAsset;
    observacao: string;
  };
  depois: {
    imagem: ImageAsset;
    observacao: string;
  };
  rotuloAntes?: string;
  rotuloDepois?: string;
  cotaLargura?: string;
  cotaAltura?: string;
}

export const AntesDepois: React.FC<AntesDepoisProps> = ({
  antes,
  depois,
  rotuloAntes = 'Antes',
  rotuloDepois = 'Depois',
  cotaLargura = '[medida]',
  cotaAltura = '[medida]',
}) => {
  const [sliderPos, setSliderPos] = useState<number>(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef<boolean>(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(Math.round(percentage));
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    updatePosition(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    isDraggingRef.current = false;
    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      // Ignored if already released
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
      e.preventDefault();
      setSliderPos((prev) => Math.max(0, prev - 5));
    } else if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
      e.preventDefault();
      setSliderPos((prev) => Math.min(100, prev + 5));
    } else if (e.key === 'Home') {
      e.preventDefault();
      setSliderPos(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      setSliderPos(100);
    }
  };

  return (
    <div className="w-full flex flex-col gap-4">
      {/* Slider viewport container */}
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className="relative w-full aspect-[16/9] overflow-hidden select-none cursor-ew-resize bg-[var(--tema-color-bg)]"
        style={{
          border: 'var(--tema-border-width) solid var(--tema-color-border)',
          borderRadius: 'var(--tema-radius)',
        }}
      >
        {/* Layer 1: "Depois" (full underlying image) */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={depois.imagem.src}
            alt={depois.imagem.alt}
            className="w-full h-full object-cover"
            style={{ objectPosition: depois.imagem.objectPosition || 'center' }}
            loading="lazy"
            draggable={false}
          />
        </div>

        {/* Layer 2: "Antes" (clipped overlay) */}
        <div
          className="absolute inset-0 h-full overflow-hidden"
          style={{ width: `${sliderPos}%` }}
        >
          <div
            className="absolute inset-0 h-full"
            style={{
              width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%',
              minWidth: '100%',
            }}
          >
            <img
              src={antes.imagem.src}
              alt={antes.imagem.alt}
              className="w-full h-full object-cover"
              style={{ objectPosition: antes.imagem.objectPosition || 'center' }}
              loading="lazy"
              draggable={false}
            />
          </div>
        </div>

        {/* Cotas overlay */}
        <Cotas
          cotaHorizontal={cotaLargura}
          cotaVertical={cotaAltura}
          variant="accent"
          forceVisible
        />

        {/* Floating Labels in top corners */}
        <div className="absolute top-4 left-4 z-20 pointer-events-none">
          <span
            className="px-2.5 py-1 text-xs font-mono font-medium tracking-wider bg-[var(--tema-color-surface)] text-[var(--tema-color-text)]"
            style={{
              fontFamily: 'var(--tema-font-mono)',
              border: 'var(--tema-border-width) solid var(--tema-color-border)',
              letterSpacing: 'var(--tema-label-tracking)',
            }}
          >
            {rotuloAntes}
          </span>
        </div>

        <div className="absolute top-4 right-4 z-20 pointer-events-none">
          <span
            className="px-2.5 py-1 text-xs font-mono font-medium tracking-wider bg-[var(--tema-color-surface)] text-[var(--tema-color-text)]"
            style={{
              fontFamily: 'var(--tema-font-mono)',
              border: 'var(--tema-border-width) solid var(--tema-color-border)',
              letterSpacing: 'var(--tema-label-tracking)',
            }}
          >
            {rotuloDepois}
          </span>
        </div>

        {/* Divider Bar & Handle with Role Slider */}
        <div
          className="absolute top-0 bottom-0 z-30"
          style={{ left: `${sliderPos}%` }}
        >
          {/* Vertical 1px hairline divider in accent */}
          <div className="absolute top-0 bottom-0 -left-[0.5px] w-[1px] bg-[var(--tema-color-accent)]" />

          {/* Interactive Thumb */}
          <button
            type="button"
            role="slider"
            aria-label="Controle de comparação antes e depois da reforma"
            aria-valuenow={sliderPos}
            aria-valuemin={0}
            aria-valuemax={100}
            onKeyDown={handleKeyDown}
            className="absolute top-1/2 -left-5 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-[var(--tema-color-surface)] text-[var(--tema-color-text)] border border-[var(--tema-color-accent)] shadow-md cursor-ew-resize hover:bg-[var(--tema-color-accent)] hover:text-[var(--tema-color-on-accent)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--tema-color-accent-ink)]"
            style={{
              fontFamily: 'var(--tema-font-mono)',
            }}
          >
            <span className="text-[11px] font-mono tracking-tighter">
              ⟷
            </span>
          </button>
        </div>
      </div>

      {/* Observações técnicas do antes e depois */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-[var(--tema-color-surface)]"
        style={{
          border: 'var(--tema-border-width) solid var(--tema-color-border)',
          borderRadius: 'var(--tema-radius)',
        }}
      >
        <div>
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--tema-color-text-muted)] block">
            {rotuloAntes} // Condição original
          </span>
          <p className="text-xs text-[var(--tema-color-text)] mt-1 leading-relaxed">
            {antes.observacao}
          </p>
        </div>
        <div>
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--tema-color-accent-ink)] block">
            {rotuloDepois} // Solução executada
          </span>
          <p className="text-xs text-[var(--tema-color-text)] mt-1 leading-relaxed">
            {depois.observacao}
          </p>
        </div>
      </div>
    </div>
  );
};
