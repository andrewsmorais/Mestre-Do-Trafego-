import React, { useState, useRef, useEffect } from 'react';
import { Type, Plus, Minus, Check, ChevronDown } from 'lucide-react';
import { TRANSLATIONS, Language } from '../i18n/translations.ts';

export type FontScale = 1 | 2 | 3 | 4 | 5;

interface FontSizeControlProps {
  fontScale: FontScale;
  onChangeScale: (scale: FontScale) => void;
  isDark: boolean;
  language: Language;
}

export const SCALE_PRESETS: { scale: FontScale; label: string; pct: string; desc: string }[] = [
  { scale: 1, label: 'A-', pct: '85%', desc: 'Compacto' },
  { scale: 2, label: 'A', pct: '100%', desc: 'Padrão' },
  { scale: 3, label: 'A+', pct: '115%', desc: 'Confortável' },
  { scale: 4, label: 'A++', pct: '130%', desc: 'Grande' },
  { scale: 5, label: 'A+++', pct: '145%', desc: 'Extra Grande' },
];

export const FontSizeControl: React.FC<FontSizeControlProps> = ({
  fontScale,
  onChangeScale,
  isDark,
  language
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const t = TRANSLATIONS[language];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleDecrease = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (fontScale > 1) {
      onChangeScale((fontScale - 1) as FontScale);
    }
  };

  const handleIncrease = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (fontScale < 5) {
      onChangeScale((fontScale + 1) as FontScale);
    }
  };

  const currentPreset = SCALE_PRESETS.find(p => p.scale === fontScale) || SCALE_PRESETS[1];

  return (
    <div className="relative" ref={containerRef}>
      {/* DIRECT STEPPER CONTROL: A- | [pct] | A+ */}
      <div 
        className={`flex items-center rounded-lg border shadow-2xs transition-all overflow-hidden ${
          isDark 
            ? 'bg-slate-900 border-slate-700 text-slate-200' 
            : 'bg-white border-slate-200 text-slate-800'
        }`}
      >
        {/* Direct Decrease Button */}
        <button
          type="button"
          onClick={handleDecrease}
          disabled={fontScale <= 1}
          className={`px-2 py-1 text-xs font-bold font-serif transition-colors cursor-pointer flex items-center justify-center ${
            fontScale <= 1
              ? 'opacity-30 cursor-not-allowed'
              : isDark
                ? 'hover:bg-slate-800 text-amber-400 active:bg-slate-700'
                : 'hover:bg-slate-100 text-slate-900 active:bg-slate-200'
          }`}
          title={t.decreaseFont}
          aria-label={t.decreaseFont}
        >
          A-
        </button>

        <div className={`w-[1px] h-4 self-center ${isDark ? 'bg-slate-700' : 'bg-slate-200'}`} />

        {/* Center Percentage Trigger */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`px-1.5 sm:px-2 py-1 text-[11px] font-mono font-bold transition-colors cursor-pointer flex items-center gap-0.5 ${
            isDark ? 'hover:bg-slate-800 text-slate-200' : 'hover:bg-slate-100 text-slate-800'
          }`}
          title={`${t.fontScaleLabel}: ${currentPreset.pct} (${currentPreset.desc})`}
          aria-label={t.fontSize}
        >
          <span>{currentPreset.pct}</span>
          <ChevronDown className={`w-2.5 h-2.5 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        <div className={`w-[1px] h-4 self-center ${isDark ? 'bg-slate-700' : 'bg-slate-200'}`} />

        {/* Direct Increase Button */}
        <button
          type="button"
          onClick={handleIncrease}
          disabled={fontScale >= 5}
          className={`px-2 py-1 text-xs font-bold font-serif transition-colors cursor-pointer flex items-center justify-center ${
            fontScale >= 5
              ? 'opacity-30 cursor-not-allowed'
              : isDark
                ? 'hover:bg-slate-800 text-amber-400 active:bg-slate-700'
                : 'hover:bg-slate-100 text-slate-900 active:bg-slate-200'
          }`}
          title={t.increaseFont}
          aria-label={t.increaseFont}
        >
          A+
        </button>
      </div>

      {/* Popover with explicit presets & reset */}
      {isOpen && (
        <div 
          className={`absolute right-0 mt-1.5 w-60 rounded-xl border shadow-xl p-3 z-50 animate-in fade-in zoom-in-95 duration-150 ${
            isDark 
              ? 'bg-slate-900 border-slate-800 text-slate-200 shadow-black/60' 
              : 'bg-white border-slate-200 text-slate-800 shadow-slate-300/40'
          }`}
        >
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100 dark:border-slate-800">
            <span className="text-xs font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
              <Type className="w-3.5 h-3.5 text-amber-500" />
              <span>{t.fontScaleLabel}</span>
            </span>
            <span className="text-[11px] font-mono font-bold text-amber-500">
              {currentPreset.pct}
            </span>
          </div>

          {/* Quick Stepper inside popover too */}
          <div className="flex items-center justify-between gap-1.5 mb-3">
            <button
              onClick={() => { if (fontScale > 1) onChangeScale((fontScale - 1) as FontScale); }}
              disabled={fontScale <= 1}
              className={`p-1.5 rounded-lg border flex-1 flex items-center justify-center gap-1 text-xs font-bold transition-all cursor-pointer ${
                fontScale <= 1 
                  ? 'opacity-30 cursor-not-allowed border-transparent' 
                  : isDark 
                    ? 'border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-200' 
                    : 'border-slate-200 bg-slate-100 hover:bg-slate-200 text-slate-800'
              }`}
              title={t.decreaseFont}
            >
              <Minus className="w-3.5 h-3.5" />
              <span>A-</span>
            </button>

            <button
              onClick={() => onChangeScale(2)}
              className={`px-2.5 py-1.5 rounded-lg border text-xs font-semibold transition-all cursor-pointer ${
                fontScale === 2
                  ? 'border-amber-400 bg-amber-500/20 text-amber-500 font-bold'
                  : isDark
                    ? 'border-slate-700 hover:bg-slate-800 text-slate-300'
                    : 'border-slate-200 hover:bg-slate-100 text-slate-700'
              }`}
              title={t.normalFont}
            >
              100%
            </button>

            <button
              onClick={() => { if (fontScale < 5) onChangeScale((fontScale + 1) as FontScale); }}
              disabled={fontScale >= 5}
              className={`p-1.5 rounded-lg border flex-1 flex items-center justify-center gap-1 text-xs font-bold transition-all cursor-pointer ${
                fontScale >= 5 
                  ? 'opacity-30 cursor-not-allowed border-transparent' 
                  : isDark 
                    ? 'border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-200' 
                    : 'border-slate-200 bg-slate-100 hover:bg-slate-200 text-slate-800'
              }`}
              title={t.increaseFont}
            >
              <Plus className="w-3.5 h-3.5" />
              <span>A+</span>
            </button>
          </div>

          {/* Preset Buttons Grid */}
          <div className="space-y-1">
            {SCALE_PRESETS.map((p) => {
              const isSelected = p.scale === fontScale;
              return (
                <button
                  key={p.scale}
                  onClick={() => {
                    onChangeScale(p.scale);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs transition-colors cursor-pointer text-left ${
                    isSelected
                      ? isDark 
                        ? 'bg-amber-400/20 text-amber-300 font-bold border border-amber-500/30' 
                        : 'bg-amber-50 text-amber-900 font-bold border border-amber-300'
                      : isDark 
                        ? 'hover:bg-slate-800 text-slate-300' 
                        : 'hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[11px] font-bold w-9">{p.pct}</span>
                    <span className="text-[11px] opacity-80">{p.desc}</span>
                  </div>
                  {isSelected && (
                    <Check className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          <div className="mt-2.5 pt-2 border-t border-slate-100 dark:border-slate-800 text-[10px] text-slate-400 italic text-center">
            Ajusta parágrafos, subtítulos e citações
          </div>
        </div>
      )}
    </div>
  );
};
