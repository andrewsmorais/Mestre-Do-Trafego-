import React, { useState } from 'react';
import { 
  Cpu, 
  Search, 
  Layers, 
  Database, 
  Sparkles, 
  ArrowRight, 
  CheckCircle, 
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

interface Stage {
  id: string;
  step: string;
  title: string;
  subtitle: string;
  techTerm: string;
  howItWorks: string;
  whatKillsIt: string;
  howToWin: string;
}

const STAGES: Stage[] = [
  {
    id: 'fanout',
    step: 'Etapa 1',
    title: 'Desdobramento da Consulta',
    subtitle: 'Query Fan-Out & Subconsultas',
    techTerm: 'Expansão Latente Multiquery',
    howItWorks: 'O Google quebra uma pergunta complexa do usuário em 4 a 12 buscas complementares nos bastidores para mapear definições, prós/contras, preços e opiniões.',
    whatKillsIt: 'Páginas que focam apenas em uma palavra-chave exata repetida e esquecem as perguntas secundárias da jornada.',
    howToWin: 'Cubra o tópico em silo com H2s respondendo perguntas reais de decisão identificadas no Suggest e Reddit.'
  },
  {
    id: 'retrieval',
    step: 'Etapa 2',
    title: 'Recuperação & Filtragem de Entidades',
    subtitle: 'Knowledge Graph & Vetorização',
    techTerm: 'Hybrid Semantic Retrieval',
    howItWorks: 'O motor rastreia bilhões de páginas e filtra apenas aquelas cuja entidade (marca, produto, autor) tem sinais verificáveis de autoridade no Knowledge Graph.',
    whatKillsIt: 'Sites fantasmas sem página Sobre, sem dados cadastrais (CNPJ/endereço), sem links de imprensa e com autoria anônima.',
    howToWin: 'Estruture Schema Organization com sameAs (Wikidata, LinkedIn) e mantenha consistência de NAP e menções na mídia.'
  },
  {
    id: 'chunking',
    step: 'Etapa 3',
    title: 'Fragmentação e Seleção de Trechos',
    subtitle: 'Chunking Semântico & Densidade',
    techTerm: 'Context Window Ingestion',
    howItWorks: 'O robô não lê o artigo inteiro de uma vez: ele corta o texto em parágrafos de 50 a 100 palavras e seleciona apenas os fragmentos com maior densidade de resposta.',
    whatKillsIt: 'Textos prolixos com enrolação de 5 parágrafos antes de finalmente responder o que o usuário perguntou.',
    howToWin: 'Use a regra de ouro do AEO: resposta direta concisa e citável de 40 a 60 palavras logo no início de cada seção.'
  },
  {
    id: 'synthesis',
    step: 'Etapa 4',
    title: 'Síntese Generativa e Citação',
    subtitle: 'Grounded Output & Links de Apoio',
    techTerm: 'Attributed Citation Generation',
    howItWorks: 'O modelo de linguagem (Gemini ou GPT) redige a resposta final e ancora as afirmações diretamente nos links dos trechos originais com maior pontuação de relevância.',
    whatKillsIt: 'Afirmações vagas ("somos os melhores") sem dados, benchmarks ou pesquisas com metodologia explícita.',
    howToWin: 'Publique dados primários com números, tabelas comparativas e citações explícitas fáceis de serem referenciadas.'
  }
];

export const AiRagInfographic: React.FC = () => {
  const [activeStageId, setActiveStageId] = useState<string>('fanout');
  const activeStage = STAGES.find(s => s.id === activeStageId) || STAGES[0];

  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-7 shadow-xs">
      
      {/* Title */}
      <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-200 dark:border-slate-800">
        <div className="w-9 h-9 rounded-xl bg-purple-500/15 border border-purple-400/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
          <Cpu className="w-5 h-5" />
        </div>
        <div>
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 block">
            INFOGRÁFICO INTERATIVO DE ARQUITETURA · GEO 2026
          </span>
          <h4 className="text-base sm:text-lg font-serif font-bold text-slate-900 dark:text-white">
            Como o Ciclo de IA (RAG & AI Overviews) Decide Quem Citar
          </h4>
        </div>
      </div>

      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-6">
        Clique em cada uma das 4 etapas do processamento generativo para entender exatamente onde a maioria das páginas é eliminada e como garantir que seu site seja escolhido como fonte:
      </p>

      {/* 4 Interactive Steps Pipeline */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 mb-6">
        {STAGES.map((st, idx) => {
          const isCurrent = st.id === activeStageId;
          return (
            <button
              key={st.id}
              onClick={() => setActiveStageId(st.id)}
              className={`p-3 rounded-xl border text-left transition-all cursor-pointer relative ${
                isCurrent
                  ? 'bg-purple-50 dark:bg-purple-950/40 border-purple-500 ring-2 ring-purple-500/20 shadow-xs'
                  : 'bg-slate-50 dark:bg-slate-950/60 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between text-[10px] font-mono font-bold mb-1">
                <span className={isCurrent ? 'text-purple-600 dark:text-purple-400' : 'text-slate-400'}>
                  {st.step}
                </span>
                <span className="w-4 h-4 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-[10px]">
                  {idx + 1}
                </span>
              </div>
              <h5 className="font-serif font-bold text-xs leading-snug truncate">
                {st.title}
              </h5>
              <p className="text-[10px] text-slate-500 truncate">
                {st.techTerm}
              </p>
            </button>
          );
        })}
      </div>

      {/* Deep-Dive Card for Selected Stage */}
      <div className="p-5 rounded-xl border border-purple-200 dark:border-purple-900/60 bg-gradient-to-br from-purple-50/50 via-white to-slate-50 dark:from-purple-950/30 dark:via-slate-900 dark:to-slate-950">
        
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3 pb-2 border-b border-purple-200/60 dark:border-purple-900/40">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-purple-600 dark:text-purple-400 font-bold">
              {activeStage.step} · {activeStage.techTerm}
            </span>
            <h4 className="text-base sm:text-lg font-serif font-bold text-slate-900 dark:text-white">
              {activeStage.title}: {activeStage.subtitle}
            </h4>
          </div>
        </div>

        {/* How it works */}
        <div className="mb-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          <strong className="block text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1 font-mono">
            Mecanismo Algorítmico do Motor de IA:
          </strong>
          {activeStage.howItWorks}
        </div>

        {/* Comparison grid: What kills vs How to win */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
          
          {/* What Kills */}
          <div className="p-3 rounded-lg bg-rose-50/80 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/40 text-rose-950 dark:text-rose-200 text-xs">
            <span className="font-bold flex items-center gap-1.5 mb-1 text-rose-700 dark:text-rose-400">
              <span>✕ O que desqualifica a página:</span>
            </span>
            <p className="leading-relaxed">{activeStage.whatKillsIt}</p>
          </div>

          {/* How to Win */}
          <div className="p-3 rounded-lg bg-emerald-50/80 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/40 text-emerald-950 dark:text-emerald-200 text-xs">
            <span className="font-bold flex items-center gap-1.5 mb-1 text-emerald-700 dark:text-emerald-400">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
              <span>Como conquistar a citação (GEO):</span>
            </span>
            <p className="leading-relaxed">{activeStage.howToWin}</p>
          </div>

        </div>

      </div>

    </div>
  );
};
