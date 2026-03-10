import { Button } from '../../components/ui/Button';
import { Compass } from 'lucide-react';

export function StepAIIntro({ onNext }: { onNext: () => void }) {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 text-center">
      <Compass className="w-16 h-16 text-[var(--gold)] mx-auto animate-pulse-gold rounded-full" />
      <div>
        <h2 className="text-3xl font-display text-[var(--gold)] mb-2">Meet Your Guide</h2>
        <p className="text-[var(--text-muted)] max-w-md mx-auto">
          I am your AI compass. I will help you reflect, set intentions, and find your way when the path is unclear.
        </p>
      </div>
      <Button size="lg" onClick={onNext} className="px-12">Enter Dashboard</Button>
    </div>
  );
}
