export function GoalProgress({ progress }: { progress: number }) {
  return (
    <div className="w-full h-2 bg-[var(--bg-elevated)] rounded-full overflow-hidden">
      <div 
        className="h-full bg-[var(--gold)] transition-all duration-500 ease-out"
        style={{ width: `${Math.max(0, Math.min(100, progress))}%` }}
      />
    </div>
  );
}
