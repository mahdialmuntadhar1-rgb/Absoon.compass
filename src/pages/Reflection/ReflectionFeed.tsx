import { PageWrapper } from '../../components/layout/PageWrapper';
import { useReflections } from '../../hooks/useReflections';
import { ReflectionCard } from '../../components/reflection/ReflectionCard';
import { LoadingSpinner } from '../../components/shared/LoadingSpinner';
import { EmptyState } from '../../components/shared/EmptyState';
import { Button } from '../../components/ui/Button';
import { PenTool } from 'lucide-react';

export function ReflectionFeed() {
  const { reflections, isLoading } = useReflections();

  return (
    <PageWrapper className="max-w-3xl mx-auto space-y-8">
      <div className="flex justify-between items-end">
        <header>
          <h1 className="text-4xl font-display text-[var(--text-primary)] mb-2">Captain's Log</h1>
          <p className="text-[var(--text-muted)]">Daily reflections and AI insights.</p>
        </header>
        <Button><PenTool className="w-4 h-4 mr-2" /> New Entry</Button>
      </div>

      {isLoading ? (
        <LoadingSpinner />
      ) : reflections.length === 0 ? (
        <EmptyState title="The log is empty" description="Write your first reflection to receive guidance." />
      ) : (
        <div className="space-y-6">
          {reflections.map((entry) => (
            <ReflectionCard key={entry.id} entry={entry} />
          ))}
        </div>
      )}
    </PageWrapper>
  );
}
