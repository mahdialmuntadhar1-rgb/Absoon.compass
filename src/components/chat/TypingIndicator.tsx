export function TypingIndicator() {
  return (
    <div className="flex gap-4 mb-6">
      <div className="w-8 h-8 rounded-full bg-[var(--gold)]/10 text-[var(--gold)] flex items-center justify-center shrink-0">
        <div className="flex gap-1">
          <span className="w-1 h-1 bg-[var(--gold)] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
          <span className="w-1 h-1 bg-[var(--gold)] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
          <span className="w-1 h-1 bg-[var(--gold)] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      </div>
    </div>
  );
}
