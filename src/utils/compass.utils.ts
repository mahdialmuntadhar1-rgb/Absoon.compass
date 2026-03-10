import { CompassDirection } from '../types';

export const getQuadrantAngle = (quadrant: CompassDirection): number => {
  switch (quadrant) {
    case 'north': return 0;
    case 'east': return 90;
    case 'south': return 180;
    case 'west': return 270;
    default: return 0;
  }
};
