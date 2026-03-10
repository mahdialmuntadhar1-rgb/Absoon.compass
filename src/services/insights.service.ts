import { Insight } from '../types';
import { geminiService } from './gemini.service';

let mockInsights: Insight[] = [
  { id: '1', userId: 'mock-user-1', content: 'Your career path is aligning with your true north.', type: 'directional', quadrant: 'north', createdAt: new Date().toISOString() },
];

export const insightsService = {
  getInsights: async (): Promise<Insight[]> => {
    return new Promise((resolve) => setTimeout(() => resolve([...mockInsights]), 500));
  },
  generateInsight: async (context: string): Promise<Insight> => {
    const content = await geminiService.generateInsight(context);
    const newInsight: Insight = {
      id: Math.random().toString(36).substring(7),
      userId: 'mock-user-1',
      content,
      type: 'directional',
      createdAt: new Date().toISOString(),
    };
    mockInsights.push(newInsight);
    return newInsight;
  },
};
