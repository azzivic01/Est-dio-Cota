import React from 'react';
import { SiteContent } from '../content';

interface ProcessoProps {
  content: SiteContent['processo'];
}

export const Processo: React.FC<ProcessoProps> = ({ content }) => {
  if (!content.enabled) return null;

  return (
    <section
      id="processo"
      aria-labelledby="titulo-processo"
      className="py-16 md:py-24 border-b border-[var(--tema-color-border)] bg-[var(--tema-color-bg)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="pb-8 border-b border-[var(--tema-color-border)] mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 bg-[var(--tema-color-accent)] inline-block" />
            <span className="font-mono text-xs uppercase tracking-wider text-[var(--tema-color-text-muted)]">
              {content.kicker}
            </span>
          </div>
          <h2
            id="titulo-processo"
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

        {/* 4 columns separated by 1px hairlines on desktop */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-[var(--tema-color-surface)]"
          style={{
            border: 'var(--tema-border-width) solid var(--tema-color-border)',
            borderRadius: 'var(--tema-radius)',
          }}
        >
          {content.etapas.map((etapa, idx) => (
            <div
              key={etapa.numero}
              className={`p-6 md:p-8 flex flex-col justify-between min-h-[220px] ${
                idx > 0
                  ? 'border-t md:border-t-0 md:border-l border-[var(--tema-color-border)]'
                  : ''
              } ${
                idx === 2 ? 'md:border-t lg:border-t-0' : ''
              }`}
            >
              <div>
                {/* Step number in mono */}
                <div className="flex items-baseline justify-between mb-4">
                  <span
                    className="text-2xl font-mono font-bold text-[var(--tema-color-accent-ink)]"
                    style={{ fontFamily: 'var(--tema-font-mono)' }}
                  >
                    {etapa.numero}
                  </span>
                  <span className="text-[11px] font-mono text-[var(--tema-color-text-muted)] tracking-wider">
                    FASE // 0{idx + 1}
                  </span>
                </div>

                {/* Step name */}
                <h3 className="text-xl font-bold tracking-tight text-[var(--tema-color-text)] mb-3">
                  {etapa.nome}
                </h3>

                {/* 2 lines of text */}
                <p className="text-xs sm:text-sm text-[var(--tema-color-text-muted)] leading-relaxed">
                  {etapa.texto}
                </p>
              </div>

              {/* Hairline indicator */}
              <div className="pt-6 mt-6 border-t border-[var(--tema-color-border)] flex items-center justify-between text-[11px] font-mono text-[var(--tema-color-text-muted)]">
                <span>VERIFICAÇÃO TÉCNICA</span>
                <span className="text-[var(--tema-color-accent-ink)]">●</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
