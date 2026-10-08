import React, { useState } from 'react';
import { 
  Sparkles, 
  HelpCircle, 
  Info, 
  Check, 
  ArrowRight,
  Search,
  Bot,
  Layers,
  Award
} from 'lucide-react';

export const TrinityInfographic: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);

  return (
    <div className="w-full max-w-5xl mx-auto my-3 sm:my-6">
      
      {/* INFOGRAPHIC POSTER CANVAS */}
      <div className="bg-white rounded-2xl sm:rounded-3xl border-2 border-slate-200/90 shadow-xl p-4 sm:p-10 md:p-12 relative overflow-hidden text-slate-900 font-sans print:shadow-none print:border print:p-8">
        
        {/* Subtle decorative background watermarks and luxury gilded hairlines */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-700 via-amber-400 to-blue-900" />
        <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-3 sm:mb-0 sm:absolute sm:top-4 sm:right-6">
          INFOGRÁFICO 01 / GUIA VISUAL 2026
        </div>

        {/* 1. INFOGRAPHIC HEADER */}
        <header className="mb-6 sm:mb-10 text-left">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#0F766E] block mb-1.5 font-mono">
            DOMINANDO O GOOGLE SEARCH 2026
          </span>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-950 tracking-tight leading-snug sm:leading-tight mb-2.5">
            A Trindade da Busca
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-3xl leading-relaxed">
            Em 2026, não basta aparecer. Sua marca precisa ser <strong className="text-slate-900">encontrada</strong>, <strong className="text-slate-900">responder com clareza</strong> e ser <strong className="text-slate-900">reconhecida como fonte confiável</strong>.
          </p>
        </header>

        {/* 2. THREE PILLARS (SEO, AEO, GEO) - EXACT REPLICATION OF PAGE 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-10">
          
          {/* 01 · DESCOBERTA (SEO) */}
          <div 
            onClick={() => setSelectedNode(selectedNode === 'seo' ? null : 'seo')}
            className={`rounded-xl sm:rounded-2xl border-2 p-4 sm:p-6 flex flex-col justify-between transition-all cursor-pointer relative bg-white hover:shadow-md ${
              selectedNode === 'seo' ? 'border-blue-600 ring-2 ring-blue-500/20 bg-blue-50/20' : 'border-slate-200 hover:border-blue-400'
            }`}
          >
            {/* Top Accent Line */}
            <div className="absolute top-0 left-4 right-4 sm:left-6 sm:right-6 h-1 bg-blue-600 rounded-b-md" />

            <div>
              <div className="flex items-center justify-between text-xs font-mono font-bold text-blue-700 uppercase tracking-widest mb-2 pt-1">
                <span>01 · DESCOBERTA</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-100 text-blue-800">Mecanismo</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950 mb-1.5">
                SEO
              </h2>

              <p className="text-xs sm:text-sm font-semibold text-slate-900 leading-snug mb-3">
                <strong>Ser encontrado.</strong> Torne páginas, produtos e serviços rastreáveis, indexáveis e relevantes.
              </p>

              <div className="space-y-1.5 text-xs text-slate-600 pt-2 border-t border-slate-100">
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>estrutura técnica clara:</strong> sitemaps, robots, status 200</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>intenção e arquitetura:</strong> hierarquia H1-H3 lógica</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>conteúdo e links úteis:</strong> âncoras descritivas</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>experiência mobile:</strong> estabilidade e Core Web Vitals</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-blue-700 font-medium">
              <span>SEO cria acesso</span>
              <span>{selectedNode === 'seo' ? '✕ Fechar' : '+ Detalhes'}</span>
            </div>
          </div>

          {/* 02 · COMPREENSÃO (AEO) */}
          <div 
            onClick={() => setSelectedNode(selectedNode === 'aeo' ? null : 'aeo')}
            className={`rounded-xl sm:rounded-2xl border-2 p-4 sm:p-6 flex flex-col justify-between transition-all cursor-pointer relative bg-white hover:shadow-md ${
              selectedNode === 'aeo' ? 'border-emerald-600 ring-2 ring-emerald-500/20 bg-emerald-50/20' : 'border-slate-200 hover:border-emerald-400'
            }`}
          >
            {/* Top Accent Line */}
            <div className="absolute top-0 left-4 right-4 sm:left-6 sm:right-6 h-1 bg-emerald-600 rounded-b-md" />

            <div>
              <div className="flex items-center justify-between text-xs font-mono font-bold text-emerald-700 uppercase tracking-widest mb-2 pt-1">
                <span>02 · COMPREENSÃO</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800">Resposta</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950 mb-1.5">
                AEO
              </h2>

              <p className="text-xs sm:text-sm font-semibold text-slate-900 leading-snug mb-3">
                <strong>Ser a resposta.</strong> Organize o conteúdo para resolver perguntas de forma direta e escaneável.
              </p>

              <div className="space-y-1.5 text-xs text-slate-600 pt-2 border-t border-slate-100">
                <div className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span><strong>resumo e definição no topo:</strong> TL;DR de 40-60 palavras</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span><strong>H2 em formato de pergunta:</strong> dúvidas reais do usuário</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span><strong>listas, tabelas e exemplos:</strong> leitura rápida e precisa</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span><strong>próximo passo claro:</strong> condução lógica para a ação</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-emerald-700 font-medium">
              <span>AEO cria compreensão</span>
              <span>{selectedNode === 'aeo' ? '✕ Fechar' : '+ Detalhes'}</span>
            </div>
          </div>

          {/* 03 · RECOMENDAÇÃO (GEO) */}
          <div 
            onClick={() => setSelectedNode(selectedNode === 'geo' ? null : 'geo')}
            className={`rounded-xl sm:rounded-2xl border-2 p-4 sm:p-6 flex flex-col justify-between transition-all cursor-pointer relative bg-white hover:shadow-md ${
              selectedNode === 'geo' ? 'border-amber-600 ring-2 ring-amber-500/20 bg-amber-50/20' : 'border-slate-200 hover:border-amber-400'
            }`}
          >
            {/* Top Accent Line */}
            <div className="absolute top-0 left-4 right-4 sm:left-6 sm:right-6 h-1 bg-amber-600 rounded-b-md" />

            <div>
              <div className="flex items-center justify-between text-xs font-mono font-bold text-amber-700 uppercase tracking-widest mb-2 pt-1">
                <span>03 · RECOMENDAÇÃO</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-100 text-amber-800">IA Generativa</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950 mb-1.5">
                GEO
              </h2>

              <p className="text-xs sm:text-sm font-semibold text-slate-900 leading-snug mb-3">
                <strong>Ser citado.</strong> Ofereça fatos, contexto, autoria e evidências que sistemas generativos possam verificar.
              </p>

              <div className="space-y-1.5 text-xs text-slate-600 pt-2 border-t border-slate-100">
                <div className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span><strong>afirmações citáveis:</strong> frases autocontidas e densas</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span><strong>fontes e dados verificáveis:</strong> dados originais com método</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span><strong>experiência própria:</strong> E-E-A-T real com casos documentados</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span><strong>menções legítimas:</strong> Digital PR e validação orgânica</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-amber-700 font-medium">
              <span>GEO cria reutilização</span>
              <span>{selectedNode === 'geo' ? '✕ Fechar' : '+ Detalhes'}</span>
            </div>
          </div>

        </div>

        {/* INTERACTIVE EXPANSION DRAWER IF NODE SELECTED */}
        {selectedNode && (
          <div className="mb-6 sm:mb-10 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-300 animate-in fade-in duration-200">
            {selectedNode === 'seo' && (
              <div className="text-xs sm:text-sm text-slate-700">
                <strong className="text-blue-900 block mb-1">Como SEO funciona no modelo integrado 2026:</strong>
                O Googlebot ainda precisa rastrear e associar o tema à consulta. Se sua página bloqueia robôs no robots.txt ou não possui sitemap válido, nem o Google tradicional nem as IAs conseguem ler seu material. <em>SEO é a porta de entrada.</em>
              </div>
            )}
            {selectedNode === 'aeo' && (
              <div className="text-xs sm:text-sm text-slate-700">
                <strong className="text-emerald-900 block mb-1">Como AEO funciona no modelo integrado 2026:</strong>
                O leitor moderno tem pressa. Colocar um resumo de 40 a 60 palavras logo no início do artigo resolve a dúvida em Featured Snippets e assistentes de voz. <em>AEO reduz o esforço cognitivo e retém o leitor.</em>
              </div>
            )}
            {selectedNode === 'geo' && (
              <div className="text-xs sm:text-sm text-slate-700">
                <strong className="text-amber-900 block mb-1">Como GEO funciona no modelo integrado 2026:</strong>
                Modelos como AI Overviews, Perplexity e ChatGPT não inventam fontes se você fornece dados verificáveis, autoria identificável e metodologia explícita. <em>GEO gera a citação do seu negócio como autoridade.</em>
              </div>
            )}
          </div>
        )}

        {/* 3. DARK CONTAINER: COMO TRANSFORMAR OTIMIZAÇÃO EM NEGÓCIO */}
        <div className="bg-[#111827] text-white rounded-xl sm:rounded-2xl p-4 sm:p-7 md:p-8 mb-6 sm:mb-10 shadow-lg border border-slate-800">
          <div className="mb-4 sm:mb-6">
            <h3 className="text-lg sm:text-2xl font-serif font-bold text-white tracking-wide">
              Como transformar otimização em negócio
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              O ciclo virtuoso que transforma visualização em faturamento real.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
            
            <div className="bg-white/5 rounded-xl p-3.5 sm:p-4 border border-white/10 hover:bg-white/10 transition-colors">
              <span className="text-xs font-bold font-mono uppercase tracking-wider text-blue-400 block mb-1">
                1. Atraia
              </span>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                Uma pessoa descobre seu conteúdo em uma busca, vídeo, comunidade ou marketplace.
              </p>
            </div>

            <div className="bg-white/5 rounded-xl p-3.5 sm:p-4 border border-white/10 hover:bg-white/10 transition-colors">
              <span className="text-xs font-bold font-mono uppercase tracking-wider text-emerald-400 block mb-1">
                2. Convença
              </span>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                Ela encontra resposta, prova, comparação e limites suficientes para confiar.
              </p>
            </div>

            <div className="bg-white/5 rounded-xl p-3.5 sm:p-4 border border-white/10 hover:bg-white/10 transition-colors">
              <span className="text-xs font-bold font-mono uppercase tracking-wider text-amber-400 block mb-1">
                3. Converta
              </span>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                O próximo passo é simples: comprar, agendar, ligar, enviar mensagem ou pedir proposta.
              </p>
            </div>

          </div>
        </div>

        {/* 4. TWO LOWER HIGHLIGHT BOXES: REGRA PRÁTICA & PERGUNTA DE AUDITORIA */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
          
          {/* Regra prática */}
          <div className="rounded-xl sm:rounded-2xl border border-slate-200 bg-slate-50/70 p-4 sm:p-6 flex flex-col justify-between">
            <div>
              <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-1.5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600" />
                Regra prática
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                <strong className="text-slate-800">SEO</strong> cria acesso. <strong className="text-slate-800">AEO</strong> reduz o esforço de compreensão. <strong className="text-slate-800">GEO</strong> aumenta a chance de a informação circular em respostas generativas.
              </p>
            </div>
            <div className="mt-3 pt-3 border-t border-slate-200/80 text-[11px] text-slate-500 italic">
              Nenhuma técnica garante citação; qualidade, rastreabilidade, contexto e reputação precisam trabalhar juntos.
            </div>
          </div>

          {/* Pergunta de auditoria */}
          <div className="rounded-xl sm:rounded-2xl border-2 border-amber-300/80 bg-amber-50/50 p-4 sm:p-6 flex flex-col justify-between">
            <div>
              <h4 className="text-sm sm:text-base font-bold text-amber-950 mb-1.5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                Pergunta de auditoria
              </h4>
              <p className="text-xs sm:text-sm text-amber-950 font-medium leading-relaxed font-serif italic">
                &ldquo;Se alguém descobrir minha marca por esta página, terá informação suficiente, motivos para confiar e um próximo passo claro para comprar?&rdquo;
              </p>
            </div>
            <div className="mt-3 pt-3 border-t border-amber-200/60 text-[11px] text-amber-900">
              Evita produzir tráfego sem conversão ou conteúdo para robôs que não resolve o problema.
            </div>
          </div>

        </div>

        {/* 5. DICA DE OURO BOX (DO LIVRO) */}
        <div className="rounded-xl sm:rounded-2xl border-2 border-amber-400 bg-gradient-to-r from-amber-100/60 via-amber-50 to-amber-100/60 p-4 sm:p-6 mb-6 sm:mb-8 flex items-start gap-3.5">
          <div className="w-8 h-8 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center shrink-0 font-bold shadow-2xs text-xs">
            ★
          </div>
          <div>
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-amber-900 block mb-0.5">
              Dica de Ouro — Resultado Antes da Vaidade
            </span>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
              Posição, impressões e citações são sinais intermediários. O resultado final é sempre uma ação de negócio: <strong>venda, lead qualificado, ligação, visita, agendamento, assinatura ou indicação</strong>.
            </p>
          </div>
        </div>

        {/* 6. INFOGRAPHIC FOOTER META */}
        <footer className="pt-4 sm:pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-1.5 text-[10px] sm:text-[11px] font-mono text-slate-500">
          <span>Guia prático de SEO, AEO e GEO · Andrews 2026</span>
          <span>Exemplo de infográfico · 2026</span>
        </footer>

      </div>

    </div>
  );
};
