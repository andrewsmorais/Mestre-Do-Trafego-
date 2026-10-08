import React, { useState } from 'react';
import { Chapter } from '../data/bookData.ts';
import { Language, TRANSLATIONS } from '../i18n/translations.ts';
import { FontScale, SCALE_PRESETS } from './FontSizeControl.tsx';
import { TrinityInfographic } from './infographics/TrinityInfographic.tsx';
import { ConsumerDecisionInfographic } from './infographics/ConsumerDecisionInfographic.tsx';
import { PerfectPageInfographic } from './infographics/PerfectPageInfographic.tsx';
import { TechnicalSeoInfographic } from './infographics/TechnicalSeoInfographic.tsx';
import { QuickWinsInfographic } from './infographics/QuickWinsInfographic.tsx';
import { ExecutionPlanInfographic } from './infographics/ExecutionPlanInfographic.tsx';
import { ClickToRevenueInfographic } from './infographics/ClickToRevenueInfographic.tsx';
import { EthicalSeoInfographic } from './infographics/EthicalSeoInfographic.tsx';
import { MatrizPriorizacaoCalc } from './InteractiveTools/MatrizPriorizacaoCalc.tsx';
import { FullAuditChecklist } from './InteractiveTools/FullAuditChecklist.tsx';
import { 
  Copy, 
  Check, 
  HelpCircle, 
  Award, 
  AlertTriangle, 
  Quote, 
  ChevronRight, 
  ChevronLeft,
  CheckCircle,
  Printer,
  Type,
  Plus,
  Minus
} from 'lucide-react';

interface ChapterViewerProps {
  chapter: Chapter;
  onNext?: () => void;
  onPrev?: () => void;
  hasNext: boolean;
  hasPrev: boolean;
  fontScale: FontScale;
  onChangeFontScale?: (scale: FontScale) => void;
  isRead: boolean;
  onToggleRead: () => void;
  onOpenPdfModal: () => void;
  language: Language;
  isDark: boolean;
}

const FONT_CONFIG: Record<FontScale, {
  body: string;
  bodyLeading: string;
  h1: string;
  h2: string;
  h3: string;
  quote: string;
  small: string;
  pctLabel: string;
}> = {
  1: { body: '14.5px', bodyLeading: '1.65', h1: '28px', h2: '22px', h3: '18px', quote: '16px',   small: '13px',   pctLabel: '85%' },
  2: { body: '17px',   bodyLeading: '1.75', h1: '34px', h2: '26px', h3: '21px', quote: '18.5px', small: '15px',   pctLabel: '100%' },
  3: { body: '20px',   bodyLeading: '1.8',  h1: '40px', h2: '30px', h3: '24px', quote: '21.5px', small: '17px',   pctLabel: '115%' },
  4: { body: '23.5px', bodyLeading: '1.85', h1: '46px', h2: '34px', h3: '27px', quote: '24.5px', small: '19.5px', pctLabel: '130%' },
  5: { body: '27px',   bodyLeading: '1.9',  h1: '52px', h2: '38px', h3: '31px', quote: '28px',   small: '22px',   pctLabel: '145%' },
};

