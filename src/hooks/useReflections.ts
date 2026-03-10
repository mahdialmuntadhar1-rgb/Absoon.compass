import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { reflectionsService } from '../services/reflections.service';
import { Reflection } from '../types';

export const useReflections = () => {
  const queryClient = useQueryClient();

  const { data: reflections = [], isLoading } = useQuery({
    queryKey: ['reflections'],
    queryFn: reflectionsService.getReflections,
  });

  const createReflection = useMutation({
    mutationFn: (content: string) => reflectionsService.createReflection(content),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['reflections'] });
    },
  });

  return { reflections, isLoading, createReflection };
};
