import React, { useState } from 'react';
import { 
  Network, 
  Search, 
  HelpCircle, 
  Sparkles, 
  CheckCircle, 
  ArrowRight, 
  Eye, 
  FileText, 
  Workflow, 
  Check, 
  X,
  Layers,
  ShieldAlert
} from 'lucide-react';

export const TrinitySection: React.FC = () => {
  const [selectedPillar, setSelectedPillar] = useState<'all' | 'seo' | 'aeo' | 'geo'>('all');
  const [demoView, setDemoView] = useState<'comparativo' | 'anatomia'>('comparativo');

  return (
    <section id="trindade-da-busca" className="py-20 bg-slate-50 border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-semibold tracking-widest uppercase text-amber-700 mb-2">
            Infográfico Visual em Código · Estrutura Arquitetural
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight mb-4">
            A Trindade da Busca
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Em 2026, não basta apenas aparecer. Sua marca precisa ser <strong>encontrada</strong>, <strong>responder com clareza imediata</strong> e ser <strong>reconhecida como fonte confiável</strong> por humanos e IAs.
          </p>
        </div>

        {/* Infographic Main Container: Visual Blueprint */}
        <div className="bg-white rounded-3xl border-2 border-slate-200 shadow-xl overflow-hidden mb-16">
          
          {/* Top Banner representing the Trinity Architecture */}
          <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 p-6 sm:p-8 text-white text-center border-b border-amber-500/30 relative">
            <span className="text-[11px] font-bold uppercase tracking-widest text-amber-400 block mb-1">
              Framework de Otimização Unificada 2026
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold">
              Descoberta · Compreensão · Recomendação
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto mt-2">
              Os três estágios conectados formam um funil contínuo: do rastreamento técnico do robô à citação sintética nos modelos generativos.
            </p>
          </div>

          {/* The 3 Pillars Infographic Grid (Stylized after page 3 of the PDF) */}
          <div className="p-6 sm:p-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* 01 · DESCOBERTA (SEO) */}
            <div className={`p-6 sm:p-7 rounded-2xl border-2 transition-all flex flex-col justify-between ${
              selectedPillar === 'seo' || selectedPillar === 'all' 
                ? 'bg-blue-50/40 border-blue-600 shadow-md ring-2 ring-blue-500/10' 
                : 'bg-slate-50 border-slate-200 opacity-60'
            }`}>
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-blue-200/60">
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-800">
                    01 · Descoberta
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs shadow-xs">
                    01
                  </div>
                </div>

                <h4 className="text-2xl font-serif font-bold text-slate-900 mb-1">
                  SEO
                </h4>
                <p className="text-sm font-semibold text-blue-900 mb-3">
                  Ser encontrado
                </p>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  Torne páginas, produtos e serviços rastreáveis, indexáveis e relevantes para motores de pesquisa.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                    <div>
                      <strong className="text-xs font-semibold text-slate-900 block">Estrutura técnica clara</strong>
                      <span className="text-xs text-slate-600">Sitemaps limpos, status 200, sem noindex indesejado.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                    <div>
                      <strong className="text-xs font-semibold text-slate-900 block">Intenção e arquitetura</strong>
                      <span className="text-xs text-slate-600">Mapeamento de intenção comercial, local e informacional.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                    <div>
                      <strong className="text-xs font-semibold text-slate-900 block">Conteúdo e links úteis</strong>
                      <span className="text-xs text-slate-600">Links internos descritivos conectando pilares de valor.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                    <div>
                      <strong className="text-xs font-semibold text-slate-900 block">Experiência mobile</strong>
                      <span className="text-xs text-slate-600">Velocidade, LCP &lt; 2,5s e layout estável (CLS).</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-blue-200/60">
                <div className="p-2.5 bg-blue-100/60 rounded-xl text-[11px] text-blue-950 font-medium">
                  <strong>Papel no Sistema:</strong> &ldquo;SEO cria o acesso inicial.&rdquo;
                </div>
              </div>
            </div>

            {/* 02 · COMPREENSÃO (AEO) */}
            <div className={`p-6 sm:p-7 rounded-2xl border-2 transition-all flex flex-col justify-between ${
              selectedPillar === 'aeo' || selectedPillar === 'all' 
                ? 'bg-amber-50/40 border-amber-600 shadow-md ring-2 ring-amber-500/10' 
                : 'bg-slate-50 border-slate-200 opacity-60'
            }`}>
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-amber-200/80">
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-800">
                    02 · Compreensão
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-amber-600 text-white flex items-center justify-center font-bold text-xs shadow-xs">
                    02
                  </div>
                </div>

                <h4 className="text-2xl font-serif font-bold text-slate-900 mb-1">
                  AEO
                </h4>
                <p className="text-sm font-semibold text-amber-900 mb-3">
                  Ser a resposta
                </p>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  Organize o conteúdo para responder perguntas de forma direta, clara e escaneável.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 shrink-0" />
                    <div>
                      <strong className="text-xs font-semibold text-slate-900 block">Resumo e definição no topo</strong>
                      <span className="text-xs text-slate-600">Bloco TL;DR de 40 a 60 palavras logo no início da página.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 shrink-0" />
                    <div>
                      <strong className="text-xs font-semibold text-slate-900 block">H2 em formato de pergunta</strong>
                      <span className="text-xs text-slate-600">Dúvidas reais que o usuário digita ou pergunta por voz.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 shrink-0" />
                    <div>
                      <strong className="text-xs font-semibold text-slate-900 block">Listas, tabelas e exemplos</strong>
                      <span className="text-xs text-slate-600">Dados comparativos de fácil absorção visual e sem rodeios.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 shrink-0" />
                    <div>
                      <strong className="text-xs font-semibold text-slate-900 block">Próximo passo claro</strong>
                      <span className="text-xs text-slate-600">Chamada transparente para a próxima etapa comercial.</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-amber-200/80">
                <div className="p-2.5 bg-amber-100/60 rounded-xl text-[11px] text-amber-950 font-medium">
                  <strong>Papel no Sistema:</strong> &ldquo;AEO cria a compreensão imediata.&rdquo;
                </div>
              </div>
            </div>

            {/* 03 · RECOMENDAÇÃO (GEO) */}
            <div className={`p-6 sm:p-7 rounded-2xl border-2 transition-all flex flex-col justify-between ${
              selectedPillar === 'geo' || selectedPillar === 'all' 
                ? 'bg-slate-100/60 border-slate-900 shadow-md ring-2 ring-slate-900/10' 
                : 'bg-slate-50 border-slate-200 opacity-60'
            }`}>
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-300">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-800">
                    03 · Recomendação
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-slate-900 text-amber-300 flex items-center justify-center font-bold text-xs shadow-xs">
                    03
                  </div>
                </div>

                <h4 className="text-2xl font-serif font-bold text-slate-900 mb-1">
                  GEO
                </h4>
                <p className="text-sm font-semibold text-slate-950 mb-3">
                  Ser citado
                </p>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  Ofereça fatos, contexto, autoria e evidências que sistemas generativos possam verificar e reutilizar.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-900 mt-2 shrink-0" />
                    <div>
                      <strong className="text-xs font-semibold text-slate-900 block">Afirmações citáveis</strong>
                      <span className="text-xs text-slate-600">Frases densas, autocontidas e com significado exato.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-900 mt-2 shrink-0" />
                    <div>
                      <strong className="text-xs font-semibold text-slate-900 block">Fontes e dados verificáveis</strong>
                      <span className="text-xs text-slate-600">Pesquisas com metodologia ou estatísticas rastreáveis.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-900 mt-2 shrink-0" />
                    <div>
                      <strong className="text-xs font-semibold text-slate-900 block">Experiência própria (E-E-A-T)</strong>
                      <span className="text-xs text-slate-600">Casos reais com consentimento, prints e aprendizados.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-900 mt-2 shrink-0" />
                    <div>
                      <strong className="text-xs font-semibold text-slate-900 block">Menções legítimas</strong>
                      <span className="text-xs text-slate-600">Digital PR e citações orgânicas na imprensa e comunidades.</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-300">
                <div className="p-2.5 bg-slate-200/80 rounded-xl text-[11px] text-slate-950 font-medium">
                  <strong>Papel no Sistema:</strong> &ldquo;GEO cria a reutilização sintética.&rdquo;
                </div>
              </div>
            </div>

          </div>

          {/* Interactive Filter Toolbar */}
          <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs font-medium text-slate-500">
              Filtro Interativo do Infográfico:
            </span>
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setSelectedPillar('all')}
                className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                  selectedPillar === 'all'
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                Ver Trindade Completa
              </button>
              <button
                onClick={() => setSelectedPillar('seo')}
                className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                  selectedPillar === 'seo'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                Só SEO
              </button>
              <button
                onClick={() => setSelectedPillar('aeo')}
                className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                  selectedPillar === 'aeo'
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                Só AEO
              </button>
              <button
                onClick={() => setSelectedPillar('geo')}
                className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                  selectedPillar === 'geo'
                    ? 'bg-slate-900 text-amber-300 shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                Só GEO
              </button>
            </div>
          </div>
        </div>

        {/* System Integration Flow & The Reality Check of 2026 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Left: How the System Works in Reality (PDF page 4) */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-2.5 mb-4">
              <Workflow className="w-5 h-5 text-amber-700" />
              <h3 className="text-xl font-serif font-bold text-slate-900">
                A Trindade como Sistema Integrado
              </h3>
            </div>
            
            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              Nenhum pilar sustenta o negócio de forma isolada. Veja o encadeamento dinâmico:
            </p>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-start gap-3">
                  <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-900 mt-0.5">
                    ETAPA 1
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">SEO cria acesso</h4>
                    <p className="text-xs text-slate-600 mt-1">
                      A página precisa ser tecnicamente encontrada, indexada pelo Googlebot e associada à intenção de busca correta. Sem SEO, ninguém chega à porta.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-start gap-3">
                  <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-900 mt-0.5">
                    ETAPA 2
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">AEO cria compreensão</h4>
                    <p className="text-xs text-slate-600 mt-1">
                      A resposta à dúvida do leitor precisa estar visível logo no topo, bem organizada e formulada na linguagem exata da pergunta. Sem AEO, o visitante pula fora.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-start gap-3">
                  <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-slate-200 text-slate-900 mt-0.5">
                    ETAPA 3
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">GEO cria reutilização</h4>
                    <p className="text-xs text-slate-600 mt-1">
                      O conteúdo oferece fatos, evidências, definições e exemplos que motores generativos podem sintetizar e citar com credibilidade.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: The Famous Book Case of Diagnostic Failure */}
          <div className="lg:col-span-6 bg-gradient-to-br from-slate-900 to-blue-950 text-white p-6 sm:p-8 rounded-2xl border border-amber-500/30 shadow-lg">
            <div className="flex items-center gap-2 mb-3">
              <ShieldAlert className="w-5 h-5 text-amber-400" />
              <span className="text-xs font-bold tracking-widest uppercase text-amber-400">
                Diagnóstico de Falha Real (Do Livro)
              </span>
            </div>

            <h3 className="text-xl font-serif font-bold text-white mb-3">
              O Caso da Página Desbalanceada
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              O autor Andrews ilustra com clareza como a falta de qualquer um dos pilares quebra a máquina de conversão:
            </p>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white/10 border border-white/10 text-xs sm:text-sm">
                <div className="flex items-center gap-2 text-rose-300 font-semibold mb-1">
                  <X className="w-4 h-4 shrink-0" />
                  <span>SEO Forte + Falha em AEO:</span>
                </div>
                <p className="text-slate-300">
                  Uma página de serviço atinge o topo do ranking, mas o usuário não encontra <strong>preço, prazo, área de atendimento ou critérios de contratação</strong>. O visitante abandona o site frustrado.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/10 border border-white/10 text-xs sm:text-sm">
                <div className="flex items-center gap-2 text-amber-300 font-semibold mb-1">
                  <X className="w-4 h-4 shrink-0" />
                  <span>Boa Resposta + Falha em GEO:</span>
                </div>
                <p className="text-slate-300">
                  A página responde bem à pergunta básica, mas não apresenta <strong>autoria verificável, fontes, dados proprietários ou experiência prática comprovada</strong>. Modelos de IA ignoram sua marca e citam seus concorrentes.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-700/60 text-xs text-amber-300 flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>Conclusão: Rastreabilidade, contexto e reputação precisam trabalhar juntos.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
