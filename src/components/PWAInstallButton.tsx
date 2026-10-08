import React, { useState } from 'react';
import { Download, Smartphone, X, Share, PlusSquare, CheckCircle, Sparkles, HelpCircle } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall.ts';
import { Language } from '../i18n/translations.ts';

interface PWAInstallButtonProps {
  language?: Language;
  variant?: 'header' | 'sidebar' | 'modal';
}

export const PWAInstallButton: React.FC<PWAInstallButtonProps> = ({ 
  language = 'pt',
  variant = 'header' 
}) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSModal, setShowIOSModal] = useState(false);
  const [showDesktopHelp, setShowDesktopHelp] = useState(false);
  const [justInstalled, setJustInstalled] = useState(false);

  // Text translations
  const labels = {
    pt: {
      installBtn: 'Instalar App',
      installMobile: 'Instalar no Celular',
      installIos: 'Instalar no iOS',
      installedBadge: 'App Instalado',
      iosTitle: 'Instalar no iPhone ou iPad',
      iosStep1: 'No Safari, toque no ícone de Compartilhar (o quadrado com uma seta para cima na barra inferior).',
      iosStep2: 'Role para baixo e selecione "Adicionar à Tela de Início".',
      iosStep3: 'Toque em "Adicionar" no canto superior direito para criar o ícone do aplicativo.',
      iosNote: 'Pronto! O guia funcionará em tela cheia e offline como um aplicativo nativo.',
      desktopHelpTitle: 'Como instalar este PWA',
      desktopHelp1: 'No Chrome ou Edge: clique no ícone de instalação (computador com seta para baixo) na barra de endereços do navegador.',
      desktopHelp2: 'No Android: toque no botão "Instalar App" ou no menu do navegador (três pontos) > "Instalar aplicativo".',
      desktopHelp3: 'O aplicativo funcionará offline, sem barras de navegador e com inicialização ultrarrápida.',
      close: 'Entendido',
      successMsg: 'Aplicativo instalado com sucesso!'
    },
    en: {
      installBtn: 'Install App',
      installMobile: 'Install on Mobile',
      installIos: 'Install on iOS',
      installedBadge: 'App Installed',
      iosTitle: 'Install on iPhone or iPad',
      iosStep1: 'In Safari, tap the Share icon (square with an arrow pointing up at the bottom).',
      iosStep2: 'Scroll down and tap "Add to Home Screen".',
      iosStep3: 'Tap "Add" in the top right corner to create the app icon.',
      iosNote: 'Ready! The guide will now work in full screen and offline like a native app.',
      desktopHelpTitle: 'How to install this PWA',
      desktopHelp1: 'On Chrome or Edge: click the install icon (computer with down arrow) in the browser address bar.',
      desktopHelp2: 'On Android: tap the "Install App" button or browser menu > "Install app".',
      desktopHelp3: 'The app works offline, without browser address bars, and launches instantly.',
      close: 'Got it',
      successMsg: 'Application installed successfully!'
    },
    es: {
      installBtn: 'Instalar App',
      installMobile: 'Instalar en Móvil',
      installIos: 'Instalar en iOS',
      installedBadge: 'App Instalada',
      iosTitle: 'Instalar en iPhone o iPad',
      iosStep1: 'En Safari, toca el botón de Compartir (cuadrado con una flecha hacia arriba).',
      iosStep2: 'Baja y selecciona "Añadir a pantalla de inicio".',
      iosStep3: 'Toca "Añadir" en la esquina superior derecha para crear el icono.',
      iosNote: '¡Listo! El manual funcionará en pantalla completa y offline como app nativa.',
      desktopHelpTitle: 'Cómo instalar esta PWA',
      desktopHelp1: 'En Chrome o Edge: haz clic en el icono de instalación en la barra de direcciones.',
      desktopHelp2: 'En Android: toca el botón "Instalar App" o en el menú > "Instalar aplicación".',
      desktopHelp3: 'La app funciona offline, a pantalla completa y con carga ultra rápida.',
      close: 'Entendido',
      successMsg: '¡Aplicación instalada con éxito!'
    }
  };

  const t = labels[language] || labels.pt;

  const handleInstallClick = async () => {
    if (isInstallable) {
      const outcome = await install();
      if (outcome) {
        setJustInstalled(true);
        setTimeout(() => setJustInstalled(false), 5000);
      }
    } else if (isIOS) {
      setShowIOSModal(true);
    } else {
      setShowDesktopHelp(true);
    }
  };

  // If already running standalone
  if (isInstalled) {
    if (variant === 'sidebar') {
      return (
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs">
          <CheckCircle className="w-4 h-4 shrink-0 text-emerald-400" />
          <span>{t.installedBadge} (PWA)</span>
        </div>
      );
    }
    return null;
  }

  return (
    <>
      <button
        onClick={handleInstallClick}
        title={t.installBtn}
        aria-label={t.installBtn}
        className={`inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg border text-xs font-semibold cursor-pointer transition-all duration-200 shadow-sm ${
          isInstallable || isIOS
            ? 'border-violet-500/60 bg-gradient-to-r from-violet-600/20 to-indigo-600/20 hover:from-violet-600/30 hover:to-indigo-600/30 text-violet-300 hover:text-white hover:border-violet-400'
            : 'border-slate-700/80 bg-slate-800/50 hover:bg-slate-800 text-slate-300 hover:text-white'
        }`}
      >
        <Download className="w-3.5 h-3.5 text-violet-400" />
        <span className="hidden sm:inline">{isIOS ? t.installIos : t.installBtn}</span>
        <span className="sm:hidden">PWA</span>
        <span className="text-[10px] px-1 py-0.2 rounded bg-violet-500/30 text-violet-200 font-mono">
          App
        </span>
      </button>

      {/* iOS Safari step-by-step modal */}
      {showIOSModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-md rounded-2xl bg-slate-900 border border-violet-500/40 p-6 text-white shadow-2xl">
            <button
              onClick={() => setShowIOSModal(false)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-violet-600/20 text-violet-400 border border-violet-500/30">
                <Smartphone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">{t.iosTitle}</h3>
                <p className="text-xs text-slate-400">Instalação direta pelo navegador Safari</p>
              </div>
            </div>

            <div className="space-y-3.5 text-xs text-slate-300 mb-5">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                <div className="p-1.5 rounded-lg bg-blue-500/20 text-blue-400 shrink-0">
                  <Share className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-semibold text-white">Passo 1</p>
                  <p className="text-slate-300 mt-0.5">{t.iosStep1}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                <div className="p-1.5 rounded-lg bg-violet-500/20 text-violet-400 shrink-0">
                  <PlusSquare className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-semibold text-white">Passo 2</p>
                  <p className="text-slate-300 mt-0.5">{t.iosStep2}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                <div className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 shrink-0">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-semibold text-white">Passo 3</p>
                  <p className="text-slate-300 mt-0.5">{t.iosStep3}</p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-violet-950/40 border border-violet-500/30 text-violet-300 text-[11px] leading-relaxed">
                ✨ {t.iosNote}
              </div>
            </div>

            <button
              onClick={() => setShowIOSModal(false)}
              className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-semibold text-sm transition shadow-lg cursor-pointer"
            >
              {t.close}
            </button>
          </div>
        </div>
      )}

      {/* Desktop / Generic browser install instructions dialog */}
      {showDesktopHelp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-md rounded-2xl bg-slate-900 border border-indigo-500/40 p-6 text-white shadow-2xl">
            <button
              onClick={() => setShowDesktopHelp(false)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30">
                <Download className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">{t.desktopHelpTitle}</h3>
                <p className="text-xs text-slate-400">Instalação PWA multiplataforma</p>
              </div>
            </div>

            <div className="space-y-3 text-xs text-slate-300 mb-5">
              <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                <p className="font-semibold text-indigo-300 mb-1">💻 Computador (Chrome / Edge / Brave):</p>
                <p className="text-slate-300 leading-relaxed">{t.desktopHelp1}</p>
              </div>

              <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                <p className="font-semibold text-indigo-300 mb-1">📱 Celular Android:</p>
                <p className="text-slate-300 leading-relaxed">{t.desktopHelp2}</p>
              </div>

              <div className="p-3 rounded-xl bg-indigo-950/40 border border-indigo-500/30 text-indigo-200 leading-relaxed">
                ⚡ {t.desktopHelp3}
              </div>
            </div>

            <button
              onClick={() => setShowDesktopHelp(false)}
              className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-semibold text-sm transition shadow-lg cursor-pointer"
            >
              {t.close}
            </button>
          </div>
        </div>
      )}
    </>
  );
};
