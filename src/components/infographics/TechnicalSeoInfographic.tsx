import React from 'react';

export const TechnicalSeoInfographic: React.FC = () => {
  return (
    <div className="w-full max-w-5xl mx-auto my-3 sm:my-6">
      <div className="bg-white rounded-2xl sm:rounded-3xl border-2 border-slate-200/90 shadow-xl p-4 sm:p-10 md:p-12 relative overflow-hidden text-slate-900 font-sans print:shadow-none print:border print:p-8">
        
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-700 via-indigo-600 to-amber-600" />
        <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-2 sm:mb-0 sm:absolute sm:top-4 sm:right-6">
          INFOGRÁFICO 04 / PÁGINA 20
        </div>

        {/* HEADER */}
        <header className="mb-6 sm:mb-10 text-left">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#0F766E] block mb-1.5 font-mono">
            DOMINANDO O GOOGLE SEARCH 2026
          </span>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-950 tracking-tight leading-snug sm:leading-tight mb-2.5">
            SEO Técnico: As Três Métricas Essenciais
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-3xl leading-relaxed">
            Velocidade ajuda a experiência, mas a página também precisa ser acessível, rastreável e útil.
          </p>
        </header>

        {/* 3 CORE WEB VITALS METRICS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          
          {/* LCP */}
          <div className="rounded-2xl border-2 border-slate-200 bg-white p-6 relative hover:shadow-lg transition-all">
            <div className="absolute top-0 left-6 right-6 h-1 bg-blue-600 rounded-b-md" />
            <div className="text-xs font-mono font-bold text-blue-700 uppercase tracking-widest mb-1 pt-1">
              LCP
            </div>
            <h2 className="text-2xl font-serif font-bold text-slate-950 mb-1">
              Carregamento
            </h2>
            <p className="text-xs text-slate-600 mb-4">
              Tempo até o maior elemento visível carregar completamente.
            </p>
            <div className="p-2.5 rounded-lg bg-blue-50 text-blue-900 font-mono text-xs font-bold mb-4">
              Meta: até 2,5 segundos
            </div>
            <div className="space-y-1.5 text-xs text-slate-600 pt-2 border-t border-slate-100">
              <div>• priorize imagem principal (hero)</div>
              <div>• reduza scripts bloqueantes</div>
              <div>• melhore cache e resposta de servidor</div>
            </div>
          </div>

          {/* INP */}
          <div className="rounded-2xl border-2 border-slate-200 bg-white p-6 relative hover:shadow-lg transition-all">
            <div className="absolute top-0 left-6 right-6 h-1 bg-indigo-600 rounded-b-md" />
            <div className="text-xs font-mono font-bold text-indigo-700 uppercase tracking-widest mb-1 pt-1">
              INP
            </div>
            <h2 className="text-2xl font-serif font-bold text-slate-950 mb-1">
              Resposta
            </h2>
            <p className="text-xs text-slate-600 mb-4">
              Tempo de reação e feedback visual após uma interação do usuário.
            </p>
            <div className="p-2.5 rounded-lg bg-indigo-50 text-indigo-900 font-mono text-xs font-bold mb-4">
              Meta: abaixo de 200 ms
            </div>
            <div className="space-y-1.5 text-xs text-slate-600 pt-2 border-t border-slate-100">
              <div>• reduza carga pesada de JavaScript</div>
              <div>• quebre tarefas longas na thread</div>
              <div>• adie código não essencial</div>
            </div>
          </div>

          {/* CLS */}
          <div className="rounded-2xl border-2 border-slate-200 bg-white p-6 relative hover:shadow-lg transition-all">
            <div className="absolute top-0 left-6 right-6 h-1 bg-amber-600 rounded-b-md" />
            <div className="text-xs font-mono font-bold text-amber-700 uppercase tracking-widest mb-1 pt-1">
              CLS
            </div>
            <h2 className="text-2xl font-serif font-bold text-slate-950 mb-1">
              Estabilidade
            </h2>
            <p className="text-xs text-slate-600 mb-4">
              Deslocamentos inesperados de layout enquanto a página é renderizada.
            </p>
            <div className="p-2.5 rounded-lg bg-amber-50 text-amber-900 font-mono text-xs font-bold mb-4">
              Meta: abaixo de 0,1
            </div>
            <div className="space-y-1.5 text-xs text-slate-600 pt-2 border-t border-slate-100">
              <div>• reserve espaço para imagens e banners</div>
              <div>• controle anúncios e popups dinâmicos</div>
              <div>• utilize dimensões explícitas width/height</div>
            </div>
          </div>

        </div>

        {/* DARK BANNER: BASE TÉCNICA MÍNIMA */}
        <div className="bg-[#111827] text-white rounded-2xl p-6 sm:p-8 mb-10 shadow-lg border border-slate-800">
          <h3 className="text-lg sm:text-xl font-serif font-bold text-white mb-6">
            Base técnica mínima
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-300 block mb-1">
                Rastreável
              </span>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                Robots.txt, links funcionais, sitemap.xml e respostas de servidor 200 corretas.
              </p>
            </div>

            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-300 block mb-1">
                Indexável
              </span>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                Canonical declarada, sem noindex acidental e conteúdo principal renderizável.
              </p>
            </div>

            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300 block mb-1">
                Usável
              </span>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                Mobile-first consistente, protocolo HTTPS ativo, acessibilidade e caminho de conversão.
              </p>
            </div>

          </div>
        </div>

        {/* LOWER CALLOUT: PRIORIDADE */}
        <div className="rounded-2xl border-2 border-amber-300 bg-amber-50/60 p-6 mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-900 block mb-1">
            Prioridade de Execução
          </span>
          <p className="text-sm sm:text-base text-slate-900 leading-relaxed">
            Corrija primeiro URLs importantes para o negócio e problemas consistentes comprovados em dados reais de usuários, não em micro-erros de páginas secundárias.
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
