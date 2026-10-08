import React from 'react';
import { SiteContent } from '../content';

interface SobreProps {
  content: SiteContent['sobre'];
}

export const Sobre: React.FC<SobreProps> = ({ content }) => {
  if (!content.enabled) return null;

  return (
    <section
      id="sobre"
      aria-labelledby="titulo-sobre"
      className="py-16 md:py-24 border-b border-[var(--tema-color-border)] bg-[var(--tema-color-surface)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Heading and kicker (col-span-5) */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 bg-[var(--tema-color-accent)] inline-block" />
              <span className="font-mono text-xs uppercase tracking-wider text-[var(--tema-color-text-muted)]">
                {content.kicker}
              </span>
            </div>

            <h2
              id="titulo-sobre"
              className="text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--tema-color-text)] leading-tight"
              style={{
                fontFamily: 'var(--tema-font-display)',
                letterSpacing: '-0.02em',
                textWrap: 'balance',
              }}
            >
              {content.titulo}
            </h2>

            {/* Technical manifesto box */}
            <div
              className="mt-8 p-6 bg-[var(--tema-color-bg)]"
              style={{
                border: 'var(--tema-border-width) solid var(--tema-color-border)',
                borderRadius: 'var(--tema-radius)',
              }}
            >
              <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--tema-color-accent-ink)] block mb-2">
                Diretriz de prancha
              </span>
              <p className="font-mono text-xs text-[var(--tema-color-text)] leading-relaxed">
                "{content.declaracao}"
              </p>
            </div>
          </div>

          {/* Right Column: Paragraphs, Team credit, and technical grid (col-span-7) */}
          <div className="lg:col-span-7 space-y-6">
            {content.paragrafos.map((paragrafo, idx) => (
              <p
                key={idx}
                className="text-base sm:text-lg text-[var(--tema-color-text-muted)] leading-relaxed"
              >
                {paragrafo}
              </p>
            ))}

            {/* Team signature block */}
            <div className="pt-8 border-t border-[var(--tema-color-border)] grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <span className="block font-mono text-[11px] uppercase tracking-wider text-[var(--tema-color-text-muted)]">
                  Corpo técnico
                </span>
                <span className="block text-sm font-bold font-mono text-[var(--tema-color-text)] mt-1">
                  {content.equipe}
                </span>
              </div>

              <div>
                <span className="block font-mono text-[11px] uppercase tracking-wider text-[var(--tema-color-text-muted)]">
                  Princípio de desenho
                </span>
                <span className="block text-xs font-mono text-[var(--tema-color-text-muted)] mt-1">
                  Ortogonalidade · Cargas axiais · Luz rasante
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
