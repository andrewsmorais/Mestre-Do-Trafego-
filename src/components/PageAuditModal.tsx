import React, { useState } from 'react';
import { 
  X, 
  CheckSquare, 
  AlertCircle, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  RotateCcw,
  ShieldCheck
} from 'lucide-react';

interface PageAuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ChecklistItem {
  id: string;
  category: 'Encontra (SEO)' | 'Entende (AEO)' | 'Confia (GEO)' | 'Converte (Negócio)';
  title: string;
  desc: string;
  checked: boolean;
}

const INITIAL_ITEMS: ChecklistItem[] = [
  // Encontra (SEO)
  {
    id: 's1',
    category: 'Encontra (SEO)',
    title: 'URL indexável, canônica e rastreável',
    desc: 'Sem bloqueios acidentais em robots.txt e sem tag noindex indesejada.',
    checked: false
  },
  {
    id: 's2',
    category: 'Encontra (SEO)',
    title: 'H1 único e alinhado à intenção principal',
    desc: 'O assunto principal está claro e não há repetição mecânica de palavras-chave.',
    checked: false
  },
  {
    id: 's3',
    category: 'Encontra (SEO)',
    title: 'Experiência mobile impecável e veloz',
    desc: 'Mesmo conteúdo da versão desktop, carregamento ágil e botões fáceis de tocar.',
    checked: false
  },
  // Entende (AEO)
  {
    id: 'a1',
    category: 'Entende (AEO)',
    title: 'Resumo / Resposta direta no topo (TL;DR)',
    desc: 'Definição ou resposta clara de 40 a 60 palavras antes de aprofundar o texto.',
    checked: false
  },
  {
    id: 'a2',
    category: 'Entende (AEO)',
    title: 'H2 formulados como perguntas reais do usuário',
    desc: 'Intertítulos que respondem exatamente às dúvidas buscadas.',
    checked: false
  },
  {
    id: 'a3',
    category: 'Entende (AEO)',
    title: 'Tabelas, listas e exemplos escaneáveis',
    desc: 'Facilidade de leitura rápida sem obrigar o leitor a ler parágrafos densos.',
    checked: false
  },
  // Confia (GEO)
  {
    id: 'g1',
    category: 'Confia (GEO)',
    title: 'Autoria, credenciais e data de atualização visíveis',
    desc: 'Especialista identificado para construir sinais transparentes de E-E-A-T.',
    checked: false
  },
  {
    id: 'g2',
    category: 'Confia (GEO)',
    title: 'Provas concretas, dados próprios ou casos reais',
    desc: 'Evidências com números e fontes que modelos de IA possam citar e validar.',
    checked: false
  },
  {
    id: 'g3',
    category: 'Confia (GEO)',
    title: 'Clareza de escopo: para quem serve e para quem NÃO serve',
    desc: 'Transparência editorial que constrói autoridade duradoura e reduz devoluções.',
    checked: false
  },
  // Converte (Negócio)
  {
    id: 'c1',
    category: 'Converte (Negócio)',
    title: 'Próximo passo comercial simples e visível (CTA)',
    desc: 'Botão de ação claro (comprar, agendar, ligar, WhatsApp ou pedir proposta).',
    checked: false
  },
  {
    id: 'c2',
    category: 'Converte (Negócio)',
    title: 'Rastreamento de conversão ativo',
    desc: 'Eventos configurados no GA4/CRM para medir receita e leads, não só cliques.',
    checked: false
  }
];

