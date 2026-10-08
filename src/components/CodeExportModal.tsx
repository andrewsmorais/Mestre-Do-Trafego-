import React, { useState } from 'react';
import { X, Copy, Check, Code } from 'lucide-react';

interface CodeExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  infographicTitle: string;
}

export const CodeExportModal: React.FC<CodeExportModalProps> = ({ isOpen, onClose, infographicTitle }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const rawHtmlCode = `<!-- INFOGRÁFICO: A TRINDADE DA BUSCA (SEO, AEO, GEO 2026) -->
<!-- Framework: HTML5 + Tailwind CSS -->
<div class="w-full max-w-5xl mx-auto my-8 font-sans antialiased text-slate-900">
  <div class="bg-white rounded-3xl border-2 border-slate-200 shadow-2xl p-6 sm:p-12 relative overflow-hidden">
    
    <!-- Top Gradient Bar -->
    <div class="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-700 via-amber-400 to-blue-900"></div>
    <div class="text-[10px] font-mono uppercase tracking-widest text-slate-400 text-right mb-4">
      INFOGRÁFICO OFICIAL · DOMINANDO O GOOGLE SEARCH 2026
    </div>

    <!-- Header -->
    <header class="mb-10 text-left">
      <span class="text-xs font-bold uppercase tracking-widest text-teal-700 block mb-2 font-mono">
        DOMINANDO O GOOGLE SEARCH 2026
      </span>
      <h1 class="text-3xl sm:text-5xl font-serif font-bold text-slate-950 tracking-tight leading-tight mb-3">
        A Trindade da Busca
      </h1>
      <p class="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
        Em 2026, não basta aparecer. Sua marca precisa ser <strong>encontrada</strong>, <strong>responder com clareza</strong> e ser <strong>reconhecida como fonte confiável</strong>.
      </p>
    </header>

    <!-- 3 Pillars Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
      
      <!-- 01 · DESCOBERTA (SEO) -->
      <div class="rounded-2xl border-2 border-slate-200 bg-white p-6 relative hover:shadow-lg transition-all flex flex-col justify-between">
        <div class="absolute top-0 left-6 right-6 h-1 bg-blue-600 rounded-b-md"></div>
        <div>
          <div class="text-xs font-mono font-bold text-blue-700 uppercase tracking-widest mb-3 pt-1">
            01 · DESCOBERTA
          </div>
          <h2 class="text-3xl font-serif font-bold text-slate-950 mb-2">SEO</h2>
          <p class="text-sm font-semibold text-slate-900 mb-4">
            <strong>Ser encontrado.</strong> Torne páginas, produtos e serviços rastreáveis, indexáveis e relevantes.
          </p>
          <ul class="space-y-2 text-xs text-slate-600 pt-2 border-t border-slate-100">
            <li>• <strong>estrutura técnica clara:</strong> sitemaps, robots, status 200</li>
            <li>• <strong>intenção e arquitetura:</strong> hierarquia H1-H3 lógica</li>
            <li>• <strong>conteúdo e links úteis:</strong> âncoras descritivas</li>
            <li>• <strong>experiência mobile:</strong> estabilidade e Core Web Vitals</li>
          </ul>
        </div>
        <div class="mt-6 pt-3 border-t border-slate-100 text-[11px] text-blue-700 font-medium">
          SEO cria acesso
        </div>
      </div>

      <!-- 02 · COMPREENSÃO (AEO) -->
      <div class="rounded-2xl border-2 border-slate-200 bg-white p-6 relative hover:shadow-lg transition-all flex flex-col justify-between">
        <div class="absolute top-0 left-6 right-6 h-1 bg-emerald-600 rounded-b-md"></div>
        <div>
          <div class="text-xs font-mono font-bold text-emerald-700 uppercase tracking-widest mb-3 pt-1">
            02 · COMPREENSÃO
          </div>
          <h2 class="text-3xl font-serif font-bold text-slate-950 mb-2">AEO</h2>
          <p class="text-sm font-semibold text-slate-900 mb-4">
            <strong>Ser a resposta.</strong> Organize o conteúdo para resolver perguntas de forma direta e escaneável.
          </p>
          <ul class="space-y-2 text-xs text-slate-600 pt-2 border-t border-slate-100">
            <li>• <strong>resumo e definição no topo:</strong> TL;DR de 40-60 palavras</li>
            <li>• <strong>H2 em formato de pergunta:</strong> dúvidas reais do usuário</li>
            <li>• <strong>listas, tabelas e exemplos:</strong> leitura rápida e precisa</li>
            <li>• <strong>próximo passo claro:</strong> condução lógica para a ação</li>
          </ul>
        </div>
        <div class="mt-6 pt-3 border-t border-slate-100 text-[11px] text-emerald-700 font-medium">
          AEO cria compreensão
        </div>
      </div>

      <!-- 03 · RECOMENDAÇÃO (GEO) -->
      <div class="rounded-2xl border-2 border-slate-200 bg-white p-6 relative hover:shadow-lg transition-all flex flex-col justify-between">
        <div class="absolute top-0 left-6 right-6 h-1 bg-amber-600 rounded-b-md"></div>
        <div>
          <div class="text-xs font-mono font-bold text-amber-700 uppercase tracking-widest mb-3 pt-1">
            03 · RECOMENDAÇÃO
          </div>
          <h2 class="text-3xl font-serif font-bold text-slate-950 mb-2">GEO</h2>
          <p class="text-sm font-semibold text-slate-900 mb-4">
            <strong>Ser citado.</strong> Ofereça fatos, contexto, autoria e evidências que sistemas generativos possam verificar.
          </p>
          <ul class="space-y-2 text-xs text-slate-600 pt-2 border-t border-slate-100">
            <li>• <strong>afirmações citáveis:</strong> frases autocontidas e densas</li>
            <li>• <strong>fontes e dados verificáveis:</strong> dados originais com método</li>
            <li>• <strong>experiência própria:</strong> E-E-A-T real com casos documentados</li>
            <li>• <strong>menções legítimas:</strong> Digital PR e validação orgânica</li>
          </ul>
        </div>
        <div class="mt-6 pt-3 border-t border-slate-100 text-[11px] text-amber-700 font-medium">
          GEO cria reutilização
        </div>
      </div>

    </div>

    <!-- Dark Container: Como transformar otimização em negócio -->
    <div class="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 mb-10 shadow-lg">
      <h3 class="text-xl font-serif font-bold mb-4">Como transformar otimização em negócio</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="bg-white/5 rounded-xl p-4 border border-white/10">
          <span class="text-xs font-mono font-bold text-blue-400 block mb-1">1. Atraia</span>
          <p class="text-xs text-slate-200">Uma pessoa descobre seu conteúdo em busca, vídeo, comunidade ou marketplace.</p>
        </div>
        <div class="bg-white/5 rounded-xl p-4 border border-white/10">
          <span class="text-xs font-mono font-bold text-emerald-400 block mb-1">2. Convença</span>
          <p class="text-xs text-slate-200">Ela encontra resposta, prova, comparação e limites suficientes para confiar.</p>
        </div>
        <div class="bg-white/5 rounded-xl p-4 border border-white/10">
          <span class="text-xs font-mono font-bold text-amber-400 block mb-1">3. Converta</span>
          <p class="text-xs text-slate-200">O próximo passo é simples: comprar, agendar, ligar, enviar mensagem ou pedir proposta.</p>
        </div>
      </div>
    </div>

    <!-- Two Lower Cards: Regra Prática & Pergunta de Auditoria -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div class="rounded-2xl border border-slate-200 bg-slate-50 p-6">
        <h4 class="text-sm font-bold text-slate-900 mb-2">Regra prática</h4>
        <p class="text-xs text-slate-600 leading-relaxed">
          SEO cria acesso. AEO reduz o esforço de compreensão. GEO aumenta a chance de a informação circular em respostas generativas. Nenhuma técnica garante citação; qualidade, rastreabilidade, contexto e reputação precisam trabalhar juntos.
        </p>
      </div>
      <div class="rounded-2xl border-2 border-amber-300 bg-amber-50/50 p-6">
        <h4 class="text-sm font-bold text-amber-950 mb-2">Pergunta de auditoria</h4>
        <p class="text-xs text-amber-950 font-medium leading-relaxed font-serif italic">
          "Se alguém descobrir minha marca por esta página, terá informação suficiente, motivos para confiar e um próximo passo claro para comprar?"
        </p>
      </div>
    </div>

    <!-- Footer Note -->
    <footer class="pt-6 border-t border-slate-200 flex justify-between text-[11px] font-mono text-slate-500">
      <span>Guia prático de SEO, AEO e GEO · Andrews</span>
      <span>Infográfico · 2026</span>
    </footer>

  </div>
</div>`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(rawHtmlCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-3xl border-2 border-slate-200 shadow-2xl max-w-3xl w-full my-8 overflow-hidden animate-in fade-in duration-200">
        
        {/* Header */}
        <div className="bg-slate-900 text-white p-6 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-400">
              <Code className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-amber-400 block font-mono">
                CÓDIGO WEB HTML5 + TAILWIND CSS
              </span>
              <h3 className="text-lg font-serif font-bold text-white">
                Exportar Código do Infográfico
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

        {/* Action bar */}
        <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-600">
            Pronto para usar em qualquer projeto com Tailwind CSS habilitado.
          </span>
          <button
            onClick={copyToClipboard}
            className="inline-flex items-center gap-2 px-4 py-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs rounded-xl transition-all cursor-pointer shadow-xs active:scale-95"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-800" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Código Copiado!' : 'Copiar Código HTML'}</span>
          </button>
        </div>

        {/* Code View */}
        <div className="p-6 max-h-[60vh] overflow-y-auto bg-slate-950 text-slate-300 font-mono text-xs leading-relaxed">
          <pre className="overflow-x-auto whitespace-pre">
            {rawHtmlCode}
          </pre>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            Código 100% semântico e responsivo (Mobile & Desktop).
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-semibold cursor-pointer"
          >
            Fechar
          </button>
        </div>

      </div>
    </div>
  );
};
