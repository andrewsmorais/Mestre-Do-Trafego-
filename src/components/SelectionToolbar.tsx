import React, { useState, useEffect } from 'react';
import { Highlighter, X, Sparkles, BookOpen } from 'lucide-react';

interface SelectionToolbarProps {
  onSendToNotebook: (text: string) => void;
}

export const SelectionToolbar: React.FC<SelectionToolbarProps> = ({ onSendToNotebook }) => {
  const [selectedText, setSelectedText] = useState('');
  const [position, setPosition] = useState<{ top: number; left: number } | null>(null);

  useEffect(() => {
    const handleSelectionChange = () => {
      const selection = window.getSelection();
      if (!selection || selection.isCollapsed || !selection.toString().trim()) {
        // Small delay so click on the toolbar itself isn't cancelled before action executes
        setTimeout(() => {
          if (!window.getSelection()?.toString().trim()) {
            setPosition(null);
            setSelectedText('');
          }
        }, 150);
        return;
      }

      const text = selection.toString().trim();
      if (text.length < 3) {
        setPosition(null);
        return;
      }

      try {
        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();
        
        if (rect.width === 0 && rect.height === 0) {
          setPosition(null);
          return;
        }

        // Clamp inside viewport
        const toolbarWidth = 260;
        const pageX = rect.left + window.scrollX + (rect.width / 2) - (toolbarWidth / 2);
        const clampedX = Math.min(
          window.innerWidth - toolbarWidth - 16,
          Math.max(16, pageX)
        );

        // Position above selection if space allows, otherwise below
        const aboveY = rect.top + window.scrollY - 48;
        const belowY = rect.bottom + window.scrollY + 10;
        const clampedY = aboveY > window.scrollY + 10 ? aboveY : belowY;

        setSelectedText(text);
        setPosition({ top: clampedY, left: clampedX });
      } catch {
        setPosition(null);
      }
    };

    document.addEventListener('mouseup', handleSelectionChange);
    document.addEventListener('touchend', handleSelectionChange);

    return () => {
      document.removeEventListener('mouseup', handleSelectionChange);
      document.removeEventListener('touchend', handleSelectionChange);
    };
  }, []);

  const highlightSelection = (colorClass: string) => {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;

    try {
      const range = selection.getRangeAt(0);
      const span = document.createElement('mark');
      span.className = `${colorClass} rounded px-1 py-0.5 transition-colors font-medium shadow-2xs`;
      span.title = "Trecho grifado pelo leitor";
      
      const contents = range.extractContents();
      span.appendChild(contents);
      range.insertNode(span);

      // Deselect
      selection.removeAllRanges();
      setPosition(null);
    } catch {
      setPosition(null);
    }
  };

  const handleSendToNotes = () => {
    if (selectedText) {
      // Highlight in yellow on page for visual feedback
      highlightSelection('bg-amber-200/90 text-slate-900');
      onSendToNotebook(selectedText);
      setPosition(null);
    }
  };

  if (!position || !selectedText) return null;

  return (
    <div
      style={{
        position: 'absolute',
        top: `${position.top}px`,
        left: `${position.left}px`,
        zIndex: 50
      }}
      className="bg-slate-950/95 text-white backdrop-blur-md rounded-full shadow-2xl py-1.5 px-3 flex items-center gap-2 border border-amber-400/30 animate-in fade-in zoom-in-95 duration-150 print:hidden select-none"
    >
      <span className="text-[10px] text-amber-300 font-bold uppercase tracking-wider pl-1 hidden sm:inline">
        Grifar:
      </span>

      {/* Highlighter Colors */}
      <div className="flex items-center gap-1.5">
        <button
          onMouseDown={(e) => { e.preventDefault(); highlightSelection('bg-amber-200/95 text-amber-950'); }}
          className="w-5 h-5 rounded-full bg-amber-400 hover:scale-115 active:scale-95 transition-transform border border-amber-500 shadow-2xs cursor-pointer"
          title="Grifar com Amarelo Dourado"
        />

        <button
          onMouseDown={(e) => { e.preventDefault(); highlightSelection('bg-emerald-200/95 text-emerald-950'); }}
          className="w-5 h-5 rounded-full bg-emerald-400 hover:scale-115 active:scale-95 transition-transform border border-emerald-500 shadow-2xs cursor-pointer"
          title="Grifar com Verde Esmeralda"
        />

        <button
          onMouseDown={(e) => { e.preventDefault(); highlightSelection('bg-sky-200/95 text-sky-950'); }}
          className="w-5 h-5 rounded-full bg-sky-400 hover:scale-115 active:scale-95 transition-transform border border-sky-500 shadow-2xs cursor-pointer"
          title="Grifar com Azul Céu"
        />
      </div>

      <div className="w-[1px] h-4 bg-white/20 mx-0.5" />

      {/* Send to Apple Notes */}
      <button
        onMouseDown={(e) => { e.preventDefault(); handleSendToNotes(); }}
        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold transition-all shadow-xs cursor-pointer"
        title="Enviar citação para o Caderno de Anotações"
      >
        <span>📝 Caderno</span>
      </button>

      {/* Dismiss button */}
      <button
        onMouseDown={(e) => { e.preventDefault(); setPosition(null); }}
        className="p-1 text-slate-400 hover:text-white rounded-full cursor-pointer ml-0.5"
        aria-label="Fechar barra de grifar"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
