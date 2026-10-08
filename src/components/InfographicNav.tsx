import React from 'react';
import { Printer, Code, Eye, Layers } from 'lucide-react';

export type InfographicId = 
  | 'trinity'
  | 'consumer'
  | 'perfect_page'
  | 'technical'
  | 'quick_wins'
  | 'execution'
  | 'click_revenue'
  | 'ethical';

interface InfographicNavProps {
  activeId: InfographicId;
  onSelect: (id: InfographicId) => void;
  onOpenCode: () => void;
}

const NAV_ITEMS: { id: InfographicId; label: string; page: string }[] = [
  { id: 'trinity', label: 'A Trindade da Busca', page: 'Pág. 3' },
  { id: 'consumer', label: 'Decisão do Consumidor', page: 'Pág. 6' },
  { id: 'perfect_page', label: 'Anatomia da Página', page: 'Pág. 14' },
  { id: 'technical', label: 'SEO Técnico (Core Vitals)', page: 'Pág. 20' },
  { id: 'quick_wins', label: 'Quick Wins Search Console', page: 'Pág. 27' },
  { id: 'execution', label: 'Plano 90 Dias', page: 'Pág. 36' },
  { id: 'click_revenue', label: 'Do Clique à Receita', page: 'Pág. 45' },
  { id: 'ethical', label: 'SEO Responsável', page: 'Pág. 49' },
];

export const InfographicNav: React.FC<InfographicNavProps> = ({ activeId, onSelect, onOpenCode }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-2xs print:hidden">
      
      {/* Top Header Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Zone */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-slate-900 border border-amber-500/40 flex items-center justify-center text-amber-400 font-serif font-bold text-sm shadow-xs">
            G
          </div>
          <div>
            <h1 className="text-base font-serif font-bold text-slate-900 leading-tight">
              Dominando o Google Search 2026
            </h1>
            <p className="text-[11px] text-slate-500 font-mono">
              Infográficos Oficiais em Código Web (HTML + Tailwind)
            </p>
          </div>
        </div>

        {/* Global Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-medium text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            title="Imprimir ou salvar em PDF"
          >
            <Printer className="w-3.5 h-3.5 text-slate-600" />
            <span className="hidden sm:inline">Imprimir / PDF</span>
          </button>

          <button
            onClick={onOpenCode}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer"
            title="Ver e copiar o código HTML + Tailwind"
          >
            <Code className="w-3.5 h-3.5 text-amber-400" />
            <span>Copiar Código HTML</span>
          </button>
        </div>

      </div>

      {/* Infographics Horizontal Scrollable Tabs */}
      <div className="border-t border-slate-100 bg-slate-50/80 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto py-2.5 no-scrollbar scroll-smooth">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 shrink-0 font-mono mr-1">
            INFOGRÁFICOS:
          </span>
          {NAV_ITEMS.map((item, index) => {
            const isActive = activeId === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelect(item.id)}
                className={`whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-xs font-semibold'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <span className={`text-[10px] font-mono px-1 py-0.2 rounded ${
                  isActive ? 'bg-amber-400 text-slate-950 font-bold' : 'bg-slate-100 text-slate-500'
                }`}>
                  {item.page}
                </span>
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>

    </header>
  );
};
