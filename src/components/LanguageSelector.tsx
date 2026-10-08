import React, { useState, useRef, useEffect } from 'react';
import { Language, TRANSLATIONS } from '../i18n/translations.ts';
import { Globe, ChevronDown, Check } from 'lucide-react';

interface LanguageSelectorProps {
  currentLanguage: Language;
  onSelectLanguage: (lang: Language) => void;
  isDark: boolean;
}

const LANGUAGES: { code: Language; label: string; flag: string; short: string }[] = [
  { code: 'pt', label: 'Português (Brasil)', flag: '🇧🇷', short: 'PT' },
  { code: 'en', label: 'English (US)', flag: '🇺🇸', short: 'EN' },
  { code: 'es', label: 'Español', flag: '🇪🇸', short: 'ES' },
];

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  currentLanguage,
  onSelectLanguage,
  isDark
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeLangObj = LANGUAGES.find(l => l.code === currentLanguage) || LANGUAGES[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1.5 px-2 sm:px-2.5 py-1.5 rounded-lg border text-xs font-semibold transition-all cursor-pointer shadow-2xs ${
          isDark 
            ? 'bg-slate-900 border-slate-700 hover:bg-slate-800 text-slate-200' 
            : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-800'
        }`}
        title={TRANSLATIONS[currentLanguage].languageSelect}
        aria-label={TRANSLATIONS[currentLanguage].languageSelect}
      >
        <span className="text-sm leading-none">{activeLangObj.flag}</span>
        <span className="font-mono text-[11px] font-bold">{activeLangObj.short}</span>
        <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div 
          className={`absolute right-0 mt-1.5 w-44 rounded-xl border shadow-xl py-1.5 z-50 animate-in fade-in zoom-in-95 duration-150 ${
            isDark 
              ? 'bg-slate-900 border-slate-800 text-slate-200 shadow-black/60' 
              : 'bg-white border-slate-200 text-slate-800 shadow-slate-300/40'
          }`}
        >
          <div className="px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-slate-400 border-b border-slate-100 dark:border-slate-800 mb-1">
            {TRANSLATIONS[currentLanguage].languageSelect}
          </div>
          {LANGUAGES.map((lang) => {
            const isSelected = lang.code === currentLanguage;
            return (
              <button
                key={lang.code}
                onClick={() => {
                  onSelectLanguage(lang.code);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3 py-2 text-xs transition-colors cursor-pointer text-left ${
                  isSelected
                    ? isDark 
                      ? 'bg-amber-400/10 text-amber-300 font-semibold' 
                      : 'bg-amber-50 text-amber-900 font-semibold'
                    : isDark 
                      ? 'hover:bg-slate-800 text-slate-300' 
                      : 'hover:bg-slate-50 text-slate-700'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-sm leading-none">{lang.flag}</span>
                  <span>{lang.label}</span>
                </div>
                {isSelected && (
                  <Check className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
