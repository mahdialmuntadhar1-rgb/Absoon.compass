import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from '../ui/Button';

export function ChatInput({ onSend, isLoading }: { onSend: (msg: string) => void, isLoading: boolean }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    onSend(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 p-4 border-t border-[var(--border)] bg-[var(--bg-secondary)]">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask your compass..."
        className="flex-1 bg-[var(--bg-elevated)] border border-[var(--border)] rounded-full px-4 py-2 text-sm focus:outline-none focus:border-[var(--gold)] transition-colors"
        disabled={isLoading}
      />
      <Button type="submit" size="icon" disabled={!input.trim() || isLoading} className="rounded-full">
        <Send className="w-4 h-4" />
      </Button>
    </form>
  );
}
