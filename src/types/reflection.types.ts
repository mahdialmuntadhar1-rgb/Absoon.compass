import { CompassDirection } from './compass.types';

export type MoodLevel = 1 | 2 | 3 | 4 | 5;

export interface Reflection {
  id: string;
  userId: string;
  content: string;
  mood: MoodLevel;
  relatedQuadrants: CompassDirection[];
  relatedGoalIds: string[];
  aiResponse?: string;     // Gemini reflection on the entry
  date: string;
  createdAt: string;
}
