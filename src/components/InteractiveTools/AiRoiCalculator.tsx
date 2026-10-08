import React, { useState } from 'react';
import { 
  Calculator, 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  ArrowRight, 
  HelpCircle, 
  AlertCircle, 
  CheckCircle,
  Copy,
  Check,
  RefreshCw,
  Award
} from 'lucide-react';
import { Language, TRANSLATIONS } from '../../i18n/translations.ts';

interface AiRoiCalculatorProps {
  language?: Language;
  isDark?: boolean;
}

export const AiRoiCalculator: React.FC<AiRoiCalculatorProps> = ({
  language = 'pt',
  isDark = false
}) => {
  // Inputs
  const [monthlyVisits, setMonthlyVisits] = useState<number>(20000);
  const [ticketValue, setTicketValue] = useState<number>(350);
  const [conversionRate, setConversionRate] = useState<number>(1.5); // 1.5%
  const [zeroClickLossPct, setZeroClickLossPct] = useState<number>(25); // 25% drop in curiosity clicks
  const [aiCitationGainPct, setAiCitationGainPct] = useState<number>(15); // 15% traffic from AI citations
  const [aiConversionMultiplier, setAiConversionMultiplier] = useState<number>(2.5); // 2.5x higher conversion from AI referrals
  const [copied, setCopied] = useState<boolean>(false);

  // Calculations:
  // Baseline Traditional Organic
  const baselineLeads = (monthlyVisits * (conversionRate / 100));
  const baselineMonthlyRevenue = baselineLeads * ticketValue;

  // Scenario 1: Do Nothing (Impact of Zero-Click Search without GEO/AEO)
  const passiveVisits = monthlyVisits * (1 - zeroClickLossPct / 100);
  const passiveLeads = passiveVisits * (conversionRate / 100);
  const passiveMonthlyRevenue = passiveLeads * ticketValue;
  const passiveRevenueLoss = baselineMonthlyRevenue - passiveMonthlyRevenue;

  // Scenario 2: Optimized for GEO & AEO (Cited in AI Overviews & LLMs)
  // Remaining core organic visits
  const coreVisits = passiveVisits;
  const coreLeads = coreVisits * (conversionRate / 100);

  // High-Intent AI Citation Visits
  const aiVisits = monthlyVisits * (aiCitationGainPct / 100);
  const aiConversionRate = conversionRate * aiConversionMultiplier;
  const aiLeads = aiVisits * (aiConversionRate / 100);

  // Total with GEO/AEO
  const optimizedTotalVisits = coreVisits + aiVisits;
  const optimizedTotalLeads = coreLeads + aiLeads;
  const optimizedMonthlyRevenue = optimizedTotalLeads * ticketValue;
  const netMonthlyGain = optimizedMonthlyRevenue - baselineMonthlyRevenue;
  const netYearlyGain = netMonthlyGain * 12;
  const gainVsPassiveYearly = (optimizedMonthlyRevenue - passiveMonthlyRevenue) * 12;

  const handleCopySummary = () => {
    const summaryText = `RELATÓRIO DE ROI — TRANSIÇÃO SEO PARA AEO & GEO 2026:
• Tráfego Mensal Base: ${monthlyVisits.toLocaleString('pt-BR')} sessões
• Ticket Médio: R$ ${ticketValue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
• Faturamento Orgânico Atual: R$ ${baselineMonthlyRevenue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}/mês

CENÁRIO 1: Sem Otimização (Perda por Zero-Click):
• Perda de tráfego de curiosidade: -${zeroClickLossPct}%
• Faturamento residual: R$ ${passiveMonthlyRevenue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}/mês
• Prejuízo passivo anual: R$ ${(passiveRevenueLoss * 12).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}/ano

CENÁRIO 2: Com Otimização AEO/GEO (Citações no Gemini/ChatGPT/Perplexity):
• Tráfego qualificado de IA: ${Math.round(aiVisits).toLocaleString('pt-BR')} sessões
• Taxa de conversão de IA: ${aiConversionRate.toFixed(2)}% (${aiConversionMultiplier}x maior)
• Faturamento projetado: R$ ${optimizedMonthlyRevenue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}/mês
• Ganho Líquido Projetado: +R$ ${netYearlyGain.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}/ano
• Recuperação vs. Inércia: +R$ ${gainVsPassiveYearly.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}/ano`;

    navigator.clipboard.writeText(summaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`rounded-2xl border p-4 sm:p-7 transition-colors shadow-xs my-6 ${
      isDark ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
    }`}>
      
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-400/30 flex items-center justify-center text-emerald-500 shrink-0">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              SIMULADOR DE IMPACTO FINANCEIRO · MÓDULO 14
            </div>
            <h3 className="text-lg sm:text-xl font-serif font-bold text-slate-950 dark:text-white">
              Calculadora de ROI da Busca com IA (SEO Tradicional vs. GEO)
            </h3>
          </div>
        </div>

        <button
          onClick={handleCopySummary}
          className={`text-xs inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border font-medium cursor-pointer transition-colors ${
            isDark 
              ? 'border-slate-700 bg-slate-900 hover:bg-slate-800 text-emerald-400' 
              : 'border-slate-300 bg-white hover:bg-slate-50 text-slate-700'
          }`}
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
          <span>{copied ? 'Relatório Copiado!' : 'Copiar Resumo de ROI'}</span>
        </button>
      </div>

      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
        Descubra o valor financeiro real da transição. Em 2026, páginas sem GEO perdem tráfego de curiosidade para as respostas diretas do Google (AI Overviews). Por outro lado, empresas citadas como fonte confiável recebem tráfego com <strong>alta intenção de compra</strong>, que converte até 3x mais.
      </p>

      {/* Inputs Grid */}
      <div className={`p-4 sm:p-5 rounded-xl border mb-6 ${
        isDark ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
      }`}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          
          {/* Monthly Visits */}
          <div>
            <div className="flex items-center justify-between text-xs font-semibold mb-1 text-slate-600 dark:text-slate-300">
              <span>Tráfego Orgânico Mensal:</span>
              <span className="font-mono font-bold text-slate-900 dark:text-white">
                {monthlyVisits.toLocaleString('pt-BR')} visitas
              </span>
            </div>
            <input
              type="range"
              min="1000"
              max="150000"
              step="1000"
              value={monthlyVisits}
              onChange={(e) => setMonthlyVisits(Number(e.target.value))}
              className="w-full accent-emerald-500 cursor-pointer"
            />
          </div>

          {/* Ticket Médio */}
          <div>
            <div className="flex items-center justify-between text-xs font-semibold mb-1 text-slate-600 dark:text-slate-300">
              <span>Ticket Médio (Venda / Contrato):</span>
              <span className="font-mono font-bold text-slate-900 dark:text-white">
                R$ {ticketValue.toLocaleString('pt-BR')}
              </span>
            </div>
            <input
              type="range"
              min="50"
              max="5000"
              step="50"
              value={ticketValue}
              onChange={(e) => setTicketValue(Number(e.target.value))}
              className="w-full accent-emerald-500 cursor-pointer"
            />
          </div>

          {/* Taxa de Conversão Atual */}
          <div>
            <div className="flex items-center justify-between text-xs font-semibold mb-1 text-slate-600 dark:text-slate-300">
              <span>Taxa de Conversão Atual:</span>
              <span className="font-mono font-bold text-slate-900 dark:text-white">
                {conversionRate.toFixed(1)}%
              </span>
            </div>
            <input
              type="range"
              min="0.2"
              max="8"
              step="0.1"
              value={conversionRate}
              onChange={(e) => setConversionRate(Number(e.target.value))}
              className="w-full accent-emerald-500 cursor-pointer"
            />
          </div>

          {/* % Perda Zero-Click */}
          <div>
            <div className="flex items-center justify-between text-xs font-semibold mb-1 text-slate-600 dark:text-slate-300">
              <span>Perda por Respostas Zero-Click:</span>
              <span className="font-mono font-bold text-rose-600 dark:text-rose-400">
                -{zeroClickLossPct}%
              </span>
            </div>
            <input
              type="range"
              min="5"
              max="60"
              step="5"
              value={zeroClickLossPct}
              onChange={(e) => setZeroClickLossPct(Number(e.target.value))}
              className="w-full accent-rose-500 cursor-pointer"
            />
            <span className="text-[10px] text-slate-400 block mt-0.5">
              Consultas informacionais resolvidas na própria SERP
            </span>
          </div>

          {/* % Ganho Citações IA */}
          <div>
            <div className="flex items-center justify-between text-xs font-semibold mb-1 text-slate-600 dark:text-slate-300">
              <span>Novas Visitas via Citações em IA:</span>
              <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">
                +{aiCitationGainPct}%
              </span>
            </div>
            <input
              type="range"
              min="5"
              max="40"
              step="1"
              value={aiCitationGainPct}
              onChange={(e) => setAiCitationGainPct(Number(e.target.value))}
              className="w-full accent-emerald-500 cursor-pointer"
            />
            <span className="text-[10px] text-slate-400 block mt-0.5">
              Cliques qualificados de usuários prontos para comprar
            </span>
          </div>

          {/* Multiplicador de Conversão de IA */}
          <div>
            <div className="flex items-center justify-between text-xs font-semibold mb-1 text-slate-600 dark:text-slate-300">
              <span>Multiplicador de Conversão de IA:</span>
              <span className="font-mono font-bold text-amber-600 dark:text-amber-400">
                {aiConversionMultiplier.toFixed(1)}x ({aiConversionRate.toFixed(1)}%)
              </span>
            </div>
            <input
              type="range"
              min="1.0"
              max="4.0"
              step="0.1"
              value={aiConversionMultiplier}
              onChange={(e) => setAiConversionMultiplier(Number(e.target.value))}
              className="w-full accent-amber-500 cursor-pointer"
            />
            <span className="text-[10px] text-slate-400 block mt-0.5">
              Usuários que já leram a síntese têm intenção muito superior
            </span>
          </div>

        </div>
      </div>

      {/* THREE SCENARIOS COMPARISON CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        
        {/* Scenario 0: Atual / Baseline */}
        <div className={`p-4 rounded-xl border text-center transition-all ${
          isDark ? 'bg-slate-950/70 border-slate-800' : 'bg-slate-50 border-slate-200'
        }`}>
          <div className="text-[10px] font-mono uppercase font-bold tracking-wider text-slate-400 mb-1">
            Linha de Base Atual
          </div>
          <h4 className="text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
            SEO Tradicional
          </h4>
          <div className="text-xl sm:text-2xl font-serif font-bold text-slate-900 dark:text-white mb-2">
            R$ {baselineMonthlyRevenue.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}
            <span className="text-xs font-sans font-normal text-slate-400"> /mês</span>
          </div>
          <div className="text-xs text-slate-500 space-y-1 pt-2 border-t border-slate-200 dark:border-slate-800">
            <div>{monthlyVisits.toLocaleString('pt-BR')} visitas</div>
            <div>{Math.round(baselineLeads)} vendas ou leads</div>
          </div>
        </div>

        {/* Scenario 1: Inércia / Risco de Não Mudar */}
        <div className={`p-4 rounded-xl border text-center transition-all ${
          isDark ? 'bg-rose-950/20 border-rose-900/50 text-rose-200' : 'bg-rose-50/70 border-rose-200 text-rose-950'
        }`}>
          <div className="text-[10px] font-mono uppercase font-bold tracking-wider text-rose-500 mb-1 flex items-center justify-center gap-1">
            <TrendingDown className="w-3 h-3" />
            <span>Risco da Inércia</span>
          </div>
          <h4 className="text-sm font-bold text-rose-800 dark:text-rose-300 mb-2">
            Sem AEO / Zero-Click
          </h4>
          <div className="text-xl sm:text-2xl font-serif font-bold text-rose-700 dark:text-rose-400 mb-2">
            R$ {passiveMonthlyRevenue.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}
            <span className="text-xs font-sans font-normal text-rose-400"> /mês</span>
          </div>
          <div className="text-xs text-rose-600 dark:text-rose-400 space-y-1 pt-2 border-t border-rose-200 dark:border-rose-900/40 font-semibold">
            <div>Prejuízo: -R$ {passiveRevenueLoss.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}/mês</div>
            <div>-R$ {(passiveRevenueLoss * 12).toLocaleString('pt-BR', { maximumFractionDigits: 0 })}/ano</div>
          </div>
        </div>

        {/* Scenario 2: Otimizado GEO/AEO */}
        <div className={`p-4 rounded-xl border-2 text-center transition-all ${
          isDark 
            ? 'bg-emerald-950/30 border-emerald-500/80 text-emerald-100 ring-2 ring-emerald-500/20' 
            : 'bg-emerald-50 border-emerald-500 text-emerald-950 ring-2 ring-emerald-500/20 shadow-xs'
        }`}>
          <div className="text-[10px] font-mono uppercase font-bold tracking-wider text-emerald-600 dark:text-emerald-400 mb-1 flex items-center justify-center gap-1">
            <TrendingUp className="w-3 h-3" />
            <span>Estratégia 2026 Vencedora</span>
          </div>
          <h4 className="text-sm font-bold text-emerald-900 dark:text-emerald-300 mb-2">
            SEO + AEO + GEO Integrados
          </h4>
          <div className="text-xl sm:text-2xl font-serif font-bold text-emerald-700 dark:text-emerald-300 mb-2">
            R$ {optimizedMonthlyRevenue.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}
            <span className="text-xs font-sans font-normal text-emerald-600 dark:text-emerald-400"> /mês</span>
          </div>
          <div className="text-xs text-emerald-700 dark:text-emerald-300 space-y-1 pt-2 border-t border-emerald-300 dark:border-emerald-800 font-bold">
            <div>+{Math.round(optimizedTotalLeads - baselineLeads)} vendas adicionais/mês</div>
            <div>+R$ {netYearlyGain.toLocaleString('pt-BR', { maximumFractionDigits: 0 })} de receita anual líquida</div>
          </div>
        </div>

      </div>

      {/* STRATEGIC TAKEAWAY BANNER */}
      <div className={`p-4 rounded-xl border flex items-start gap-3.5 ${
        isDark ? 'bg-slate-950 border-slate-800' : 'bg-slate-900 text-white border-slate-800'
      }`}>
        <Award className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
        <div className="text-xs sm:text-sm">
          <span className="font-bold text-amber-400 block mb-0.5">
            Diagnóstico Executivo da Simulação:
          </span>
          <p className="text-slate-300 leading-relaxed">
            Ao migrar do modelo de 'cliques vaidosos' para a autoridade tópica com GEO, sua empresa não apenas protege <strong>R$ {(passiveRevenueLoss * 12).toLocaleString('pt-BR', { maximumFractionDigits: 0 })}/ano</strong> em risco, mas desbloqueia <strong>+R$ {gainVsPassiveYearly.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}/ano</strong> frente a concorrentes desavisados. O tráfego de IA é menor em volume, mas infinitamente superior em poder de conversão.
          </p>
        </div>
      </div>

    </div>
  );
};
