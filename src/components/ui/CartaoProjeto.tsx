import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ProjectItem } from '../../content';
import { Cotas } from './Cotas';
import { Modal } from './Modal';
import { ImageReveal } from './ImageReveal';
import { useAppMotion } from './MotionContext';

interface CartaoProjetoProps {
  projeto: ProjectItem;
}

export const CartaoProjeto: React.FC<CartaoProjetoProps> = ({ projeto }) => {
  const [modalAberto, setModalAberto] = useState(false);
  const { isReducedMotion } = useAppMotion();

  return (
    <>
      <motion.article
        layout={!isReducedMotion}
        initial={{ opacity: 0, y: isReducedMotion ? 0 : 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: isReducedMotion ? 1 : 0.96 }}
        transition={{
          duration: isReducedMotion ? 0.15 : 0.35,
          ease: [0.4, 0, 0.2, 1],
        }}
        className="group relative flex flex-col bg-[var(--tema-color-surface)] h-full"
        style={{
          border: 'var(--tema-border-width) solid var(--tema-color-border)',
          borderRadius: 'var(--tema-radius)',
        }}
      >
        {/* Project Image Container with Cotas overlay */}
        <div className="relative overflow-hidden w-full aspect-[4/3] bg-[var(--tema-color-bg)]">
          <ImageReveal
            src={projeto.imagem.src}
            alt={projeto.imagem.alt}
            aspectRatio="4/3"
            objectPosition={projeto.imagem.objectPosition}
            className="w-full h-full border-0"
          />

          {/* Signature: Cotas that show on card hover/focus or remain subtly visible */}
          <Cotas
            cotaHorizontal={projeto.area}
            cotaVertical="[medida]"
            variant="accent"
            className="opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300"
          />

          {/* Type tag as quiet mono label */}
          <div className="absolute top-3 right-3 z-20 pointer-events-none">
            <span
              className="inline-block px-2 py-1 text-[11px] font-mono tracking-wider bg-[var(--tema-color-surface)] text-[var(--tema-color-text)]"
              style={{
                fontFamily: 'var(--tema-font-mono)',
                textTransform: 'var(--tema-label-transform)' as React.CSSProperties['textTransform'],
                letterSpacing: 'var(--tema-label-tracking)',
                border: 'var(--tema-border-width) solid var(--tema-color-border)',
              }}
            >
              {projeto.tipo}
            </span>
          </div>
        </div>

        {/* Project Card Content */}
        <div className="p-6 flex flex-col flex-1 justify-between gap-4">
          <div>
            {/* Title */}
            <h3 className="text-xl font-bold tracking-tight text-[var(--tema-color-text)] group-hover:text-[var(--tema-color-accent-ink)] transition-colors">
              {projeto.titulo}
            </h3>

            {/* Unboxed metadata with typographic separators */}
            <div className="flex flex-wrap items-center gap-2 mt-2 text-xs font-mono text-[var(--tema-color-text-muted)]">
              <span>{projeto.local}</span>
              <span aria-hidden="true">·</span>
              <span>{projeto.area}</span>
              <span aria-hidden="true">·</span>
              <span>{projeto.ano}</span>
            </div>

            {/* Short description */}
            <p className="mt-3 text-sm text-[var(--tema-color-text-muted)] leading-relaxed line-clamp-2">
              {projeto.descricao}
            </p>
          </div>

          {/* Trigger button opening details modal */}
          <div className="pt-3 border-t border-[var(--tema-color-border)] flex items-center justify-between">
            <button
              type="button"
              onClick={() => setModalAberto(true)}
              className="inline-flex items-center min-h-[44px] text-xs font-mono tracking-wider font-medium text-[var(--tema-color-accent-ink)] group-hover:underline cursor-pointer"
              style={{
                fontFamily: 'var(--tema-font-mono)',
                textTransform: 'var(--tema-label-transform)' as React.CSSProperties['textTransform'],
                letterSpacing: 'var(--tema-label-tracking)',
              }}
            >
              Consultar prancha do projeto →
            </button>
            <span className="text-[11px] font-mono text-[var(--tema-color-text-muted)]">
              {projeto.ano}
            </span>
          </div>
        </div>
      </motion.article>

      {/* Modal with detailed technical sheet */}
      <Modal
        isOpen={modalAberto}
        onClose={() => setModalAberto(false)}
        title={`Prancha do projeto: ${projeto.titulo}`}
      >
        <div className="space-y-6">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-[var(--tema-color-bg)]">
            <img
              src={projeto.imagem.src}
              alt={projeto.imagem.alt}
              className="w-full h-full object-cover"
              style={{ objectPosition: projeto.imagem.objectPosition }}
            />
            {/* Always visible cotas in modal */}
            <Cotas
              cotaHorizontal={projeto.area}
              cotaVertical="[medida]"
              variant="accent"
              forceVisible
            />
          </div>

          <div>
            <div className="flex items-baseline justify-between flex-wrap gap-2">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--tema-color-text)]">
                {projeto.titulo}
              </h2>
              <span className="font-mono text-xs text-[var(--tema-color-accent-ink)] uppercase tracking-wider">
                {projeto.tipo} // {projeto.ano}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-3 mt-3 text-xs font-mono text-[var(--tema-color-text-muted)] border-b border-[var(--tema-color-border)] pb-4">
              <span>Localização: {projeto.local}</span>
              <span aria-hidden="true">·</span>
              <span>Área computada: {projeto.area}</span>
              <span aria-hidden="true">·</span>
              <span>Ano de projeto: {projeto.ano}</span>
            </div>
          </div>

          <p className="text-sm md:text-base text-[var(--tema-color-text)] leading-relaxed">
            {projeto.descricao}
          </p>

          {/* Technical specification grid */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-[var(--tema-color-bg)]"
            style={{
              border: 'var(--tema-border-width) solid var(--tema-color-border)',
            }}
          >
            <div>
              <span className="block font-mono text-[11px] text-[var(--tema-color-text-muted)] uppercase tracking-wider">
                Programa de necessidades
              </span>
              <span className="block text-xs font-medium text-[var(--tema-color-text)] mt-1 font-mono">
                {projeto.programa}
              </span>
            </div>
            <div>
              <span className="block font-mono text-[11px] text-[var(--tema-color-text-muted)] uppercase tracking-wider">
                Sistema estrutural
              </span>
              <span className="block text-xs font-medium text-[var(--tema-color-text)] mt-1 font-mono">
                {projeto.sistemaEstrutural}
              </span>
            </div>
          </div>

          <div className="pt-2 flex justify-end">
            <button
              type="button"
              onClick={() => setModalAberto(false)}
              className="min-h-[44px] px-6 py-2.5 text-xs font-mono uppercase tracking-wider border border-[var(--tema-color-border)] hover:bg-[var(--tema-color-bg)] text-[var(--tema-color-text)] transition-colors cursor-pointer"
            >
              Fechar prancha [ESC]
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};
