import { Goal } from '../../types';
import { Badge } from '../ui/Badge';
import { formatDate } from '../../utils/formatters';

export function GoalCard({ goal }: { goal: Goal }) {
  return (
    <div className="compass-card p-5 hover:border-[var(--gold)]/30 transition-colors cursor-pointer">
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-display text-lg text-[var(--text-primary)]">{goal.title}</h3>
        <Badge variant={goal.status === 'completed' ? 'default' : 'outline'}>
          {goal.status.replace('_', ' ')}
        </Badge>
      </div>
      <p className="text-sm text-[var(--text-muted)] mb-4 line-clamp-2">{goal.description || 'No description provided.'}</p>
      <div className="flex items-center justify-between text-xs font-mono text-[var(--text-faint)]">
        <span className="uppercase tracking-wider text-[var(--gold)]">{goal.quadrant}</span>
        {goal.targetDate && <span>Target: {formatDate(goal.targetDate)}</span>}
      </div>
    </div>
  );
}
