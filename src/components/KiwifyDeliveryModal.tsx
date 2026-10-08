import React, { useState } from 'react';
import { 
  X, 
  ShoppingBag, 
  ExternalLink, 
  Download, 
  Globe, 
  FileText, 
  CheckCircle, 
  Copy, 
  Check, 
  HelpCircle,
  FolderArchive,
  Layers,
  Sparkles
} from 'lucide-react';
import { Language, TRANSLATIONS } from '../i18n/translations.ts';

interface KiwifyDeliveryModalProps {
  isOpen: boolean;
  onClose: () => void;
  language?: Language;
  isDark?: boolean;
}

export const KiwifyDeliveryModal: React.FC<KiwifyDeliveryModalProps> = ({
  isOpen,
  onClose,
  language = 'pt',
  isDark = false
}) => {
  const [copiedLink, setCopiedLink] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState<'link' | 'zip' | 'pdf'>('link');

  if (!isOpen) return null;

  const currentUrl = window.location.href;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-xs overflow-y-auto print:hidden">
      <div className={`rounded-2xl sm:rounded-3xl border shadow-2xl max-w-2xl w-full my-6 overflow-hidden animate-in fade-in duration-200 ${
        isDark ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
      }`}>
        
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-950 via-blue-950 to-slate-950 text-white p-5 sm:p-6 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400 shrink-0">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-400 block">
                GUIA OFICIAL DO PRODUTOR DIGITAL
              </span>
              <h3 className="text-base sm:text-lg font-serif font-bold text-white leading-tight">
                Como Entregar este Livro Interativo na Kiwify
              </h3>
            </div>
          </div>

          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Introduction */}
        <div className={`p-4 sm:p-5 border-b text-xs sm:text-sm leading-relaxed ${
          isDark ? 'bg-slate-950/40 border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'
        }`}>
          Você tem <strong>3 opções profissionais</strong> para disponibilizar este produto aos seus clientes que comprarem na Kiwify. Escolha o formato ideal para a sua estratégia:
        </div>

        {/* Method Selector Tabs */}
        <div className="p-5 sm:p-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            
            <button
              onClick={() => setSelectedMethod('link')}
              className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                selectedMethod === 'link'
                  ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 ring-2 ring-emerald-500/20 text-emerald-950 dark:text-emerald-200 font-bold'
                  : isDark ? 'border-slate-800 text-slate-400 hover:bg-slate-800/60' : 'border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-1.5 text-xs mb-1">
                <Globe className="w-3.5 h-3.5 text-emerald-500" />
                <span>Opção 1 (Recomendada)</span>
              </div>
              <div className="text-xs">Link Direto / Área de Membros</div>
            </button>

            <button
              onClick={() => setSelectedMethod('pdf')}
              className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                selectedMethod === 'pdf'
                  ? 'bg-blue-50 dark:bg-blue-950/40 border-blue-500 ring-2 ring-blue-500/20 text-blue-950 dark:text-blue-200 font-bold'
                  : isDark ? 'border-slate-800 text-slate-400 hover:bg-slate-800/60' : 'border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-1.5 text-xs mb-1">
                <FileText className="w-3.5 h-3.5 text-blue-500" />
                <span>Opção 2</span>
              </div>
              <div className="text-xs">E-book em PDF Encadernado</div>
            </button>

            <button
              onClick={() => setSelectedMethod('zip')}
              className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                selectedMethod === 'zip'
                  ? 'bg-amber-50 dark:bg-amber-950/40 border-amber-500 ring-2 ring-amber-500/20 text-amber-950 dark:text-amber-200 font-bold'
                  : isDark ? 'border-slate-800 text-slate-400 hover:bg-slate-800/60' : 'border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-1.5 text-xs mb-1">
                <FolderArchive className="w-3.5 h-3.5 text-amber-500" />
                <span>Opção 3</span>
              </div>
              <div className="text-xs">Arquivo ZIP com Index.html</div>
            </button>

          </div>

          {/* METHOD 1 DETAILS */}
          {selectedMethod === 'link' && (
            <div className={`p-4 rounded-xl border space-y-3 ${
              isDark ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
            }`}>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider font-mono">
                  1. Link Direto na Área de Membros da Kiwify
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                  Mais Prático e Sem Suporte
                </span>
              </div>

              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                Dentro do seu produto na Kiwify, na aba <strong>Área de Membros (Kiwify Club)</strong> ou <strong>Entrega de Conteúdo</strong>, crie uma aula intitulada <em>"Acesso ao Leitor Digital Interativo"</em> e coloque o link do web app com um botão bonito.
              </p>

              <div className="p-3 rounded-lg bg-slate-900 text-slate-200 text-xs font-mono flex items-center justify-between gap-2 border border-slate-800">
                <span className="truncate">{currentUrl}</span>
                <button
                  onClick={handleCopyLink}
                  className="px-2.5 py-1 rounded bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold shrink-0 transition-colors cursor-pointer flex items-center gap-1"
                >
                  {copiedLink ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedLink ? 'Copiado!' : 'Copiar Link'}</span>
                </button>
              </div>

              <div className="text-xs text-slate-600 dark:text-slate-400 space-y-1">
                <div className="font-semibold text-slate-900 dark:text-slate-100">Vantagens deste modelo:</div>
                <div>• O aluno acessa no celular ou computador imediatamente com 1 clique.</div>
                <div>• <strong>Progressive Web App (PWA):</strong> O aluno pode clicar em "Instalar App" e ter o aplicativo fixado na tela inicial do celular (Android ou iPhone), funcionando offline como app nativo!</div>
                <div>• As anotações e grifos do aluno ficam salvos automaticamente no navegador dele.</div>
                <div>• Sempre que você atualizar o conteúdo ou adicionar novas ferramentas, o aluno recebe a versão mais recente sem precisar baixar nada de novo.</div>
              </div>
            </div>
          )}

          {/* METHOD 2 DETAILS */}
          {selectedMethod === 'pdf' && (
            <div className={`p-4 rounded-xl border space-y-3 ${
              isDark ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
            }`}>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider font-mono">
                  2. Envio de Arquivo PDF Tradicional
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300">
                  Download Direto na Kiwify
                </span>
              </div>

              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                Você pode usar o botão <strong>"Baixar PDF"</strong> no canto superior direito deste leitor para gerar o PDF oficial em cores ou preto e branco e anexá-lo como arquivo na Kiwify.
              </p>

              <div className="text-xs text-slate-600 dark:text-slate-400 space-y-1">
                <div className="font-semibold text-slate-900 dark:text-slate-100">Passo a passo na Kiwify:</div>
                <div>1. Clique em "Baixar PDF" no topo e escolha "Em Cores (Editorial)".</div>
                <div>2. Salve o arquivo PDF no seu computador (ex: <code>Dominando-o-Google-Search-2026.pdf</code>).</div>
                <div>3. No painel da Kiwify, vá em <em>Produtos → Seu Produto → Entrega → Anexar arquivo para download</em>.</div>
                <div>4. O comprador baixa o PDF diretamente pelo e-mail ou painel de compras da Kiwify.</div>
              </div>
            </div>
          )}

          {/* METHOD 3 DETAILS */}
          {selectedMethod === 'zip' && (
            <div className={`p-4 rounded-xl border space-y-3 ${
              isDark ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
            }`}>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider font-mono">
                  3. Pacote ZIP Autônomo com Index.html
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">
                  Offline / Arquivo Local
                </span>
              </div>

              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                Este software foi construído como uma SPA (Single Page Application) estática. O build gerado pelo comando <code>npm run build</code> produz uma pasta <code>dist</code> com um arquivo <code>index.html</code> e os assets embutidos.
              </p>

              <div className="text-xs text-slate-600 dark:text-slate-400 space-y-1">
                <div className="font-semibold text-slate-900 dark:text-slate-100">Como funciona para o comprador:</div>
                <div>• O cliente baixa o arquivo <code>Leitor-Google-Search-2026.zip</code> na Kiwify.</div>
                <div>• Descompacta a pasta e clica duas vezes no arquivo <code>index.html</code>.</div>
                <div>• O livro abre no Chrome, Edge ou Safari dele mesmo sem conexão à internet!</div>
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className={`p-4 sm:p-5 border-t flex items-center justify-between ${
          isDark ? 'bg-slate-950 border-slate-800' : 'bg-slate-100 border-slate-200'
        }`}>
          <div className="text-xs text-slate-500">
            Dúvidas? Você pode usar a Opção 1 combinada com a Opção 2 na mesma entrega!
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-900 dark:bg-amber-500 text-white dark:text-slate-950 text-xs font-bold cursor-pointer transition-colors"
          >
            Entendido, fechar
          </button>
        </div>

      </div>
    </div>
  );
};
