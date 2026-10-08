import React from 'react';
import { 
  TrendingUp, 
  Magnet, 
  CheckCircle, 
  BadgeDollarSign, 
  HelpCircle, 
  ShieldCheck, 
  Award, 
  Lightbulb, 
  ArrowRight,
  Sparkles,
  PhoneCall,
  Calendar,
  MessageCircle,
  FileCheck
} from 'lucide-react';

interface BusinessConversionSectionProps {
  onOpenAudit: () => void;
}

export const BusinessConversionSection: React.FC<BusinessConversionSectionProps> = ({ onOpenAudit }) => {
  return (
    <section id="otimizacao-negocio" className="py-20 bg-white border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs font-semibold tracking-widest uppercase text-amber-700 mb-2">
            Módulo Estratégico · De Visitas a Faturamento
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight mb-4">
            Como Transformar Otimização em Negócio
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Métricas de vaidade não sustentam empresas. O trabalho de SEO, AEO e GEO só se completa quando conduz o visitante à ação comercial.
          </p>
        </div>

        {/* 3-Step Visual Progression (Atraia -> Convença -> Converta) - Styled after PDF page 3 */}
        <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-6 sm:p-10 text-white shadow-xl mb-16 border border-amber-500/30 relative overflow-hidden">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block mb-1">
              Ciclo de Três Movimentos
            </span>
            <h3 className="text-2xl font-serif font-bold text-white">
              O Fluxo que Conecta Conteúdo à Venda
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            
            {/* Step 1: Atraia */}
            <div className="bg-white/10 backdrop-blur-xs rounded-2xl p-6 border border-white/15 relative flex flex-col justify-between hover:bg-white/15 transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-300">
                    <Magnet className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-bold text-amber-400">
                    ETAPA 01
                  </span>
                </div>
                
                <h4 className="text-xl font-serif font-bold text-white mb-2">
                  1. Atraia
                </h4>
                
                <p className="text-sm text-slate-200 leading-relaxed mb-4">
                  Uma pessoa descobre seu conteúdo em uma busca no Google, vídeo no YouTube, menção em comunidade ou busca em marketplace.
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 text-xs text-slate-300">
                <strong>Sinal de sucesso:</strong> Visita de leitor qualificado com problema real para resolver.
              </div>
            </div>

            {/* Step 2: Convença */}
            <div className="bg-white/10 backdrop-blur-xs rounded-2xl p-6 border border-white/15 relative flex flex-col justify-between hover:bg-white/15 transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-300">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-bold text-amber-400">
                    ETAPA 02
                  </span>
                </div>
                
                <h4 className="text-xl font-serif font-bold text-white mb-2">
                  2. Convença
                </h4>
                
                <p className="text-sm text-slate-200 leading-relaxed mb-4">
                  Ela encontra resposta direta, prova concreta, comparação transparente e limites suficientes para confiar na sua proposta.
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 text-xs text-slate-300">
                <strong>Sinal de sucesso:</strong> Quebra de objeções antes mesmo do usuário precisar entrar em contato.
              </div>
            </div>

            {/* Step 3: Converta */}
            <div className="bg-white/10 backdrop-blur-xs rounded-2xl p-6 border border-white/15 relative flex flex-col justify-between hover:bg-white/15 transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-300">
                    <BadgeDollarSign className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-bold text-amber-400">
                    ETAPA 03
                  </span>
                </div>
                
                <h4 className="text-xl font-serif font-bold text-white mb-2">
                  3. Converta
                </h4>
                
                <p className="text-sm text-slate-200 leading-relaxed mb-4">
                  O próximo passo comercial é simples, claro e de baixíssima fricção: comprar, agendar, ligar, enviar WhatsApp ou pedir proposta.
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 text-xs text-slate-300">
                <strong>Sinal de sucesso:</strong> Lead gerado ou transação finalizada com alta margem.
              </div>
            </div>

          </div>

          {/* Quick Action triggers */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300">
            <span className="flex items-center gap-1.5">
              <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
              <span>Ligação direta</span>
            </span>
            <span className="flex items-center gap-1.5">
              <MessageCircle className="w-3.5 h-3.5 text-amber-400" />
              <span>Conversa no WhatsApp</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-amber-400" />
              <span>Agendamento de consulta</span>
            </span>
            <span className="flex items-center gap-1.5">
              <FileCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>Pedido de orçamento</span>
            </span>
          </div>
        </div>

        {/* DICA DE OURO - Luxury Box with Golden Gilded Borders */}
        <div className="mb-16 bg-gradient-to-r from-amber-50/90 via-amber-100/40 to-amber-50/90 border-2 border-amber-400/90 rounded-3xl p-6 sm:p-10 shadow-lg gold-border-glow relative overflow-hidden">
          {/* Subtle gold ornamental corner accents */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/15 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-amber-500/10 rounded-full blur-xl pointer-events-none" />

          <div className="flex flex-col sm:flex-row items-start gap-6 relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 text-slate-950 flex items-center justify-center shrink-0 shadow-md border border-amber-300">
              <Award className="w-8 h-8 text-slate-950" />
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-900 bg-amber-200/60 px-2.5 py-0.5 rounded-full border border-amber-300/80">
                  Dica de Ouro · Princípio Inegociável
                </span>
                <span className="text-xs text-amber-800 font-serif italic hidden sm:inline">
                  Do e-book Dominando o Google Search 2026
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-950 mb-3">
                Resultado Antes da Vaidade
              </h3>

              <blockquote className="text-base sm:text-lg text-slate-800 font-medium leading-relaxed mb-4">
                &ldquo;Posição no ranking, volume de impressões e citações de IA são sinais intermediários. O resultado final é sempre uma ação real de negócio: <span className="underline decoration-amber-500 decoration-2 underline-offset-4 text-slate-950 font-bold">venda, lead qualificado, ligação, visita física, agendamento, assinatura ou indicação</span>.&rdquo;
              </blockquote>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Se você celebra aumento de impressões sem analisar se o faturamento ou as conversões assistidas aumentaram, você está colecionando métricas vazias em vez de operar SEO de alta performance.
              </p>
            </div>
          </div>
        </div>

        {/* CAIXA DE REFLEXÃO - Visual Distinctive Frame (PDF page 3 & 4) */}
        <div className="mb-16 bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border-2 border-blue-900/60 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-3">
              <HelpCircle className="w-5 h-5 text-amber-400" />
              <span className="text-xs font-bold tracking-widest uppercase text-amber-400">
                Caixa de Reflexão · A Pergunta que Orienta o Livro
              </span>
            </div>

            <h3 className="text-xl sm:text-3xl font-serif font-bold text-white mb-6 leading-snug">
              Não pergunte apenas: <span className="text-slate-400 font-normal italic">&ldquo;Como faço esta página rankear?&rdquo;</span>
            </h3>

            {/* Core Question in Gilded Frame */}
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-950/80 via-slate-800 to-blue-950/80 border-2 border-amber-400/50 shadow-inner mb-6 text-center sm:text-left">
              <p className="text-lg sm:text-2xl font-serif font-semibold text-amber-200 leading-relaxed">
                &ldquo;Se uma pessoa descobrir minha marca por esta página, ela terá informação suficiente, motivos para confiar e um próximo passo claro para comprar?&rdquo;
              </p>
            </div>

            {/* The Two Traps avoided */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                <span className="text-xs font-bold uppercase tracking-wider text-rose-300 block mb-1">
                  Armadilha 1 Evitada
                </span>
                <h4 className="text-base font-bold text-white mb-2">
                  Produzir Tráfego Sem Conversão
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Evita que você gaste recursos atraindo milhares de visitantes descompromissados para artigos genéricos que não conduzem a nenhuma decisão de compra.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-300 block mb-1">
                  Armadilha 2 Evitada
                </span>
                <h4 className="text-base font-bold text-white mb-2">
                  Conteúdo Otimizado Apenas para Robôs
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Evita textos frios e burocráticos recheados de palavras-chave forçadas que não resolvem as dúvidas e inseguranças reais do leitor humano.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-400">
                Aplique esta reflexão antes de publicar qualquer nova página ou artigo.
              </span>
              <button
                onClick={onOpenAudit}
                className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold shadow-md transition-all flex items-center gap-2 cursor-pointer active:scale-95"
              >
                <span>Fazer Checklist Rápido da Minha Página</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Regra Prática & Pergunta de Auditoria Mini-Cards (from PDF page 3) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-2xs">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-900 block mb-2">
              Regra Prática da Busca 2026
            </span>
            <p className="text-sm text-slate-700 leading-relaxed mb-3">
              <strong>SEO</strong> cria acesso. <strong>AEO</strong> reduz o esforço de compreensão. <strong>GEO</strong> aumenta a chance de a informação circular em respostas generativas.
            </p>
            <p className="text-xs text-slate-500">
              Nenhuma técnica isolada garante citação: qualidade, rastreabilidade, contexto e reputação precisam trabalhar juntos.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-amber-50/50 border border-amber-200 shadow-2xs">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800 block mb-2">
              Pergunta de Auditoria
            </span>
            <p className="text-sm text-slate-800 leading-relaxed mb-3 font-medium">
              &ldquo;Se alguém descobrir minha marca por esta página, terá informação suficiente, motivos para confiar e um próximo passo claro para comprar?&rdquo;
            </p>
            <p className="text-xs text-slate-500">
              Se você não possui uma resposta ou prova para alguma objeção, esse é um investimento mais urgente do que publicar mais um artigo genérico.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
