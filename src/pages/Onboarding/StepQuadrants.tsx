import { Button } from '../../components/ui/Button';

export function StepQuadrants({ onNext }: { onNext: () => void }) {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="text-center">
        <h2 className="text-3xl font-display text-[var(--gold)] mb-2">Your Four Directions</h2>
        <p className="text-[var(--text-muted)]">We map life into four quadrants. You can customize these later.</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {['North: Career', 'East: Relationships', 'South: Health', 'West: Growth'].map((q) => (
          <div key={q} className="p-4 border border-[var(--border)] rounded-xl text-center text-[var(--text-primary)] font-display">
            {q}
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Button size="lg" onClick={onNext}>Set Coordinates</Button>
      </div>
    </div>
  );
}
