import React from 'react';

export const PerfectPageInfographic: React.FC = () => {
  return (
    <div className="w-full max-w-5xl mx-auto my-3 sm:my-6">
      <div className="bg-white rounded-2xl sm:rounded-3xl border-2 border-slate-200/90 shadow-xl p-4 sm:p-10 md:p-12 relative overflow-hidden text-slate-900 font-sans print:shadow-none print:border print:p-8">
        
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-teal-500 to-amber-600" />
        <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-2 sm:mb-0 sm:absolute sm:top-4 sm:right-6">
          INFOGRÁFICO 03 / PÁGINA 14
        </div>

        {/* HEADER */}
        <header className="mb-6 sm:mb-10 text-left">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#0F766E] block mb-1.5 font-mono">
            DOMINANDO O GOOGLE SEARCH 2026
          </span>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-950 tracking-tight leading-snug sm:leading-tight mb-2.5">
            Anatomia da Página Perfeita
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-3xl leading-relaxed">
            Uma página forte <strong className="text-slate-900">responde</strong>, <strong className="text-slate-900">prova</strong> e <strong className="text-slate-900">orienta</strong>. Use esta sequência como roteiro de produção e auditoria.
          </p>
        </header>

        {/* 3 COLUMNS: PROMESSA, ESTRUTURA, PROVA */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          
          {/* 01 · CLAREZA */}
          <div className="rounded-2xl border-2 border-slate-200 bg-white p-6 relative hover:shadow-lg transition-all">
            <div className="absolute top-0 left-6 right-6 h-1 bg-blue-600 rounded-b-md" />
            <div className="text-xs font-mono font-bold text-blue-700 uppercase tracking-widest mb-2 pt-1">
              01 · CLAREZA
            </div>
            <h2 className="text-2xl font-serif font-bold text-slate-950 mb-2">
              Promessa
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
              Title, H1 e resumo explicam o assunto, o público e o benefício sem exagero.
            </p>
            <div className="space-y-2 text-xs text-slate-600 pt-3 border-t border-slate-100">
              <div className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>intenção principal clara</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>resposta direta no início</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>CTA coerente</span>
              </div>
            </div>
          </div>

          {/* 02 · COMPREENSÃO */}
          <div className="rounded-2xl border-2 border-slate-200 bg-white p-6 relative hover:shadow-lg transition-all">
            <div className="absolute top-0 left-6 right-6 h-1 bg-teal-600 rounded-b-md" />
            <div className="text-xs font-mono font-bold text-teal-700 uppercase tracking-widest mb-2 pt-1">
              02 · COMPREENSÃO
            </div>
            <h2 className="text-2xl font-serif font-bold text-slate-950 mb-2">
              Estrutura
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
              H2 em perguntas, exemplos, listas e tabelas tornam a decisão escaneável.
            </p>
            <div className="space-y-2 text-xs text-slate-600 pt-3 border-t border-slate-100">
              <div className="flex items-start gap-2">
                <span className="text-teal-600 font-bold">•</span>
                <span>objeções respondidas</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-teal-600 font-bold">•</span>
                <span>comparação e limites</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-teal-600 font-bold">•</span>
                <span>links internos descritivos</span>
              </div>
            </div>
          </div>

          {/* 03 · CONFIANÇA */}
          <div className="rounded-2xl border-2 border-slate-200 bg-white p-6 relative hover:shadow-lg transition-all">
            <div className="absolute top-0 left-6 right-6 h-1 bg-amber-600 rounded-b-md" />
            <div className="text-xs font-mono font-bold text-amber-700 uppercase tracking-widest mb-2 pt-1">
              03 · CONFIANÇA
            </div>
            <h2 className="text-2xl font-serif font-bold text-slate-950 mb-2">
              Prova
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
              Autoria, experiência, fontes, casos e dados mostram por que a promessa merece crédito.
            </p>
            <div className="space-y-2 text-xs text-slate-600 pt-3 border-t border-slate-100">
              <div className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">•</span>
                <span>evidência própria</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">•</span>
                <span>data de atualização</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">•</span>
                <span>schema coerente</span>
              </div>
            </div>
          </div>

        </div>

        {/* DARK BANNER: ANTES DE PUBLICAR, CONFIRME */}
        <div className="bg-[#111827] text-white rounded-2xl p-6 sm:p-8 mb-10 shadow-lg border border-slate-800">
          <h3 className="text-lg sm:text-xl font-serif font-bold text-white mb-6">
            Antes de publicar, confirme
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-300 block mb-1">
                Encontra?
              </span>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                URL indexável, canônica, mobile e rastreável pelo Googlebot.
              </p>
            </div>

            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-300 block mb-1">
                Entende?
              </span>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                Resposta principal visível no topo e linguagem natural do público.
              </p>
            </div>

            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300 block mb-1">
                Confia?
              </span>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                Prova, limites claros, fontes e responsáveis identificados.
              </p>
            </div>

          </div>
        </div>

        {/* LOWER CALLOUT */}
        <div className="rounded-2xl border-2 border-amber-300 bg-amber-50/60 p-6 mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-900 block mb-1">
            Pergunta de auditoria
          </span>
          <p className="text-sm sm:text-base text-slate-900 font-serif italic">
            &ldquo;Se o leitor lesse apenas o título, resumo, prova e CTA, conseguiria decidir o próximo passo?&rdquo;
          </p>
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
