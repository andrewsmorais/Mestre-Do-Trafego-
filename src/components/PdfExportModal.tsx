import React, { useState } from 'react';
import { 
  X, 
  Printer, 
  Palette,
  Contrast,
  Layers,
  Sparkles
} from 'lucide-react';
import { Chapter } from '../data/bookData.ts';
import { Language, TRANSLATIONS } from '../i18n/translations.ts';

interface PdfExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentChapter: Chapter;
  language: Language;
  isDark: boolean;
}

export const PdfExportModal: React.FC<PdfExportModalProps> = ({
  isOpen,
  onClose,
  currentChapter,
  language,
  isDark
}) => {
  const [selectedFormat, setSelectedFormat] = useState<'color' | 'bw' | 'infographic'>('color');
  const [isExporting, setIsExporting] = useState(false);
  const t = TRANSLATIONS[language];

  if (!isOpen) return null;

  const handleTriggerPrint = (format: 'color' | 'bw' | 'infographic') => {
    setIsExporting(true);
    
    // Clean any prior mode classes on body
    document.body.classList.remove('print-mode-color', 'print-mode-bw', 'print-mode-infographic-only');

    if (format === 'bw') {
      document.body.classList.add('print-mode-bw');
    } else if (format === 'infographic') {
      document.body.classList.add('print-mode-infographic-only');
    } else {
      document.body.classList.add('print-mode-color');
    }

    // Give browser brief tick to apply CSS, then trigger print
    setTimeout(() => {
      window.print();
      
      // Cleanup after dialog closes
      setTimeout(() => {
        document.body.classList.remove('print-mode-color', 'print-mode-bw', 'print-mode-infographic-only');
        setIsExporting(false);
        onClose();
      }, 500);
    }, 250);
  };

  const localizedTitle = t.chapterTitles[currentChapter.id]?.title || currentChapter.title;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-xs overflow-y-auto print:hidden">
      <div className={`rounded-2xl sm:rounded-3xl border shadow-2xl max-w-xl w-full my-6 overflow-hidden animate-in fade-in duration-200 ${
        isDark ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
      }`}>
        
        {/* Header */}
        <div className="bg-slate-950 text-white p-5 sm:p-6 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0">
              <Printer className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-amber-400 block">
                {t.pdfModalSubtitle}
              </span>
              <h3 className="text-base sm:text-lg font-serif font-bold text-white leading-tight">
                {t.pdfModalTitle}
              </h3>
            </div>
          </div>

          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg transition-colors cursor-pointer"
            aria-label={t.closeBtn}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Current Chapter Indicator */}
        <div className={`px-5 py-3.5 border-b text-xs flex items-center gap-2 ${
          isDark ? 'bg-slate-950/60 border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-600'
        }`}>
          <span className="font-semibold shrink-0">{t.selectedChapterLabel}</span>
          <span className="font-serif italic truncate">
            {localizedTitle}
          </span>
        </div>

        {/* Format Selection Cards */}
        <div className="p-5 sm:p-6 space-y-3.5">
          
          {/* Option 1: Color */}
          <div 
            onClick={() => setSelectedFormat('color')}
            className={`p-4 rounded-xl border-2 transition-all cursor-pointer flex items-start gap-3.5 ${
              selectedFormat === 'color'
                ? isDark ? 'border-blue-500 bg-blue-950/30 ring-2 ring-blue-500/20' : 'border-blue-600 bg-blue-50/40 ring-2 ring-blue-500/20'
                : isDark ? 'border-slate-800 hover:border-slate-700 bg-slate-900/60' : 'border-slate-200 hover:border-slate-300 bg-white'
            }`}
          >
            <div className="w-9 h-9 rounded-lg bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 flex items-center justify-center shrink-0 mt-0.5">
              <Palette className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold">
                  {t.colorOptionTitle}
                </h4>
                {selectedFormat === 'color' && (
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-600 dark:bg-blue-400" />
                )}
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                {t.colorOptionDesc}
              </p>
            </div>
          </div>

          {/* Option 2: Black and White */}
          <div 
            onClick={() => setSelectedFormat('bw')}
            className={`p-4 rounded-xl border-2 transition-all cursor-pointer flex items-start gap-3.5 ${
              selectedFormat === 'bw'
                ? isDark ? 'border-slate-400 bg-slate-800/60 ring-2 ring-slate-400/20' : 'border-slate-800 bg-slate-100 ring-2 ring-slate-800/20'
                : isDark ? 'border-slate-800 hover:border-slate-700 bg-slate-900/60' : 'border-slate-200 hover:border-slate-300 bg-white'
            }`}
          >
            <div className="w-9 h-9 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 flex items-center justify-center shrink-0 mt-0.5">
              <Contrast className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold">
                  {t.bwOptionTitle}
                </h4>
                {selectedFormat === 'bw' && (
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-900 dark:bg-slate-100" />
                )}
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                {t.bwOptionDesc}
              </p>
            </div>
          </div>

          {/* Option 3: Infographic Only */}
          <div 
            onClick={() => setSelectedFormat('infographic')}
            className={`p-4 rounded-xl border-2 transition-all cursor-pointer flex items-start gap-3.5 ${
              selectedFormat === 'infographic'
                ? isDark ? 'border-amber-500 bg-amber-950/30 ring-2 ring-amber-500/20' : 'border-amber-500 bg-amber-50/50 ring-2 ring-amber-500/20'
                : isDark ? 'border-slate-800 hover:border-slate-700 bg-slate-900/60' : 'border-slate-200 hover:border-slate-300 bg-white'
            }`}
          >
            <div className="w-9 h-9 rounded-lg bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 flex items-center justify-center shrink-0 mt-0.5">
              <Layers className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold">
                  {t.infographicOptionTitle}
                </h4>
                {selectedFormat === 'infographic' && (
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                )}
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                {t.infographicOptionDesc}
              </p>
            </div>
          </div>

        </div>

        {/* Action Buttons */}
        <div className={`p-5 sm:p-6 border-t flex items-center justify-between gap-3 ${
          isDark ? 'bg-slate-950/70 border-slate-800' : 'bg-slate-50 border-slate-200'
        }`}>
          <button
            onClick={onClose}
            className={`px-4 py-2.5 rounded-xl border text-xs font-semibold transition-colors cursor-pointer ${
              isDark ? 'border-slate-700 text-slate-300 hover:bg-slate-800' : 'border-slate-300 text-slate-700 hover:bg-slate-100'
            }`}
          >
            {t.cancelBtn}
          </button>

          <button
            onClick={() => handleTriggerPrint(selectedFormat)}
            disabled={isExporting}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-amber-500 hover:bg-slate-800 dark:hover:bg-amber-400 text-white dark:text-slate-950 text-xs font-bold shadow-md transition-all cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>{isExporting ? t.generatingPdf : t.downloadPdfAction}</span>
          </button>
        </div>

      </div>
    </div>
  );
};
