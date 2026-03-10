import { useState } from 'react';
import { geminiService } from '../services/gemini.service';
import { GeminiMessage } from '../types';

export const useGemini = () => {
  const [messages, setMessages] = useState<GeminiMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (content: string) => {
    const userMsg: GeminiMessage = { role: 'user', content };
    setMessages((prev) => [...prev, userMsg]);
    setIsLoading(true);

    try {
      const response = await geminiService.chat(content);
      setMessages((prev) => [...prev, { role: 'model', content: response }]);
    } catch (error) {
      console.error('Failed to send message:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return { messages, isLoading, sendMessage };
};
