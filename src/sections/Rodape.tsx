import React from 'react';
import { SiteContent } from '../content';
import { useAppMotion } from '../components/ui/MotionContext';

interface RodapeProps {
  content: SiteContent['rodape'];
}

export const Rodape: React.FC<RodapeProps> = ({ content }) => {
  const { isReducedMotion, toggleReducedMotion } = useAppMotion();

  if (!content.enabled) return null;

  return (
    <footer
      id="rodape"
      aria-label="Rodapé do site"
      className="w-full bg-[var(--tema-color-bg)] py-12 md:py-16 text-xs text-[var(--tema-color-text)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top tier */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-[var(--tema-color-border)]">
          <div>
            <span
              className="text-xl font-bold tracking-tight text-[var(--tema-color-text)] block"
              style={{ fontFamily: 'var(--tema-font-display)' }}
            >
              {content.marca}
            </span>
            <span className="font-mono text-xs text-[var(--tema-color-text-muted)] mt-1 block">
              Registro profissional: {content.registroProfissional}
            </span>
          </div>

          {/* Footer links */}
          <nav
            aria-label="Navegação secundária do rodapé"
            className="flex flex-wrap items-center gap-6"
          >
            {content.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-xs uppercase tracking-wider text-[var(--tema-color-text-muted)] hover:text-[var(--tema-color-accent-ink)] transition-colors min-h-[44px] inline-flex items-center"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom tier: Copyright and Reduced Motion Toggle button */}
        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-[11px] text-[var(--tema-color-text-muted)]">
          <div>
            <span>{content.direitos}</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden sm:inline">ACESSIBILIDADE:</span>
            {/* Reduced motion toggle button */}
            <button
              type="button"
              onClick={toggleReducedMotion}
              aria-pressed={isReducedMotion}
              className="inline-flex items-center gap-2 min-h-[44px] px-3 py-1.5 bg-[var(--tema-color-surface)] border border-[var(--tema-color-border)] hover:border-[var(--tema-color-accent)] text-[var(--tema-color-text)] cursor-pointer transition-colors"
              style={{
                fontFamily: 'var(--tema-font-mono)',
              }}
            >
              <span
                className={`w-2 h-2 ${
                  isReducedMotion
                    ? 'bg-[var(--tema-color-accent)]'
                    : 'bg-[var(--tema-color-border)]'
                }`}
              />
              <span>
                {isReducedMotion
                  ? content.rotuloAtivarAnimacoes
                  : content.rotuloReduzirAnimacoes}
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
