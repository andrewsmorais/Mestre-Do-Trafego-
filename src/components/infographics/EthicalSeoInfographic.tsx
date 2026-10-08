import React from 'react';

export const EthicalSeoInfographic: React.FC = () => {
  return (
    <div className="w-full max-w-5xl mx-auto my-3 sm:my-6">
      <div className="bg-white rounded-2xl sm:rounded-3xl border-2 border-slate-200/90 shadow-xl p-4 sm:p-10 md:p-12 relative overflow-hidden text-slate-900 font-sans print:shadow-none print:border print:p-8">
        
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-teal-700 via-blue-600 to-amber-600" />
        <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-2 sm:mb-0 sm:absolute sm:top-4 sm:right-6">
          INFOGRÁFICO 08 / PÁGINA 49
        </div>

        {/* HEADER */}
        <header className="mb-6 sm:mb-10 text-left">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#0F766E] block mb-1.5 font-mono">
            DOMINANDO O GOOGLE SEARCH 2026
          </span>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-950 tracking-tight leading-snug sm:leading-tight mb-2.5">
            SEO Responsável: Autoridade Sem Atalhos
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-3xl leading-relaxed">
            A estratégia sustentável melhora a compreensão e a confiança sem manipular clientes, plataformas ou mecanismos.
          </p>
        </header>

        {/* 3 COLUMNS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          
          <div className="rounded-2xl border-2 border-slate-200 bg-white p-6 relative hover:shadow-lg transition-all">
            <div className="absolute top-0 left-6 right-6 h-1 bg-teal-600 rounded-b-md" />
            <div className="text-xs font-mono font-bold text-teal-700 uppercase tracking-widest mb-2 pt-1">
              CONTEÚDO
            </div>
            <h2 className="text-2xl font-serif font-bold text-slate-950 mb-2">
              IA com revisão
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Use IA para organizar e acelerar. Acrescente experiência real, fontes verificadas, autoria identificável e rigorosa edição humana.
            </p>
          </div>

          <div className="rounded-2xl border-2 border-slate-200 bg-white p-6 relative hover:shadow-lg transition-all">
            <div className="absolute top-0 left-6 right-6 h-1 bg-blue-600 rounded-b-md" />
            <div className="text-xs font-mono font-bold text-blue-700 uppercase tracking-widest mb-2 pt-1">
              REPUTAÇÃO
            </div>
            <h2 className="text-2xl font-serif font-bold text-slate-950 mb-2">
              Reviews honestas
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Peça feedback autêntico. Nunca compre avaliações, não roteirize depoimentos e não condicione benefícios a notas positivas.
            </p>
          </div>

          <div className="rounded-2xl border-2 border-slate-200 bg-white p-6 relative hover:shadow-lg transition-all">
            <div className="absolute top-0 left-6 right-6 h-1 bg-amber-600 rounded-b-md" />
            <div className="text-xs font-mono font-bold text-amber-700 uppercase tracking-widest mb-2 pt-1">
              DISTRIBUIÇÃO
            </div>
            <h2 className="text-2xl font-serif font-bold text-slate-950 mb-2">
              Links legítimos
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Digital PR, pesquisas proprietárias e parcerias editoriais sérias. Qualquer relação patrocinada deve conter rel="sponsored".
            </p>
          </div>

        </div>

        {/* DARK BANNER: TESTE DE SUSTENTABILIDADE */}
        <div className="bg-[#111827] text-white rounded-2xl p-6 sm:p-8 mb-10 shadow-lg border border-slate-800">
          <h3 className="text-lg sm:text-xl font-serif font-bold text-white mb-6">
            Teste de sustentabilidade
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-300 block mb-1">
                Transparência
              </span>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                Eu revelaria abertamente esta tática ao meu cliente e ao meu público?
              </p>
            </div>

            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-300 block mb-1">
                Valor
              </span>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                Esta ação continuaria sendo útil para o usuário se o ranking do Google não existisse?
              </p>
            </div>

            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300 block mb-1">
                Consentimento
              </span>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                Tenho autorização formal para expor dados, marcas e depoimentos citados?
              </p>
            </div>

          </div>
        </div>

        {/* LOWER CALLOUT: REGRA DE OURO */}
        <div className="rounded-2xl border-2 border-amber-300 bg-amber-50/60 p-6 mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-900 block mb-1 font-mono">
            Regra de ouro
          </span>
          <p className="text-sm sm:text-base text-slate-900 font-medium leading-relaxed font-serif italic">
            &ldquo;Se a tática depende de esconder a intenção do cliente, do Google ou da plataforma, ela não pertence a uma estratégia de longo prazo.&rdquo;
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
