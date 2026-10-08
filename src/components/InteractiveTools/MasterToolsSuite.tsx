import React, { useState } from 'react';
import { 
  Sparkles, 
  Code, 
  Sliders, 
  Calculator, 
  CheckSquare, 
  Layers, 
  Cpu, 
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { Language, TRANSLATIONS } from '../../i18n/translations.ts';
import { LlmSearchSimulator } from './LlmSearchSimulator.tsx';
import { SchemaMarkupGenerator } from './SchemaMarkupGenerator.tsx';
import { MatrizPriorizacaoCalc } from './MatrizPriorizacaoCalc.tsx';
import { AiRoiCalculator } from './AiRoiCalculator.tsx';
import { FullAuditChecklist } from './FullAuditChecklist.tsx';

interface MasterToolsSuiteProps {
  isDark?: boolean;
  language?: Language;
  initialTool?: 'simulator' | 'schema' | 'ice' | 'roi' | 'audit';
}

export const MasterToolsSuite: React.FC<MasterToolsSuiteProps> = ({
  isDark = true,
  language = 'pt',
  initialTool = 'simulator'
}) => {
  const [activeTab, setActiveTab] = useState<'simulator' | 'schema' | 'ice' | 'roi' | 'audit'>(initialTool);
  const t = TRANSLATIONS[language];

  const TOOLS_LIST = [
    {
      id: 'simulator' as const,
      name: 'Simulador de Citações de IA',
      tag: 'GEO & AEO',
      badge: 'Tempo Real',
      icon: Cpu,
      color: 'amber',
      desc: 'Simule como Google AI Overview, Perplexity Pro e ChatGPT Search citam ou descartam sua marca.'
    },
    {
      id: 'schema' as const,
      name: 'Gerador de Schema JSON-LD',
      tag: 'Rich Results',
      badge: 'Google Schema',
      icon: Code,
      color: 'blue',
      desc: 'Crie códigos JSON-LD semânticos e validados para Artigos, Organizações, FAQs e Produtos.'
    },
    {
      id: 'ice' as const,
      name: 'Matriz de Priorização ICE',
      tag: 'Gestão Ágil',
      badge: 'ROI Trimestral',
      icon: Sliders,
      color: 'emerald',
      desc: 'Calcule o score de Impacto × Confiança × Facilidade (1 a 125) para priorizar quick wins.'
    },
    {
      id: 'roi' as const,
      name: 'Calculadora de ROI & Receita',
      tag: 'Negócios',
      badge: 'Atribuição',
      icon: Calculator,
      color: 'purple',
      desc: 'Projete tráfego, taxa de conversão comercial, ticket médio e retorno sobre investimento.'
    },
    {
      id: 'audit' as const,
      name: 'Checklist de Auditoria 2026',
      tag: 'Auditoria',
      badge: 'Interativo',
      icon: CheckSquare,
      color: 'rose',
      desc: 'Diagnóstico de 20 pontos nos níveis Iniciante, Intermediário e Avançado.'
    }
  ];

  return (
    <div className="space-y-8 my-6">
      
      {/* Hero Suite Banner */}
      <div className={`p-6 sm:p-8 rounded-2xl sm:rounded-3xl border shadow-xl relative overflow-hidden ${
        isDark 
          ? 'bg-gradient-to-br from-slate-900 via-slate-900 to-amber-950/30 border-amber-500/30 text-white' 
          : 'bg-gradient-to-br from-white via-amber-50/40 to-amber-100/30 border-amber-300 text-slate-900'
      }`}>
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-500 dark:text-amber-400 text-xs font-mono font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Suíte Interativa Oficial · Módulo 21</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold tracking-tight mb-2">
              Central de Ferramentas & Simuladores Práticos
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Todas as calculadoras, geradores e simuladores algorítmicos do livro reunidos em uma única estação de trabalho interativa. Alterne entre as ferramentas nas abas abaixo para aplicar na sua marca imediatamente.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 shrink-0">
            <span className="px-3 py-1.5 rounded-xl border border-emerald-500/40 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5" />
              100% Funcional no Navegador
            </span>
            <span className="px-3 py-1.5 rounded-xl border border-blue-500/40 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-semibold flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              Exportação Pronta
            </span>
          </div>
        </div>
      </div>

      {/* Tabs Navigation Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
        {TOOLS_LIST.map((tool) => {
          const isSelected = activeTab === tool.id;
          const Icon = tool.icon;
          return (
            <button
              key={tool.id}
              onClick={() => setActiveTab(tool.id)}
              className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-3 ${
                isSelected
                  ? isDark 
                    ? 'bg-amber-500/20 border-amber-500 ring-2 ring-amber-500/30 text-white shadow-lg' 
                    : 'bg-amber-100/90 border-amber-400 ring-2 ring-amber-400/40 text-amber-950 shadow-md'
                  : isDark 
                    ? 'bg-slate-900/80 border-slate-800 hover:border-slate-700 text-slate-300 hover:bg-slate-900' 
                    : 'bg-white border-slate-200 hover:border-slate-300 text-slate-700 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                  isSelected 
                    ? 'bg-amber-500 text-slate-950 shadow-xs' 
                    : isDark ? 'bg-slate-800 text-slate-400' : 'bg-slate-100 text-slate-600'
                }`}>
                  <Icon className="w-4 h-4" />
                </div>
                <span className={`text-[10px] font-mono uppercase px-1.5 py-0.5 rounded-md font-bold ${
                  isSelected 
                    ? 'bg-amber-400/30 text-amber-400 dark:text-amber-300' 
                    : isDark ? 'bg-slate-800 text-slate-500' : 'bg-slate-100 text-slate-500'
                }`}>
                  {tool.tag}
                </span>
              </div>

              <div>
                <div className="text-xs font-bold leading-snug">
                  {tool.name}
                </div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                  {tool.badge}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Render Active Tool */}
      <div className="transition-all animate-in fade-in duration-300">
        {activeTab === 'simulator' && (
          <div className="space-y-4">
            <div className={`p-4 rounded-xl border flex items-center justify-between text-xs ${
              isDark ? 'bg-amber-950/20 border-amber-800/40 text-amber-300' : 'bg-amber-50 border-amber-200 text-amber-900'
            }`}>
              <span>🤖 <strong>Simulador GEO 2026:</strong> Teste em tempo real a citabilidade da sua marca em respostas do Google AI Overview, Perplexity e ChatGPT.</span>
            </div>
            <LlmSearchSimulator isDark={isDark} language={language} />
          </div>
        )}

        {activeTab === 'schema' && (
          <div className="space-y-4">
            <div className={`p-4 rounded-xl border flex items-center justify-between text-xs ${
              isDark ? 'bg-blue-950/20 border-blue-800/40 text-blue-300' : 'bg-blue-50 border-blue-200 text-blue-900'
            }`}>
              <span>📐 <strong>Gerador de Schema JSON-LD:</strong> Produza marcações estruturadas para habilitar Rich Results no Google e acelerar a compreensão por IAs.</span>
            </div>
            <SchemaMarkupGenerator isDark={isDark} language={language} />
          </div>
        )}

        {activeTab === 'ice' && (
          <div className="space-y-4">
            <div className={`p-4 rounded-xl border flex items-center justify-between text-xs ${
              isDark ? 'bg-emerald-950/20 border-emerald-800/40 text-emerald-300' : 'bg-emerald-50 border-emerald-200 text-emerald-900'
            }`}>
              <span>🎯 <strong>Matriz de Priorização ICE:</strong> Multiplique Impacto × Confiança × Facilidade (1 a 125) para priorizar tarefas de alto retorno comercial.</span>
            </div>
            <MatrizPriorizacaoCalc />
          </div>
        )}

        {activeTab === 'roi' && (
          <div className="space-y-4">
            <div className={`p-4 rounded-xl border flex items-center justify-between text-xs ${
              isDark ? 'bg-purple-950/20 border-purple-800/40 text-purple-300' : 'bg-purple-50 border-purple-200 text-purple-900'
            }`}>
              <span>💰 <strong>Calculadora de ROI de SEO:</strong> Estime a receita direta e assistida gerada pelas suas otimizações orgânicas.</span>
            </div>
            <AiRoiCalculator isDark={isDark} language={language} />
          </div>
        )}

        {activeTab === 'audit' && (
          <div className="space-y-4">
            <div className={`p-4 rounded-xl border flex items-center justify-between text-xs ${
              isDark ? 'bg-rose-950/20 border-rose-800/40 text-rose-300' : 'bg-rose-50 border-rose-200 text-rose-900'
            }`}>
              <span>📋 <strong>Checklist Completo de Auditoria:</strong> Avalie sua página nos 20 critérios essenciais do SEO moderno.</span>
            </div>
            <FullAuditChecklist />
          </div>
        )}
      </div>

    </div>
  );
};
