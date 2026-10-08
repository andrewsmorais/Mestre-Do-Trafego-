import React from 'react';

export const ClickToRevenueInfographic: React.FC = () => {
  return (
    <div className="w-full max-w-5xl mx-auto my-3 sm:my-6">
      <div className="bg-white rounded-2xl sm:rounded-3xl border-2 border-slate-200/90 shadow-xl p-4 sm:p-10 md:p-12 relative overflow-hidden text-slate-900 font-sans print:shadow-none print:border print:p-8">
        
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-700 via-teal-600 to-amber-600" />
        <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-2 sm:mb-0 sm:absolute sm:top-4 sm:right-6">
          INFOGRÁFICO 07 / PÁGINA 45
        </div>

        {/* HEADER */}
        <header className="mb-6 sm:mb-10 text-left">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#0F766E] block mb-1.5 font-mono">
            DOMINANDO O GOOGLE SEARCH 2026
          </span>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-950 tracking-tight leading-snug sm:leading-tight mb-2.5">
            Medição: Do Clique à Receita
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-3xl leading-relaxed">
            Rankings e tráfego são sinais intermediários. O objetivo é saber se a busca trouxe o cliente certo e contribuiu para o negócio.
          </p>
        </header>

        {/* 4 MEASUREMENT LAYERS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          
          {/* Descoberta */}
          <div className="rounded-2xl bg-[#0F2942] text-white p-5 flex flex-col justify-between shadow-sm">
            <div>
              <span className="text-xs font-mono font-bold text-blue-300 block mb-1">
                Descoberta
              </span>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mt-2">
                Impressões, consultas, alcance e menções de marca na web.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-blue-200">
              Métrica: Exposição inicial
            </div>
          </div>

          {/* Engajamento */}
          <div className="rounded-2xl bg-[#0E4A62] text-white p-5 flex flex-col justify-between shadow-sm">
            <div>
              <span className="text-xs font-mono font-bold text-sky-300 block mb-1">
                Engajamento
              </span>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mt-2">
                Scroll depth, reprodução de vídeo, retorno e páginas visitadas.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-sky-200">
              Métrica: Utilidade percebida
            </div>
          </div>

          {/* Conversão */}
          <div className="rounded-2xl bg-[#0D6257] text-white p-5 flex flex-col justify-between shadow-sm">
            <div>
              <span className="text-xs font-mono font-bold text-teal-300 block mb-1">
                Conversão
              </span>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mt-2">
                Formulário enviado, ligação, conversa WhatsApp, agendamento ou compra.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-teal-200">
              Métrica: Ação de avanço
            </div>
          </div>

          {/* Receita */}
          <div className="rounded-2xl bg-[#854D0E] text-white p-5 flex flex-col justify-between shadow-sm">
            <div>
              <span className="text-xs font-mono font-bold text-amber-200 block mb-1">
                Receita
              </span>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mt-2">
                Lead qualificado, venda faturada, margem, LTV e renovação.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-amber-200">
              Métrica: Retorno comercial real
            </div>
          </div>

        </div>

        {/* TWO MIDDLE CARDS: INSTRUMENTOS & ATRIBUIÇÃO */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 block mb-1 font-mono">
              INSTRUMENTOS
            </span>
            <h3 className="text-lg font-serif font-bold text-slate-900 mb-2">
              Conecte as camadas
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              O Search Console mostra exposição e cliques na SERP. O Google Analytics mostra o comportamento das sessões. O CRM revela a qualidade, status e receita. Nenhum deles sozinho conta a história completa.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block mb-1 font-mono">
              ATRIBUIÇÃO
            </span>
            <h3 className="text-lg font-serif font-bold text-slate-900 mb-2">
              Evite certezas falsas
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Use primeiro contato, último clique, conversões assistidas, coortes e a simples pergunta pós-venda (&ldquo;Como você nos conheceu?&rdquo;) para entender onde o investimento realmente gerou lucro.
            </p>
          </div>

        </div>

        {/* DECISÃO CORRETA CALLOUT */}
        <div className="rounded-2xl border-2 border-amber-300 bg-amber-50/60 p-6 mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-900 block mb-1">
            Decisão correta
          </span>
          <p className="text-sm sm:text-base text-slate-900 leading-relaxed font-medium">
            Se o tráfego aumentou, mas os leads não melhoraram, investigue a intenção da busca, a oferta comercial, a prova social e a experiência mobile antes de produzir mais conteúdo desnecessário.
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
