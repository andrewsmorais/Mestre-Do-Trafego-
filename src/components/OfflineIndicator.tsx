import React from 'react';
import { WifiOff, CheckCircle2 } from 'lucide-react';
import { useOnlineStatus } from '../hooks/useOnlineStatus.ts';
import { Language } from '../i18n/translations.ts';

interface OfflineIndicatorProps {
  language?: Language;
}

export const OfflineIndicator: React.FC<OfflineIndicatorProps> = ({ language = 'pt' }) => {
  const isOnline = useOnlineStatus();

  if (isOnline) return null;

  const messages = {
    pt: {
      title: 'Modo Offline Ativo',
      desc: 'O leitor e todas as ferramentas continuam funcionando normalmente via cache local PWA.',
    },
    en: {
      title: 'Offline Mode Active',
      desc: 'The reader and all interactive tools continue working seamlessly via local PWA cache.',
    },
    es: {
      title: 'Modo Offline Activo',
      desc: 'El lector y todas las herramientas interactivas continúan funcionando mediante caché local PWA.',
    },
  };

  const t = messages[language] || messages.pt;

  return (
    <div className="fixed bottom-4 left-4 z-50 flex items-center gap-2.5 rounded-xl bg-slate-900/95 text-white border border-amber-500/40 px-3.5 py-2.5 shadow-2xl backdrop-blur-md animate-fade-in max-w-sm">
      <div className="p-1.5 rounded-lg bg-amber-500/20 text-amber-400 shrink-0">
        <WifiOff className="w-4 h-4" />
      </div>
      <div className="text-xs">
        <p className="font-semibold text-amber-300 flex items-center gap-1.5">
          {t.title}
          <span className="inline-block w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
        </p>
        <p className="text-slate-300 text-[11px] leading-tight mt-0.5">{t.desc}</p>
      </div>
    </div>
  );
};
