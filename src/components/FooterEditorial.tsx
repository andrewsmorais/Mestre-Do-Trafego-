import React from 'react';
import { BookOpen, ShieldCheck, ArrowUp } from 'lucide-react';

export const FooterEditorial: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800/80">
          
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-400 font-serif font-bold text-sm">
                G
              </span>
              <span className="text-base font-serif font-bold text-white tracking-wide">
                Dominando o Google Search 2026
              </span>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm max-w-md leading-relaxed">
              O Guia Definitivo do SEO, AEO e GEO — Do Zero ao Avançado. Desenvolvido para transformar busca orgânica em visibilidade, confiança e receita.
            </p>
            <div className="flex items-center gap-3 text-[11px] text-slate-500 pt-1">
              <span>Autor: Andrews</span>
              <span aria-hidden="true">·</span>
              <span>Edição: 2026</span>
              <span aria-hidden="true">·</span>
              <span>Versão Editorial Interativa</span>
            </div>
          </div>

          <div className="md:col-span-3 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-200 block mb-2">
              Navegação Rápida
            </span>
            <ul className="space-y-1.5">
              <li>
                <a href="#o-fim-do-seo" className="hover:text-amber-400 transition-colors">
                  O Fim do SEO Tradicional
                </a>
              </li>
              <li>
                <a href="#pilares-base" className="hover:text-amber-400 transition-colors">
                  SEO, AEO e GEO
                </a>
              </li>
              <li>
                <a href="#trindade-da-busca" className="hover:text-amber-400 transition-colors">
                  A Trindade da Busca
                </a>
              </li>
              <li>
                <a href="#otimizacao-negocio" className="hover:text-amber-400 transition-colors">
                  Otimização em Negócio
                </a>
              </li>
              <li>
                <a href="#everywhere-journey" className="hover:text-amber-400 transition-colors">
                  Everywhere Optimization
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-200 block mb-2">
              Princípios Centrais
            </span>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              &ldquo;Resultado antes da vaidade: posição, impressões e citações são sinais intermediários. O resultado final é uma ação de negócio.&rdquo;
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 text-[11px] text-amber-400/90 font-medium">
                <ShieldCheck className="w-3.5 h-3.5" />
                Baseado em diretrizes oficiais 2026
              </span>
            </div>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © 2026 Dominando o Google Search · Guia Visual Baseado na Obra de Andrews.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-amber-400 transition-colors cursor-pointer"
          >
            <span>Voltar ao Início</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
