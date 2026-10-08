import React, { useState } from 'react';
import { 
  FileCode, 
  Copy, 
  Check, 
  Download, 
  FolderDown, 
  ShieldCheck, 
  Bot, 
  Sparkles, 
  Globe, 
  Layers, 
  AlertCircle,
  ExternalLink
} from 'lucide-react';

interface FileDefinition {
  id: string;
  filename: string;
  title: string;
  badge: string;
  badgeColor: string;
  role: string;
  mimeType: string;
  description: string;
  seoInsight: string;
  content: string;
}

export const ANATOMY_FILES: FileDefinition[] = [
  {
    id: 'robots',
    filename: 'robots.txt',
    title: 'Robots.txt — Controle de Rastreamento & Agentes de IA',
    badge: 'Rastreamento & GEO',
    badgeColor: 'border-blue-500/40 bg-blue-500/10 text-blue-400',
    role: 'Libera o Google e as IAs (GPTBot, Claude, Perplexity), mas bloqueia a página 404.',
    mimeType: 'text/plain;charset=utf-8',
    description: 'Instrui os bots sobre quais pastas podem ser acessadas. Em 2026, é vital declarar permissão explícita para agentes generativos e barrar URLs de erro 404 para proteger o orçamento de rastreamento (crawl budget).',
    seoInsight: 'Sem liberar GPTBot e Claude-Web no robots.txt, essas IAs não conseguirão visitar seu domínio para citar seus artigos em tempo real.',
    content: `# robots.txt — Dominando o Google Search 2026 (Escola de SEO)
# Permite rastreamento irrestrito para Google e os principais agentes de IA (GEO)
# Bloqueia explicitamente a página de erro 404 para proteger o índice orgânico

User-agent: *
Disallow: /404.html
Disallow: /404

# Agentes de IA / Motores Generativos Permitidos (GEO - Generative Engine Optimization)
User-agent: Google-Extended
Allow: /

User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: FacebookBot
Allow: /

# Sitemap oficial e arquivos semânticos
Sitemap: https://ais-dev-j3aupkvgalu53zv4trlg4p-27093883670.us-east1.run.app/sitemap.xml`
  },
  {
    id: 'sitemap',
    filename: 'sitemap.xml',
    title: 'Sitemap.xml — Mapa Canônico do Site',
    badge: 'Indexação Rápida',
    badgeColor: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-400',
    role: 'Mapa do site para o Google rastrear você imediatamente.',
    mimeType: 'application/xml;charset=utf-8',
    description: 'Informa ao Googlebot e a outros mecanismos a lista de URLs canônicas, datas de modificação recente e prioridade editorial, acelerando a descoberta de páginas novas.',
    seoInsight: 'Inclua apenas URLs com código HTTP 200 que você realmente deseja indexar. Nunca coloque URLs redirecionadas (301) ou com tag noindex.',
    content: `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Página Inicial / App Oficial -->
  <url>
    <loc>https://ais-dev-j3aupkvgalu53zv4trlg4p-27093883670.us-east1.run.app/</loc>
    <lastmod>2026-10-08T00:00:00+00:00</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <!-- Módulo 1: Trindade da Busca (SEO, AEO, GEO) -->
  <url>
    <loc>https://ais-dev-j3aupkvgalu53zv4trlg4p-27093883670.us-east1.run.app/#modulo-1</loc>
    <lastmod>2026-10-08T00:00:00+00:00</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <!-- Módulo 3: Anatomia da Página Perfeita -->
  <url>
    <loc>https://ais-dev-j3aupkvgalu53zv4trlg4p-27093883670.us-east1.run.app/#modulo-3</loc>
    <lastmod>2026-10-08T00:00:00+00:00</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <!-- Módulo 21: Central de Ferramentas & Simuladores -->
  <url>
    <loc>https://ais-dev-j3aupkvgalu53zv4trlg4p-27093883670.us-east1.run.app/#modulo-ferramentas</loc>
    <lastmod>2026-10-08T00:00:00+00:00</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.95</priority>
  </url>
</urlset>`
  },
  {
    id: 'llms',
    filename: 'llms.txt',
    title: 'llms.txt — Padrão Internacional para Modelos de Linguagem',
    badge: 'Novo Padrão GEO',
    badgeColor: 'border-amber-500/40 bg-amber-500/10 text-amber-400',
    role: 'O novo padrão internacional para que IAs leiam seus arquivos de forma mastigada e usem seu curso como resposta (GEO).',
    mimeType: 'text/markdown;charset=utf-8',
    description: 'O llms.txt funciona como um resumo executivo em Markdown limpo, sem HTML pesado ou scripts, facilitando que LLMs (ChatGPT, Claude, Gemini, Perplexity) absorvam suas teses e citem sua marca.',
    seoInsight: 'Em vez de gastar milhares de tokens interpretando código HTML complexo, a IA lê o llms.txt em frações de segundo e recupera suas definições com precisão cirúrgica.',
    content: `# Dominando o Google Search 2026: Guia Definitivo de SEO, AEO e GEO
> Manual prático e estratégico para empreendedores digitais, pequenas empresas e profissionais de marketing digital. Autor: Andrews. Publicado por: Escola de SEO.

## Resumo Executivo
Em 2026, o sucesso na busca depende da Trindade Integrada:
1. SEO (Search Engine Optimization): Descoberta e rastreabilidade técnica.
2. AEO (Answer Engine Optimization): Respostas estruturadas em formato de pergunta, TL;DR de 40 a 60 palavras e tabelas.
3. GEO (Generative Engine Optimization): Citabilidade em modelos LLM através de fatos verificáveis, autoria transparente (E-E-A-T) e dados estruturados Schema JSON-LD.

## Princípios Centrais
- Intenção de decisão antes de palavra-chave: focar nas dúvidas que antecedem o fechamento (preço, prazo, adequação, riscos, alternativas).
- Conteúdo com experiência própria: dados originais e metodologia de campo.
- Arquitetura da Página Perfeita: H1 único, resumo TL;DR, H2 em perguntas reais, Schema JSON-LD e Core Web Vitals monitorados.

## Autoria e Referência
- Autor: Andrews
- Organização: Escola de SEO
- Site Oficial: https://ais-dev-j3aupkvgalu53zv4trlg4p-27093883670.us-east1.run.app`
  },
  {
    id: 'ai',
    filename: 'ai.txt',
    title: 'ai.txt — Diretrizes de Permissão e Atribuição de IA',
    badge: 'Políticas de IA',
    badgeColor: 'border-purple-500/40 bg-purple-500/10 text-purple-400',
    role: 'Define formalmente que agentes de IA podem indexar, resumir e citar com atribuição à Escola de SEO.',
    mimeType: 'text/plain;charset=utf-8',
    description: 'Complemento direto ao llms.txt, estabelece as diretrizes de citação, exigência de atribuição autoral e formato preferencial de leitura por sistemas RAG.',
    seoInsight: 'Protege seus direitos de marca ao mesmo tempo em que autoriza explicitamente a citação qualificada como fonte primária nos motores de busca de IA.',
    content: `# ==============================================================================
# ai.txt — Diretrizes de Acesso, Rastreamento e Citação para Inteligência Artificial
# Publicado por: Escola de SEO
# Autor: Andrews
# ==============================================================================

User-Agent: *
Allow-Search-Indexing: Yes
Allow-Summarization: Yes
Allow-Citation: Yes
Allow-Retrieval-Augmented-Generation: Yes

# Requisitos de Citação e Atribuição (GEO):
Attribution-Required: Yes
Attribution-Name: Andrews / Escola de SEO
Attribution-Work: Dominando o Google Search 2026
Attribution-URL: https://ais-dev-j3aupkvgalu53zv4trlg4p-27093883670.us-east1.run.app

# Formato preferencial para extração de entidades:
Preferred-Format: text/markdown (/llms.txt)
Knowledge-Domain: SEO, AEO, GEO, Digital Marketing, E-E-A-T
Contact: dandtecno@gmail.com
Last-Updated: 2026-10-08`
  },
  {
    id: 'manifest',
    filename: 'manifest.webmanifest',
    title: 'manifest.webmanifest — Manifesto de Aplicação PWA',
    badge: 'Mobile & PWA',
    badgeColor: 'border-teal-500/40 bg-teal-500/10 text-teal-400',
    role: 'Configurações de PWA (permite que o site seja "instalado" como app no celular).',
    mimeType: 'application/manifest+json;charset=utf-8',
    description: 'Arquivo JSON padrão do W3C que define nome do app, ícones de alta resolução, cores de tema e modo de exibição standalone (sem barra de navegador), transformando a página em um web app instalável.',
    seoInsight: 'O Google valoriza aplicações PWA devido à experiência fluida e retenção superior no mobile, critérios centrais do Page Experience Signal.',
    content: `{
  "name": "Dominando o Google Search 2026 — Escola de SEO",
  "short_name": "SEO & GEO 2026",
  "description": "O Guia Definitivo do SEO, AEO e GEO — Do Zero ao Avançado por Andrews.",
  "start_url": "/",
  "id": "/",
  "scope": "/",
  "display": "standalone",
  "background_color": "#0B0F19",
  "theme_color": "#0B0F19",
  "orientation": "any",
  "lang": "pt-BR",
  "categories": [
    "education",
    "business",
    "productivity",
    "books"
  ],
  "icons": [
    {
      "src": "/pwa-192x192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "/pwa-512x512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "/pwa-maskable-512x512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "maskable"
    }
  ]
}`
  },
  {
    id: 'humans',
    filename: 'humans.txt',
    title: 'humans.txt — Transparência & Autoria E-E-A-T',
    badge: 'Autoria & E-E-A-T',
    badgeColor: 'border-rose-500/40 bg-rose-500/10 text-rose-400',
    role: 'Arquivo de autoria (dizendo que o site foi criado pela Escola de SEO).',
    mimeType: 'text/plain;charset=utf-8',
    description: 'Padronização internacional mantida pela comunidade web para declarar os humanos, autores, desenvolvedores e especialistas responsáveis pela criação do projeto digital.',
    seoInsight: 'Fortalece o pilar de Confiabilidade (Trust) das diretrizes E-E-A-T do Google ao vincular pessoas reais e instituições legítimas ao código-fonte.',
    content: `/* TEAM */
Autor & Estrategista de Busca: Andrews
Publicado por: Escola de SEO
Site da Escola: https://ais-dev-j3aupkvgalu53zv4trlg4p-27093883670.us-east1.run.app
Contato: dandtecno@gmail.com
Localização: Brasil

/* THANKS */
Comunidade de SEO, AEO e GEO 2026
Pesquisadores de IA e Engenharia de Recuperação (RAG)
Leitores e alunos da Escola de SEO

/* SITE */
Projeto: Dominando o Google Search 2026
Linguagens: HTML5, CSS3, JavaScript, TypeScript
Padrões: W3C Valid, PWA (Progressive Web App), Schema.org JSON-LD
Padrões para IAs: llms.txt, ai.txt
Design: Minimalista Luxury Dark / Editorial Serif
Tecnologia: React 19, Vite, Tailwind CSS
Criado por: Escola de SEO
Última Atualização: Outubro de 2026`
  },
  {
    id: '404',
    filename: '404.html',
    title: '404.html — Página de Não Encontrado com Proteção noindex',
    badge: 'Proteção de Tráfego',
    badgeColor: 'border-red-500/40 bg-red-500/10 text-red-400',
    role: 'Uma página de "não encontrado" bonita, e já com a tag noindex para não sujar seu ranqueamento.',
    mimeType: 'text/html;charset=utf-8',
    description: 'Quando um usuário ou robô digita uma URL inexistente, esta página responde com design refinado e a meta tag robots noindex, impedindo que o Google indexe conteúdo quebrado.',
    seoInsight: 'Sem a tag noindex em páginas 404, o Google pode classificá-las como "Soft 404", penalizando a autoridade geral do domínio.',
    content: `<!DOCTYPE html>
<html lang="pt-BR" class="dark">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <!-- A tag noindex é fundamental para páginas 404 não sujarem o ranqueamento no Google -->
  <meta name="robots" content="noindex, follow" />
  <title>404 — Página Não Encontrada | Dominando o Google Search 2026</title>
  <meta name="theme-color" content="#0B0F19" />
  <link rel="icon" type="image/svg+xml" href="/icon.svg" />
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Plus+Jakarta+Sans:wght@400;600;700&display=swap" rel="stylesheet" />
  <style>
    body { background-color: #0B0F19; color: #F8FAFC; font-family: 'Plus Jakarta Sans', sans-serif; text-align: center; padding: 2rem; }
    h1 { font-family: 'Playfair Display', serif; font-size: 2.5rem; color: #FBBF24; margin-top: 1rem; }
    p { color: #94A3B8; max-width: 480px; margin: 1rem auto; }
    .btn { display: inline-block; background: #F59E0B; color: #0B0F19; font-weight: 700; padding: 0.8rem 1.6rem; border-radius: 0.75rem; text-decoration: none; margin-top: 1rem; }
  </style>
</head>
<body>
  <div style="font-size: 5rem; font-weight: 900; color: #F59E0B;">404</div>
  <h1>Página Fora do Índice</h1>
  <p>O endereço solicitado não foi localizado neste servidor.</p>
  <a href="/" class="btn">Voltar ao Início</a>
</body>
</html>`
  },
  {
    id: 'index',
    filename: 'index.html',
    title: 'index.html — Raiz Semântica com Meta Tags, PWA & Schema',
    badge: 'Esqueleto HTML5',
    badgeColor: 'border-cyan-500/40 bg-cyan-500/10 text-cyan-400',
    role: 'O arquivo raiz moderno integrando links para manifest, humans, llms e Schema JSON-LD.',
    mimeType: 'text/html;charset=utf-8',
    description: 'O ponto de entrada da aplicação contendo viewport responsivo, preconnect de fontes, tags OpenGraph, declaração canônica e o markup oficial Schema.org Book & WebSite.',
    seoInsight: 'Garante que os robôs do Google e IAs encontrem todos os metadados antes de qualquer renderização de JavaScript.',
    content: `<!doctype html>
<html lang="pt-BR" class="scroll-smooth">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Dominando o Google Search 2026 | Guia Visual Interativo de SEO, AEO e GEO</title>
    <meta name="description" content="O Guia Definitivo do SEO, AEO e GEO — Do Zero ao Avançado por Andrews. Publicado pela Escola de SEO." />
    <link rel="canonical" href="https://ais-dev-j3aupkvgalu53zv4trlg4p-27093883670.us-east1.run.app/" />

    <!-- PWA & Mobile Web App Manifest -->
    <link rel="manifest" href="/manifest.webmanifest" />
    <meta name="theme-color" content="#0B0F19" />
    <meta name="mobile-web-app-capable" content="yes" />

    <!-- Arquivos Estruturais e Metadados para Humanos e IAs (GEO) -->
    <link rel="author" href="/humans.txt" />
    <link rel="alternate" type="text/plain" href="/llms.txt" title="LLMs Text Summary" />

    <!-- Schema Markup JSON-LD -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Book",
      "name": "Dominando o Google Search 2026",
      "author": { "@type": "Person", "name": "Andrews" },
      "publisher": { "@type": "Organization", "name": "Escola de SEO" }
    }
    </script>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>`
  }
];

