import { CompassDirection } from './compass.types';

export type GoalStatus = 'active' | 'paused' | 'completed' | 'abandoned';
export type GoalPriority = 'high' | 'medium' | 'low';

export interface Milestone {
  id: string;
  title: string;
  completed: boolean;
  dueDate?: string;
  completedAt?: string;
}

export interface Goal {
  id: string;
  userId: string;
  title: string;
  description: string;
  quadrant: CompassDirection;
  status: GoalStatus;
  priority: GoalPriority;
  progress: number;        // 0–100
  milestones: Milestone[];
  startDate: string;
  targetDate?: string;
  completedAt?: string;
  aiInsight?: string;      // Last Gemini-generated insight
  createdAt: string;
  updatedAt: string;
}
