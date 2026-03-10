import { Compass } from 'lucide-react';

export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center p-8">
      <Compass className="w-8 h-8 text-[var(--gold)] animate-spin-slow" />
    </div>
  );
}
