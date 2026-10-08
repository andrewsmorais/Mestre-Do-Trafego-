import React from 'react';

export const ConsumerDecisionInfographic: React.FC = () => {
  return (
    <div className="w-full max-w-5xl mx-auto my-3 sm:my-6">
      <div className="bg-white rounded-2xl sm:rounded-3xl border-2 border-slate-200/90 shadow-xl p-4 sm:p-10 md:p-12 relative overflow-hidden text-slate-900 font-sans print:shadow-none print:border print:p-8">
        
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-900 via-teal-600 to-amber-700" />
        <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-2 sm:mb-0 sm:absolute sm:top-4 sm:right-6">
          INFOGRÁFICO 02 / PÁGINA 6
        </div>

        {/* HEADER */}
        <header className="mb-6 sm:mb-10 text-left">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#0F766E] block mb-1.5 font-mono">
            DOMINANDO O GOOGLE SEARCH 2026
          </span>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-950 tracking-tight leading-snug sm:leading-tight mb-2.5">
            Mapa de Decisão do Consumidor
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-3xl leading-relaxed">
            A decisão acontece em microetapas e em vários canais. O conteúdo precisa acompanhar o momento exato do cliente.
          </p>
        </header>

        {/* 4 STAGES CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          
          {/* 1. Descobrir */}
          <div className="rounded-2xl bg-[#0F2942] text-white p-5 flex flex-col justify-between shadow-md">
            <div>
              <span className="text-xs font-mono font-bold text-blue-300 block mb-1">
                1. Descobrir
              </span>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mt-2">
                Google, TikTok e YouTube: Explique o problema e apresente possibilidades reais.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-blue-200">
              Canal: Busca visual & algorítmica
            </div>
          </div>

          {/* 2. Confiar */}
          <div className="rounded-2xl bg-[#0D4D65] text-white p-5 flex flex-col justify-between shadow-md">
            <div>
              <span className="text-xs font-mono font-bold text-teal-300 block mb-1">
                2. Confiar
              </span>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mt-2">
                Reviews, comunidades e casos: Reduza o risco percebido com prova real e autêntica.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-teal-200">
              Canal: Reddit, fóruns & depoimentos
            </div>
          </div>

          {/* 3. Comparar */}
          <div className="rounded-2xl bg-[#145A56] text-white p-5 flex flex-col justify-between shadow-md">
            <div>
              <span className="text-xs font-mono font-bold text-emerald-300 block mb-1">
                3. Comparar
              </span>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mt-2">
                Site, marketplaces e guias: Mostre critérios, especificações, preço, limites e adequação.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-emerald-200">
              Canal: Tabelas comparativas & fichas
            </div>
          </div>

          {/* 4. Comprar */}
          <div className="rounded-2xl bg-[#854D0E] text-white p-5 flex flex-col justify-between shadow-md">
            <div>
              <span className="text-xs font-mono font-bold text-amber-200 block mb-1">
                4. Comprar
              </span>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mt-2">
                Checkout, WhatsApp, ligação ou visita: Remova fricção técnica e deixe o próximo passo evidente.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-amber-200">
              Canal: CTA direto & alta conversão
            </div>
          </div>

        </div>

        {/* TWO LOWER BLOCKS: ADAPTE O FORMATO & MÉTRICA CENTRAL */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-base font-bold text-slate-900 mb-2">
              Adapte o formato
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Um estudo de caso pode virar artigo técnico, vídeo demonstrativo, post no LinkedIn, resposta em comunidade e prova na página de venda — sempre com linguagem nativa e sem copiar e colar.
            </p>
          </div>

          <div className="rounded-2xl border border-amber-300 bg-amber-50/60 p-6">
            <h3 className="text-base font-bold text-amber-950 mb-2">
              Métrica central
            </h3>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
              Não conte apenas alcance ou impressões brutas. Meça leads qualificados, vendas concluídas, chamadas telefônicas, agendamentos e receita assistida por canal.
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
