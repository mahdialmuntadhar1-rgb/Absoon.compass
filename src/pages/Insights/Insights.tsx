import { PageWrapper } from '../../components/layout/PageWrapper';
import { useInsights } from '../../hooks/useInsights';
import { LoadingSpinner } from '../../components/shared/LoadingSpinner';
import { EmptyState } from '../../components/shared/EmptyState';
import { Compass } from 'lucide-react';

export function Insights() {
  const { insights, isLoading } = useInsights();

  return (
    <PageWrapper className="max-w-5xl mx-auto space-y-8">
      <header>
        <h1 className="text-4xl font-display text-[var(--text-primary)] mb-2">Constellations</h1>
        <p className="text-[var(--text-muted)]">Patterns and insights drawn from your journey.</p>
      </header>

      {isLoading ? (
        <LoadingSpinner />
      ) : insights.length === 0 ? (
        <EmptyState title="No patterns found yet" description="Keep reflecting and setting goals to generate insights." />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {insights.map((insight) => (
            <div key={insight.id} className="compass-card p-6 flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-[var(--gold)]/10 text-[var(--gold)] flex items-center justify-center shrink-0">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono text-[var(--gold)] uppercase tracking-wider block mb-2">{insight.type}</span>
                <p className="text-[var(--text-primary)] leading-relaxed">{insight.content}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </PageWrapper>
  );
}
