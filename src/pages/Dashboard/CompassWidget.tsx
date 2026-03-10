import { CompassRose } from '../../components/compass/CompassRose';

export function CompassWidget() {
  return (
    <div className="compass-card p-8 flex items-center justify-center min-h-[400px] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, var(--gold) 0%, transparent 70%)' }} />
      <CompassRose />
    </div>
  );
}
