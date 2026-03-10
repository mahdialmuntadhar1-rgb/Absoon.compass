import { CompassNeedle } from './CompassNeedle';
import { DirectionLabel } from './DirectionLabel';
import { useCompass } from '../../hooks/useCompass';

export function CompassRose() {
  const { quadrants } = useCompass();

  return (
    <div className="relative w-64 h-64 mx-auto my-12 flex items-center justify-center">
      {/* Outer decorative ring */}
      <div className="absolute inset-0 rounded-full border border-[var(--border)] border-dashed opacity-50 animate-spin-slow" style={{ animationDuration: '40s' }} />
      <div className="absolute inset-4 rounded-full border border-[var(--gold)] opacity-20" />
      
      {/* Labels */}
      <DirectionLabel direction="N" label={quadrants.north.label} className="-top-8 left-1/2 -translate-x-1/2" />
      <DirectionLabel direction="S" label={quadrants.south.label} className="-bottom-8 left-1/2 -translate-x-1/2" />
      <DirectionLabel direction="E" label={quadrants.east.label} className="-right-12 top-1/2 -translate-y-1/2" />
      <DirectionLabel direction="W" label={quadrants.west.label} className="-left-12 top-1/2 -translate-y-1/2" />

      {/* Center Needle */}
      <CompassNeedle />
    </div>
  );
}
