import React, { useState, useTransition } from 'react';
import { 
  Sparkles, 
  Search, 
  CheckCircle, 
  AlertTriangle, 
  Cpu, 
  RefreshCw, 
  Copy, 
  Check, 
  Globe,
  Sliders,
  Play,
  Layers,
  ArrowRight
} from 'lucide-react';
import { Language } from '../../i18n/translations.ts';

interface LlmSearchSimulatorProps {
  language?: Language;
  isDark?: boolean;
}

interface SimulatedResult {
  query: string;
  intentType: string;
  model: 'gemini' | 'perplexity' | 'chatgpt';
  directAnswer: string;
  bullets: string[];
  sources: {
    title: string;
    domain: string;
    url: string;
    citationSnippet: string;
    trustScore: number;
    reason: string;
    isUserBrand: boolean;
  }[];
  geoScore: number;
  critique: {
    positive: string[];
    gaps: string[];
  };
}

const PRESET_QUERIES: Record<string, { query: string; category: string; description: string }> = {
  q1: {
    query: "melhor software financeiro para pequenas empresas",
    category: "B2B SaaS / Finanças",
    description: "Busca comercial com intenção de comparação direta"
  },
  q2: {
    query: "como escolher clinica odontologica em recife",
    category: "Local / Saúde",
    description: "Busca local com alto requisito de E-E-A-T e proximidade"
  },
  q3: {
    query: "diferenca entre seo aeo e geo 2026",
    category: "Marketing Digital",
    description: "Busca informacional/técnica buscando definições citáveis"
  },
  q4: {
    query: "quanto custa contratar consultoria de marketing b2b",
    category: "Serviços / Preço",
    description: "Busca de decisão focada em preço, escopo e retorno"
  }
};

