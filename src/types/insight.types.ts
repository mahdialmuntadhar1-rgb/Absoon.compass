import { CompassDirection } from './compass.types';

export interface Insight {
  id: string;
  userId: string;
  content: string;
  type: string;
  quadrant?: CompassDirection;
  createdAt: string;
}
