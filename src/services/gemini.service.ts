import { GoogleGenAI } from '@google/genai';
import { GEMINI_MODEL, GEMINI_SYSTEM_PROMPT } from '../constants/gemini.constants';

const apiKey = (import.meta as any).env.VITE_GEMINI_API_KEY || process.env.GEMINI_API_KEY;
const ai = new GoogleGenAI({ apiKey: apiKey || 'mock-key' });

export const geminiService = {
  chat: async (message: string): Promise<string> => {
    try {
      const chat = ai.chats.create({
        model: GEMINI_MODEL,
        config: {
          systemInstruction: GEMINI_SYSTEM_PROMPT,
        },
      });
      const response = await chat.sendMessage({ message });
      return response.text || 'The compass is silent.';
    } catch (error) {
      console.error('Gemini chat error:', error);
      return 'The stars are clouded right now. Please try again later.';
    }
  },
  generateInsight: async (context: string): Promise<string> => {
    try {
      const response = await ai.models.generateContent({
        model: GEMINI_MODEL,
        contents: `Based on this reflection, provide a short, cartographic-themed insight: "${context}"`,
        config: {
          systemInstruction: GEMINI_SYSTEM_PROMPT,
        }
      });
      return response.text || 'Keep navigating forward.';
    } catch (error) {
      console.error('Gemini insight error:', error);
      return 'A new path is forming.';
    }
  }
};
