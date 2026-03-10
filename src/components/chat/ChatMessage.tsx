import { GeminiMessage } from '../../types';
import { cn } from '../../utils/cn';
import { Compass, User } from 'lucide-react';

export function ChatMessage({ message }: { message: GeminiMessage }) {
  const isModel = message.role === 'model';
  return (
    <div className={cn("flex gap-4 mb-6", isModel ? "flex-row" : "flex-row-reverse")}>
      <div className={cn("w-8 h-8 rounded-full flex items-center justify-center shrink-0", isModel ? "bg-[var(--gold)]/10 text-[var(--gold)]" : "bg-[var(--bg-elevated)] text-[var(--text-muted)]")}>
        {isModel ? <Compass className="w-4 h-4" /> : <User className="w-4 h-4" />}
      </div>
      <div className={cn("compass-card p-4 max-w-[80%]", isModel ? "border-[var(--gold)]/20" : "bg-[var(--bg-elevated)] border-transparent")}>
        <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
      </div>
    </div>
  );
}
