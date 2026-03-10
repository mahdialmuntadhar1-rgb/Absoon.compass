import { useCompassStore } from '../store/compassStore';

export const useCompass = () => {
  const quadrants = useCompassStore((state) => state.quadrants);
  const updateQuadrant = useCompassStore((state) => state.updateQuadrant);

  return { quadrants, updateQuadrant };
};
