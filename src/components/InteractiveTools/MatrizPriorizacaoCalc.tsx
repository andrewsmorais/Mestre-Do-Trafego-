import React, { useState } from 'react';
import { Calculator, Plus, Trash2, CheckCircle2 } from 'lucide-react';

interface Task {
  id: string;
  name: string;
  impact: number;
  confidence: number;
  ease: number;
}

export const MatrizPriorizacaoCalc: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: '1', name: 'Reescrever topo (TL;DR) das páginas de maior tráfego', impact: 5, confidence: 4, ease: 5 },
    { id: '2', name: 'Corrigir noindex acidental e URLs canônicas', impact: 5, confidence: 5, ease: 4 },
    { id: '3', name: 'Adicionar prova e casos reais com números na página de produto', impact: 4, confidence: 4, ease: 3 },
    { id: '4', name: 'Criar silo de conteúdo para palavras-chave secundárias', impact: 3, confidence: 3, ease: 2 }
  ]);

  const [newTaskName, setNewTaskName] = useState('');
  const [newImpact, setNewImpact] = useState(4);
  const [newConfidence, setNewConfidence] = useState(4);
  const [newEase, setNewEase] = useState(4);

  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskName.trim()) return;
    setTasks(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        name: newTaskName.trim(),
        impact: newImpact,
        confidence: newConfidence,
        ease: newEase
      }
    ]);
    setNewTaskName('');
  };

  const removeTask = (id: string) => {
    setTasks(prev => prev.filter(t => t.id !== id));
  };

  const sortedTasks = [...tasks].sort((a, b) => (b.impact * b.confidence * b.ease) - (a.impact * a.confidence * a.ease));

  return (
    <div className="bg-white rounded-xl sm:rounded-2xl border-2 border-slate-200 p-4 sm:p-8 my-6 shadow-xs">
      <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-amber-500/20 text-amber-700 flex items-center justify-center font-bold shrink-0">
          <Calculator className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>
        <div>
          <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-amber-800 block">
            Ferramenta Interativa · Módulo 13
          </span>
          <h3 className="text-lg sm:text-xl font-serif font-bold text-slate-950 leading-snug">
            Matriz de Priorização (Impacto × Confiança × Facilidade)
          </h3>
        </div>
      </div>

      <p className="text-xs sm:text-sm text-slate-600 mb-4 sm:mb-6 leading-relaxed">
        Dê notas de 1 a 5 para cada critério. A fórmula matemática do livro multiplica os 3 valores (1 a 125). Uma tarefa de pontuação alta entra antes de curiosidades técnicas sem retorno financeiro.
      </p>

      {/* Add New Task Form */}
      <form onSubmit={addTask} className="bg-slate-50 p-4 rounded-xl border border-slate-200 mb-6 space-y-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Nome da Melhoria ou Hipótese de SEO/AEO/GEO:
          </label>
          <input
            type="text"
            value={newTaskName}
            onChange={(e) => setNewTaskName(e.target.value)}
            placeholder="Ex.: Adicionar FAQ com objeções de preço no serviço X"
            className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/40"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-[11px] font-bold text-slate-700 mb-1">
              Impacto Comercial (1 a 5):
            </label>
            <input
              type="number"
              min={1}
              max={5}
              value={newImpact}
              onChange={(e) => setNewImpact(Number(e.target.value))}
              className="w-full text-xs px-3 py-2 rounded-lg border border-slate-300 bg-white"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-700 mb-1">
              Confiança na Hipótese (1 a 5):
            </label>
            <input
              type="number"
              min={1}
              max={5}
              value={newConfidence}
              onChange={(e) => setNewConfidence(Number(e.target.value))}
              className="w-full text-xs px-3 py-2 rounded-lg border border-slate-300 bg-white"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-700 mb-1">
              Facilidade Técnica (1 a 5):
            </label>
            <input
              type="number"
              min={1}
              max={5}
              value={newEase}
              onChange={(e) => setNewEase(Number(e.target.value))}
              className="w-full text-xs px-3 py-2 rounded-lg border border-slate-300 bg-white"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
        >
          <Plus className="w-4 h-4 text-amber-400" />
          <span>Calcular e Adicionar à Fila de Prioridades</span>
        </button>
      </form>

      {/* Task Ranking Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="border-b border-slate-200 text-slate-500 font-mono text-[11px]">
              <th className="py-2.5 px-3">Rank</th>
              <th className="py-2.5 px-3">Tarefa / Hipótese</th>
              <th className="py-2.5 px-3 text-center">Impacto</th>
              <th className="py-2.5 px-3 text-center">Confiança</th>
              <th className="py-2.5 px-3 text-center">Facilidade</th>
              <th className="py-2.5 px-3 text-center font-bold text-slate-900">Score</th>
              <th className="py-2.5 px-3 text-right">Ação</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {sortedTasks.map((t, index) => {
              const score = t.impact * t.confidence * t.ease;
              return (
                <tr key={t.id} className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-3 px-3 font-mono font-bold text-slate-400">
                    #{index + 1}
                  </td>
                  <td className="py-3 px-3 font-medium text-slate-900">
                    {t.name}
                  </td>
                  <td className="py-3 px-3 text-center text-slate-600">{t.impact}/5</td>
                  <td className="py-3 px-3 text-center text-slate-600">{t.confidence}/5</td>
                  <td className="py-3 px-3 text-center text-slate-600">{t.ease}/5</td>
                  <td className="py-3 px-3 text-center font-mono font-bold text-base text-amber-800">
                    {score}
                  </td>
                  <td className="py-3 px-3 text-right">
                    <button
                      onClick={() => removeTask(t.id)}
                      className="text-slate-400 hover:text-rose-600 p-1 rounded cursor-pointer transition-colors"
                      title="Excluir tarefa"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

    </div>
  );
};
