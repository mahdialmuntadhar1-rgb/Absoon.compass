import { CompassConfig } from './compass.types';

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
  compassConfig: CompassConfig;
  onboardingCompleted: boolean;
  createdAt: string;
}