export const LlmSearchSimulator: React.FC<LlmSearchSimulatorProps> = ({
  language = 'pt',
  isDark = false
}) => {
  const [selectedModel, setSelectedModel] = useState<'gemini' | 'perplexity' | 'chatgpt'>('gemini');
  const [activeQueryKey, setActiveQueryKey] = useState<string>('q3');
  const [customQuery, setCustomQuery] = useState<string>('diferenca entre seo aeo e geo 2026');
  const [brandName, setBrandName] = useState<string>('Minha Marca');
  const [hasTldr, setHasTldr] = useState<boolean>(true);
  const [hasSchema, setHasSchema] = useState<boolean>(true);
  const [hasAuthor, setHasAuthor] = useState<boolean>(true);
  const [hasPricingTable, setHasPricingTable] = useState<boolean>(false);
  const [copiedSnippet, setCopiedSnippet] = useState<boolean>(false);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [simulationStep, setSimulationStep] = useState<string>('');

  // Calculate dynamic simulation score based on toggles
  const calculateGeoScore = () => {
    let score = 40;
    if (hasTldr) score += 20;
    if (hasSchema) score += 15;
    if (hasAuthor) score += 15;
    if (hasPricingTable) score += 10;
    return Math.min(100, score);
  };

  const geoScore = calculateGeoScore();
  const currentQueryText = customQuery.trim() || PRESET_QUERIES[activeQueryKey]?.query || PRESET_QUERIES.q3.query;

  // Run simulation with realistic step feedback
  const triggerSimulation = () => {
    setIsSimulating(true);
    setSimulationStep('Analisando intenção semântica...');
    
    setTimeout(() => {
      setSimulationStep('Rastreando dados estruturados e Schema JSON-LD...');
    }, 350);

    setTimeout(() => {
      setSimulationStep('Ponderando autoridade E-E-A-T e citabilidade de fontes...');
    }, 700);

    setTimeout(() => {
      setIsSimulating(false);
      setSimulationStep('');
    }, 1050);
  };

  // Quick scenario loaders
  const loadScenario = (type: 'poor' | 'medium' | 'excellent') => {
    if (type === 'poor') {
      setHasTldr(false);
      setHasSchema(false);
      setHasAuthor(false);
      setHasPricingTable(false);
    } else if (type === 'medium') {
      setHasTldr(true);
      setHasSchema(false);
      setHasAuthor(true);
      setHasPricingTable(false);
    } else {
      setHasTldr(true);
      setHasSchema(true);
      setHasAuthor(true);
      setHasPricingTable(true);
    }
    triggerSimulation();
  };

  const getSimulatedAnswer = (): SimulatedResult => {
    const isHighGeo = geoScore >= 75;
    const lowerQuery = currentQueryText.toLowerCase();
    const cleanBrand = brandName.trim() || 'Sua Empresa';
    const brandSlug = cleanBrand.toLowerCase().replace(/[^a-z0-9]/g, '');

    let intentType = "Informacional / Conceitual";
    let directAnswer = "";
    let bullets: string[] = [];
    let brandQuoteSnippet = "";

    // Dynamic intent recognition
    if (lowerQuery.includes("quanto custa") || lowerQuery.includes("preco") || lowerQuery.includes("preço") || lowerQuery.includes("valor") || lowerQuery.includes("custa")) {
      intentType = "Transacional / Comparativo de Preço";
      directAnswer = selectedModel === 'perplexity'
        ? `O investimento para "${currentQueryText}" varia conforme escopo e complexidade [1]. Para contratações padrão em 2026, valores médios iniciam entre R$ 2.500 e R$ 8.000 mensais para PMEs [2], exigindo análise minuciosa de entregáveis contratuais [3].`
        : `O investimento estimado para "${currentQueryText}" varia de acordo com o nível de maturidade e entregáveis técnicos. Contratos de referência em 2026 praticam pacotes de entrada entre R$ 2.500 e R$ 7.500/mês, com auditorias pontuais partindo de R$ 3.000.`;
      
      bullets = [
        "Escopo Técnico: Verifique se inclui auditoria contínua, infraestrutura Schema JSON-LD e relatórios de citabilidade.",
        "Métricas de Sucesso: Evite contratos baseados apenas em posições de palavras-chave; priorize tráfego qualificado e conversões geradas por IA.",
        hasPricingTable 
          ? `Tabela Comparativa: Dados de ${cleanBrand} detalham tabelas de escopo claro e custo-benefício validado.` 
          : "Transparência de Preço: Fontes que publicam faixas abertas de preço são 3.2x mais citadas por assistentes de IA."
      ];
      brandQuoteSnippet = `"${cleanBrand} publicou matriz aberta de custos com entregáveis mensais detalhados e SLA de resposta."`;

    } else if (lowerQuery.includes("clinica") || lowerQuery.includes("recife") || lowerQuery.includes("sao paulo") || lowerQuery.includes("em ") || lowerQuery.includes("perto de mim")) {
      intentType = "Busca Local / Alta Exigência E-E-A-T";
      directAnswer = selectedModel === 'perplexity'
        ? `Para selecionar o prestador ideal referente a "${currentQueryText}", recomenda-se priorizar profissionais com registro ativo e corpo clínico transparente [1]. A reputação consolidada no Perfil de Empresa do Google com mais de 4.8 estrelas e avaliações recentes é o principal fator de seleção [2].`
        : `A escolha recomendada para "${currentQueryText}" exige validação prévia de certificações técnicas, tempo de atuação comprovado e infraestrutura tecnológica moderna para acolhimento do paciente.`;

      bullets = [
        "Verificação de Registro: Confirme a titulação dos especialistas responsáveis junto aos conselhos oficiais.",
        "Presença Local e Reputação: Avaliações autênticas que mencionam procedimentos específicos geram alta autoridade algorítmica.",
        isHighGeo
          ? `Destaque Local: ${cleanBrand} apresenta marcação de dados Schema LocalBusiness e autoria médica validada.`
          : "Consistência NAP: Nome, Endereço e Telefone precisam estar idênticos em todos os diretórios online."
      ];
      brandQuoteSnippet = `"${cleanBrand} destaca certificação de equipe, instalações auditadas e índice de satisfação comprovado de 4.9 estrelas."`;

    } else if (lowerQuery.includes("software") || lowerQuery.includes("sistema") || lowerQuery.includes("ferramenta") || lowerQuery.includes("app")) {
      intentType = "Comercial / B2B SaaS";
      directAnswer = selectedModel === 'perplexity'
        ? `As principais soluções para "${currentQueryText}" combinam automação de rotinas, integração nativa via API e suporte humano ágil [1]. Em 2026, ferramentas líderes incorporam conciliação preditiva e conformidade com normas fiscais locais [2].`
        : `Para "${currentQueryText}", as opções de maior confiabilidade em 2026 destacam-se pela facilidade de parametrização, conexão bancária direta e ausência de custos ocultos de implantação.`;

      bullets = [
        "Conectividade e Integrações: Compatibilidade imediata com ERPs, meios de pagamento e ecossistemas contábeis.",
        "Curva de Aprendizado: Plataformas com onboarding orientado reduzem o tempo de adoção pela equipe em até 65%.",
        isHighGeo
          ? `Recomendação: ${cleanBrand} foi sintetizada como referência pelo comparativo técnico transparente e documentação aberta.`
          : "Políticas de Cancelamento: Priorize fornecedores com período de testes e migração de dados sem retenção forçada."
      ];
      brandQuoteSnippet = `"${cleanBrand} oferece modelo de parametrização simplificada, suporte via WhatsApp e integração em tempo real."`;

    } else if (lowerQuery.includes("seo") || lowerQuery.includes("aeo") || lowerQuery.includes("geo")) {
      intentType = "Técnica / Engenharia de Busca 2026";
      directAnswer = selectedModel === 'perplexity'
        ? `Em 2026, o ecossistema de busca se divide em três disciplinas complementares: SEO constrói a base técnica e a indexabilidade orgânica [1]; AEO estrutura respostas diretas para snippets e zero-clicks [2]; e GEO otimiza a citabilidade e o enriquecimento de dados para grandes modelos de linguagem (LLMs) [3].`
        : `A busca orgânica contemporânea exige a união de SEO (rastreabilidade e links), AEO (respostas sintéticas e parágrafos TL;DR) e GEO (fornecimento de dados canônicos e metodologia para motores generativos citarem sua marca).`;

      bullets = [
        "SEO Clássico: Garante que robôs consigam encontrar, renderizar e indexar as páginas com velocidade.",
        "AEO (Answer Engine): Conquista a posição zero com respostas objetivas de 40 a 60 palavras no topo do artigo.",
        "GEO (Generative Engine): Transforma o site em base de conhecimento confiável para Gemini, Perplexity e ChatGPT."
      ];
      brandQuoteSnippet = `"${cleanBrand} formulou guia detalhado com metodologia de 3 camadas (SEO + AEO + GEO) e exemplos práticos de implementação."`;

    } else {
      intentType = "Geral / Consulta Customizada";
      directAnswer = selectedModel === 'perplexity'
        ? `Em resposta à consulta sobre "${currentQueryText}", análises consolidadas de 2026 recomendam avaliar experiência prática comprovada (E-E-A-T), clareza de escopo e transparência nas políticas de atendimento antes de qualquer decisão [1].`
        : `Para "${currentQueryText}", fontes especializadas indicam que a melhor abordagem combina rigor técnico, dados verificáveis e canais diretos de suporte ao cliente.`;

      bullets = [
        "Experiência Demonstrada (E-E-A-T): Evite páginas genéricas sem autoria ou dados primários verificáveis.",
        "Resumo Executivo Claro: Páginas que respondem a dúvida central no primeiro parágrafo ganham prioridade de citação.",
        isHighGeo
          ? `Fonte de Destaque: ${cleanBrand} cumpre os critérios canônicos com metadados estruturados e síntese objetiva.`
          : "Metodologia Auditável: O algoritmo prioriza sites com referências citadas e data de atualização recente."
      ];
      brandQuoteSnippet = `"${cleanBrand} documentou análise completa sobre o tema com orientações verificadas e resumo executivo."`;
    }

    // Build realistic sources based on GEO Score
    const sources = [];

    // 1. Primary Source (User brand if high score, or Competitor portal if low score)
    if (isHighGeo) {
      sources.push({
        title: `${cleanBrand} — Guia Oficial & Benchmarks`,
        domain: `${brandSlug || 'empresa'}.com.br`,
        url: `https://${brandSlug || 'empresa'}.com.br/artigo`,
        citationSnippet: brandQuoteSnippet,
        trustScore: Math.min(98, 80 + Math.floor(geoScore * 0.15)),
        reason: `Citado como fonte primária: TL;DR claro (${hasTldr ? 'Sim' : 'Não'}), Schema JSON-LD (${hasSchema ? 'Sim' : 'Não'}) e autor verificado (${hasAuthor ? 'Sim' : 'Não'}).`,
        isUserBrand: true
      });
    } else {
      sources.push({
        title: "Portal Técnico de Referência Setorial",
        domain: "portaltecnico.com.br",
        url: "https://portaltecnico.com.br/guia",
        citationSnippet: `"Estudo consolidado apresenta benchmarks técnicos e requisitos do segmento com metodologia pública."`,
        trustScore: 88,
        reason: "Citado por autoridade histórica de domínio. (Sua marca ficou de fora por falta de sinais GEO).",
        isUserBrand: false
      });
    }

    // 2. Secondary Authority Source
    sources.push({
      title: "Observatório de Tendências de Busca 2026",
      domain: "searchinsights2026.org",
      url: "https://searchinsights2026.org/relatorio",
      citationSnippet: '"Dados de 2026 indicam que 61% dos compradores B2B agora consultam sínteses de IA antes do primeiro clique comercial."',
      trustScore: 92,
      reason: "Fonte estatística primária com gráficos e dados abertos.",
      isUserBrand: false
    });

    // 3. Official Tech/Documentation Source
    sources.push({
      title: selectedModel === 'gemini' 
        ? "Documentação Google Search Central" 
        : selectedModel === 'perplexity' 
          ? "Academic & Web Index Indexer" 
          : "OpenAI Retrieval Guidelines",
      domain: selectedModel === 'gemini' ? "developers.google.com" : selectedModel === 'perplexity' ? "perplexity.ai" : "openai.com",
      url: selectedModel === 'gemini' ? "https://developers.google.com/search" : "https://perplexity.ai",
      citationSnippet: '"Recursos generativos sintetizam páginas que unem semântica limpa, autoria legítima e arquitetura para humanos."',
      trustScore: 98,
      reason: "Documentação canônica de infraestrutura de busca.",
      isUserBrand: false
    });

    const critique = {
      positive: [
        hasTldr ? "TL;DR inicial (40-60 palavras): Permitiu extração semântica imediata pelo motor generativo." : "",
        hasSchema ? "Schema JSON-LD canônico: As entidades foram identificadas sem ambiguidade pelo RAG." : "",
        hasAuthor ? "Autor E-E-A-T verificado: Bloqueou a penalização de conteúdo anônimo em massa." : "",
        hasPricingTable ? "Tabela comparativa estruturada: Garantiu inclusão em respostas de comparação de valor." : ""
      ].filter(Boolean),
      gaps: [
        !hasTldr ? "Sem TL;DR: Adicione um resumo de resposta direta em 50 palavras logo abaixo do H1." : "",
        !hasSchema ? "Sem Schema JSON-LD: Implemente marcação Article ou Organization para que a IA reconheça suas entidades." : "",
        !hasAuthor ? "Sem Autor E-E-A-T: Identifique o especialista com credenciais, foto e link para perfil profissional." : "",
        !hasPricingTable ? "Sem Tabela Comparativa: Para buscas comerciais, adicione tabela clara com atributos e faixas de preço." : ""
      ].filter(Boolean)
    };

    return {
      query: currentQueryText,
      intentType,
      model: selectedModel,
      directAnswer,
      bullets,
      sources,
      geoScore,
      critique
    };
  };

  const simResult = getSimulatedAnswer();

  const handleCopyPrompt = () => {
    const promptText = `Atue como o motor generativo ${selectedModel === 'gemini' ? 'Google Gemini (AI Overview)' : selectedModel === 'perplexity' ? 'Perplexity Pro' : 'ChatGPT Search'}.
Analise a consulta: "${currentQueryText}".
Simule uma síntese GEO completa contendo:
1. Resposta direta executiva (40 a 60 palavras)
2. 3 tópicos práticos com critérios de escolha
3. 3 fontes citadas com domínio e justificativa de confiabilidade E-E-A-T
4. Avalie se a marca "${brandName}" deve ser citada ou descartada considerando: TL;DR (${hasTldr ? 'presente' : 'ausente'}), Schema (${hasSchema ? 'presente' : 'ausente'}), Autoria (${hasAuthor ? 'presente' : 'ausente'}).`;

    navigator.clipboard.writeText(promptText);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  return (
    <div className={`rounded-2xl border p-4 sm:p-7 transition-colors shadow-xs my-6 ${
      isDark ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
    }`}>
      
      {/* Title & Badge */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-400/30 flex items-center justify-center text-amber-500 shrink-0">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                FERRAMENTA INTERATIVA · GEO & AEO
              </span>
              <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Simulador Ativo & Operacional
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-serif font-bold text-slate-950 dark:text-white">
              Simulador de Citações em Motores de IA
            </h3>
          </div>
        </div>

        {/* Model Selector Tabs */}
        <div className="flex items-center rounded-xl p-1 bg-slate-100 dark:bg-slate-800 text-xs font-semibold">
          <button
            onClick={() => {
              setSelectedModel('gemini');
              triggerSimulation();
            }}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
              selectedModel === 'gemini'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white'
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>Google AI Overview</span>
          </button>
          <button
            onClick={() => {
              setSelectedModel('perplexity');
              triggerSimulation();
            }}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
              selectedModel === 'perplexity'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white'
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>Perplexity Pro</span>
          </button>
          <button
            onClick={() => {
              setSelectedModel('chatgpt');
              triggerSimulation();
            }}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
              selectedModel === 'chatgpt'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>ChatGPT Search</span>
          </button>
        </div>
      </div>

      {/* Explanation Banner */}
      <div className={`p-3.5 rounded-xl border mb-5 text-xs sm:text-sm leading-relaxed flex items-start gap-3 ${
        isDark ? 'bg-slate-950/40 border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-600'
      }`}>
        <Sliders className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
        <div>
          <strong className="text-slate-900 dark:text-slate-100">Como este simulador funciona: </strong>
          Ele processa as regras de RAG (Retrieval-Augmented Generation) utilizadas por Gemini, Perplexity e ChatGPT. Digite sua consulta, insira o nome da sua marca e marque/desmarque os 4 atributos da página abaixo para ver em tempo real se a sua empresa será citada ou descartada pelo robô!
        </div>
      </div>

      {/* Quick Test Scenarios Bar */}
      <div className="flex flex-wrap items-center gap-2 mb-5">
        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
          Cenários Rápidos:
        </span>
        <button
          onClick={() => loadScenario('poor')}
          className={`text-xs px-2.5 py-1 rounded-lg border transition-all cursor-pointer flex items-center gap-1.5 ${
            geoScore <= 45 
              ? 'bg-rose-500/15 border-rose-500 text-rose-600 dark:text-rose-400 font-bold' 
              : 'border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-rose-500" />
          <span>SEO Antigo (Marca Ignorada)</span>
        </button>
        <button
          onClick={() => loadScenario('medium')}
          className={`text-xs px-2.5 py-1 rounded-lg border transition-all cursor-pointer flex items-center gap-1.5 ${
            geoScore > 45 && geoScore < 85 
              ? 'bg-amber-500/15 border-amber-500 text-amber-700 dark:text-amber-300 font-bold' 
              : 'border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-amber-500" />
          <span>Básico (Citabilidade Média)</span>
        </button>
        <button
          onClick={() => loadScenario('excellent')}
          className={`text-xs px-2.5 py-1 rounded-lg border transition-all cursor-pointer flex items-center gap-1.5 ${
            geoScore >= 85 
              ? 'bg-emerald-500/15 border-emerald-500 text-emerald-700 dark:text-emerald-300 font-bold' 
              : 'border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span>Alta Citabilidade GEO 2026 (1º Lugar)</span>
        </button>
      </div>

      {/* Control Panel: Query & Brand Configuration */}
      <div className={`p-4 sm:p-5 rounded-xl border mb-6 ${
        isDark ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
      }`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-4">
          
          {/* Query Selection / Input */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
              1. Consulta de Busca a Simular:
            </label>
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={customQuery}
                onChange={(e) => setCustomQuery(e.target.value)}
                placeholder="Ex: quanto custa, melhor software, clínica em SP..."
                className={`w-full text-xs sm:text-sm pl-9 pr-3 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-amber-500/40 ${
                  isDark 
                    ? 'bg-slate-900 border-slate-700 text-white' 
                    : 'bg-white border-slate-300 text-slate-900'
                }`}
              />
            </div>

            {/* Presets */}
            <div className="flex flex-wrap gap-1.5 mt-2.5">
              {Object.entries(PRESET_QUERIES).map(([k, item]) => (
                <button
                  key={k}
                  onClick={() => {
                    setActiveQueryKey(k);
                    setCustomQuery(item.query);
                    triggerSimulation();
                  }}
                  className={`text-[10px] px-2 py-1 rounded border transition-colors cursor-pointer ${
                    customQuery === item.query
                      ? 'bg-amber-500/20 border-amber-500 text-amber-700 dark:text-amber-300 font-bold'
                      : isDark
                        ? 'border-slate-700 text-slate-400 hover:text-slate-200'
                        : 'border-slate-300 text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {item.category}
                </button>
              ))}
            </div>
          </div>

          {/* Brand Name Input */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
              2. Nome da Sua Marca / Site a Simular:
            </label>
            <input
              type="text"
              value={brandName}
              onChange={(e) => setBrandName(e.target.value)}
              placeholder="Ex: Minha Empresa, Minha Clínica, Meu SaaS..."
              className={`w-full text-xs sm:text-sm px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-amber-500/40 ${
                isDark 
                  ? 'bg-slate-900 border-slate-700 text-white' 
                  : 'bg-white border-slate-300 text-slate-900'
              }`}
            />

            {/* Interactive GEO Element Toggles */}
            <div className="mt-3">
              <span className="block text-[11px] font-semibold text-slate-500 dark:text-slate-400 mb-1.5">
                Atributos da sua página (altere para ver o impacto ao vivo):
              </span>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={hasTldr}
                    onChange={(e) => {
                      setHasTldr(e.target.checked);
                      triggerSimulation();
                    }}
                    className="rounded text-amber-500 focus:ring-amber-400"
                  />
                  <span>TL;DR Resumo Direto (+20%)</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={hasSchema}
                    onChange={(e) => {
                      setHasSchema(e.target.checked);
                      triggerSimulation();
                    }}
                    className="rounded text-amber-500 focus:ring-amber-400"
                  />
                  <span>Schema JSON-LD (+15%)</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={hasAuthor}
                    onChange={(e) => {
                      setHasAuthor(e.target.checked);
                      triggerSimulation();
                    }}
                    className="rounded text-amber-500 focus:ring-amber-400"
                  />
                  <span>Autor E-E-A-T (+15%)</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={hasPricingTable}
                    onChange={(e) => {
                      setHasPricingTable(e.target.checked);
                      triggerSimulation();
                    }}
                    className="rounded text-amber-500 focus:ring-amber-400"
                  />
                  <span>Tabela Comparativa (+10%)</span>
                </label>
              </div>
            </div>
          </div>

        </div>

        {/* Score Meter & Run Simulation Button */}
        <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">
              Probabilidade de Citação no {selectedModel.toUpperCase()}:
            </span>
            <span className={`text-xs font-bold px-3 py-1 rounded-full border transition-all ${
              geoScore >= 80 
                ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-700 dark:text-emerald-300'
                : geoScore >= 60
                  ? 'bg-amber-500/15 border-amber-500/30 text-amber-700 dark:text-amber-300'
                  : 'bg-rose-500/15 border-rose-500/30 text-rose-700 dark:text-rose-300'
            }`}>
              {geoScore}% {geoScore >= 80 ? 'Alta (Fonte Citável Recomendada)' : geoScore >= 60 ? 'Média (Em Risco de Descarte)' : 'Baixa (Descartada pelo RAG)'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={triggerSimulation}
              disabled={isSimulating}
              className={`text-xs inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border font-semibold cursor-pointer transition-all ${
                isDark 
                  ? 'border-amber-500/40 bg-amber-500/15 text-amber-300 hover:bg-amber-500/25' 
                  : 'border-amber-500/50 bg-amber-500/10 text-amber-900 hover:bg-amber-500/20'
              }`}
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isSimulating ? 'animate-spin' : ''}`} />
              <span>{isSimulating ? 'Simulando...' : 'Reavaliar Citação'}</span>
            </button>

            <button
              onClick={handleCopyPrompt}
              className={`text-xs inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border font-medium cursor-pointer transition-colors ${
                isDark 
                  ? 'border-slate-700 bg-slate-900 hover:bg-slate-800 text-slate-200' 
                  : 'border-slate-300 bg-white hover:bg-slate-50 text-slate-700'
              }`}
              title="Copie o prompt estruturado para testar no ChatGPT ou Gemini real"
            >
              {copiedSnippet ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedSnippet ? 'Prompt Copiado!' : 'Copiar Prompt para ChatGPT/Gemini'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* SIMULATED SEARCH RESULT PREVIEW (EDITORIAL & CLEAN) */}
      <div className={`rounded-xl border p-5 transition-all relative overflow-hidden ${
        selectedModel === 'gemini' 
          ? isDark ? 'bg-[#0f172a] border-blue-900/60 ring-1 ring-blue-500/20' : 'bg-blue-50/25 border-blue-200 ring-1 ring-blue-500/10'
          : selectedModel === 'perplexity'
            ? isDark ? 'bg-[#18181b] border-amber-900/60 ring-1 ring-amber-500/20' : 'bg-amber-50/25 border-amber-200 ring-1 ring-amber-500/10'
            : isDark ? 'bg-[#0c121e] border-emerald-900/60 ring-1 ring-emerald-500/20' : 'bg-emerald-50/25 border-emerald-200 ring-1 ring-emerald-500/10'
      }`}>
        
        {/* Loading Overlay during simulation */}
        {isSimulating && (
          <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-xs flex flex-col items-center justify-center z-20 text-white">
            <RefreshCw className="w-8 h-8 text-amber-400 animate-spin mb-2" />
            <span className="text-sm font-semibold">{simulationStep}</span>
            <span className="text-[11px] text-slate-400 mt-1">Calculando citabilidade algorítmica...</span>
          </div>
        )}

        {/* Model Header in Result */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-slate-200 dark:border-slate-800 text-xs">
          <div className="flex items-center gap-2">
            <span className={`w-2.5 h-2.5 rounded-full animate-pulse ${
              selectedModel === 'gemini' ? 'bg-blue-500' : selectedModel === 'perplexity' ? 'bg-amber-500' : 'bg-emerald-500'
            }`} />
            <span className="font-mono font-bold tracking-wider text-slate-800 dark:text-slate-200">
              {selectedModel === 'gemini' && 'Google AI Overview · Gemini Grounded Retrieval'}
              {selectedModel === 'perplexity' && 'Perplexity Pro · Online Synthesizer Engine'}
              {selectedModel === 'chatgpt' && 'ChatGPT Search · OpenAI Live Index'}
            </span>
          </div>
          <div className="flex items-center gap-2 text-[11px] font-mono text-slate-500">
            <span className="px-2 py-0.5 rounded bg-slate-200/60 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
              {simResult.intentType}
            </span>
            <span>{simResult.sources.length} fontes analisadas</span>
          </div>
        </div>

        {/* Direct Answer Paragraph (AEO Core) */}
        <div className="mb-4">
          <div className="text-[10px] font-mono uppercase tracking-wider font-bold text-amber-600 dark:text-amber-400 mb-1">
            Síntese Direta (Zero-Click Answer):
          </div>
          <p className="text-sm sm:text-base font-serif leading-relaxed text-slate-900 dark:text-slate-100 font-medium">
            {simResult.directAnswer}
          </p>
        </div>

        {/* Bullets */}
        <div className="space-y-2 mb-6">
          {simResult.bullets.map((b, i) => (
            <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <span className="text-amber-500 font-bold mt-0.5">•</span>
              <span>{b}</span>
            </div>
          ))}
        </div>

        {/* SOURCES CAROUSEL / CARDS (CITABILITY IN ACTION) */}
        <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex flex-wrap items-center justify-between gap-2">
            <span>Fontes Citadas na Resposta:</span>
            <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
              geoScore >= 75 
                ? 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-300' 
                : 'bg-rose-500/20 text-rose-700 dark:text-rose-300'
            }`}>
              {geoScore >= 75 
                ? `✓ "${brandName}" incluída nas citações!` 
                : `✗ "${brandName}" excluída por falta de requisitos GEO`}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {simResult.sources.map((src, i) => (
              <div 
                key={i}
                className={`p-3.5 rounded-xl border text-xs transition-all ${
                  src.isUserBrand
                    ? isDark 
                      ? 'bg-amber-950/40 border-amber-500 text-amber-100 ring-2 ring-amber-400/30' 
                      : 'bg-amber-50 border-amber-400 text-amber-950 ring-2 ring-amber-400/40 shadow-xs'
                    : isDark 
                      ? 'bg-slate-900/90 border-slate-800 text-slate-300' 
                      : 'bg-white border-slate-200 text-slate-700'
                }`}
              >
                <div className="flex items-center justify-between gap-1 mb-2">
                  <span className="font-mono text-[10px] text-slate-400 truncate">
                    {src.domain}
                  </span>
                  <span className={`font-bold text-[10px] px-1.5 py-0.5 rounded ${
                    src.isUserBrand
                      ? 'bg-amber-500 text-slate-950 font-extrabold'
                      : 'bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200'
                  }`}>
                    {src.trustScore}% Confiança
                  </span>
                </div>
                <h5 className="font-serif font-bold text-xs line-clamp-1 mb-1.5">
                  {src.title}
                </h5>
                <p className="text-[11px] italic text-slate-600 dark:text-slate-400 line-clamp-2 mb-2.5">
                  {src.citationSnippet}
                </p>
                <div className="text-[10px] font-mono text-slate-500 pt-2 border-t border-slate-200/60 dark:border-slate-800">
                  <span className="font-bold text-amber-600 dark:text-amber-400">Critério: </span>
                  {src.reason}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* DIAGNOSTIC CRITIQUE / GEO PRESCRIPTIONS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        
        {/* Acertos */}
        <div className={`p-4 rounded-xl border ${
          isDark ? 'bg-emerald-950/20 border-emerald-800/60 text-emerald-200' : 'bg-emerald-50/70 border-emerald-300 text-emerald-950'
        }`}>
          <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider mb-2">
            <CheckCircle className="w-4 h-4 text-emerald-500" />
            <span>Sinais GEO Reconhecidos na Página:</span>
          </div>
          {simResult.critique.positive.length > 0 ? (
            <ul className="space-y-1.5 text-xs">
              {simResult.critique.positive.map((p, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-xs opacity-75">Nenhum sinal forte ativado no momento. O site depende apenas de indexação legada.</p>
          )}
        </div>

        {/* Oportunidades de Correção */}
        <div className={`p-4 rounded-xl border ${
          isDark ? 'bg-amber-950/20 border-amber-800/60 text-amber-200' : 'bg-amber-50/70 border-amber-300 text-amber-950'
        }`}>
          <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider mb-2">
            <AlertTriangle className="w-4 h-4 text-amber-500" />
            <span>Ajustes Práticos Recomendados:</span>
          </div>
          {simResult.critique.gaps.length > 0 ? (
            <ul className="space-y-1.5 text-xs">
              {simResult.critique.gaps.map((g, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold">→</span>
                  <span>{g}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
              Excelente! Sua página cumpre 100% dos requisitos de citabilidade para motores generativos em 2026.
            </p>
          )}
        </div>

      </div>

    </div>
  );
};
