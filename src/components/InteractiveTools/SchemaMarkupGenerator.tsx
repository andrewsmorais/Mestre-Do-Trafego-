import React, { useState } from 'react';
import { 
  Code, 
  Copy, 
  Check, 
  ExternalLink, 
  Plus, 
  Trash2, 
  Sparkles, 
  AlertCircle, 
  CheckCircle, 
  FileCode,
  HelpCircle
} from 'lucide-react';
import { Language, TRANSLATIONS } from '../../i18n/translations.ts';

interface SchemaMarkupGeneratorProps {
  language?: Language;
  isDark?: boolean;
}

type SchemaType = 'Article' | 'Organization' | 'LocalBusiness' | 'FAQPage' | 'Product';

interface FaqItem {
  question: string;
  answer: string;
}

export const SchemaMarkupGenerator: React.FC<SchemaMarkupGeneratorProps> = ({
  language = 'pt',
  isDark = false
}) => {
  const [selectedType, setSelectedType] = useState<SchemaType>('FAQPage');
  const [copied, setCopied] = useState<boolean>(false);

  // Article state
  const [articleTitle, setArticleTitle] = useState('Como Dominar o Google Search em 2026');
  const [articleAuthor, setArticleAuthor] = useState('Andrews');
  const [articlePublisher, setArticlePublisher] = useState('Editora Digital');
  const [articleUrl, setArticleUrl] = useState('https://seusite.com.br/artigo-seo-2026');
  const [articleDate, setArticleDate] = useState('2026-10-08');

  // Organization state
  const [orgName, setOrgName] = useState('Minha Empresa Tecnologia');
  const [orgUrl, setOrgUrl] = useState('https://minhaempresa.com.br');
  const [orgLogo, setOrgLogo] = useState('https://minhaempresa.com.br/logo.png');
  const [orgSameAs, setOrgSameAs] = useState('https://www.linkedin.com/company/minhaempresa');

  // LocalBusiness state
  const [bizName, setBizName] = useState('Clínica Saúde & Estética');
  const [bizStreet, setBizStreet] = useState('Avenida Principal, 500');
  const [bizCity, setBizCity] = useState('São Paulo');
  const [bizState, setBizState] = useState('SP');
  const [bizPostal, setBizPostal] = useState('01310-100');
  const [bizPhone, setBizPhone] = useState('+55 11 98888-7777');
  const [bizPriceRange, setBizPriceRange] = useState('$$');

  // FAQ state
  const [faqs, setFaqs] = useState<FaqItem[]>([
    {
      question: 'O que é Generative Engine Optimization (GEO)?',
      answer: 'GEO é o conjunto de práticas para tornar sua marca, dados e conteúdos compreensíveis, verificáveis e citáveis por modelos de inteligência artificial como Gemini, ChatGPT e Perplexity.'
    },
    {
      question: 'Qual a diferença entre SEO e AEO?',
      answer: 'SEO foca na indexabilidade e relevância em resultados de busca orgânica, enquanto AEO formata as informações para responder de forma imediata e concisa a perguntas em assistentes e caixas de resposta direta.'
    }
  ]);

  // Product state
  const [prodName, setProdName] = useState('Curso Dominando o Google Search 2026');
  const [prodDesc, setProdDesc] = useState('Apostila completa e leitor digital de SEO, AEO e GEO para empreendedores.');
  const [prodPrice, setProdPrice] = useState('197.00');
  const [prodCurrency, setProdCurrency] = useState('BRL');

  const addFaq = () => {
    setFaqs([...faqs, { question: '', answer: '' }]);
  };

  const removeFaq = (index: number) => {
    setFaqs(faqs.filter((_, i) => i !== index));
  };

  const updateFaq = (index: number, field: 'question' | 'answer', value: string) => {
    const updated = [...faqs];
    updated[index][field] = value;
    setFaqs(updated);
  };

  // Generate JSON-LD Object
  const generateSchemaJson = () => {
    switch (selectedType) {
      case 'Article':
        return {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": articleTitle,
          "author": {
            "@type": "Person",
            "name": articleAuthor
          },
          "publisher": {
            "@type": "Organization",
            "name": articlePublisher
          },
          "datePublished": articleDate,
          "dateModified": articleDate,
          "mainEntityOfPage": articleUrl
        };

      case 'Organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": orgName,
          "url": orgUrl,
          "logo": orgLogo,
          "sameAs": orgSameAs ? [orgSameAs] : []
        };

      case 'LocalBusiness':
        return {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": bizName,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": bizStreet,
            "addressLocality": bizCity,
            "addressRegion": bizState,
            "postalCode": bizPostal,
            "addressCountry": "BR"
          },
          "telephone": bizPhone,
          "priceRange": bizPriceRange
        };

      case 'FAQPage':
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs
            .filter(f => f.question.trim() && f.answer.trim())
            .map(f => ({
              "@type": "Question",
              "name": f.question.trim(),
              "acceptedAnswer": {
                "@type": "Answer",
                "text": f.answer.trim()
              }
            }))
        };

      case 'Product':
        return {
          "@context": "https://schema.org",
          "@type": "Product",
          "name": prodName,
          "description": prodDesc,
          "offers": {
            "@type": "Offer",
            "price": prodPrice,
            "priceCurrency": prodCurrency,
            "availability": "https://schema.org/InStock",
            "url": window.location.href
          }
        };
    }
  };

  const schemaJson = generateSchemaJson();
  const formattedCode = `<script type="application/ld+json">\n${JSON.stringify(schemaJson, null, 2)}\n</script>`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(formattedCode);
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
          <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-400/30 flex items-center justify-center text-blue-500 shrink-0">
            <Code className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              FERRAMENTA TÉCNICA · MÓDULO 3
            </div>
            <h3 className="text-lg sm:text-xl font-serif font-bold text-slate-950 dark:text-white">
              Gerador Visual de Schema Markup JSON-LD (Rich Results)
            </h3>
          </div>
        </div>

        {/* Schema Type Switcher */}
        <div className="flex flex-wrap items-center rounded-xl p-1 bg-slate-100 dark:bg-slate-800 text-xs font-semibold gap-1">
          {(['FAQPage', 'Article', 'LocalBusiness', 'Organization', 'Product'] as SchemaType[]).map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-2.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                selectedType === type
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
        Gere dados estruturados em conformidade com o Google Search e o Schema.org. Cole o código gerado no <code>&lt;head&gt;</code> da sua página ou injete via Google Tag Manager para habilitar rich snippets e alimentar sistemas generativos.
      </p>

      {/* Editor & Preview Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Form Fields (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          
          {/* FAQ FORM */}
          {selectedType === 'FAQPage' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Perguntas e Respostas Frequentes (AEO):
                </span>
                <button
                  onClick={addFaq}
                  className="text-xs font-semibold inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Adicionar Pergunta</span>
                </button>
              </div>

              {faqs.map((faq, i) => (
                <div 
                  key={i} 
                  className={`p-3.5 rounded-xl border relative space-y-2 ${
                    isDark ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-mono font-bold text-amber-500">
                      Pergunta {i + 1}
                    </span>
                    {faqs.length > 1 && (
                      <button
                        onClick={() => removeFaq(i)}
                        className="p-1 text-slate-400 hover:text-rose-500 transition-colors cursor-pointer"
                        title="Remover pergunta"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>

                  <input
                    type="text"
                    value={faq.question}
                    onChange={(e) => updateFaq(i, 'question', e.target.value)}
                    placeholder="Ex: Quanto tempo leva para ver resultados de SEO?"
                    className={`w-full text-xs px-3 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500/30 ${
                      isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                    }`}
                  />

                  <textarea
                    rows={2}
                    value={faq.answer}
                    onChange={(e) => updateFaq(i, 'answer', e.target.value)}
                    placeholder="Resposta direta de 40 a 60 palavras com fatos e evidências..."
                    className={`w-full text-xs px-3 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500/30 ${
                      isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                    }`}
                  />
                </div>
              ))}
            </div>
          )}

          {/* ARTICLE FORM */}
          {selectedType === 'Article' && (
            <div className={`p-4 rounded-xl border space-y-3 ${
              isDark ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
            }`}>
              <div>
                <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1">
                  Título do Artigo (Headline):
                </label>
                <input
                  type="text"
                  value={articleTitle}
                  onChange={(e) => setArticleTitle(e.target.value)}
                  className={`w-full text-xs px-3 py-2 rounded-lg border ${
                    isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                  }`}
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1">
                    Nome do Autor (E-E-A-T):
                  </label>
                  <input
                    type="text"
                    value={articleAuthor}
                    onChange={(e) => setArticleAuthor(e.target.value)}
                    className={`w-full text-xs px-3 py-2 rounded-lg border ${
                      isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                    }`}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1">
                    Editora / Organização:
                  </label>
                  <input
                    type="text"
                    value={articlePublisher}
                    onChange={(e) => setArticlePublisher(e.target.value)}
                    className={`w-full text-xs px-3 py-2 rounded-lg border ${
                      isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                    }`}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1">
                  URL Canônica da Página:
                </label>
                <input
                  type="url"
                  value={articleUrl}
                  onChange={(e) => setArticleUrl(e.target.value)}
                  className={`w-full text-xs px-3 py-2 rounded-lg border ${
                    isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                  }`}
                />
              </div>
            </div>
          )}

          {/* LOCAL BUSINESS FORM */}
          {selectedType === 'LocalBusiness' && (
            <div className={`p-4 rounded-xl border space-y-3 ${
              isDark ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
            }`}>
              <div>
                <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1">
                  Nome do Negócio Local:
                </label>
                <input
                  type="text"
                  value={bizName}
                  onChange={(e) => setBizName(e.target.value)}
                  className={`w-full text-xs px-3 py-2 rounded-lg border ${
                    isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                  }`}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1">
                  Endereço Físico (Rua e Número):
                </label>
                <input
                  type="text"
                  value={bizStreet}
                  onChange={(e) => setBizStreet(e.target.value)}
                  className={`w-full text-xs px-3 py-2 rounded-lg border ${
                    isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                  }`}
                />
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1">
                    Cidade:
                  </label>
                  <input
                    type="text"
                    value={bizCity}
                    onChange={(e) => setBizCity(e.target.value)}
                    className={`w-full text-xs px-3 py-2 rounded-lg border ${
                      isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                    }`}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1">
                    Estado (UF):
                  </label>
                  <input
                    type="text"
                    value={bizState}
                    onChange={(e) => setBizState(e.target.value)}
                    className={`w-full text-xs px-3 py-2 rounded-lg border ${
                      isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                    }`}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1">
                    CEP:
                  </label>
                  <input
                    type="text"
                    value={bizPostal}
                    onChange={(e) => setBizPostal(e.target.value)}
                    className={`w-full text-xs px-3 py-2 rounded-lg border ${
                      isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                    }`}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1">
                    Telefone (com DDD):
                  </label>
                  <input
                    type="tel"
                    value={bizPhone}
                    onChange={(e) => setBizPhone(e.target.value)}
                    className={`w-full text-xs px-3 py-2 rounded-lg border ${
                      isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                    }`}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1">
                    Faixa de Preço:
                  </label>
                  <select
                    value={bizPriceRange}
                    onChange={(e) => setBizPriceRange(e.target.value)}
                    className={`w-full text-xs px-3 py-2 rounded-lg border ${
                      isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                    }`}
                  >
                    <option value="$">$ (Econômico)</option>
                    <option value="$$">$$ (Moderado)</option>
                    <option value="$$$">$$$ (Alto Padrão)</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* ORGANIZATION FORM */}
          {selectedType === 'Organization' && (
            <div className={`p-4 rounded-xl border space-y-3 ${
              isDark ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
            }`}>
              <div>
                <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1">
                  Nome da Entidade / Empresa:
                </label>
                <input
                  type="text"
                  value={orgName}
                  onChange={(e) => setOrgName(e.target.value)}
                  className={`w-full text-xs px-3 py-2 rounded-lg border ${
                    isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                  }`}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1">
                  Website Oficial:
                </label>
                <input
                  type="url"
                  value={orgUrl}
                  onChange={(e) => setOrgUrl(e.target.value)}
                  className={`w-full text-xs px-3 py-2 rounded-lg border ${
                    isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                  }`}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1">
                  URL da Logo Oficial:
                </label>
                <input
                  type="url"
                  value={orgLogo}
                  onChange={(e) => setOrgLogo(e.target.value)}
                  className={`w-full text-xs px-3 py-2 rounded-lg border ${
                    isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                  }`}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1">
                  sameAs (LinkedIn, Wikipedia, Wikidata):
                </label>
                <input
                  type="url"
                  value={orgSameAs}
                  onChange={(e) => setOrgSameAs(e.target.value)}
                  placeholder="https://www.linkedin.com/company/suaempresa"
                  className={`w-full text-xs px-3 py-2 rounded-lg border ${
                    isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                  }`}
                />
              </div>
            </div>
          )}

          {/* PRODUCT FORM */}
          {selectedType === 'Product' && (
            <div className={`p-4 rounded-xl border space-y-3 ${
              isDark ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
            }`}>
              <div>
                <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1">
                  Nome do Produto / Oferta:
                </label>
                <input
                  type="text"
                  value={prodName}
                  onChange={(e) => setProdName(e.target.value)}
                  className={`w-full text-xs px-3 py-2 rounded-lg border ${
                    isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                  }`}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1">
                  Descrição Curta:
                </label>
                <textarea
                  rows={2}
                  value={prodDesc}
                  onChange={(e) => setProdDesc(e.target.value)}
                  className={`w-full text-xs px-3 py-2 rounded-lg border ${
                    isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                  }`}
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1">
                    Preço (ex: 197.00):
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={prodPrice}
                    onChange={(e) => setProdPrice(e.target.value)}
                    className={`w-full text-xs px-3 py-2 rounded-lg border ${
                      isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                    }`}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1">
                    Moeda:
                  </label>
                  <select
                    value={prodCurrency}
                    onChange={(e) => setProdCurrency(e.target.value)}
                    className={`w-full text-xs px-3 py-2 rounded-lg border ${
                      isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                    }`}
                  >
                    <option value="BRL">BRL (R$)</option>
                    <option value="USD">USD ($)</option>
                    <option value="EUR">EUR (€)</option>
                  </select>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Right Column: Real-time Code Output (5 cols) */}
        <div className="lg:col-span-5 flex flex-col">
          <div className="flex items-center justify-between pb-2 mb-2 text-xs font-mono font-bold text-slate-500">
            <span>CÓDIGO GERADO (PRONTO PARA COLAR):</span>
            <button
              onClick={handleCopyCode}
              className={`inline-flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                copied 
                  ? 'bg-emerald-600 text-white' 
                  : 'bg-blue-600 text-white hover:bg-blue-700 active:scale-95'
              }`}
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copiado!' : 'Copiar Código'}</span>
            </button>
          </div>

          <div className="flex-1 rounded-xl bg-slate-950 border border-slate-800 p-4 font-mono text-[11px] sm:text-xs text-amber-300 overflow-x-auto relative shadow-inner">
            <pre className="whitespace-pre">{formattedCode}</pre>
          </div>

          {/* Validation note & Rich Results link */}
          <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
            <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>Sintaxe JSON-LD 100% Válida</span>
            </div>

            <a
              href="https://search.google.com/test/rich-results"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 text-[11px]"
            >
              <span>Testar no Google</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>

    </div>
  );
};
