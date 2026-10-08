import React, { useState } from 'react';
import { 
  Search, 
  Bot, 
  Sparkles, 
  Quote, 
  AlertTriangle, 
  Layers, 
  CheckCircle2, 
  ExternalLink,
  MessageSquare,
  Video,
  ShoppingBag,
  MapPin,
  ArrowRight
} from 'lucide-react';

export const IntroSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'seo' | 'aeo' | 'geo'>('all');

  return (
    <section id="o-fim-do-seo" className="py-20 bg-white border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Editorial Serif */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs font-semibold tracking-widest uppercase text-amber-700 mb-2">
            Módulo Introdutório · Mudança de Paradigma
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight mb-4">
            O Fim do SEO Tradicional
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Durante anos, SEO foi vendido como uma simples disputa por dez links azuis. Em 2026, esse modelo linear deixou de representar o comportamento do consumidor.
          </p>
        </div>

        {/* Visual Paradigm Shift: 10 Blue Links vs 2026 Multimodal Journey */}
        <div className="mb-16 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* The Old Model */}
            <div className="lg:col-span-5 bg-white p-6 rounded-xl border border-slate-200/90 text-left">
              <span className="text-xs font-semibold uppercase tracking-wider text-rose-700 block mb-2">
                O Modelo Tradicional (Passado)
              </span>
              <h3 className="text-lg font-serif font-bold text-slate-900 mb-2">
                A Disputa pelos 10 Links Azuis
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                A empresa escolhia uma palavra-chave arbitrária, produzia um texto padronizado de 1.000 palavras, comprava links e esperava subir posições. O foco era apenas a posição estática no ranking.
              </p>
              <div className="p-3 bg-rose-50/60 rounded-lg border border-rose-200/60 text-xs text-rose-900">
                <strong>Gargalo fatal:</strong> Gerava tráfego sem contexto, visitantes desqualificados e nenhuma garantia de conversão real em vendas.
              </div>
            </div>

            {/* Transition Indicator */}
            <div className="lg:col-span-2 flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 rounded-full bg-slate-900 text-amber-400 flex items-center justify-center shadow-md font-serif font-bold text-sm">
                VS
              </div>
              <span className="text-xs font-semibold text-slate-500 mt-2 uppercase tracking-wider">
                Evolução 2026
              </span>
            </div>

            {/* The 2026 Reality */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-blue-950 p-6 rounded-xl border border-amber-500/30 text-white text-left shadow-lg">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 block mb-2">
                A Realidade Atual (2026)
              </span>
              <h3 className="text-lg font-serif font-bold text-white mb-2">
                Busca Ampla, Multimodal e Distribuída
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                O Google agora apresenta <strong>respostas geradas por IA (AI Overviews)</strong>, carrosséis de vídeos curtos, mapas dinâmicos, comparadores de produtos e discussões de fóruns como Reddit e comunidades.
              </p>
              <div className="p-3 bg-white/10 rounded-lg border border-white/15 text-xs text-slate-200">
                <strong>Jornada Real:</strong> Descoberta no TikTok/YouTube → Validação no Reddit → Comparação em Marketplaces → Decisão final no Google.
              </div>
            </div>

          </div>

          {/* Distributed Journey Chain Pills */}
          <div className="mt-8 pt-8 border-t border-slate-200">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-500 text-center mb-4">
              A Jornada Moderna do Consumidor em 2026
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-center">
              <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs">
                <Video className="w-4 h-4 mx-auto text-rose-500 mb-1" />
                <span className="text-xs font-bold text-slate-900 block">01. Descoberta</span>
                <span className="text-[11px] text-slate-500">TikTok & Reels</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs">
                <MessageSquare className="w-4 h-4 mx-auto text-amber-600 mb-1" />
                <span className="text-xs font-bold text-slate-900 block">02. Validação</span>
                <span className="text-[11px] text-slate-500">Reddit & Fóruns</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs">
                <Layers className="w-4 h-4 mx-auto text-blue-600 mb-1" />
                <span className="text-xs font-bold text-slate-900 block">03. Profundidade</span>
                <span className="text-[11px] text-slate-500">YouTube Tutorial</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs">
                <ShoppingBag className="w-4 h-4 mx-auto text-emerald-600 mb-1" />
                <span className="text-xs font-bold text-slate-900 block">04. Comparação</span>
                <span className="text-[11px] text-slate-500">Preço & Critérios</span>
              </div>
              <div className="col-span-2 sm:col-span-1 p-3 bg-amber-50 rounded-xl border border-amber-300 shadow-2xs">
                <Search className="w-4 h-4 mx-auto text-amber-700 mb-1" />
                <span className="text-xs font-bold text-slate-950 block">05. Decisão Final</span>
                <span className="text-[11px] text-amber-900 font-medium">Google & Maps</span>
              </div>
            </div>
          </div>
        </div>

        {/* Official Google Citation Block */}
        <div className="max-w-4xl mx-auto mb-20 bg-gradient-to-r from-blue-950 via-slate-900 to-blue-950 text-white rounded-2xl p-6 sm:p-8 border-l-4 border-amber-400 shadow-xl relative overflow-hidden">
          <Quote className="absolute right-6 bottom-4 w-24 h-24 text-white/5 pointer-events-none" />
          <div className="relative z-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-400 block mb-2">
              Posicionamento Oficial & Documentação do Google
            </span>
            <blockquote className="text-base sm:text-lg font-serif italic text-slate-100 leading-relaxed mb-4">
              &ldquo;A documentação oficial do Google afirma que SEO continua relevante nos recursos generativos porque esses recursos usam sistemas de busca, recuperação de páginas e sinais de qualidade para fundamentar as respostas. A mudança, portanto, não é que o SEO morreu. A mudança é que SEO deixou de ser o trabalho inteiro.&rdquo;
            </blockquote>
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Conclusão Estratégica: O SEO agora é a fundação que alimenta o AEO e o GEO.</span>
            </div>
          </div>
        </div>

        {/* The 3 Base Concepts: SEO, AEO, GEO Side-by-Side Cards */}
        <div id="pilares-base" className="mb-14">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold tracking-widest uppercase text-amber-700 block mb-1">
              Os Três Objetivos Diferentes
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
              SEO, AEO e GEO: Três Funções Complementares
            </h3>
            <p className="text-sm text-slate-600 mt-2">
              Cada conceito resolve uma etapa crítica para que sua marca seja encontrada, compreendida e citada pelas tecnologias de busca.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Card 1: SEO */}
            <div className="bg-white rounded-2xl border-2 border-blue-900/20 hover:border-blue-900 p-6 sm:p-7 shadow-md hover:shadow-xl transition-all flex flex-col justify-between group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-900/5 rounded-bl-full pointer-events-none" />
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-900 mb-5 group-hover:scale-105 transition-transform">
                  <Search className="w-6 h-6" />
                </div>
                
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-900">
                    Pilar 01 · Busca
                  </span>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-100/70 text-blue-800">
                    Acesso
                  </span>
                </div>

                <h4 className="text-2xl font-serif font-bold text-slate-900 mb-1">
                  SEO
                </h4>
                <p className="text-xs text-slate-500 font-mono mb-4">
                  Search Engine Optimization
                </p>

                <div className="p-3 bg-blue-50/50 rounded-xl border border-blue-100 mb-5">
                  <strong className="text-xs uppercase tracking-wide text-blue-950 block mb-1">
                    Missão Central:
                  </strong>
                  <p className="text-sm font-semibold text-blue-900">
                    &ldquo;Ser Encontrado&rdquo;
                  </p>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed mb-5">
                  Tornar páginas, produtos, serviços e negócios descobríveis, rastreáveis, indexáveis, compreensíveis e competitivos nos motores de busca convencionais.
                </p>

                <div className="space-y-2 pt-3 border-t border-slate-100 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>Rastreamento e indexação sem bloqueios</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>Arquitetura de informação e hierarquia H1-H3</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>Experiência mobile e Core Web Vitals estáveis</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] font-medium text-blue-900">
                Resultado: Garante que os robôs alcancem e indexem seu conteúdo.
              </div>
            </div>

            {/* Card 2: AEO */}
            <div className="bg-white rounded-2xl border-2 border-amber-600/30 hover:border-amber-600 p-6 sm:p-7 shadow-md hover:shadow-xl transition-all flex flex-col justify-between group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-bl-full pointer-events-none" />
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 mb-5 group-hover:scale-105 transition-transform">
                  <Bot className="w-6 h-6" />
                </div>
                
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
                    Pilar 02 · Resposta
                  </span>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-amber-100 text-amber-800">
                    Compreensão
                  </span>
                </div>

                <h4 className="text-2xl font-serif font-bold text-slate-900 mb-1">
                  AEO
                </h4>
                <p className="text-xs text-slate-500 font-mono mb-4">
                  Answer Engine Optimization
                </p>

                <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 mb-5">
                  <strong className="text-xs uppercase tracking-wide text-amber-950 block mb-1">
                    Missão Central:
                  </strong>
                  <p className="text-sm font-semibold text-amber-900">
                    &ldquo;Ser a Resposta&rdquo;
                  </p>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed mb-5">
                  Estruturar o conteúdo para resolver dúvidas de forma direta, clara e útil em snippets, caixas de resposta direta (Featured Snippets) e assistentes inteligentes.
                </p>

                <div className="space-y-2 pt-3 border-t border-slate-100 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>Resumo executivo no topo (40 a 60 palavras)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>H2 formulados como perguntas reais do usuário</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>Tabelas comparativas, listas e definições diretas</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] font-medium text-amber-900">
                Resultado: Reduz o atrito cognitivo do leitor ao responder na hora.
              </div>
            </div>

            {/* Card 3: GEO */}
            <div className="bg-white rounded-2xl border-2 border-slate-900/30 hover:border-slate-950 p-6 sm:p-7 shadow-md hover:shadow-xl transition-all flex flex-col justify-between group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-slate-900/5 rounded-bl-full pointer-events-none" />
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-400 mb-5 group-hover:scale-105 transition-transform">
                  <Sparkles className="w-6 h-6" />
                </div>
                
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    Pilar 03 · IA Generativa
                  </span>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-800">
                    Recomendação
                  </span>
                </div>

                <h4 className="text-2xl font-serif font-bold text-slate-900 mb-1">
                  GEO
                </h4>
                <p className="text-xs text-slate-500 font-mono mb-4">
                  Generative Engine Optimization
                </p>

                <div className="p-3 bg-slate-100 rounded-xl border border-slate-200 mb-5">
                  <strong className="text-xs uppercase tracking-wide text-slate-900 block mb-1">
                    Missão Central:
                  </strong>
                  <p className="text-sm font-semibold text-slate-950">
                    &ldquo;Ser Citado&rdquo;
                  </p>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed mb-5">
                  Aumentar a probabilidade de uma marca, página ou especialista ser utilizado e referenciado como fonte primária em respostas sintetizadas por inteligências artificiais.
                </p>

                <div className="space-y-2 pt-3 border-t border-slate-100 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-slate-900 shrink-0" />
                    <span>Afirmações densas e com alta citabilidade</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-slate-900 shrink-0" />
                    <span>Dados próprios, pesquisas e casos reais com números</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-slate-900 shrink-0" />
                    <span>Autoria verificável e credenciais legítimas (E-E-A-T)</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] font-medium text-slate-900">
                Resultado: Posiciona seu negócio como fonte de autoridade nos modelos de IA.
              </div>
            </div>

          </div>
        </div>

        {/* Essential Myth Buster & Caution Box (from PDF page 2) */}
        <div className="bg-amber-50/70 border-2 border-amber-300 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-start gap-5 shadow-sm">
          <div className="w-12 h-12 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center shrink-0 shadow-xs">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
                Distinção Crucial do E-book 2026
              </span>
            </div>
            <h4 className="text-lg font-serif font-bold text-slate-900 mb-2">
              Não existe técnica garantida para &ldquo;forçar&rdquo; uma citação de IA
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed">
              Modelos de linguagem não operam por macetes de repetição ou manipulação de tags. A melhor estratégia sustentável é <strong>criar conteúdo rastreável, original, verificável e fácil de extrair</strong>, além de construir sinais públicos e incontestáveis de reputação no seu nicho.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
