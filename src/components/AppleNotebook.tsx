import React, { useState, useEffect } from 'react';
import { 
  X, 
  Trash2, 
  Copy, 
  Check, 
  Printer, 
  ListTodo, 
  Calendar,
  Clock,
  Download,
  FolderOpen
} from 'lucide-react';
import { Chapter } from '../data/bookData.ts';
import { Language, TRANSLATIONS } from '../i18n/translations.ts';

interface AppleNotebookProps {
  isOpen: boolean;
  onClose: () => void;
  currentChapter: Chapter;
  chapters: Chapter[];
  onSelectChapter: (id: string) => void;
  initialQuoteToAdd?: string | null;
  onClearInitialQuote?: () => void;
  language: Language;
  isDark: boolean;
}

export const AppleNotebook: React.FC<AppleNotebookProps> = ({
  isOpen,
  onClose,
  currentChapter,
  chapters,
  onSelectChapter,
  initialQuoteToAdd,
  onClearInitialQuote,
  language,
  isDark
}) => {
  const [notesByChapter, setNotesByChapter] = useState<Record<string, string>>(() => {
    try {
      const saved = localStorage.getItem('google_search_2026_user_notes');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [activeTab, setActiveTab] = useState<string>(currentChapter.id);
  const [viewMode, setViewMode] = useState<'single' | 'all'>('single');
  const [copied, setCopied] = useState(false);
  const [lastSaved, setLastSaved] = useState<string>('Salvo');
  const t = TRANSLATIONS[language];

  // Update active tab if current chapter changes while open
  useEffect(() => {
    setActiveTab(currentChapter.id);
  }, [currentChapter.id]);

  // Insert quote if passed from text selection
  useEffect(() => {
    if (initialQuoteToAdd) {
      const now = new Date();
      const timeStr = `${now.toLocaleDateString()} ${now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
      const existing = notesByChapter[currentChapter.id] || '';
      const chapTitle = t.chapterTitles[currentChapter.id]?.title || currentChapter.title;
      
      const newEntry = `📌 Trecho Grifado (${timeStr}):\n«${initialQuoteToAdd.trim()}»\n\n— Fonte: ${chapTitle}`;
      const addition = existing ? `${existing}\n\n${newEntry}` : newEntry;
      
      const updated = {
        ...notesByChapter,
        [currentChapter.id]: addition
      };
      setNotesByChapter(updated);
      try {
        localStorage.setItem('google_search_2026_user_notes', JSON.stringify(updated));
      } catch {}
      setLastSaved(t.savedLocally);
      if (onClearInitialQuote) onClearInitialQuote();
    }
  }, [initialQuoteToAdd, currentChapter.id, language]);

  const currentText = notesByChapter[activeTab] || '';

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    const updated = {
      ...notesByChapter,
      [activeTab]: val
    };
    setNotesByChapter(updated);
    setLastSaved('Salvando...');
    try {
      localStorage.setItem('google_search_2026_user_notes', JSON.stringify(updated));
      setTimeout(() => setLastSaved(t.savedLocally), 300);
    } catch {}
  };

  const insertChecklist = () => {
    const textarea = document.getElementById('apple-notes-textarea') as HTMLTextAreaElement;
    const prefix = '\n[ ] ';
    const newText = currentText ? `${currentText}${prefix}` : '[ ] ';
    const updated = { ...notesByChapter, [activeTab]: newText };
    setNotesByChapter(updated);
    localStorage.setItem('google_search_2026_user_notes', JSON.stringify(updated));
    setTimeout(() => {
      if (textarea) textarea.focus();
    }, 50);
  };

  const insertBullet = () => {
    const textarea = document.getElementById('apple-notes-textarea') as HTMLTextAreaElement;
    const prefix = '\n• ';
    const newText = currentText ? `${currentText}${prefix}` : '• ';
    const updated = { ...notesByChapter, [activeTab]: newText };
    setNotesByChapter(updated);
    localStorage.setItem('google_search_2026_user_notes', JSON.stringify(updated));
    setTimeout(() => {
      if (textarea) textarea.focus();
    }, 50);
  };

  const insertTimestamp = () => {
    const textarea = document.getElementById('apple-notes-textarea') as HTMLTextAreaElement;
    const now = new Date();
    const timeStr = `\n📅 [${now.toLocaleDateString()} ${now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}] `;
    const newText = currentText ? `${currentText}${timeStr}` : timeStr.trim();
    const updated = { ...notesByChapter, [activeTab]: newText };
    setNotesByChapter(updated);
    localStorage.setItem('google_search_2026_user_notes', JSON.stringify(updated));
    setTimeout(() => {
      if (textarea) textarea.focus();
    }, 50);
  };

  const getAllNotesText = () => {
    let full = `# ${t.notesTitle.toUpperCase()}\n# ${t.bookTitle}\n# ${t.authorLabel}\n\n`;
    chapters.forEach(c => {
      const note = notesByChapter[c.id];
      if (note && note.trim()) {
        const cTitle = t.chapterTitles[c.id]?.title || c.title;
        full += `=========================================\n`;
        full += `📖 ${c.number === '0' ? t.generalIntro : `${t.moduleLabel} ${c.number}`}: ${cTitle}\n`;
        full += `=========================================\n\n`;
        full += `${note.trim()}\n\n\n`;
      }
    });
    return full;
  };

  const copyNotes = () => {
    const textToCopy = viewMode === 'single' ? currentText : getAllNotesText();
    if (!textToCopy) return;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadNotesAsFile = () => {
    const text = viewMode === 'single' ? currentText : getAllNotesText();
    if (!text) return;
    const blob = new Blob([text], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    const fileName = viewMode === 'single' 
      ? `Anotacoes_${activeTab}_GoogleSearch2026.md` 
      : `Todas_Anotacoes_GoogleSearch2026.md`;
    link.download = fileName;
    link.click();
    URL.revokeObjectURL(url);
  };

  const printNotes = () => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;
    const activeChapObj = chapters.find(c => c.id === activeTab) || currentChapter;
    const activeTitle = t.chapterTitles[activeChapObj.id]?.title || activeChapObj.title;
    const content = viewMode === 'single' 
      ? currentText || '(Nenhuma anotação registrada para este capítulo)'
      : getAllNotesText();

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${t.notebookTitle} - ${t.bookTitle}</title>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; padding: 40px; color: #1e293b; line-height: 1.6; }
            h1 { font-size: 22px; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px; margin-bottom: 15px; color: #0f172a; }
            .meta { font-size: 13px; color: #64748b; margin-bottom: 25px; }
            pre { white-space: pre-wrap; font-family: inherit; font-size: 14px; background: #faf8f5; border: 1px solid #e5e0d8; padding: 20px; border-radius: 8px; }
          </style>
        </head>
        <body>
          <h1>${t.notebookTitle} · ${viewMode === 'single' ? activeTitle : t.allNotesTab}</h1>
          <div class="meta">${t.bookTitle} · ${t.authorLabel}</div>
          <pre>${content}</pre>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
    }, 250);
  };

  const clearCurrentNotes = () => {
    if (window.confirm('Tem certeza que deseja apagar as anotações deste capítulo?')) {
      const updated = { ...notesByChapter, [activeTab]: '' };
      setNotesByChapter(updated);
      localStorage.setItem('google_search_2026_user_notes', JSON.stringify(updated));
    }
  };

  if (!isOpen) return null;

  const currentTabChapter = chapters.find(c => c.id === activeTab) || currentChapter;
  const currentTabDisplayTitle = t.chapterTitles[currentTabChapter.id]?.title || currentTabChapter.title;
  const totalNotesCount = Object.values(notesByChapter).filter(t => t && t.trim().length > 0).length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end bg-slate-950/60 backdrop-blur-xs transition-opacity print:hidden">
      
      {/* Click backdrop to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* APPLE NOTES SLIDE-IN PANEL (Dark & Light Apple UI) */}
      <div className={`relative z-10 w-full max-w-xl h-full border-l shadow-2xl flex flex-col animate-in slide-in-from-right duration-250 font-sans transition-colors ${
        isDark 
          ? 'bg-[#1C1C1E] border-slate-800 text-slate-100' 
          : 'bg-[#FAF8F5] border-amber-900/15 text-slate-900'
      }`}>
        
        {/* Apple Style Header Bar */}
        <div className={`px-4 sm:px-5 py-3 border-b flex items-center justify-between shadow-2xs ${
          isDark 
            ? 'bg-[#2C2C2E] border-slate-800' 
            : 'bg-[#F3EFE6] border-amber-900/15'
        }`}>
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-amber-400 to-amber-500 border border-amber-600/30 flex items-center justify-center text-slate-950 font-bold text-sm shadow-xs shrink-0">
              📝
            </div>
            <div>
              <h2 className="text-xs sm:text-sm font-semibold flex items-center gap-1.5">
                <span>{t.notebookTitle}</span>
              </h2>
              <div className="flex items-center gap-1.5 text-[10px] text-slate-400">
                <Clock className="w-3 h-3 text-slate-400" />
                <span>{lastSaved}</span>
                <span>•</span>
                <span>{totalNotesCount} {t.allChapters.toLowerCase()}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={downloadNotesAsFile}
              className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                isDark ? 'text-slate-300 hover:text-white hover:bg-white/10' : 'text-slate-700 hover:text-slate-950 hover:bg-black/5'
              }`}
              title={t.downloadMarkdown}
            >
              <Download className="w-4 h-4" />
            </button>
            <button
              onClick={printNotes}
              className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                isDark ? 'text-slate-300 hover:text-white hover:bg-white/10' : 'text-slate-700 hover:text-slate-950 hover:bg-black/5'
              }`}
              title={t.printNotes}
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={copyNotes}
              className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                isDark ? 'text-slate-300 hover:text-white hover:bg-white/10' : 'text-slate-700 hover:text-slate-950 hover:bg-black/5'
              }`}
              title={t.copyNotes}
            >
              {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              className={`p-1.5 rounded-lg transition-colors cursor-pointer ml-1 ${
                isDark ? 'text-slate-400 hover:text-white hover:bg-white/10' : 'text-slate-500 hover:text-slate-950 hover:bg-black/5'
              }`}
              aria-label="Fechar caderno"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* View Mode Toggle: Single vs All */}
        <div className={`px-4 py-2 border-b flex items-center justify-between text-xs ${
          isDark 
            ? 'bg-[#252528] border-slate-800' 
            : 'bg-[#EBE6DB] border-amber-900/10'
        }`}>
          <div className={`flex items-center gap-1 p-0.5 rounded-lg border ${
            isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white/70 border-amber-900/10'
          }`}>
            <button
              onClick={() => setViewMode('single')}
              className={`px-2.5 py-1 rounded text-[11px] font-medium transition-all cursor-pointer ${
                viewMode === 'single'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-2xs'
                  : isDark ? 'text-slate-400 hover:text-slate-200' : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              {t.currentChapterTab}
            </button>
            <button
              onClick={() => setViewMode('all')}
              className={`px-2.5 py-1 rounded text-[11px] font-medium transition-all cursor-pointer ${
                viewMode === 'all'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-2xs'
                  : isDark ? 'text-slate-400 hover:text-slate-200' : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              {t.allNotesTab} ({totalNotesCount})
            </button>
          </div>

          <span className="text-[10px] text-slate-400 font-mono italic hidden sm:inline">
            💡 Grife trechos no livro para salvar aqui
          </span>
        </div>

        {viewMode === 'single' ? (
          <>
            {/* Chapter Selector Dropdown */}
            <div className={`px-4 py-2 border-b flex items-center gap-2 text-xs ${
              isDark ? 'bg-[#202022] border-slate-800' : 'bg-[#F3EFE6] border-amber-900/10'
            }`}>
              <span className="text-[11px] font-semibold shrink-0">
                {t.selectChapterNote}
              </span>
              <select
                value={activeTab}
                onChange={(e) => {
                  setActiveTab(e.target.value);
                  onSelectChapter(e.target.value);
                }}
                className={`w-full text-xs rounded-md px-2.5 py-1 font-medium focus:outline-none focus:ring-1 focus:ring-amber-500 truncate cursor-pointer shadow-2xs ${
                  isDark 
                    ? 'bg-slate-900 border border-slate-700 text-slate-200' 
                    : 'bg-white border border-amber-900/15 text-slate-800'
                }`}
              >
                {chapters.map(c => {
                  const hasNote = !!(notesByChapter[c.id] && notesByChapter[c.id].trim());
                  const cTitle = t.chapterTitles[c.id]?.title || c.title;
                  return (
                    <option key={c.id} value={c.id}>
                      {hasNote ? '📝 ' : '📄 '}
                      {c.number === "0" ? t.generalIntro : `${t.moduleLabel} ${c.number}`}: {cTitle}
                    </option>
                  );
                })}
              </select>
            </div>

            {/* Quick Toolbar (Checklist, Bullets, Timestamp, Clear) */}
            <div className={`px-4 py-2 border-b flex items-center justify-between text-xs ${
              isDark ? 'bg-[#1C1C1E] border-slate-800' : 'bg-[#FAF8F5] border-amber-900/5'
            }`}>
              <div className="flex items-center gap-1.5 flex-wrap">
                <button
                  onClick={insertChecklist}
                  className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors cursor-pointer shadow-2xs border ${
                    isDark 
                      ? 'bg-slate-800 hover:bg-slate-700 border-slate-700 text-slate-200' 
                      : 'bg-white hover:bg-amber-100/70 border-amber-900/10 text-slate-800'
                  }`}
                  title="Inserir item de checklist"
                >
                  <ListTodo className="w-3.5 h-3.5 text-amber-500" />
                  <span>{t.checklistBtn}</span>
                </button>

                <button
                  onClick={insertBullet}
                  className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors cursor-pointer shadow-2xs border ${
                    isDark 
                      ? 'bg-slate-800 hover:bg-slate-700 border-slate-700 text-slate-200' 
                      : 'bg-white hover:bg-amber-100/70 border-amber-900/10 text-slate-800'
                  }`}
                  title="Inserir lista com marcadores"
                >
                  <span className="font-bold text-amber-500">•</span>
                  <span>{t.bulletBtn}</span>
                </button>

                <button
                  onClick={insertTimestamp}
                  className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors cursor-pointer shadow-2xs border ${
                    isDark 
                      ? 'bg-slate-800 hover:bg-slate-700 border-slate-700 text-slate-200' 
                      : 'bg-white hover:bg-amber-100/70 border-amber-900/10 text-slate-800'
                  }`}
                  title="Inserir carimbo de data e hora"
                >
                  <Calendar className="w-3.5 h-3.5 text-amber-500" />
                  <span>{t.timestampBtn}</span>
                </button>
              </div>

              <button
                onClick={clearCurrentNotes}
                className="text-[11px] text-slate-400 hover:text-rose-500 transition-colors cursor-pointer p-1"
                title={t.clearNotes}
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Apple Notes Paper Texture Body */}
            <div className={`flex-1 p-4 sm:p-5 flex flex-col relative overflow-hidden ${
              isDark ? 'bg-[#1C1C1E]' : 'bg-[#FAF8F5]'
            }`}>
              <div className={`mb-2 text-xs font-serif font-bold border-b pb-1.5 flex items-center justify-between ${
                isDark ? 'border-slate-800 text-slate-200' : 'border-amber-900/10 text-slate-900'
              }`}>
                <span>{currentTabDisplayTitle}</span>
                <span className="text-[10px] font-mono font-normal text-slate-400">
                  {currentText.length} {t.charactersCount}
                </span>
              </div>

              {/* Textarea mimicking Apple Notes yellow lined paper feel */}
              <textarea
                id="apple-notes-textarea"
                value={currentText}
                onChange={handleTextChange}
                placeholder={t.notesPlaceholder}
                className={`w-full flex-1 resize-none bg-transparent text-xs sm:text-sm leading-relaxed focus:outline-none font-sans ${
                  isDark ? 'text-slate-100 placeholder:text-slate-600' : 'text-slate-800 placeholder:text-slate-400'
                }`}
                style={{
                  backgroundImage: isDark 
                    ? 'linear-gradient(transparent, transparent 27px, rgba(245, 158, 11, 0.08) 28px)'
                    : 'linear-gradient(transparent, transparent 27px, rgba(217, 119, 6, 0.08) 28px)',
                  backgroundSize: '100% 28px',
                  lineHeight: '28px'
                }}
              />
            </div>
          </>
        ) : (
          /* View Mode: ALL NOTES (Overview) */
          <div className={`flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 ${isDark ? 'bg-[#1C1C1E]' : 'bg-[#FAF8F5]'}`}>
            <div className="text-xs text-slate-400 mb-2">
              {t.allNotesTab}:
            </div>

            {chapters.map(c => {
              const note = notesByChapter[c.id];
              if (!note || !note.trim()) return null;
              const cTitle = t.chapterTitles[c.id]?.title || c.title;

              return (
                <div key={c.id} className={`rounded-xl border p-4 shadow-2xs space-y-2 ${
                  isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-amber-900/15'
                }`}>
                  <div className={`flex items-center justify-between border-b pb-1.5 ${
                    isDark ? 'border-slate-800' : 'border-amber-900/10'
                  }`}>
                    <span className="text-xs font-serif font-bold text-amber-500">
                      {c.number === '0' ? t.generalIntro : `${t.moduleLabel} ${c.number}`}: {cTitle}
                    </span>
                    <button
                      onClick={() => {
                        setActiveTab(c.id);
                        setViewMode('single');
                        onSelectChapter(c.id);
                      }}
                      className="text-[11px] text-amber-500 hover:underline font-semibold cursor-pointer"
                    >
                      {t.editNote} ↗
                    </button>
                  </div>
                  <pre className="text-xs whitespace-pre-wrap font-sans leading-relaxed text-slate-300 dark:text-slate-300">
                    {note}
                  </pre>
                </div>
              );
            })}

            {totalNotesCount === 0 && (
              <div className="text-center py-12 text-slate-400 text-xs">
                <FolderOpen className="w-8 h-8 text-slate-500 mx-auto mb-2" />
                <p className="font-semibold mb-1 text-slate-300">{t.emptyNotebookTitle}</p>
                <p>{t.emptyNotebookDesc}</p>
              </div>
            )}
          </div>
        )}

        {/* Apple Notes Footer Tip */}
        <div className={`px-4 py-2.5 border-t flex items-center justify-between text-[11px] text-slate-400 ${
          isDark ? 'bg-[#2C2C2E] border-slate-800' : 'bg-[#F3EFE6] border-amber-900/15'
        }`}>
          <span>
            {currentText.length} {t.charactersCount}
          </span>
          <span className="italic">
            {t.savedLocally}
          </span>
        </div>

      </div>

    </div>
  );
};
