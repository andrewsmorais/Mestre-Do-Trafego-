import React from 'react';

export const ExecutionPlanInfographic: React.FC = () => {
  return (
    <div className="w-full max-w-5xl mx-auto my-3 sm:my-6">
      <div className="bg-white rounded-2xl sm:rounded-3xl border-2 border-slate-200/90 shadow-xl p-4 sm:p-10 md:p-12 relative overflow-hidden text-slate-900 font-sans print:shadow-none print:border print:p-8">
        
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-900 via-indigo-600 to-amber-600" />
        <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-2 sm:mb-0 sm:absolute sm:top-4 sm:right-6">
          INFOGRÁFICO 06 / PÁGINA 36
        </div>

        {/* HEADER */}
        <header className="mb-6 sm:mb-10 text-left">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#0F766E] block mb-1.5 font-mono">
            DOMINANDO O GOOGLE SEARCH 2026
          </span>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-950 tracking-tight leading-snug sm:leading-tight mb-2.5">
            Plano de Execução de 90 Dias
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-3xl leading-relaxed">
            SEO sustentável avança em ciclos bem definidos: diagnosticar, implementar a base, produzir ativos, construir autoridade e medir o impacto.
          </p>
        </header>

        {/* 4 PHASES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          
          {/* Dias 1–15 */}
          <div className="rounded-2xl border-2 border-slate-200 bg-white p-5 relative hover:shadow-lg transition-all">
            <div className="absolute top-0 left-6 right-6 h-1 bg-blue-600 rounded-b-md" />
            <div className="text-[11px] font-mono font-bold text-blue-700 uppercase tracking-widest mb-1 pt-1">
              Dias 1–15
            </div>
            <h2 className="text-xl font-serif font-bold text-slate-950 mb-3">
              Diagnóstico
            </h2>
            <ul className="space-y-1.5 text-xs text-slate-600 pt-2 border-t border-slate-100">
              <li>• inventário de URLs</li>
              <li>• GSC e analytics configurados</li>
              <li>• conversões mapeadas</li>
              <li>• indexação e mobile auditados</li>
              <li>• escolha de três prioridades</li>
            </ul>
          </div>

          {/* Dias 16–30 */}
          <div className="rounded-2xl border-2 border-slate-200 bg-white p-5 relative hover:shadow-lg transition-all">
            <div className="absolute top-0 left-6 right-6 h-1 bg-teal-600 rounded-b-md" />
            <div className="text-[11px] font-mono font-bold text-teal-700 uppercase tracking-widest mb-1 pt-1">
              Dias 16–30
            </div>
            <h2 className="text-xl font-serif font-bold text-slate-950 mb-3">
              Base
            </h2>
            <ul className="space-y-1.5 text-xs text-slate-600 pt-2 border-t border-slate-100">
              <li>• títulos e H1 ajustados</li>
              <li>• links internos organizados</li>
              <li>• sitemap e canonicals limpos</li>
              <li>• schema markup validado</li>
              <li>• Perfil da Empresa atualizado</li>
            </ul>
          </div>

          {/* Dias 31–60 */}
          <div className="rounded-2xl border-2 border-slate-200 bg-white p-5 relative hover:shadow-lg transition-all">
            <div className="absolute top-0 left-6 right-6 h-1 bg-amber-500 rounded-b-md" />
            <div className="text-[11px] font-mono font-bold text-amber-700 uppercase tracking-widest mb-1 pt-1">
              Dias 31–60
            </div>
            <h2 className="text-xl font-serif font-bold text-slate-950 mb-3">
              Conteúdo
            </h2>
            <ul className="space-y-1.5 text-xs text-slate-600 pt-2 border-t border-slate-100">
              <li>• página-pilar definitiva</li>
              <li>• apoio e comparação honesta</li>
              <li>• caso real ou demonstração</li>
              <li>• FAQ com dúvidas reais</li>
              <li>• autoria e prova própria</li>
            </ul>
          </div>

          {/* Dias 61–90 */}
          <div className="rounded-2xl border-2 border-slate-200 bg-white p-5 relative hover:shadow-lg transition-all">
            <div className="absolute top-0 left-6 right-6 h-1 bg-amber-700 rounded-b-md" />
            <div className="text-[11px] font-mono font-bold text-amber-800 uppercase tracking-widest mb-1 pt-1">
              Dias 61–90
            </div>
            <h2 className="text-xl font-serif font-bold text-slate-950 mb-3">
              Autoridade
            </h2>
            <ul className="space-y-1.5 text-xs text-slate-600 pt-2 border-t border-slate-100">
              <li>• Digital PR e relações</li>
              <li>• menções legítimas na web</li>
              <li>• avaliações honestas pedidas</li>
              <li>• experimentos documentados</li>
              <li>• medição de receita e leads</li>
            </ul>
          </div>

        </div>

        {/* DARK CONTAINER: REGRA DE OPERAÇÃO */}
        <div className="bg-[#111827] text-white rounded-2xl p-6 sm:p-8 mb-8 shadow-lg border border-slate-800">
          <h3 className="text-lg sm:text-xl font-serif font-bold text-white mb-6">
            Regra de operação
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-300 block mb-1">
                Hipótese
              </span>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                O que esperamos melhorar exatamente e qual a justificativa técnica/comercial?
              </p>
            </div>

            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-300 block mb-1">
                Registro
              </span>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                O que mudou, em qual URL específica e em que data exata foi publicado?
              </p>
            </div>

            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300 block mb-1">
                Decisão
              </span>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                Após 30 dias com dados: manter, ajustar, consolidar ou parar a iniciativa?
              </p>
            </div>

          </div>
        </div>

        {/* FOOTER */}
        <footer className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] font-mono text-slate-500">
          <span>Guia prático de SEO, AEO e GEO</span>
          <span>Infográfico · 2026</span>
        </footer>

      </div>
    </div>
  );
};
