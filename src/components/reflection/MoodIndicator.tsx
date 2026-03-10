export function MoodIndicator({ mood }: { mood: string }) {
  return (
    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[var(--bg-elevated)] border border-[var(--border)] text-sm">
      {mood}
    </div>
  );
}
