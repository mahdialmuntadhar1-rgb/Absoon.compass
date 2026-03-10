import { Goal } from '../types';

let mockGoals: Goal[] = [
  { id: '1', userId: 'mock-user-1', title: 'Launch Startup', description: '', status: 'active', priority: 'high', progress: 0, milestones: [], startDate: new Date().toISOString(), quadrant: 'north', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: '2', userId: 'mock-user-1', title: 'Run Marathon', description: '', status: 'active', priority: 'medium', progress: 0, milestones: [], startDate: new Date().toISOString(), quadrant: 'south', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
];

export const goalsService = {
  getGoals: async (): Promise<Goal[]> => {
    return new Promise((resolve) => setTimeout(() => resolve([...mockGoals]), 500));
  },
  createGoal: async (goal: Omit<Goal, 'id' | 'createdAt' | 'updatedAt' | 'userId'>): Promise<Goal> => {
    const newGoal: Goal = {
      ...goal,
      id: Math.random().toString(36).substring(7),
      userId: 'mock-user-1',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    mockGoals.push(newGoal);
    return newGoal;
  },
};
