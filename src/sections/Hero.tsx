import React from 'react';
import { motion } from 'motion/react';
import { SiteContent } from '../content';
import { Cotas } from '../components/ui/Cotas';
import { ImageReveal } from '../components/ui/ImageReveal';
import { Button } from '../components/ui/Button';
import { useAppMotion } from '../components/ui/MotionContext';

interface HeroProps {
  content: SiteContent['hero'];
}

export const Hero: React.FC<HeroProps> = ({ content }) => {
  const { isReducedMotion } = useAppMotion();

  if (!content.enabled) return null;

  return (
    <section
      id="hero"
      aria-label="Introdução do estúdio"
      className="relative w-full border-b border-[var(--tema-color-border)] bg-[var(--tema-color-bg)] py-12 md:py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Technical grid header strip */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[var(--tema-color-border)] mb-8 text-xs font-mono text-[var(--tema-color-text-muted)]">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-[var(--tema-color-accent)]" />
            <span className="tracking-wider uppercase">
              {content.kicker}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="tracking-widest">
              COORD // {content.coordenadas}
            </span>
            <span aria-hidden="true">·</span>
            <span>MODULAÇÃO 1:1</span>
          </div>
        </div>

        {/* Hero Grid layout: 12-column architectural layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Massive Title & Description (col-span-5) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Single <h1> for the entire page */}
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--tema-color-text)] leading-[1.05]"
                style={{
                  fontFamily: 'var(--tema-font-display)',
                  letterSpacing: '-0.03em',
                  textWrap: 'balance',
                }}
              >
                {content.title}
              </h1>

              <p className="mt-6 text-base sm:text-lg text-[var(--tema-color-text-muted)] leading-relaxed max-w-xl">
                {content.description}
              </p>
            </div>

            {/* Technical metadata block & CTA */}
            <div className="mt-10 pt-8 border-t border-[var(--tema-color-border)] flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <a href={content.actionHref}>
                <Button variant="primary">
                  {content.actionLabel}
                </Button>
              </a>

              <div className="font-mono text-xs text-[var(--tema-color-text-muted)] space-y-1">
                <div>RIGOR ESTRUTURAL</div>
                <div className="text-[var(--tema-color-text)] font-medium">CONCRETO APARENTE // LUZ</div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Image with Signature Cotas (col-span-7) */}
          <div className="lg:col-span-7">
            <motion.div
              className="relative group bg-[var(--tema-color-surface)]"
              initial={{ opacity: isReducedMotion ? 1 : 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              style={{
                border: 'var(--tema-border-width) solid var(--tema-color-border)',
              }}
            >
              {/* Image with reveal */}
              <ImageReveal
                src={content.imagem.src}
                alt={content.imagem.alt}
                aspectRatio="16/9"
                objectPosition={content.imagem.objectPosition}
                priority={true}
                className="w-full border-0"
              />

              {/* Signature: Cotas drawing themselves on view */}
              <Cotas
                cotaHorizontal={content.cotaHorizontal}
                cotaVertical={content.cotaVertical}
                variant="accent"
                forceVisible
              />

              {/* Technical caption bar below image */}
              <div className="flex items-center justify-between p-3 bg-[var(--tema-color-surface)] border-t border-[var(--tema-color-border)] text-[11px] font-mono text-[var(--tema-color-text-muted)]">
                <span>VÃO // {content.cotaHorizontal}</span>
                <span className="hidden sm:inline">PÉ-DIREITO // {content.cotaVertical}</span>
                <span className="text-[var(--tema-color-accent-ink)] font-medium">FIG. 00 // ELEVAÇÃO FRONTAL</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
