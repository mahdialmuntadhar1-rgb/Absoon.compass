import { CompassQuadrant } from '../../types';
import { GoalProgress } from '../../components/goals/GoalProgress';

export function QuadrantCard({ config, progress }: { config: CompassQuadrant, progress: number }) {
  return (
    <div className="compass-card p-6 flex flex-col justify-between hover:border-[var(--gold)]/30 transition-colors cursor-pointer group">
      <div>
        <h3 className="font-display text-xl text-[var(--text-primary)] mb-1 group-hover:text-[var(--gold)] transition-colors">{config.label}</h3>
        <p className="text-sm text-[var(--text-muted)] mb-6">{config.description}</p>
      </div>
      <div>
        <div className="flex justify-between text-xs font-mono text-[var(--text-faint)] mb-2">
          <span>Progress</span>
          <span>{progress}%</span>
        </div>
        <GoalProgress progress={progress} />
      </div>
    </div>
  );
}
