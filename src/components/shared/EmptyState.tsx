import { Compass } from 'lucide-react';

export function EmptyState({ title, description }: { title: string, description: string }) {
  return (
    <div className="flex flex-col items-center justify-center p-12 text-center compass-card">
      <Compass className="w-12 h-12 text-[var(--text-faint)] mb-4" />
      <h3 className="text-lg font-display text-[var(--text-primary)]">{title}</h3>
      <p className="text-[var(--text-muted)] mt-2">{description}</p>
    </div>
  );
}
