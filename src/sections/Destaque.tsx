import React from 'react';
import { SiteContent } from '../content';
import { AntesDepois } from '../components/ui/AntesDepois';

interface DestaqueProps {
  content: SiteContent['destaque'];
}

export const Destaque: React.FC<DestaqueProps> = ({ content }) => {
  if (!content.enabled) return null;

  return (
    <section
      id="destaque"
      aria-labelledby="titulo-destaque"
      className="py-16 md:py-24 border-b border-[var(--tema-color-border)] bg-[var(--tema-color-bg)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="pb-8 border-b border-[var(--tema-color-border)] mb-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 bg-[var(--tema-color-accent)] inline-block" />
            <span className="font-mono text-xs uppercase tracking-wider text-[var(--tema-color-text-muted)]">
              {content.kicker}
            </span>
          </div>
          <h2
            id="titulo-destaque"
            className="text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--tema-color-text)]"
            style={{
              fontFamily: 'var(--tema-font-display)',
              letterSpacing: '-0.02em',
            }}
          >
            {content.titulo}
          </h2>
          <p className="mt-3 text-sm md:text-base text-[var(--tema-color-text-muted)] max-w-2xl">
            {content.descricao}
          </p>
        </div>

        {/* Before and After Interactive Component */}
        <div className="max-w-5xl mx-auto">
          <AntesDepois
            antes={content.antes}
            depois={content.depois}
            rotuloAntes={content.rotuloAntes}
            rotuloDepois={content.rotuloDepois}
            cotaLargura={content.cotaLargura}
            cotaAltura={content.cotaAltura}
          />

          <div className="mt-4 flex items-center justify-between text-xs font-mono text-[var(--tema-color-text-muted)]">
            <span>ARRASTE O CONTROLADOR OU USE AS TECLAS DE SETA (← / →)</span>
            <span>COTA // {content.cotaLargura} × {content.cotaAltura}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
