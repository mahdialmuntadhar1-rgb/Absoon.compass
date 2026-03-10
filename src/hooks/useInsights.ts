import { useQuery } from '@tanstack/react-query';
import { insightsService } from '../services/insights.service';

export const useInsights = () => {
  const { data: insights = [], isLoading } = useQuery({
    queryKey: ['insights'],
    queryFn: insightsService.getInsights,
  });

  return { insights, isLoading };
};
