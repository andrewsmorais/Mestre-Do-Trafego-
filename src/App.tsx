import React, { useState, useEffect } from 'react';
import { CHAPTERS } from './data/bookData.ts';
import { Language, TRANSLATIONS } from './i18n/translations.ts';
import { ReaderSidebar } from './components/ReaderSidebar.tsx';
import { ChapterViewer } from './components/ChapterViewer.tsx';
import { PdfExportModal } from './components/PdfExportModal.tsx';
import { AppleNotebook } from './components/AppleNotebook.tsx';
import { SelectionToolbar } from './components/SelectionToolbar.tsx';
import { LanguageSelector } from './components/LanguageSelector.tsx';
import { FontSizeControl, FontScale } from './components/FontSizeControl.tsx';
import { 
  Menu, 
  Printer, 
  Sun,
  Moon
} from 'lucide-react';

export default function App() {
  const [activeChapterId, setActiveChapterId] = useState<string>('introducao');
  
  // Theme state: 'light' or 'dark' (persisted)
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    try {
      const saved = localStorage.getItem('google_search_2026_theme');
      if (saved === 'dark' || saved === 'light') return saved;
      return 'light';
    } catch {
      return 'light';
    }
  });

  // Language state: 'pt', 'en', 'es' (default: Português Brasil 'pt')
  const [language, setLanguage] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('google_search_2026_language') as Language;
      if (saved === 'pt' || saved === 'en' || saved === 'es') return saved;
      return 'pt'; // Default Português Brasil
    } catch {
      return 'pt';
    }
  });

  // Font scale: 1 (85%), 2 (100%), 3 (115%), 4 (130%), 5 (145%)
  const [fontScale, setFontScale] = useState<FontScale>(() => {
    try {
      const saved = Number(localStorage.getItem('google_search_2026_font_scale'));
      if (saved >= 1 && saved <= 5) return saved as FontScale;
      return 2;
    } catch {
      return 2;
    }
  });

  const [readChapterIds, setReadChapterIds] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('google_search_2026_read_chapters');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [isSidebarOpenMobile, setIsSidebarOpenMobile] = useState(false);
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);
  const [isNotebookOpen, setIsNotebookOpen] = useState(false);
  const [quoteForNotebook, setQuoteForNotebook] = useState<string | null>(null);

  // Sync theme to HTML documentElement class
  useEffect(() => {
    try {
      localStorage.setItem('google_search_2026_theme', theme);
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } catch {}
  }, [theme]);

  // Sync language to HTML lang attribute
  useEffect(() => {
    try {
      localStorage.setItem('google_search_2026_language', language);
      document.documentElement.lang = language === 'pt' ? 'pt-BR' : language;
    } catch {}
  }, [language]);

  // Sync font scale
  useEffect(() => {
    try {
      localStorage.setItem('google_search_2026_font_scale', String(fontScale));
    } catch {}
  }, [fontScale]);

  // Sync read status
  useEffect(() => {
    try {
      localStorage.setItem('google_search_2026_read_chapters', JSON.stringify(readChapterIds));
    } catch {}
  }, [readChapterIds]);

  const isDark = theme === 'dark';
  const t = TRANSLATIONS[language];

  const activeIndex = CHAPTERS.findIndex(c => c.id === activeChapterId);
  const currentChapter = CHAPTERS[activeIndex] || CHAPTERS[0];

  const handleNext = () => {
    if (activeIndex < CHAPTERS.length - 1) {
      setActiveChapterId(CHAPTERS[activeIndex + 1].id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveChapterId(CHAPTERS[activeIndex - 1].id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const toggleReadStatus = () => {
    setReadChapterIds(prev => ({
      ...prev,
      [activeChapterId]: !prev[activeChapterId]
    }));
  };

  const handleSendToNotebook = (text: string) => {
    setQuoteForNotebook(text);
    setIsNotebookOpen(true);
  };

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`min-h-screen font-sans flex flex-col transition-colors selection:bg-amber-400 selection:text-slate-950 ${
      isDark ? 'bg-[#0B0F19] text-slate-100' : 'bg-[#F8FAFC] text-slate-900'
    }`}>
      
      {/* Top Application Bar - Clean, spacious & optimized for mobile */}
      <header className={`sticky top-0 z-30 px-3 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between border-b backdrop-blur-md shadow-2xs print:hidden transition-colors ${
        isDark 
          ? 'bg-slate-900/95 border-slate-800' 
          : 'bg-white/95 border-slate-200'
      }`}>
        
        {/* Left: Mobile Drawer Trigger + Book Title */}
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <button
            onClick={() => setIsSidebarOpenMobile(true)}
            className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold lg:hidden shrink-0 cursor-pointer transition-colors ${
              isDark ? 'bg-slate-800 hover:bg-slate-700 text-slate-200' : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
            }`}
            aria-label="Abrir sumário dos módulos"
          >
            <Menu className="w-4 h-4 text-amber-500" />
            <span className="text-[11px] font-medium hidden xs:inline">{t.modules}</span>
          </button>

          <div className="flex items-center gap-2 min-w-0">
            <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-slate-950 border border-amber-500/40 flex items-center justify-center text-amber-400 font-serif font-bold text-xs sm:text-sm shadow-xs shrink-0">
              G
            </span>
            <div className="min-w-0">
              <h1 className="text-xs sm:text-base font-serif font-bold leading-tight truncate">
                <span className="hidden sm:inline">DOMINANDO O </span>GOOGLE SEARCH 2026
              </h1>
              <p className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 font-mono truncate hidden md:block">
                {t.bookSubtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Right Controls: Language, Font Scale, Dark Mode, Notes, PDF */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          
          {/* Language Selector (PT, EN, ES) */}
          <LanguageSelector
            currentLanguage={language}
            onSelectLanguage={setLanguage}
            isDark={isDark}
          />

          {/* Font Size Adjuster (85% to 145%) */}
          <FontSizeControl
            fontScale={fontScale}
            onChangeScale={setFontScale}
            isDark={isDark}
            language={language}
          />

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className={`p-1.5 sm:p-2 rounded-lg border text-xs font-semibold transition-all cursor-pointer shadow-2xs ${
              isDark 
                ? 'bg-slate-900 border-slate-700 hover:bg-slate-800 text-amber-400' 
                : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-700'
            }`}
            title={isDark ? t.lightMode : t.darkMode}
            aria-label={t.themeToggle}
          >
            {isDark ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
          </button>

          {/* Notebook Button */}
          <button
            onClick={() => setIsNotebookOpen(true)}
            className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg border border-amber-400/80 bg-amber-400/15 hover:bg-amber-400/25 text-xs font-semibold text-amber-800 dark:text-amber-300 cursor-pointer transition-colors shadow-2xs"
            title={t.notebookTitle}
          >
            <span className="text-xs">📝</span>
            <span className="inline">{t.notebook}</span>
          </button>

          {/* PDF Download Button */}
          <button
            onClick={() => setIsPdfModalOpen(true)}
            className={`inline-flex items-center gap-1 px-2.5 sm:px-3 py-1.5 rounded-lg border text-xs font-semibold cursor-pointer transition-colors shadow-2xs ${
              isDark 
                ? 'bg-slate-900 border-slate-700 hover:bg-slate-800 text-slate-200' 
                : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-800'
            }`}
            title={t.pdfDownload}
          >
            <Printer className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span className="hidden sm:inline">{t.pdfDownload}</span>
            <span className="sm:hidden text-[11px]">PDF</span>
          </button>

        </div>

      </header>

      {/* Main Layout: Sidebar on Left + Reader on Right */}
      <div className="flex-1 flex max-w-7xl mx-auto w-full">
        
        {/* Navigation Sidebar */}
        <ReaderSidebar
          chapters={CHAPTERS}
          activeChapterId={activeChapterId}
          onSelectChapter={(id) => {
            setActiveChapterId(id);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          readChapterIds={readChapterIds}
          isOpenMobile={isSidebarOpenMobile}
          onCloseMobile={() => setIsSidebarOpenMobile(false)}
          language={language}
          isDark={isDark}
        />

        {/* Reader Area */}
        <main className="flex-1 p-2.5 sm:p-6 lg:p-8 min-w-0">
          <ChapterViewer
            chapter={currentChapter}
            onNext={handleNext}
            onPrev={handlePrev}
            hasNext={activeIndex < CHAPTERS.length - 1}
            hasPrev={activeIndex > 0}
            fontScale={fontScale}
            onChangeFontScale={setFontScale}
            isRead={!!readChapterIds[activeChapterId]}
            onToggleRead={toggleReadStatus}
            onOpenPdfModal={() => setIsPdfModalOpen(true)}
            language={language}
            isDark={isDark}
          />
        </main>

      </div>

      {/* FLOATING QUICK ACCESS BUTTON: Caderno Virtual de Anotações */}
      <div className="fixed bottom-5 right-5 z-40 print:hidden">
        <button
          onClick={() => setIsNotebookOpen(true)}
          className={`group flex items-center gap-2 px-4 py-2.5 rounded-full shadow-2xl border hover:scale-105 active:scale-95 transition-all cursor-pointer ${
            isDark 
              ? 'bg-slate-900 text-white border-amber-400/50 hover:bg-slate-800 shadow-black/80' 
              : 'bg-slate-950 text-white border-amber-400/40 hover:bg-slate-900 shadow-slate-900/30'
          }`}
          title={t.notebookTitle}
        >
          <div className="w-6 h-6 rounded-full bg-amber-400 flex items-center justify-center text-slate-950 text-xs shadow-xs">
            📝
          </div>
          <span className="text-xs font-bold text-amber-300">
            {t.notesTitle}
          </span>
        </button>
      </div>

      {/* TEXT SELECTION HIGHLIGHTER TOOLBAR */}
      <SelectionToolbar
        onSendToNotebook={handleSendToNotebook}
      />

      {/* NOTEBOOK SLIDE-IN MODAL */}
      <AppleNotebook
        isOpen={isNotebookOpen}
        onClose={() => setIsNotebookOpen(false)}
        currentChapter={currentChapter}
        chapters={CHAPTERS}
        onSelectChapter={(id) => {
          setActiveChapterId(id);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        initialQuoteToAdd={quoteForNotebook}
        onClearInitialQuote={() => setQuoteForNotebook(null)}
        language={language}
        isDark={isDark}
      />

      {/* PDF Export Modal (Color, Black & White, Infographic Only) */}
      <PdfExportModal
        isOpen={isPdfModalOpen}
        onClose={() => setIsPdfModalOpen(false)}
        currentChapter={currentChapter}
        language={language}
        isDark={isDark}
      />

    </div>
  );
}
