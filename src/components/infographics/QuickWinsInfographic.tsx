import React from 'react';

export const QuickWinsInfographic: React.FC = () => {
  return (
    <div className="w-full max-w-5xl mx-auto my-3 sm:my-6">
      <div className="bg-white rounded-2xl sm:rounded-3xl border-2 border-slate-200/90 shadow-xl p-4 sm:p-10 md:p-12 relative overflow-hidden text-slate-900 font-sans print:shadow-none print:border print:p-8">
        
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-900 via-sky-600 to-amber-600" />
        <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-2 sm:mb-0 sm:absolute sm:top-4 sm:right-6">
          INFOGRÁFICO 05 / PÁGINA 27
        </div>

        {/* HEADER */}
        <header className="mb-6 sm:mb-10 text-left">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#0F766E] block mb-1.5 font-mono">
            DOMINANDO O GOOGLE SEARCH 2026
          </span>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-950 tracking-tight leading-snug sm:leading-tight mb-2.5">
            Quick Wins no Search Console
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-3xl leading-relaxed">
            Encontre páginas entre as posições 4 e 20 e melhore o que já tem sinais comprovados de relevância.
          </p>
        </header>

        {/* DARK CONTAINER: O CICLO EM CINCO MOVIMENTOS */}
        <div className="bg-[#111827] text-white rounded-2xl p-6 sm:p-8 mb-10 shadow-lg border border-slate-800">
          <h2 className="text-lg sm:text-xl font-serif font-bold text-white mb-6">
            O ciclo em cinco movimentos
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <span className="text-xs font-bold font-mono text-blue-300 block mb-1">
                1. Filtre
              </span>
              <p className="text-xs text-slate-200 leading-relaxed">
                Desempenho: consultas e páginas com posição média 4–20.
              </p>
            </div>

            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <span className="text-xs font-bold font-mono text-sky-300 block mb-1">
                2. Diagnostique
              </span>
              <p className="text-xs text-slate-200 leading-relaxed">
                Compare intenção, SERP, title, H1, resposta e concorrentes.
              </p>
            </div>

            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <span className="text-xs font-bold font-mono text-emerald-300 block mb-1">
                3. Melhore
              </span>
              <p className="text-xs text-slate-200 leading-relaxed">
                Inclua prova, exemplo, tabela, atualização ou CTA — não repetição.
              </p>
            </div>

            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <span className="text-xs font-bold font-mono text-amber-300 block mb-1">
                4. Registre
              </span>
              <p className="text-xs text-slate-200 leading-relaxed">
                Data, hipótese de impacto, alteração feita e URL exata.
              </p>
            </div>

            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <span className="text-xs font-bold font-mono text-rose-300 block mb-1">
                5. Meça
              </span>
              <p className="text-xs text-slate-200 leading-relaxed">
                Impressões, cliques, CTR, leads qualificados e vendas reais.
              </p>
            </div>

          </div>
        </div>

        {/* TWO DIAGNOSTIC SIGNAL CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          
          {/* SINAL BOM */}
          <div className="rounded-2xl border-2 border-blue-200 bg-blue-50/40 p-6">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-800 block mb-1 font-mono">
              SINAL BOM
            </span>
            <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">
              Muitas impressões
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Poucos cliques podem indicar que o título, meta description ou snippet são pouco atraentes ou não respondem à dor imediata. Ajuste o gancho da promessa.
            </p>
          </div>

          {/* SINAL DE ALERTA */}
          <div className="rounded-2xl border-2 border-amber-300 bg-amber-50/50 p-6">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800 block mb-1 font-mono">
              SINAL DE ALERTA
            </span>
            <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">
              Tráfego sem negócio
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              A consulta pode estar errada ou desbalanceada para a oferta comercial. Revise a intenção, a adequação de público e insira um próximo passo claro.
            </p>
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
