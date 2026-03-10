export type CompassDirection = 'north' | 'south' | 'east' | 'west';

export interface CompassQuadrant {
  id: CompassDirection;
  label: string;           // User-defined label e.g. "Career & Purpose"
  description: string;
  color: string;           // Tailwind color class or hex
  icon: string;            // Lucide icon name
  goalCount: number;
  progress: number;        // 0–100
}

export interface CompassConfig {
  north: CompassQuadrant;
  south: CompassQuadrant;
  east: CompassQuadrant;
  west: CompassQuadrant;
}
