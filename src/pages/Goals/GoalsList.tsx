import { PageWrapper } from '../../components/layout/PageWrapper';
import { useGoals } from '../../hooks/useGoals';
import { GoalCard } from '../../components/goals/GoalCard';
import { LoadingSpinner } from '../../components/shared/LoadingSpinner';
import { EmptyState } from '../../components/shared/EmptyState';
import { Button } from '../../components/ui/Button';
import { Plus } from 'lucide-react';

export function GoalsList() {
  const { goals, isLoading } = useGoals();

  return (
    <PageWrapper className="max-w-5xl mx-auto space-y-8">
      <div className="flex justify-between items-end">
        <header>
          <h1 className="text-4xl font-display text-[var(--text-primary)] mb-2">Destinations</h1>
          <p className="text-[var(--text-muted)]">Your active goals across all quadrants.</p>
        </header>
        <Button><Plus className="w-4 h-4 mr-2" /> New Goal</Button>
      </div>

      {isLoading ? (
        <LoadingSpinner />
      ) : goals.length === 0 ? (
        <EmptyState title="No destinations set" description="Chart a new course by adding a goal." />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {goals.map((goal) => (
            <GoalCard key={goal.id} goal={goal} />
          ))}
        </div>
      )}
    </PageWrapper>
  );
}
