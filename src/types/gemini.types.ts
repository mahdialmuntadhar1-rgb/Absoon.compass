export type GeminiMessage = {
  role: 'user' | 'model';
  content: string;
};

export type GeminiChatSession = {
  id: string;
  messages: GeminiMessage[];
  created_at: string;
};
