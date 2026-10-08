import React, { useState } from 'react';
import { Chapter } from '../data/bookData.ts';
import { Language, TRANSLATIONS } from '../i18n/translations.ts';
import { 
  Search, 
  BookOpen, 
  CheckCircle, 
  Layers, 
  Sparkles, 
  Calculator, 
  FileText,
  X
} from 'lucide-react';

interface ReaderSidebarProps {
  chapters: Chapter[];
  activeChapterId: string;
  onSelectChapter: (id: string) => void;
  readChapterIds: Record<string, boolean>;
  isOpenMobile: boolean;
  onCloseMobile: () => void;
  language: Language;
  isDark: boolean;
}

export const ReaderSidebar: React.FC<ReaderSidebarProps> = ({
  chapters,
  activeChapterId,
  onSelectChapter,
  readChapterIds,
  isOpenMobile,
  onCloseMobile,
  language,
  isDark
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'infographics' | 'tools'>('all');
  const t = TRANSLATIONS[language];

  const filteredChapters = chapters.filter(chap => {
    const loc = t.chapterTitles[chap.id];
    const titleToSearch = loc ? `${loc.title} ${chap.title}` : chap.title;
    const matchesSearch = 
      titleToSearch.toLowerCase().includes(searchTerm.toLowerCase()) ||
      chap.sections.some(s => s.title.toLowerCase().includes(searchTerm.toLowerCase()));

    if (!matchesSearch) return false;

    if (filterType === 'infographics') {
      return chap.hasInfographic;
    }
    if (filterType === 'tools') {
      return chap.id === 'modulo-9' || chap.id === 'modulo-13' || chap.id === 'prompts-ia' || chap.id === 'glossario';
    }

    return true;
  });

  const readCount = Object.values(readChapterIds).filter(Boolean).length;
  const totalChapters = chapters.length;
  const readPercentage = Math.round((readCount / totalChapters) * 100);

  return (
    <>
      {/* Mobile backdrop */}
      {isOpenMobile && (
        <div 
          onClick={onCloseMobile}
          className="fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-xs lg:hidden"
        />
      )}

      {/* Sidebar Container */}
      <aside className={`
        fixed top-0 bottom-0 left-0 z-50 w-[85vw] max-w-[320px] sm:w-80 border-r flex flex-col transition-all duration-200 ease-in-out
        lg:static lg:z-0 lg:translate-x-0
        ${isDark ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'}
        ${isOpenMobile ? 'translate-x-0 shadow-2xl' : '-translate-x-full lg:translate-x-0'}
      `}>
        
        {/* Header / Book Title */}
        <div className={`p-4 sm:p-5 border-b ${isDark ? 'bg-slate-950/70 border-slate-800' : 'bg-slate-50/70 border-slate-200'}`}>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-slate-950 border border-amber-500/40 flex items-center justify-center text-amber-400 font-serif font-bold text-xs shadow-xs">
                G
              </span>
              <span className="text-sm font-serif font-bold truncate">
                {t.appName}
              </span>
            </div>
            
            <button
              onClick={onCloseMobile}
              className="p-1.5 text-slate-400 hover:text-slate-100 rounded-lg lg:hidden cursor-pointer"
              aria-label="Fechar menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium mb-3">
            {t.bookSubtitle}
          </p>

          {/* Reading Progress */}
          <div className={`space-y-1.5 pt-2 border-t ${isDark ? 'border-slate-800' : 'border-slate-200/80'}`}>
            <div className="flex items-center justify-between text-[11px] font-mono text-slate-600 dark:text-slate-400">
              <span>{t.readingProgress}</span>
              <span className="font-bold text-amber-600 dark:text-amber-400">{readPercentage}% ({readCount}/{totalChapters})</span>
            </div>
            <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-700 via-amber-500 to-emerald-600 transition-all duration-300"
                style={{ width: `${readPercentage}%` }}
              />
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className={`p-3 border-b ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'}`}>
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={t.searchPlaceholder}
              className={`w-full text-xs pl-8 pr-3 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-amber-500/30 ${
                isDark 
                  ? 'bg-slate-800/80 border-slate-700 text-slate-200 placeholder:text-slate-500' 
                  : 'bg-slate-50/70 border-slate-200 text-slate-800 placeholder:text-slate-400'
              }`}
            />
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1 mt-2.5">
            <button
              onClick={() => setFilterType('all')}
              className={`px-2 py-1 text-[10px] rounded font-medium transition-colors cursor-pointer ${
                filterType === 'all' 
                  ? isDark ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-slate-900 text-white' 
                  : isDark ? 'bg-slate-800 text-slate-400 hover:text-slate-200' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {t.allChapters} ({chapters.length})
            </button>
            <button
              onClick={() => setFilterType('infographics')}
              className={`px-2 py-1 text-[10px] rounded font-medium transition-colors cursor-pointer flex items-center gap-1 ${
                filterType === 'infographics' 
                  ? 'bg-amber-600 text-white font-bold' 
                  : isDark ? 'bg-slate-800 text-slate-400 hover:text-slate-200' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <Layers className="w-2.5 h-2.5" />
              <span>{t.infographicsFilter} (8)</span>
            </button>
            <button
              onClick={() => setFilterType('tools')}
              className={`px-2 py-1 text-[10px] rounded font-medium transition-colors cursor-pointer flex items-center gap-1 ${
                filterType === 'tools' 
                  ? isDark ? 'bg-blue-600 text-white font-bold' : 'bg-blue-900 text-white' 
                  : isDark ? 'bg-slate-800 text-slate-400 hover:text-slate-200' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <Calculator className="w-2.5 h-2.5" />
              <span>{t.toolsFilter}</span>
            </button>
          </div>
        </div>

        {/* Chapters List */}
        <div className="flex-1 overflow-y-auto p-2 space-y-1">
          {filteredChapters.map((chap) => {
            const isActive = chap.id === activeChapterId;
            const isRead = !!readChapterIds[chap.id];
            const loc = t.chapterTitles[chap.id];
            const displayTitle = loc?.title || chap.title;

            return (
              <button
                key={chap.id}
                onClick={() => {
                  onSelectChapter(chap.id);
                  onCloseMobile();
                }}
                className={`w-full text-left p-2.5 rounded-xl transition-all flex items-start gap-2.5 group cursor-pointer ${
                  isActive
                    ? isDark
                      ? 'bg-amber-400/15 border border-amber-500/40 text-amber-300 font-medium shadow-2xs'
                      : 'bg-amber-50 border border-amber-300 text-amber-950 font-medium shadow-2xs'
                    : isDark
                      ? 'hover:bg-slate-800/80 text-slate-300 border border-transparent'
                      : 'hover:bg-slate-100/80 text-slate-700 border border-transparent'
                }`}
              >
                <div className="mt-0.5 shrink-0">
                  {isRead ? (
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <span className={`w-4 h-4 rounded-full border text-[10px] flex items-center justify-center font-mono ${
                      isActive 
                        ? 'border-amber-500 text-amber-500 font-bold' 
                        : isDark ? 'border-slate-700 text-slate-500' : 'border-slate-300 text-slate-400'
                    }`}>
                      {chap.number}
                    </span>
                  )}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-1 mb-0.5">
                    <span className={`text-[10px] font-mono uppercase tracking-wider font-semibold ${
                      isActive 
                        ? 'text-amber-600 dark:text-amber-400' 
                        : isDark ? 'text-slate-500' : 'text-slate-400'
                    }`}>
                      {chap.number === "0" ? t.generalIntro : `${t.moduleLabel} ${chap.number}`}
                    </span>

                    {chap.hasInfographic && (
                      <span className={`text-[9px] px-1 py-0.2 rounded font-mono font-medium ${
                        isDark ? 'bg-amber-500/20 text-amber-300' : 'bg-amber-100 text-amber-800'
                      }`}>
                        Infográfico
                      </span>
                    )}
                  </div>

                  <p className="text-xs leading-snug line-clamp-2">
                    {displayTitle}
                  </p>
                </div>
              </button>
            );
          })}

          {filteredChapters.length === 0 && (
            <div className="p-6 text-center text-xs text-slate-400">
              Nenhum capítulo encontrado para essa busca.
            </div>
          )}
        </div>

        {/* Sidebar Footer info */}
        <div className={`p-3 border-t text-[10px] text-center ${
          isDark ? 'border-slate-800 text-slate-500 bg-slate-950/60' : 'border-slate-100 text-slate-400 bg-slate-50'
        }`}>
          <span>{t.authorLabel}</span>
        </div>

      </aside>
    </>
  );
};
