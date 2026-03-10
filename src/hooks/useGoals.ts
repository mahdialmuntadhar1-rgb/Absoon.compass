import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { goalsService } from '../services/goals.service';
import { Goal } from '../types';

export const useGoals = () => {
  const queryClient = useQueryClient();

  const { data: goals = [], isLoading } = useQuery({
    queryKey: ['goals'],
    queryFn: goalsService.getGoals,
  });

  const createGoal = useMutation({
    mutationFn: (goal: Omit<Goal, 'id' | 'createdAt' | 'updatedAt' | 'userId'>) => goalsService.createGoal(goal),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['goals'] });
    },
  });

  return { goals, isLoading, createGoal };
};
