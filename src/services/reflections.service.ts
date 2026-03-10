import { Reflection } from '../types';

let mockReflections: Reflection[] = [
  { id: '1', userId: 'mock-user-1', content: 'Feeling lost today, but the compass points north.', mood: 3, relatedQuadrants: ['north'], relatedGoalIds: [], date: new Date().toISOString(), createdAt: new Date().toISOString() },
];

export const reflectionsService = {
  getReflections: async (): Promise<Reflection[]> => {
    return new Promise((resolve) => setTimeout(() => resolve([...mockReflections]), 500));
  },
  createReflection: async (content: string): Promise<Reflection> => {
    const newEntry: Reflection = {
      id: Math.random().toString(36).substring(7),
      userId: 'mock-user-1',
      content,
      mood: 3,
      relatedQuadrants: [],
      relatedGoalIds: [],
      date: new Date().toISOString(),
      createdAt: new Date().toISOString(),
    };
    mockReflections.push(newEntry);
    return newEntry;
  },
};
