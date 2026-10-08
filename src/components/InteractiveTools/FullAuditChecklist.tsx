import React, { useState } from 'react';
import { CheckSquare, RotateCcw } from 'lucide-react';

interface CheckItem {
  id: string;
  category: string;
  label: string;
  checked: boolean;
}

const CHECKLIST_SECTIONS = [
  {
    category: "9.1.1 Estratégia",
    items: [
      { id: 'est_1', label: 'Cada página importante tem uma intenção principal definida.' },
      { id: 'est_2', label: 'O conteúdo responde a uma decisão de negócio, não apenas a uma consulta genérica.' },
      { id: 'est_3', label: 'A proposta de valor é específica para o público comprador.' },
      { id: 'est_4', label: 'Existe uma conversão mensurável e adequada ao estágio da jornada.' },
    ]
  },
  {
    category: "9.1.2 Conteúdo e AEO",
    items: [
      { id: 'cnt_1', label: 'H1 claro, único e alinhado ao assunto principal.' },
      { id: 'cnt_2', label: 'H2 organizados por perguntas reais ou etapas úteis de decisão.' },
      { id: 'cnt_3', label: 'Resposta curta (40 a 60 palavras) aparece antes do aprofundamento.' },
      { id: 'cnt_4', label: 'Há exemplos, critérios objetivos, limites e objeções comerciais respondidas.' },
      { id: 'cnt_5', label: 'Autoria e data de atualização são visíveis quando relevantes (E-E-A-T).' },
      { id: 'cnt_6', label: 'A página contém experiência prática ou evidência própria documentada.' },
      { id: 'cnt_7', label: 'Imagens são relevantes, rápidas, comprimidas e com alt text acessível.' },
    ]
  },
  {
    category: "9.1.3 SEO Técnico",
    items: [
      { id: 'tec_1', label: 'URL é curta, estável, indexável e canônica.' },
      { id: 'tec_2', label: 'Não há noindex acidental impedindo a descoberta.' },
      { id: 'tec_3', label: 'robots.txt não bloqueia recursos essenciais de renderização.' },
      { id: 'tec_4', label: 'Sitemap contém URLs canônicas atualizadas e foi enviado ao Search Console.' },
      { id: 'tec_5', label: 'Conteúdo essencial, preços e CTAs funcionam perfeitamente na versão mobile.' },
      { id: 'tec_6', label: 'Links internos e redirecionamentos 301 foram testados.' },
      { id: 'tec_7', label: 'Métricas de Core Web Vitals (LCP < 2,5s, INP < 200ms, CLS < 0,1) monitoradas.' },
    ]
  },
  {
    category: "9.1.4 Dados Estruturados",
    items: [
      { id: 'sch_1', label: 'O tipo de Schema usado descreve o conteúdo real e visível na tela.' },
      { id: 'sch_2', label: 'As propriedades em JSON-LD não contradizem as informações da página.' },
      { id: 'sch_3', label: 'O JSON-LD foi validado no Rich Results Test oficial do Google.' },
      { id: 'sch_4', label: 'Datas, preços, disponibilidade e horários estão sincronizados com a realidade.' },
      { id: 'sch_5', label: 'Não há avaliações falsas ou conteúdo invisível marcado no código.' },
    ]
  },
  {
    category: "9.1.5 Autoridade e Digital PR",
    items: [
      { id: 'aut_1', label: 'Há um plano para conquistar menções legítimas e cobertura editorial.' },
      { id: 'aut_2', label: 'Estudos de caso têm autorização formal, números e contexto transparente.' },
      { id: 'aut_3', label: 'Conteúdo publicado em plataformas terceiras é original e adaptado ao canal.' },
      { id: 'aut_4', label: 'A empresa responde dúvidas e críticas com transparência pública.' },
    ]
  },
  {
    category: "9.1.6 Local e Maps",
    items: [
      { id: 'loc_1', label: 'Perfil da Empresa no Google verificado e 100% preenchido.' },
      { id: 'loc_2', label: 'Categoria principal mais específica e verdadeira selecionada.' },
      { id: 'loc_3', label: 'NAP (Nome, Endereço e Telefone) consistente em todas as citações.' },
      { id: 'loc_4', label: 'Horários normais e especiais de feriados mantidos atualizados.' },
      { id: 'loc_5', label: 'Fotos próprias e recentes do ambiente, equipe e serviços.' },
      { id: 'loc_6', label: 'Avaliações solicitadas de forma ética após atendimento real.' },
    ]
  },
  {
    category: "9.1.7 Medição e Receita",
    items: [
      { id: 'med_1', label: 'Search Console configurado e monitorando impressões e CTR.' },
      { id: 'med_2', label: 'Conversões e microconversões de avanço definidas no GA4.' },
      { id: 'med_3', label: 'Mudanças registradas com data, URL e hipótese de negócio.' },
      { id: 'med_4', label: 'Relatórios geram decisões de prioridade e revisão de oferta.' },
    ]
  }
];

export const FullAuditChecklist: React.FC = () => {
  const [checkedIds, setCheckedIds] = useState<Record<string, boolean>>({});

  const toggle = (id: string) => {
    setCheckedIds(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const totalItems = CHECKLIST_SECTIONS.reduce((acc, sec) => acc + sec.items.length, 0);
  const totalChecked = Object.values(checkedIds).filter(Boolean).length;
  const progressPercent = Math.round((totalChecked / totalItems) * 100);

  const resetAll = () => {
    setCheckedIds({});
  };

  return (
    <div className="bg-white rounded-xl sm:rounded-2xl border-2 border-slate-200 p-4 sm:p-8 my-6 shadow-xs">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4 sm:mb-6 pb-4 sm:pb-6 border-b border-slate-200">
        <div>
          <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-amber-800 block">
            Checklist Completo de Auditoria · Módulo 9
          </span>
          <h3 className="text-lg sm:text-2xl font-serif font-bold text-slate-950 leading-snug">
            Auditoria Oficial de SEO, AEO, GEO e Negócio
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            {totalChecked} de {totalItems} itens auditados ({progressPercent}%)
          </p>
        </div>

        <button
          onClick={resetAll}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-slate-600 hover:text-slate-900 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Limpar Marcações</span>
        </button>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-2.5 bg-slate-100 rounded-full mb-8 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-blue-600 via-amber-500 to-emerald-600 transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Checklist by Category */}
      <div className="space-y-8">
        {CHECKLIST_SECTIONS.map((sec) => (
          <div key={sec.category} className="space-y-3">
            <h4 className="text-sm font-bold text-slate-900 font-serif border-b border-slate-100 pb-1.5">
              {sec.category}
            </h4>
            <div className="space-y-2">
              {sec.items.map((item) => {
                const isChecked = !!checkedIds[item.id];
                return (
                  <label
                    key={item.id}
                    onClick={() => toggle(item.id)}
                    className={`flex items-start gap-3 p-3 rounded-xl border transition-all cursor-pointer ${
                      isChecked
                        ? 'bg-amber-50/40 border-amber-300 text-slate-950 font-medium'
                        : 'bg-white border-slate-200 hover:border-slate-300 text-slate-700'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => {}}
                      className="mt-0.5 w-4 h-4 rounded text-amber-600 focus:ring-amber-500 cursor-pointer"
                    />
                    <span className="text-xs sm:text-sm leading-relaxed">
                      {item.label}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
