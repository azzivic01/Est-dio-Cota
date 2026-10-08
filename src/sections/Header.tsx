import React from 'react';
import { SiteContent } from '../content';
import { LinkAnimado } from '../components/ui/LinkAnimado';

interface HeaderProps {
  content: SiteContent['header'];
}

export const Header: React.FC<HeaderProps> = ({ content }) => {
  if (!content.enabled) return null;

  return (
    <header
      id="header"
      className="sticky top-0 z-40 w-full bg-[var(--tema-color-bg)]/95 backdrop-blur-sm"
      style={{
        borderBottom: 'var(--tema-border-width) solid var(--tema-color-border)',
      }}
    >
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-[var(--tema-color-surface)] focus:text-[var(--tema-color-text)] focus:border focus:border-[var(--tema-color-accent)] font-mono text-xs uppercase"
      >
        Pular para o conteúdo
      </a>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Zone 1: Single text element wordmark in Archivo */}
          <div className="flex items-center gap-3">
            <a
              href="#header"
              className="text-xl md:text-2xl font-bold tracking-tight text-[var(--tema-color-text)] hover:text-[var(--tema-color-accent-ink)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--tema-color-accent-ink)]"
              style={{ fontFamily: 'var(--tema-font-display)' }}
            >
              {content.marca}
            </a>
            <span
              aria-hidden="true"
              className="hidden sm:inline-block w-2 h-2 bg-[var(--tema-color-accent)]"
            />
          </div>

          {/* Zone 2: 4-6 text navigation links */}
          <nav
            aria-label="Navegação principal"
            className="hidden md:flex items-center gap-6"
          >
            {content.nav.map((item) => (
              <LinkAnimado key={item.href} href={item.href}>
                {item.label}
              </LinkAnimado>
            ))}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3">
            <a
              href={content.primaryAction.href}
              className="relative inline-flex items-center justify-center min-h-[44px] min-w-[44px] px-5 py-2.5 text-xs font-mono tracking-wider bg-[var(--tema-color-text)] text-[var(--tema-color-surface)] hover:bg-[var(--tema-color-accent)] transition-colors"
              style={{
                fontFamily: 'var(--tema-font-mono)',
                textTransform: 'var(--tema-label-transform)' as React.CSSProperties['textTransform'],
                letterSpacing: 'var(--tema-label-tracking)',
                border: 'var(--tema-border-width) solid var(--tema-color-text)',
              }}
            >
              <span>{content.primaryAction.label}</span>
            </a>
          </div>
        </div>

        {/* Mobile secondary navigation strip */}
        <nav
          aria-label="Navegação móvel"
          className="flex md:hidden items-center justify-between py-2 border-t border-[var(--tema-color-border)] overflow-x-auto"
        >
          {content.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-2 py-2 text-xs font-mono uppercase tracking-wider text-[var(--tema-color-text-muted)] hover:text-[var(--tema-color-text)]"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};
