import { useEffect, useRef } from 'react';
import { PageWrapper } from '../../components/layout/PageWrapper';
import { useGemini } from '../../hooks/useGemini';
import { ChatMessage } from '../../components/chat/ChatMessage';
import { ChatInput } from '../../components/chat/ChatInput';
import { TypingIndicator } from '../../components/chat/TypingIndicator';

export function CompassChat() {
  const { messages, isLoading, sendMessage } = useGemini();
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  return (
    <PageWrapper className="max-w-4xl mx-auto h-[calc(100vh-8rem)] flex flex-col">
      <header className="mb-6">
        <h1 className="text-4xl font-display text-[var(--text-primary)] mb-2">The Compass</h1>
        <p className="text-[var(--text-muted)]">Consult your AI guide for direction.</p>
      </header>

      <div className="flex-1 compass-card flex flex-col overflow-hidden">
        <div className="flex-1 overflow-y-auto p-6">
          {messages.length === 0 ? (
            <div className="h-full flex items-center justify-center text-center">
              <p className="text-[var(--text-muted)] italic font-display text-lg">"Where to, traveler?"</p>
            </div>
          ) : (
            messages.map((msg, i) => <ChatMessage key={i} message={msg} />)
          )}
          {isLoading && <TypingIndicator />}
          <div ref={bottomRef} />
        </div>
        <ChatInput onSend={sendMessage} isLoading={isLoading} />
      </div>
    </PageWrapper>
  );
}
