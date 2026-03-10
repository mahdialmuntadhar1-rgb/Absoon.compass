import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';

export function StepIdentity({ onNext }: { onNext: () => void }) {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="text-center">
        <h2 className="text-3xl font-display text-[var(--gold)] mb-2">Who is navigating?</h2>
        <p className="text-[var(--text-muted)]">Every journey begins with a name.</p>
      </div>
      <div className="space-y-4 max-w-sm mx-auto">
        <Input placeholder="Your Name" className="text-center text-lg py-6" autoFocus />
        <Button className="w-full" size="lg" onClick={onNext}>Continue</Button>
      </div>
    </div>
  );
}