export const ChapterViewer: React.FC<ChapterViewerProps> = ({
  chapter,
  onNext,
  onPrev,
  hasNext,
  hasPrev,
  fontScale,
  onChangeFontScale,
  isRead,
  onToggleRead,
  onOpenPdfModal,
  language,
  isDark
}) => {
  const [copiedSnippet, setCopiedSnippet] = useState<string | null>(null);
  const t = TRANSLATIONS[language];

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSnippet(id);
    setTimeout(() => setCopiedSnippet(null), 2500);
  };

  const scaleConfig = FONT_CONFIG[fontScale] || FONT_CONFIG[2];

  const handleDecreaseFont = () => {
    if (onChangeFontScale && fontScale > 1) {
      onChangeFontScale((fontScale - 1) as FontScale);
    }
  };

  const handleIncreaseFont = () => {
    if (onChangeFontScale && fontScale < 5) {
      onChangeFontScale((fontScale + 1) as FontScale);
    }
  };

  // Localized title & subtitle if present in translation dict
  const localizedInfo = t.chapterTitles[chapter.id];
  const displayTitle = localizedInfo?.title || chapter.title;
  const displaySubtitle = localizedInfo?.subtitle || chapter.subtitle;

  return (
    <article className={`max-w-4xl mx-auto px-3.5 sm:px-8 py-6 sm:py-10 rounded-2xl sm:rounded-3xl border transition-colors shadow-xs print:border-none print:shadow-none print:p-0 ${
      isDark 
        ? 'bg-slate-900 border-slate-800 text-slate-100' 
        : 'bg-white border-slate-200/90 text-slate-900'
    }`}>
      
      {/* Chapter Top Ribbon with Direct Controls */}
      <div className={`flex flex-wrap items-center justify-between gap-2.5 pb-4 sm:pb-6 mb-6 sm:mb-8 border-b print:hidden ${
        isDark ? 'border-slate-800' : 'border-slate-100'
      }`}>
        <div className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
          {chapter.number === "0" ? t.generalIntro : `${t.moduleLabel} ${chapter.number}`} · {t.appName}
        </div>
        
        <div className="flex items-center gap-2 flex-wrap">
          
          {/* Quick Font Size Adjuster in Chapter Toolbar */}
          {onChangeFontScale && (
            <div 
              className={`flex items-center rounded-lg border text-xs shadow-2xs overflow-hidden ${
                isDark 
                  ? 'bg-slate-800 border-slate-700 text-slate-200' 
                  : 'bg-slate-100 border-slate-200 text-slate-800'
              }`}
            >
              <button
                type="button"
                onClick={handleDecreaseFont}
                disabled={fontScale <= 1}
                className={`px-2 py-1 font-bold font-serif transition-colors cursor-pointer ${
                  fontScale <= 1 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-amber-500/20 active:bg-amber-500/30'
                }`}
                title={t.decreaseFont}
              >
                A-
              </button>

              <span className="font-mono text-[10px] font-bold px-1.5 border-x border-slate-200 dark:border-slate-700 text-amber-600 dark:text-amber-400">
                {scaleConfig.pctLabel}
              </span>

              <button
                type="button"
                onClick={handleIncreaseFont}
                disabled={fontScale >= 5}
                className={`px-2 py-1 font-bold font-serif transition-colors cursor-pointer ${
                  fontScale >= 5 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-amber-500/20 active:bg-amber-500/30'
                }`}
                title={t.increaseFont}
              >
                A+
              </button>
            </div>
          )}

          <button
            onClick={onOpenPdfModal}
            className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-800 dark:text-slate-100 bg-amber-100/70 hover:bg-amber-200/80 dark:bg-amber-500/20 dark:hover:bg-amber-500/30 border border-amber-300 dark:border-amber-500/40 transition-all cursor-pointer shadow-2xs"
            title={t.downloadPdfBtn}
          >
            <Printer className="w-3.5 h-3.5 text-amber-800 dark:text-amber-400" />
            <span>{t.downloadPdfBtn}</span>
          </button>

          <button
            onClick={onToggleRead}
            className={`inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
              isRead 
                ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700/60' 
                : isDark
                  ? 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <CheckCircle className={`w-3.5 h-3.5 ${isRead ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-400'}`} />
            <span>{isRead ? t.chapterRead : t.markAsRead}</span>
          </button>
        </div>
      </div>

      {/* Chapter Title */}
      <header className="mb-6 sm:mb-10">
        <div className="hidden print:block text-xs font-mono uppercase tracking-widest text-slate-500 mb-2">
          {t.bookTitle} · {t.authorLabel}
        </div>
        <h1 
          style={{ fontSize: scaleConfig.h1 }}
          className="font-serif font-bold text-slate-950 dark:text-white tracking-tight leading-tight mb-3 break-words text-balance transition-all"
        >
          {displayTitle}
        </h1>
        {displaySubtitle && (
          <p 
            style={{ fontSize: scaleConfig.quote }}
            className="font-serif italic text-slate-600 dark:text-slate-300 leading-relaxed transition-all"
          >
            {displaySubtitle}
          </p>
        )}
      </header>

      {/* EMBEDDED INFOGRAPHIC IF AVAILABLE IN THIS MODULE */}
      {chapter.hasInfographic && (
        <div className="embedded-infographic-container my-8 sm:my-12">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2 flex items-center gap-2 print:hidden">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span>{t.embeddedInfographic}</span>
          </div>

          <div className={isDark ? 'dark-infographic-wrapper' : ''}>
            {chapter.infographicId === 'trinity' && <TrinityInfographic />}
            {chapter.infographicId === 'consumer' && <ConsumerDecisionInfographic />}
            {chapter.infographicId === 'perfect_page' && <PerfectPageInfographic />}
            {chapter.infographicId === 'technical' && <TechnicalSeoInfographic />}
            {chapter.infographicId === 'quick_wins' && <QuickWinsInfographic />}
            {chapter.infographicId === 'execution' && <ExecutionPlanInfographic />}
            {chapter.infographicId === 'click_revenue' && <ClickToRevenueInfographic />}
            {chapter.infographicId === 'ethical' && <EthicalSeoInfographic />}
          </div>
        </div>
      )}

      {/* SPECIAL INTERACTIVE TOOLS */}
      {chapter.id === 'modulo-13' && <div className="chapter-prose-content"><MatrizPriorizacaoCalc /></div>}
      {chapter.id === 'modulo-9' && <div className="chapter-prose-content"><FullAuditChecklist /></div>}

      {/* SECTIONS & FULL TEXT CONTENT */}
      <div className="chapter-prose-content space-y-12">
        {chapter.sections.map((section) => (
          <section key={section.id} id={section.id} className="space-y-6">
            
            <h2 
              style={{ fontSize: scaleConfig.h2 }}
              className={`font-serif font-bold text-slate-900 dark:text-slate-100 tracking-tight pt-4 border-t leading-snug transition-all ${
                isDark ? 'border-slate-800' : 'border-slate-100'
              }`}
            >
              {section.title}
            </h2>

            {/* Paragraphs with direct inline font-size and line-height */}
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              {section.content.map((p, idx) => (
                <p 
                  key={idx} 
                  style={{ 
                    fontSize: scaleConfig.body, 
                    lineHeight: scaleConfig.bodyLeading 
                  }}
                  className="transition-all"
                >
                  {p}
                </p>
              ))}
            </div>

            {/* Quote Block if present */}
            {section.quote && (
              <blockquote 
                style={{ fontSize: scaleConfig.quote, lineHeight: '1.7' }}
                className={`my-6 p-5 sm:p-6 rounded-2xl border-l-4 border-blue-900 dark:border-amber-500 font-serif italic flex items-start gap-4 transition-all ${
                  isDark ? 'bg-slate-800/70 text-slate-200' : 'bg-slate-50 text-slate-800'
                }`}
              >
                <Quote className="w-8 h-8 text-blue-900/20 dark:text-amber-400/30 shrink-0 mt-1" />
                <div>{section.quote}</div>
              </blockquote>
            )}

            {/* Table if present */}
            {section.table && (
              <div className={`my-6 overflow-x-auto -mx-1 sm:mx-0 rounded-xl sm:rounded-2xl border shadow-2xs ${
                isDark ? 'border-slate-800' : 'border-slate-200'
              }`}>
                <table className="w-full text-left border-collapse min-w-[320px]">
                  <thead className={`border-b font-bold ${
                    isDark ? 'bg-slate-800 border-slate-700 text-slate-200' : 'bg-slate-100/90 border-slate-200 text-slate-800'
                  }`}>
                    <tr>
                      {section.table.headers.map((h, i) => (
                        <th 
                          key={i} 
                          style={{ fontSize: scaleConfig.small }}
                          className="p-2.5 sm:p-3.5 font-mono"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className={isDark ? 'divide-y divide-slate-800' : 'divide-y divide-slate-100'}>
                    {section.table.rows.map((row, rIdx) => (
                      <tr key={rIdx} className={isDark ? 'hover:bg-slate-800/50 transition-colors' : 'hover:bg-slate-50 transition-colors'}>
                        {row.map((cell, cIdx) => (
                          <td 
                            key={cIdx} 
                            style={{ fontSize: scaleConfig.small }}
                            className={`p-2.5 sm:p-3.5 font-normal ${
                              isDark ? 'text-slate-300' : 'text-slate-700'
                            }`}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Subsections if present */}
            {section.subsections && (
              <div className="space-y-6 sm:space-y-8 mt-6">
                {section.subsections.map((sub, sIdx) => (
                  <div key={sIdx} className={`p-4 sm:p-6 rounded-xl sm:rounded-2xl border space-y-3 sm:space-y-4 ${
                    isDark ? 'bg-slate-800/50 border-slate-700/80' : 'bg-slate-50/70 border-slate-200/80'
                  }`}>
                    
                    <h3 
                      style={{ fontSize: scaleConfig.h3 }}
                      className="font-serif font-bold text-slate-900 dark:text-slate-100 leading-snug transition-all"
                    >
                      {sub.title}
                    </h3>

                    {/* Subsection Paragraphs */}
                    {sub.paragraphs.map((sp, pI) => (
                      <p 
                        key={pI} 
                        style={{ 
                          fontSize: scaleConfig.body, 
                          lineHeight: scaleConfig.bodyLeading 
                        }}
                        className="text-slate-700 dark:text-slate-300 transition-all"
                      >
                        {sp}
                      </p>
                    ))}

                    {/* Subsection Table */}
                    {sub.table && (
                      <div className={`overflow-x-auto -mx-1 sm:mx-0 rounded-lg sm:rounded-xl border ${
                        isDark ? 'border-slate-700 bg-slate-900' : 'border-slate-200 bg-white'
                      }`}>
                        <table className="w-full text-left min-w-[300px]">
                          <thead className={`border-b font-bold ${
                            isDark ? 'bg-slate-800 border-slate-700 text-slate-200' : 'bg-slate-100 border-slate-200 text-slate-900'
                          }`}>
                            <tr>
                              {sub.table.headers.map((th, thi) => (
                                <th 
                                  key={thi} 
                                  style={{ fontSize: scaleConfig.small }}
                                  className="p-2.5 sm:p-3 font-mono"
                                >
                                  {th}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody className={isDark ? 'divide-y divide-slate-800' : 'divide-y divide-slate-100'}>
                            {sub.table.rows.map((tr, tri) => (
                              <tr key={tri} className={isDark ? 'hover:bg-slate-800/40' : 'hover:bg-slate-50'}>
                                {tr.map((tc, tci) => (
                                  <td 
                                    key={tci} 
                                    style={{ fontSize: scaleConfig.small }}
                                    className={`p-2.5 sm:p-3 ${
                                      isDark ? 'text-slate-300' : 'text-slate-700'
                                    }`}
                                  >
                                    {tc}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}

                    {/* List items */}
                    {sub.listItems && (
                      <ul className="space-y-2 pt-2 text-slate-700 dark:text-slate-300">
                        {sub.listItems.map((li, liIdx) => (
                          <li 
                            key={liIdx} 
                            style={{ 
                              fontSize: scaleConfig.small, 
                              lineHeight: '1.65' 
                            }}
                            className="flex items-start gap-2.5 transition-all"
                          >
                            <span className="text-blue-600 dark:text-amber-400 font-bold">•</span>
                            <span>{li}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Code snippet / prompt */}
                    {sub.codeSnippet && (
                      <div className="relative mt-3 rounded-xl bg-slate-950 text-slate-200 p-4 font-mono text-xs overflow-x-auto border border-slate-800">
                        <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-slate-400 text-[10px]">
                          <span>TEMPLATE / PROMPT / CÓDIGO</span>
                          <button
                            onClick={() => copyToClipboard(sub.codeSnippet!, `code-${sIdx}`)}
                            className="inline-flex items-center gap-1 text-amber-400 hover:text-amber-300 font-medium cursor-pointer"
                          >
                            {copiedSnippet === `code-${sIdx}` ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                            <span>{copiedSnippet === `code-${sIdx}` ? t.copied : t.copyPrompt}</span>
                          </button>
                        </div>
                        <pre className="whitespace-pre-wrap">{sub.codeSnippet}</pre>
                      </div>
                    )}

                    {/* Alert Box */}
                    {sub.alert && (
                      <div 
                        style={{ fontSize: scaleConfig.small }}
                        className={`p-4 rounded-xl flex items-start gap-3 border transition-all ${
                          isDark 
                            ? 'bg-amber-950/30 border-amber-800/70 text-amber-200' 
                            : 'bg-amber-50 border-amber-300 text-amber-950'
                        }`}
                      >
                        <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                        <div>{sub.alert}</div>
                      </div>
                    )}

                    {/* Golden Tip */}
                    {sub.goldenTip && (
                      <div className={`p-5 rounded-2xl border-2 text-slate-900 dark:text-slate-100 shadow-xs flex items-start gap-3.5 transition-all ${
                        isDark 
                          ? 'bg-amber-950/20 border-amber-500/60' 
                          : 'bg-amber-50/70 border-amber-400'
                      }`}>
                        <Award className="w-6 h-6 text-amber-600 dark:text-amber-400 shrink-0" />
                        <div>
                          <strong className="block text-xs uppercase tracking-wider font-bold text-amber-800 dark:text-amber-400 mb-1">
                            {t.goldenTip}
                          </strong>
                          <p 
                            style={{ fontSize: scaleConfig.small, lineHeight: '1.65' }}
                            className="transition-all"
                          >
                            {sub.goldenTip}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Reflection Box */}
                    {sub.reflectionBox && (
                      <div className={`p-5 rounded-2xl border space-y-2 ${
                        isDark 
                          ? 'bg-slate-950 border-slate-800 text-white' 
                          : 'bg-slate-900 border-slate-800 text-white'
                      }`}>
                        <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                          <HelpCircle className="w-4 h-4" />
                          <span>{t.reflectionBox}</span>
                        </div>
                        <ul className="space-y-1.5 text-slate-200">
                          {sub.reflectionBox.map((q, qIdx) => (
                            <li 
                              key={qIdx} 
                              style={{ fontSize: scaleConfig.small }}
                              className="italic transition-all"
                            >
                              • &ldquo;{q}&rdquo;
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                  </div>
                ))}
              </div>
            )}

            {/* Section Alert */}
            {section.alert && (
              <div 
                style={{ fontSize: scaleConfig.small }}
                className={`p-4 rounded-xl flex items-start gap-3 border transition-all ${
                  isDark 
                    ? 'bg-amber-950/30 border-amber-800/70 text-amber-200' 
                    : 'bg-amber-50 border-amber-300 text-amber-950'
                }`}
              >
                <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                <div>{section.alert}</div>
              </div>
            )}

            {/* Section Golden Tip */}
            {section.goldenTip && (
              <div className={`p-5 rounded-2xl border-2 text-slate-900 dark:text-slate-100 shadow-xs flex items-start gap-3.5 transition-all ${
                isDark 
                  ? 'bg-amber-950/20 border-amber-500/60' 
                  : 'bg-amber-50/70 border-amber-400'
              }`}>
                <Award className="w-6 h-6 text-amber-600 dark:text-amber-400 shrink-0" />
                <div>
                  <strong className="block text-xs uppercase tracking-wider font-bold text-amber-800 dark:text-amber-400 mb-1">
                    {t.goldenTip}
                  </strong>
                  <p 
                    style={{ fontSize: scaleConfig.small, lineHeight: '1.65' }}
                    className="transition-all"
                  >
                    {section.goldenTip}
                  </p>
                </div>
              </div>
            )}

            {/* Section Reflection Box */}
            {section.reflectionBox && (
              <div className={`p-5 rounded-2xl border space-y-2 ${
                isDark 
                  ? 'bg-slate-950 border-slate-800 text-white' 
                  : 'bg-slate-900 border-slate-800 text-white'
              }`}>
                <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                  <HelpCircle className="w-4 h-4" />
                  <span>{t.reflectionBox}</span>
                </div>
                <ul className="space-y-1.5 text-slate-200">
                  {section.reflectionBox.map((q, qIdx) => (
                    <li 
                      key={qIdx} 
                      style={{ fontSize: scaleConfig.small }}
                      className="italic transition-all"
                    >
                      • &ldquo;{q}&rdquo;
                    </li>
                  ))}
                </ul>
              </div>
            )}

          </section>
        ))}
      </div>

      {/* Chapter Bottom Navigation */}
      <div className={`chapter-bottom-nav mt-16 pt-8 border-t flex items-center justify-between gap-4 print:hidden ${
        isDark ? 'border-slate-800' : 'border-slate-200'
      }`}>
        {hasPrev ? (
          <button
            onClick={onPrev}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border text-xs font-semibold transition-colors cursor-pointer ${
              isDark 
                ? 'border-slate-700 text-slate-300 hover:bg-slate-800' 
                : 'border-slate-300 text-slate-700 hover:bg-slate-50'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>{t.prevChapter}</span>
          </button>
        ) : <div />}

        {hasNext ? (
          <button
            onClick={onNext}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-amber-500 hover:bg-slate-800 dark:hover:bg-amber-400 text-white dark:text-slate-950 text-xs font-semibold shadow-xs transition-colors cursor-pointer"
          >
            <span>{t.nextChapter}</span>
            <ChevronRight className="w-4 h-4 text-amber-400 dark:text-slate-950" />
          </button>
        ) : <div />}
      </div>

    </article>
  );
};
