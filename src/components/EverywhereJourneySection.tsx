import React, { useState } from 'react';
import { 
  Compass, 
  Search, 
  ShieldCheck, 
  Scale, 
  ShoppingBag, 
  Check, 
  HelpCircle,
  Video,
  MessageSquare,
  Globe
} from 'lucide-react';

interface StageData {
  id: string;
  stageName: string;
  userQuestion: string;
  frequentChannels: string[];
  requiredAsset: string;
  description: string;
  actionRecommendation: string;
}

const STAGES: StageData[] = [
  {
    id: 'descoberta',
    stageName: '1. Descoberta',
    userQuestion: '“Que solução existe?”',
    frequentChannels: ['Google Search', 'TikTok', 'YouTube', 'Reels'],
    requiredAsset: 'Conteúdo explicativo e demonstrativo',
    description: 'O usuário reconhece uma dor ou oportunidade e busca entender o que está disponível no mercado.',
    actionRecommendation: 'Abra com gancho claro e resolução rápida do problema visual ou conceitual.'
  },
  {
    id: 'validacao',
    stageName: '2. Validação',
    userQuestion: '“Essa marca é confiável?”',
    frequentChannels: ['Reviews', 'Reddit', 'Comunidades', 'Redes Sociais'],
    requiredAsset: 'Provas, respostas e menções legítimas',
    description: 'O consumidor verifica se a empresa realmente entrega o que promete sem manipulação publicitária.',
    actionRecommendation: 'Participe com respostas autênticas em fóruns e exiba casos com números reais autorizados.'
  },
  {
    id: 'comparacao',
    stageName: '3. Comparação',
    userQuestion: '“Qual opção serve para mim?”',
    frequentChannels: ['Site Oficial', 'Marketplaces', 'Tabelas Comparativas'],
    requiredAsset: 'Tabelas, especificações, casos e faixas de preço',
    description: 'A pessoa pondera entre dois ou três concorrentes avaliando custo-benefício e limitações.',
    actionRecommendation: 'Declare com honestidade para quem sua solução serve e para quem ela NÃO serve.'
  },
  {
    id: 'decisao',
    stageName: '4. Decisão',
    userQuestion: '“Como compro ou falo com alguém?”',
    frequentChannels: ['Google Maps', 'Página de Contato', 'WhatsApp', 'Checkout'],
    requiredAsset: 'CTA claro, disponibilidade e fricção zero',
    description: 'O momento da contratação ou compra imediata. Qualquer barreira técnica gera abandono.',
    actionRecommendation: 'Disponibilize botão direto de WhatsApp, formulário de 2 campos ou agendamento em 1 clique.'
  }
];

export const EverywhereJourneySection: React.FC = () => {
  const [selectedStage, setSelectedStage] = useState<string>('descoberta');

  const current = STAGES.find(s => s.id === selectedStage) || STAGES[0];

  return (
    <section id="everywhere-journey" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs font-semibold tracking-widest uppercase text-amber-700 mb-2">
            Módulo 1.2 · Framework do Consumidor
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight mb-4">
            Everywhere Optimization
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            A jornada de decisão raramente começa e termina no Google. Planeje sua presença nos ambientes em que o público descobre, valida, compara e decide.
          </p>
        </div>

        {/* Interactive Stages Stepper */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {STAGES.map((stage) => {
            const isSelected = stage.id === selectedStage;
            return (
              <button
                key={stage.id}
                onClick={() => setSelectedStage(stage.id)}
                className={`p-4 rounded-xl text-left border-2 transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-slate-900 text-white border-amber-400 shadow-md ring-2 ring-amber-400/20'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                }`}
              >
                <span className={`text-[11px] font-bold uppercase tracking-wider block mb-1 ${
                  isSelected ? 'text-amber-400' : 'text-slate-500'
                }`}>
                  Fase do Consumidor
                </span>
                <h4 className="text-sm sm:text-base font-bold mb-1">
                  {stage.stageName}
                </h4>
                <p className={`text-xs italic line-clamp-1 ${
                  isSelected ? 'text-slate-300' : 'text-slate-500'
                }`}>
                  {stage.userQuestion}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Stage Deep Dive Card */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-10 shadow-lg mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-700">
                  Etapa Selecionada
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mb-3">
                {current.stageName}
              </h3>
              
              <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/90 mb-5">
                <span className="text-xs font-bold text-amber-900 block mb-0.5">
                  A Pergunta Silenciosa do Usuário nesta fase:
                </span>
                <p className="text-lg font-serif italic text-amber-950 font-semibold">
                  {current.userQuestion}
                </p>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                {current.description}
              </p>

              <div className="space-y-3 pt-2 border-t border-slate-100">
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                  <strong className="text-slate-900 shrink-0">Recomendação Estratégica:</strong>
                  <span>{current.actionRecommendation}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-50 rounded-xl p-6 border border-slate-200">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-3">
                Canais e Ativos Necessários
              </span>

              <div className="mb-5">
                <span className="text-xs font-semibold text-slate-900 block mb-2">
                  Canais Frequentes:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {current.frequentChannels.map((c, i) => (
                    <span 
                      key={i} 
                      className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-xs font-medium text-slate-700 shadow-2xs"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-xs font-semibold text-slate-900 block mb-1">
                  Ativo que a Empresa DEVE ter pronto:
                </span>
                <div className="p-3 bg-white rounded-lg border border-amber-300 text-xs font-semibold text-amber-950">
                  {current.requiredAsset}
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-200 text-[11px] text-slate-500">
                💡 <em>Dica do Andrews:</em> Não publique em todos os canais só por publicar. Foque apenas nos canais que realmente influenciam a decisão do seu nicho.
              </div>
            </div>

          </div>
        </div>

        {/* Warning about the "27% myth" (from PDF page 8) */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 flex items-start gap-4 text-xs sm:text-sm text-slate-600">
          <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center font-bold text-slate-900 shrink-0">
            %
          </div>
          <div>
            <strong className="text-slate-900">O Mito dos &ldquo;27%&rdquo; de Decisão no Google:</strong>
            <p className="mt-0.5 leading-relaxed">
              É comum ler que o Google representa exatamente 27% da decisão de compra. No e-book, o autor alerta: use esse número apenas como metáfora didática para lembrar que a jornada de compra é descentralizada. Monitore seus canais com UTMs, perguntas no pós-venda (&ldquo;Como você nos conheceu?&rdquo;) e dados de CRM.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
