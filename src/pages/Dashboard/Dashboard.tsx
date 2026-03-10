import { PageWrapper } from '../../components/layout/PageWrapper';
import { CompassWidget } from './CompassWidget';
import { QuadrantCard } from './QuadrantCard';
import { useCompass } from '../../hooks/useCompass';

export function Dashboard() {
  const { quadrants } = useCompass();

  return (
    <PageWrapper className="max-w-6xl mx-auto space-y-8">
      <header>
        <h1 className="text-4xl font-display text-[var(--text-primary)] mb-2">Your Compass</h1>
        <p className="text-[var(--text-muted)]">Navigate your life's quadrants.</p>
      </header>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <CompassWidget />
        </div>
        <div className="space-y-4">
          <h2 className="font-display text-xl text-[var(--gold)] mb-4">Quadrants</h2>
          {Object.values(quadrants).map((q) => (
            <QuadrantCard key={q.id} config={q} progress={Math.floor(Math.random() * 100)} />
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
