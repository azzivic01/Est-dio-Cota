import React from 'react';
import { SiteContent } from '../content';

interface ContatoProps {
  content: SiteContent['contato'];
}

export const Contato: React.FC<ContatoProps> = ({ content }) => {
  if (!content.enabled) return null;

  return (
    <section
      id="contato"
      aria-labelledby="titulo-contato"
      className="py-16 md:py-24 border-b border-[var(--tema-color-border)] bg-[var(--tema-color-bg)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Heading and info (col-span-5) */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 bg-[var(--tema-color-accent)] inline-block" />
              <span className="font-mono text-xs uppercase tracking-wider text-[var(--tema-color-text-muted)]">
                {content.kicker}
              </span>
            </div>

            <h2
              id="titulo-contato"
              className="text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--tema-color-text)]"
              style={{
                fontFamily: 'var(--tema-font-display)',
                letterSpacing: '-0.02em',
              }}
            >
              {content.titulo}
            </h2>

            <p className="mt-4 text-sm md:text-base text-[var(--tema-color-text-muted)] leading-relaxed">
              {content.descricao}
            </p>

            {/* Studio Address and hours */}
            <div
              className="mt-8 p-6 bg-[var(--tema-color-surface)] space-y-4"
              style={{
                border: 'var(--tema-border-width) solid var(--tema-color-border)',
                borderRadius: 'var(--tema-radius)',
              }}
            >
              <div>
                <span className="block font-mono text-[11px] uppercase tracking-wider text-[var(--tema-color-text-muted)]">
                  Localização do estúdio
                </span>
                <span className="block text-sm font-mono font-medium text-[var(--tema-color-text)] mt-1">
                  {content.endereco}
                </span>
              </div>

              <div className="pt-3 border-t border-[var(--tema-color-border)]">
                <span className="block font-mono text-[11px] uppercase tracking-wider text-[var(--tema-color-text-muted)]">
                  Horário de atendimento
                </span>
                <span className="block text-xs font-mono text-[var(--tema-color-text-muted)] mt-1">
                  {content.horario}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact button links with visible markers (col-span-7) */}
          <div className="lg:col-span-7 space-y-4">
            <span className="block font-mono text-xs uppercase tracking-wider text-[var(--tema-color-text-muted)] mb-2">
              Canais diretos de contato técnico
            </span>

            {content.canais.map((canal) => (
              <a
                key={canal.tipo}
                href={canal.href}
                className="group relative flex flex-col sm:flex-row sm:items-center justify-between p-6 bg-[var(--tema-color-surface)] hover:bg-[var(--tema-color-bg)] transition-colors cursor-pointer min-h-[44px]"
                style={{
                  border: 'var(--tema-border-width) solid var(--tema-color-border)',
                  borderRadius: 'var(--tema-radius)',
                }}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--tema-color-accent)] inline-block" />
                    <span className="text-base font-bold text-[var(--tema-color-text)] group-hover:text-[var(--tema-color-accent-ink)] transition-colors">
                      {canal.label}
                    </span>
                  </div>
                  <p className="text-xs text-[var(--tema-color-text-muted)] mt-1">
                    {canal.instrucao}
                  </p>
                </div>

                <div className="mt-3 sm:mt-0 font-mono text-xs text-[var(--tema-color-accent-ink)] font-semibold shrink-0">
                  <span className="px-2 py-1 bg-[var(--tema-color-bg)] border border-[var(--tema-color-border)] group-hover:border-[var(--tema-color-accent)] transition-colors">
                    {canal.marcador} ↗
                  </span>
                </div>
              </a>
            ))}

            <div className="pt-4 text-xs font-mono text-[var(--tema-color-text-muted)] flex items-center justify-between">
              <span>RESPOSTA CONFORME DISPONIBILIDADE DO CANTEIRO</span>
              <span>ESTÚDIO COTA // ARQUITETURA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
