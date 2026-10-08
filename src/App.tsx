/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { siteContent } from './content.ts';
import { MotionProvider } from './components/ui/MotionContext';
import { ProgressoLeitura } from './components/ui/ProgressoLeitura';
import { Header } from './sections/Header';
import { Hero } from './sections/Hero';
import { Projetos } from './sections/Projetos';
import { Processo } from './sections/Processo';
import { Destaque } from './sections/Destaque';
import { Sobre } from './sections/Sobre';
import { Contato } from './sections/Contato';
import { Rodape } from './sections/Rodape';

export default function App() {
  return (
    <MotionProvider>
      <div className="min-h-screen flex flex-col bg-[var(--tema-color-bg)] text-[var(--tema-color-text)]">
        {/* Scroll reading progress bar */}
        <ProgressoLeitura />

        {/* 1. Header */}
        <Header content={siteContent.header} />

        {/* Main Content Landmark */}
        <main id="main-content" className="flex-1">
          {/* 2. Hero */}
          <Hero content={siteContent.hero} />

          {/* 3. Projetos */}
          <Projetos content={siteContent.projetos} />

          {/* 4. Processo */}
          <Processo content={siteContent.processo} />

          {/* 5. Destaque (Antes e Depois) */}
          <Destaque content={siteContent.destaque} />

          {/* 6. Sobre */}
          <Sobre content={siteContent.sobre} />

          {/* 7. Contato */}
          <Contato content={siteContent.contato} />
        </main>

        {/* 8. Rodapé */}
        <Rodape content={siteContent.rodape} />
      </div>
    </MotionProvider>
  );
}
