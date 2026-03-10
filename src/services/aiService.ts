import { GoogleGenAI } from '@google/genai';

// Initialize Gemini API
// Note: In a real app, you might want to handle the API key more securely
// or proxy requests through a backend. For this frontend-only stub,
// we assume the key is available via environment variables.
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

export const aiService = {
  async chatWithCompass(message: string, context: string = ''): Promise<string> {
    try {
      const systemInstruction = `You are Absoon.compass, an AI-powered personal life-navigation assistant. 
      Your goal is to help the user reflect, set goals, and find direction. 
      Be empathetic, insightful, and concise.
      Here is some context about the user: ${context}`;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: message,
        config: {
          systemInstruction,
          temperature: 0.7,
        },
      });

      return response.text || "I'm sorry, I couldn't process that right now.";
    } catch (error) {
      console.error("Error communicating with Gemini:", error);
      return "I'm having trouble connecting to my core systems. Please try again later.";
    }
  },
  
  async generateInsight(journalContent: string): Promise<string> {
      try {
          const response = await ai.models.generateContent({
              model: 'gemini-3-flash-preview',
              contents: `Analyze the following journal entry and provide a single, brief, actionable insight (max 2 sentences): "${journalContent}"`
          });
          return response.text || "Keep reflecting to uncover more insights.";
      } catch (error) {
          console.error("Error generating insight:", error);
          return "Insight generation temporarily unavailable.";
      }
  }
};
