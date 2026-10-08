import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SiteContent } from '../content';
import { FiltroChips } from '../components/ui/FiltroChips';
import { CartaoProjeto } from '../components/ui/CartaoProjeto';
import { useAppMotion } from '../components/ui/MotionContext';

interface ProjetosProps {
  content: SiteContent['projetos'];
}

export const Projetos: React.FC<ProjetosProps> = ({ content }) => {
  const [filtroAtivo, setFiltroAtivo] = useState('Todos');
  const { isReducedMotion } = useAppMotion();

  if (!content.enabled) return null;

  const projetosFiltrados = content.itens.filter((item) => {
    if (filtroAtivo === 'Todos') return true;
    return item.tipo === filtroAtivo;
  });

  return (
    <section
      id="projetos"
      aria-labelledby="titulo-projetos"
      className="py-16 md:py-24 border-b border-[var(--tema-color-border)] bg-[var(--tema-color-bg)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[var(--tema-color-border)]">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 bg-[var(--tema-color-accent)] inline-block" />
              <span className="font-mono text-xs uppercase tracking-wider text-[var(--tema-color-text-muted)]">
                {content.kicker}
              </span>
            </div>
            <h2
              id="titulo-projetos"
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

          {/* Interactive Filter Chips with aria-pressed */}
          <div className="shrink-0">
            <FiltroChips
              filtros={content.filtros}
              ativo={filtroAtivo}
              onSelecionar={setFiltroAtivo}
            />
          </div>
        </div>

        {/* Portfolio Grid with layout transition + AnimatePresence popLayout */}
        <motion.div
          layout={!isReducedMotion}
          className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {projetosFiltrados.map((projeto) => (
              <CartaoProjeto key={projeto.id} projeto={projeto} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Technical foot note */}
        <div className="mt-12 pt-6 border-t border-[var(--tema-color-border)] flex flex-wrap items-center justify-between text-xs font-mono text-[var(--tema-color-text-muted)] gap-4">
          <span>REGISTRO DE PROJETOS // SELEÇÃO ATIVA ({projetosFiltrados.length})</span>
          <span>MODULAÇÃO ESTRUTURAL RIGOROSA</span>
        </div>
      </div>
    </section>
  );
};
