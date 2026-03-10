import { cn } from '../../utils/cn';

export function Avatar({ src, fallback, className }: { src?: string, fallback: string, className?: string }) {
  return (
    <div className={cn("h-10 w-10 rounded-full bg-[var(--bg-elevated)] border border-[var(--border)] flex items-center justify-center overflow-hidden", className)}>
      {src ? (
        <img src={src} alt="Avatar" className="h-full w-full object-cover" referrerPolicy="no-referrer" />
      ) : (
        <span className="text-[var(--gold)] font-display text-sm">{fallback}</span>
      )}
    </div>
  );
}
