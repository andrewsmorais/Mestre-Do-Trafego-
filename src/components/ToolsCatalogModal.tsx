import React from 'react';
import { 
  X, 
  Sparkles, 
  Code, 
  CheckSquare, 
  Calculator, 
  TrendingUp, 
  Terminal, 
  BookOpen, 
  ArrowRight 
} from 'lucide-react';
import { Language, TRANSLATIONS } from '../i18n/translations.ts';

interface ToolsCatalogModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectChapter: (chapterId: string) => void;
  language?: Language;
  isDark?: boolean;
}

interface ToolItem {
  id: string;
  chapterId: string;
  title: string;
  description: string;
  badge: string;
  icon: React.ReactNode;
  moduleLabel: string;
}

export const ToolsCatalogModal: React.FC<ToolsCatalogModalProps> = ({
  isOpen,
  onClose,
  onSelectChapter,
  language = 'pt',
  isDark = false
}) => {
  if (!isOpen) return null;

  const tools: ToolItem[] = [
    {
      id: 'master-suite',
      chapterId: 'modulo-ferramentas',
      title: 'Módulo 21 — Central Completa de Ferramentas & Simuladores',
      description: 'Acesse todas as ferramentas algorítmicas, simuladores de IA, geradores de código e calculadoras reunidos no módulo final do livro.',
      badge: 'Módulo Especial · Central',
      icon: <Sparkles className="w-5 h-5 text-amber-500" />,
      moduleLabel: 'Módulo 21'
    },
    {
      id: 'anatomy-files',
      chapterId: 'modulo-3',
      title: 'Pacote de 8 Arquivos da Raiz do Site (robots, sitemap, llms, ai, manifest)',
      description: 'Modelos prontos com download real e cópia para robots.txt, sitemap.xml, llms.txt, ai.txt, humans.txt, manifest.webmanifest e 404.html.',
      badge: 'Arquivos Raiz · SEO & GEO',
      icon: <Code className="w-5 h-5 text-emerald-500" />,
      moduleLabel: 'Módulo 3'
    },
    {
      id: 'llm-sim',
      chapterId: 'modulo-ferramentas',
      title: 'Simulador de Citações LLM & AI Overviews',
      description: 'Simula respostas do Gemini, Perplexity e SearchGPT com cálculo de pontuação GEO e diagnóstico de citabilidade da sua marca.',
      badge: 'Interativo · GEO/AEO',
      icon: <Sparkles className="w-5 h-5 text-amber-500" />,
      moduleLabel: 'Módulo 21 / 1'
    },
    {
      id: 'schema-gen',
      chapterId: 'modulo-3',
      title: 'Gerador Visual de Schema Markup JSON-LD',
      description: 'Crie códigos prontos para FAQPage, Article, LocalBusiness, Organization e Product em conformidade com o Google.',
      badge: 'Técnico · Rich Results',
      icon: <Code className="w-5 h-5 text-blue-500" />,
      moduleLabel: 'Módulo 3'
    },
    {
      id: 'audit-chk',
      chapterId: 'modulo-9',
      title: 'Checklist de Auditoria Completo (30 Dias)',
      description: 'Auditoria de ponta a ponta com salvamento de progresso e separação por nível de maturidade (Iniciante, Médio, Avançado).',
      badge: 'Auditoria · Diagnóstico',
      icon: <CheckSquare className="w-5 h-5 text-emerald-500" />,
      moduleLabel: 'Módulo 9'
    },
    {
      id: 'matrix-calc',
      chapterId: 'modulo-13',
      title: 'Matriz de Priorização (Impacto × Confiança × Facilidade)',
      description: 'Calcule o score de 1 a 125 para priorizar ações com retorno de receita antes de curiosidades sem conversão.',
      badge: 'Decisão · Gestão',
      icon: <Calculator className="w-5 h-5 text-purple-500" />,
      moduleLabel: 'Módulo 13'
    },
    {
      id: 'roi-calc',
      chapterId: 'modulo-14',
      title: 'Calculadora de ROI da Busca com IA (SEO vs. GEO)',
      description: 'Modele perda de cliques zero-clique vs ganho em citações de alta conversão, projetando lucro anual.',
      badge: 'Financeiro · ROI',
      icon: <TrendingUp className="w-5 h-5 text-emerald-500" />,
      moduleLabel: 'Módulo 14'
    },
    {
      id: 'prompts-lib',
      chapterId: 'prompts-ia',
      title: 'Biblioteca de Prompts para ChatGPT & Claude',
      description: 'Coleção com 7 prompts operacionais para agrupamento de keywords, revisão de AEO/GEO e briefings.',
      badge: 'Templates · Prompts',
      icon: <Terminal className="w-5 h-5 text-amber-500" />,
      moduleLabel: 'Módulo 18'
    },
    {
      id: 'glossary',
      chapterId: 'glossario',
      title: 'Dicionário e Glossário Expandido 2026',
      description: 'Tabela oficial com mais de 30 definições essenciais (RAG, Core Web Vitals, Citability, E-E-A-T, Zero-click).',
      badge: 'Referência Rápida',
      icon: <BookOpen className="w-5 h-5 text-blue-500" />,
      moduleLabel: 'Módulo 19'
    }
  ];

  const handleSelect = (chapId: string) => {
    onSelectChapter(chapId);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-xs overflow-y-auto print:hidden">
      <div className={`rounded-2xl sm:rounded-3xl border shadow-2xl max-w-2xl w-full my-6 overflow-hidden animate-in fade-in duration-200 ${
        isDark ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
      }`}>
        
        {/* Header */}
        <div className="bg-slate-950 text-white p-5 sm:p-6 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-amber-400 block">
                CENTRAL DE FERRAMENTAS DO LIVRO
              </span>
              <h3 className="text-base sm:text-lg font-serif font-bold text-white leading-tight">
                Ferramentas Práticas, Calculadoras & Geradores
              </h3>
            </div>
          </div>

          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tools List */}
        <div className="p-4 sm:p-6 max-h-[68vh] overflow-y-auto space-y-3">
          {tools.map((tool) => (
            <div
              key={tool.id}
              onClick={() => handleSelect(tool.chapterId)}
              className={`p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3.5 group ${
                isDark 
                  ? 'bg-slate-950/60 border-slate-800 hover:border-amber-500/50 hover:bg-slate-800/60' 
                  : 'bg-white border-slate-200 hover:border-amber-400 hover:bg-amber-50/20 shadow-2xs'
              }`}
            >
              <div className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                {tool.icon}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-[10px] font-mono font-bold text-slate-400 dark:text-slate-500">
                    {tool.moduleLabel} · {tool.badge}
                  </span>
                  <div className="text-xs text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 font-semibold">
                    <span>Abrir ferramenta</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                  {tool.title}
                </h4>

                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                  {tool.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className={`p-4 border-t flex items-center justify-between ${
          isDark ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'
        }`}>
          <span className="text-xs text-slate-500">
            Todas as ferramentas funcionam offline e salvam dados no seu navegador.
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-xs font-semibold cursor-pointer transition-colors"
          >
            Fechar
          </button>
        </div>

      </div>
    </div>
  );
};