export const PageAuditModal: React.FC<PageAuditModalProps> = ({ isOpen, onClose }) => {
  const [items, setItems] = useState<ChecklistItem[]>(INITIAL_ITEMS);

  if (!isOpen) return null;

  const toggleItem = (id: string) => {
    setItems(prev => prev.map(item => item.id === id ? { ...item, checked: !item.checked } : item));
  };

  const resetAll = () => {
    setItems(INITIAL_ITEMS);
  };

  const checkedCount = items.filter(i => i.checked).length;
  const totalCount = items.length;
  const scorePercent = Math.round((checkedCount / totalCount) * 100);

  const getVerdict = () => {
    if (scorePercent === 100) return { title: 'Página de Alta Performance 2026', desc: 'Sua página atende com maestria aos critérios de SEO, AEO, GEO e conversão de negócios.', color: 'text-emerald-700 bg-emerald-50 border-emerald-300' };
    if (scorePercent >= 70) return { title: 'Base Sólida, Ajustes Pontuais', desc: 'Boa estrutura. Foque nos itens desmarcados para eliminar gargalos de compreensão e prova.', color: 'text-amber-800 bg-amber-50 border-amber-300' };
    if (scorePercent >= 40) return { title: 'Risco de Tráfego Sem Conversão', desc: 'Atenção aos pilares de AEO e GEO. A página pode até receber visitas mas tem pouca chance de reter e converter.', color: 'text-orange-800 bg-orange-50 border-orange-300' };
    return { title: 'Gargalos Críticos Identificados', desc: 'A página corre risco de passar despercebida por IAs ou frustrar usuários por falta de respostas claras e CTA.', color: 'text-rose-800 bg-rose-50 border-rose-300' };
  };

  const verdict = getVerdict();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-3xl border-2 border-slate-200 shadow-2xl max-w-2xl w-full my-8 overflow-hidden animate-in fade-in duration-200">
        
        {/* Header */}
        <div className="bg-slate-900 text-white p-6 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-400">
              <CheckSquare className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-amber-400 block">
                Auditoria Rápida da Sua Página
              </span>
              <h3 className="text-lg font-serif font-bold text-white">
                Checklist Oficial: Antes de Publicar, Confirme
              </h3>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg transition-colors cursor-pointer"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Score & Verdict Ribbon */}
        <div className="p-6 bg-slate-50 border-b border-slate-200">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold font-serif text-slate-950 tabular-nums">
                  {scorePercent}%
                </span>
                <span className="text-xs text-slate-500">
                  ({checkedCount} de {totalCount} critérios atendidos)
                </span>
              </div>
              <div className="w-48 sm:w-64 h-2 bg-slate-200 rounded-full mt-2 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-amber-500 to-amber-600 transition-all duration-300"
                  style={{ width: `${scorePercent}%` }}
                />
              </div>
            </div>

            <button
              onClick={resetAll}
              className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-slate-900 font-medium px-2.5 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-100 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reiniciar Checklist</span>
            </button>
          </div>

          <div className={`p-3.5 rounded-xl border text-xs leading-relaxed ${verdict.color}`}>
            <strong className="block text-sm font-bold mb-0.5">{verdict.title}</strong>
            {verdict.desc}
          </div>
        </div>

        {/* Checklist Content */}
        <div className="p-6 max-h-[50vh] overflow-y-auto space-y-6">
          {(['Encontra (SEO)', 'Entende (AEO)', 'Confia (GEO)', 'Converte (Negócio)'] as const).map((category) => {
            const catItems = items.filter(i => i.category === category);
            return (
              <div key={category}>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5 flex items-center justify-between">
                  <span>{category}</span>
                  <span className="text-[11px] font-mono text-slate-400">
                    {catItems.filter(i => i.checked).length}/{catItems.length}
                  </span>
                </h4>
                
                <div className="space-y-2">
                  {catItems.map((item) => (
                    <label
                      key={item.id}
                      onClick={() => toggleItem(item.id)}
                      className={`flex items-start gap-3 p-3 rounded-xl border transition-all cursor-pointer ${
                        item.checked
                          ? 'bg-amber-50/40 border-amber-300/80 text-slate-900'
                          : 'bg-white border-slate-200 hover:border-slate-300 text-slate-700'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={item.checked}
                        onChange={() => {}}
                        className="mt-0.5 w-4 h-4 rounded text-amber-600 focus:ring-amber-500 cursor-pointer"
                      />
                      <div className="flex-1">
                        <span className={`text-xs sm:text-sm font-semibold block ${item.checked ? 'text-slate-950 font-bold' : 'text-slate-800'}`}>
                          {item.title}
                        </span>
                        <span className="text-[11px] sm:text-xs text-slate-500 leading-normal block mt-0.5">
                          {item.desc}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <p className="text-xs text-slate-500 italic">
            Checklist prático extraído do Módulo 9 do livro
          </p>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold cursor-pointer"
          >
            Concluir Diagnóstico
          </button>
        </div>

      </div>
    </div>
  );
};
