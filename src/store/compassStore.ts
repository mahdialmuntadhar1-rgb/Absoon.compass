import { create } from 'zustand';
import { CompassQuadrant } from '../types';
import { COMPASS_QUADRANTS } from '../constants/compass.constants';

interface CompassState {
  quadrants: Record<string, CompassQuadrant>;
  updateQuadrant: (id: string, config: Partial<CompassQuadrant>) => void;
}

export const useCompassStore = create<CompassState>((set) => ({
  quadrants: COMPASS_QUADRANTS,
  updateQuadrant: (id, config) =>
    set((state) => ({
      quadrants: {
        ...state.quadrants,
        [id]: { ...state.quadrants[id], ...config },
      },
    })),
}));
