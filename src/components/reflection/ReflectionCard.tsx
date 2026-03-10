import { Reflection } from '../../types';
import { formatRelativeTime } from '../../utils/formatters';

export function ReflectionCard({ entry }: { entry: Reflection }) {
  return (
    <div className="compass-card p-5">
      <div className="flex justify-between items-center mb-3">
        <span className="text-xs font-mono text-[var(--text-faint)]">{formatRelativeTime(entry.createdAt)}</span>
        {entry.mood && <span className="text-sm">{entry.mood}</span>}
      </div>
      <p className="text-[var(--text-primary)] leading-relaxed whitespace-pre-wrap">{entry.content}</p>
    </div>
  );
}