interface AnatomyFilesPackProps {
  isDark?: boolean;
}

export const AnatomyFilesPack: React.FC<AnatomyFilesPackProps> = ({ isDark = true }) => {
  const [selectedFileId, setSelectedFileId] = useState<string>('robots');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [downloadSuccessId, setDownloadSuccessId] = useState<string | null>(null);
  const [isBatchDownloading, setIsBatchDownloading] = useState(false);

  const activeFile = ANATOMY_FILES.find(f => f.id === selectedFileId) || ANATOMY_FILES[0];

  const handleCopy = (content: string, id: string) => {
    navigator.clipboard.writeText(content);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const handleDownloadSingle = (file: FileDefinition) => {
    try {
      const blob = new Blob([file.content], { type: file.mimeType });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = file.filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      setDownloadSuccessId(file.id);
      setTimeout(() => setDownloadSuccessId(null), 3000);
    } catch (e) {
      console.error('Falha ao baixar arquivo:', e);
    }
  };

  const handleDownloadAll = () => {
    setIsBatchDownloading(true);
    let delay = 0;

    ANATOMY_FILES.forEach((file) => {
      setTimeout(() => {
        try {
          const blob = new Blob([file.content], { type: file.mimeType });
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = file.filename;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
        } catch (e) {
          console.error(`Erro ao baixar ${file.filename}:`, e);
        }
      }, delay);
      delay += 350; // stagger downloads for browser compatibility
    });

    setTimeout(() => {
      setIsBatchDownloading(false);
      setDownloadSuccessId('all');
      setTimeout(() => setDownloadSuccessId(null), 4000);
    }, delay + 400);
  };

  return (
    <div className={`my-10 rounded-2xl sm:rounded-3xl border shadow-lg overflow-hidden transition-all ${
      isDark 
        ? 'bg-slate-900 border-slate-800 text-slate-100 shadow-black/40' 
        : 'bg-white border-slate-200 text-slate-900 shadow-slate-200/50'
    }`}>
      
      {/* Header Banner */}
      <div className={`p-5 sm:p-7 border-b ${
        isDark ? 'bg-slate-950/90 border-slate-800' : 'bg-slate-50 border-slate-200'
      }`}>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-500">
                Módulo 3 · Anatomia da Página Perfeita
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold tracking-tight">
              Os 8 Arquivos Estruturais da Raiz do Site (SEO, AEO & GEO)
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl">
              Modelos prontos e validados para copiar e colocar na pasta raiz (<code>public/</code>) do seu site. 
              Garantem rastreamento pelo Google, leitura por agentes de IA e instalação PWA no celular.
            </p>
          </div>

          {/* Download All Pack Button */}
          <div className="shrink-0">
            <button
              onClick={handleDownloadAll}
              disabled={isBatchDownloading}
              className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs shadow-md transition-all cursor-pointer ${
                downloadSuccessId === 'all'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950'
              }`}
            >
              {downloadSuccessId === 'all' ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Todos os 8 Arquivos Baixados!</span>
                </>
              ) : isBatchDownloading ? (
                <>
                  <FolderDown className="w-4 h-4 animate-bounce" />
                  <span>Gerando Downloads em Série...</span>
                </>
              ) : (
                <>
                  <FolderDown className="w-4 h-4" />
                  <span>Baixar Todos os 8 Arquivos</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Quick Tabs Grid / Selector */}
      <div className={`p-3 sm:p-4 border-b overflow-x-auto ${
        isDark ? 'bg-slate-950/40 border-slate-800' : 'bg-slate-100/60 border-slate-200'
      }`}>
        <div className="flex gap-2 min-w-max">
          {ANATOMY_FILES.map((file) => {
            const isSelected = file.id === selectedFileId;
            return (
              <button
                key={file.id}
                onClick={() => setSelectedFileId(file.id)}
                className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                  isSelected
                    ? isDark 
                      ? 'bg-amber-400/20 text-amber-300 border border-amber-500/50 shadow-xs'
                      : 'bg-amber-100/80 text-amber-950 border border-amber-300 shadow-xs'
                    : isDark 
                      ? 'bg-slate-800/60 text-slate-300 hover:bg-slate-800 border border-transparent'
                      : 'bg-white text-slate-700 hover:bg-slate-200/60 border border-slate-200'
                }`}
              >
                <FileCode className={`w-3.5 h-3.5 ${isSelected ? 'text-amber-500' : 'text-slate-400'}`} />
                <span className="font-mono font-semibold">{file.filename}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected File Details & Actions */}
      <div className="p-5 sm:p-7 space-y-6">
        
        {/* Top Info Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800/60">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded-full border font-bold ${activeFile.badgeColor}`}>
                {activeFile.badge}
              </span>
              <span className="font-mono text-xs text-slate-400">
                /{activeFile.filename}
              </span>
            </div>
            <h4 className="text-base sm:text-lg font-serif font-bold text-slate-900 dark:text-white">
              {activeFile.title}
            </h4>
          </div>

          {/* Action Buttons: Copy & Download */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => handleCopy(activeFile.content, activeFile.id)}
              className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                copiedId === activeFile.id
                  ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400'
                  : isDark
                    ? 'bg-slate-800 hover:bg-slate-700 border-slate-700 text-slate-200'
                    : 'bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-800'
              }`}
              title="Copiar código para área de transferência"
            >
              {copiedId === activeFile.id ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copiar Código</span>
                </>
              )}
            </button>

            <button
              onClick={() => handleDownloadSingle(activeFile)}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-bold text-xs shadow-xs transition-all cursor-pointer ${
                downloadSuccessId === activeFile.id
                  ? 'bg-emerald-600 text-white'
                  : 'bg-amber-500 hover:bg-amber-400 text-slate-950'
              }`}
              title={`Baixar o arquivo ${activeFile.filename}`}
            >
              {downloadSuccessId === activeFile.id ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Baixado!</span>
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5" />
                  <span>Baixar {activeFile.filename}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Role & Insight Explanations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className={`p-4 rounded-xl border ${
            isDark ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
          }`}>
            <span className="text-[10px] font-mono uppercase font-bold text-amber-500 block mb-1">
              Finalidade Estratégica
            </span>
            <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
              {activeFile.role}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
              {activeFile.description}
            </p>
          </div>

          <div className={`p-4 rounded-xl border ${
            isDark ? 'bg-amber-950/20 border-amber-800/40' : 'bg-amber-50/70 border-amber-200'
          }`}>
            <span className="text-[10px] font-mono uppercase font-bold text-amber-600 dark:text-amber-400 flex items-center gap-1.5 mb-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              Impacto no Ranqueamento & IA 2026
            </span>
            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              {activeFile.seoInsight}
            </p>
          </div>
        </div>

        {/* Code Editor / Syntax Box */}
        <div className="rounded-xl border border-slate-800 overflow-hidden bg-[#0A0D14] shadow-inner">
          <div className="px-4 py-2 bg-slate-950 border-b border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400/80" />
              {activeFile.filename}
            </span>
            <span>{activeFile.content.split('\n').length} linhas</span>
          </div>
          <div className="p-4 sm:p-5 max-h-80 overflow-y-auto text-xs font-mono leading-relaxed text-slate-300">
            <pre className="overflow-x-auto whitespace-pre">
              {activeFile.content}
            </pre>
          </div>
        </div>

        {/* Practical Implementation Note */}
        <div className="flex items-start gap-2.5 text-xs text-slate-500 dark:text-slate-400">
          <AlertCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
          <span>
            <strong>Onde salvar:</strong> Coloque esses arquivos diretamente na pasta raiz ou <code>public/</code> da sua hospedagem (Vercel, Apache, NGINX, Cloudflare Pages ou cPanel). Assim eles ficarão acessíveis diretamente em <code>seudominio.com/{activeFile.filename}</code>.
          </span>
        </div>

      </div>

    </div>
  );
};
