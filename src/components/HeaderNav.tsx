import React, { useState } from 'react';
import { BookOpen, CheckSquare, Sparkles, Menu, X } from 'lucide-react';

interface HeaderNavProps {
  onOpenAudit: () => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({ onOpenAudit }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#inicio" 
          className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 flex items-center gap-2.5 group"
        >
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 border border-amber-500/30 flex items-center justify-center text-amber-400 font-serif font-bold shadow-sm group-hover:border-amber-400 transition-colors">
            G
          </span>
          <span className="font-serif tracking-normal text-slate-900 group-hover:text-blue-950 transition-colors">
            Google Search <span className="text-amber-700 font-sans text-sm font-semibold tracking-wider">2026</span>
          </span>
        </a>

        {/* Zone 2: 4-5 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
          <a href="#o-fim-do-seo" className="hover:text-amber-700 transition-colors">
            O Fim do SEO
          </a>
          <a href="#pilares-base" className="hover:text-amber-700 transition-colors">
            SEO · AEO · GEO
          </a>
          <a href="#trindade-da-busca" className="hover:text-amber-700 transition-colors">
            A Trindade
          </a>
          <a href="#otimizacao-negocio" className="hover:text-amber-700 transition-colors">
            Otimização & Negócio
          </a>
          <a href="#everywhere-journey" className="hover:text-amber-700 transition-colors">
            Jornada Multicanal
          </a>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenAudit}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-900 bg-amber-400/90 hover:bg-amber-400 border border-amber-500/40 rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap cursor-pointer active:scale-95"
          >
            <CheckSquare className="w-3.5 h-3.5 text-slate-900" />
            <span>Auditar Minha Página</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={onOpenAudit}
            className="px-2.5 py-1.5 text-xs font-semibold text-slate-900 bg-amber-400 rounded-md shadow-xs"
          >
            Auditoria
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-600 hover:text-slate-900 rounded-lg"
            aria-label="Abrir menu de navegação"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-4 space-y-2 text-sm font-medium">
          <a 
            href="#o-fim-do-seo" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-700 hover:text-amber-700"
          >
            O Fim do SEO Tradicional
          </a>
          <a 
            href="#pilares-base" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-700 hover:text-amber-700"
          >
            Os 3 Pilares (SEO · AEO · GEO)
          </a>
          <a 
            href="#trindade-da-busca" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-700 hover:text-amber-700"
          >
            A Trindade da Busca (Infográfico)
          </a>
          <a 
            href="#otimizacao-negocio" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-700 hover:text-amber-700"
          >
            Otimização em Negócio & Reflexão
          </a>
          <a 
            href="#everywhere-journey" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-700 hover:text-amber-700"
          >
            Everywhere Optimization
          </a>
        </div>
      )}
    </header>
  );
};
