import { cn } from '../../utils/cn';

export function DirectionLabel({ direction, label, className }: { direction: string, label: string, className?: string }) {
  return (
    <div className={cn("absolute flex flex-col items-center text-center", className)}>
      <span className="font-display text-2xl text-[var(--gold)] leading-none">{direction}</span>
      <span className="text-[10px] uppercase tracking-widest text-[var(--text-muted)] mt-1 whitespace-nowrap">{label}</span>
    </div>
  );
}
