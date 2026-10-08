import React from 'react';
import { Compass, Sparkles, BookOpen, Users, Target, ArrowRight, ShieldCheck, ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  onExploreClick: () => void;
  onOpenAudit: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick, onOpenAudit }) => {
  return (
    <section id="inicio" className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200/80">
      {/* Background delicate gold and deep navy lighting aura */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none overflow-hidden opacity-30">
        <div className="absolute top-0 left-1/4 w-[500px] h-[350px] bg-blue-900/10 rounded-full blur-3xl" />
        <div className="absolute top-10 right-1/4 w-[400px] h-[300px] bg-amber-500/15 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Subtle top metadata ribbon (Zero-pill discipline: unboxed text with subtle typographic separators) */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-medium text-slate-500 uppercase tracking-widest mb-6">
          <span className="text-amber-800 font-semibold flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
            Edição Definitiva 2026
          </span>
          <span aria-hidden="true" className="text-slate-300">·</span>
          <span>Autor: Andrews</span>
          <span aria-hidden="true" className="text-slate-300">·</span>
          <span>Guia Editorial & Prático</span>
          <span aria-hidden="true" className="text-slate-300">·</span>
          <span>Do Zero ao Avançado</span>
        </div>

        {/* Main Hero Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-950 font-serif leading-[1.15] text-balance mb-6">
            DOMINANDO O <br className="hidden sm:inline" />
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-blue-950 via-slate-900 to-blue-950 bg-clip-text text-transparent">
                GOOGLE SEARCH 2026
              </span>
              <span className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-amber-300 via-amber-500 to-amber-300 rounded-full opacity-80" />
            </span>
          </h1>

          <p className="text-lg sm:text-2xl font-serif text-slate-700 italic max-w-2xl mx-auto mb-6">
            O Guia Definitivo do SEO, AEO e GEO
          </p>

          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-50/80 border border-amber-200/90 text-amber-950 shadow-xs mb-8 max-w-2xl mx-auto text-left sm:text-center">
            <Target className="w-5 h-5 text-amber-700 shrink-0 hidden sm:block" />
            <p className="text-sm sm:text-base font-medium">
              <strong className="text-slate-900">Objetivo Central:</strong> Transformar busca orgânica em visibilidade, confiança e receita.
            </p>
          </div>

          {/* Target Audience Highlight Bar */}
          <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-7 shadow-xl border border-slate-800 text-left relative overflow-hidden max-w-3xl mx-auto">
            <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0 mt-0.5 sm:mt-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold tracking-wider uppercase text-amber-400 block mb-0.5">
                    Público-Alvo em Destaque
                  </span>
                  <p className="text-slate-200 text-sm sm:text-base font-normal leading-relaxed">
                    Empreendedores digitais, pequenas empresas e profissionais de marketing que precisam de resultados mensuráveis no novo ecossistema de buscas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Editorial Book & Practical Guide Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Left: Interactive Book Mockup Artifact */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#0F172A] via-[#131E3A] to-[#0A1128] text-white border-2 border-amber-500/30 shadow-2xl relative overflow-hidden group">
            {/* Gilded Book Spine & Accent lines */}
            <div className="absolute top-0 left-0 bottom-0 w-3 bg-gradient-to-b from-amber-400 via-amber-500 to-amber-600 opacity-90 shadow-inner" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl" />
            
            <div className="pl-4">
              <div className="flex items-center justify-between text-xs tracking-widest text-amber-400 uppercase font-medium mb-6">
                <span>Tratado de Busca</span>
                <span className="px-2 py-0.5 rounded bg-amber-500/20 border border-amber-400/40 text-[10px] font-bold">
                  2026 EDITION
                </span>
              </div>

              <div className="my-4">
                <div className="w-12 h-1 bg-amber-400 mb-4 rounded-full" />
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-wide leading-snug">
                  DOMINANDO O GOOGLE SEARCH
                </h2>
                <p className="text-amber-300 text-sm font-serif italic mt-1">
                  SEO · AEO · GEO
                </p>
              </div>

              <div className="space-y-2.5 text-xs text-slate-300 my-6 border-y border-slate-700/60 py-4">
                <div className="flex items-center justify-between">
                  <span>Tríade de Dominância:</span>
                  <strong className="text-amber-200 font-semibold">Descoberta · Resposta · Citação</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span>Orientação Principal:</span>
                  <strong className="text-slate-100">Resultado antes da vaidade</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span>Autor:</span>
                  <strong className="text-slate-100">Andrews</strong>
                </div>
              </div>
            </div>

            <div className="pl-4 pt-2">
              <button
                onClick={onExploreClick}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-semibold text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-98"
              >
                <span>Acessar Guia Visual</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right: "Como Usar Este Guia" & Orientation Matrix */}
          <div className="lg:col-span-7 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-lg">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <Compass className="w-5 h-5 text-amber-700" />
                <h3 className="text-lg sm:text-xl font-serif font-bold text-slate-900">
                  Como usar este guia no seu dia a dia
                </h3>
              </div>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                Este manual foi estruturado com base em metodologias reais de decisão de negócios. Escolha o seu ponto de partida conforme o momento da sua empresa:
              </p>

              <div className="space-y-4">
                {/* Mode 1 */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-amber-300/80 transition-colors">
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-blue-900 text-amber-300 font-serif font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      1
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 mb-1">
                        Se você está começando agora ou estruturando um projeto:
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        Leia os conceitos e a <strong>Trindade da Busca</strong> em sequência. Compreenda a transição do ranqueamento mecânico para a autoridade tópica e respostas estruturadas.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Mode 2 */}
                <div className="p-4 rounded-xl bg-amber-50/50 border border-amber-200/80 hover:border-amber-400 transition-colors">
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-amber-600 text-white font-serif font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      2
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 mb-1">
                        Se você já possui um site, blog ou negócio ativo:
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        Use o checklist e o diagnóstico prático para <strong>identificar gargalos imediatos</strong>. Escolha <em>três quick wins</em> comprovados e implemente-os antes de iniciar mudanças estruturais maiores.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
              <span className="flex items-center gap-1.5 font-medium text-slate-700">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                Baseado em dados e diretrizes oficiais do Google 2026
              </span>
              <button
                onClick={onOpenAudit}
                className="text-amber-800 hover:text-amber-950 font-semibold underline underline-offset-4 cursor-pointer"
              >
                Executar Checklist Rápido →
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
