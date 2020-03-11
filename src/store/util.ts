import { StandardApiState } from './types';

export default function createEmptyState<T>(data: T, dateFetched?: Date): StandardApiState<T> {
  return {
    data,
    status: '',
    isLoading: true,
    errorMessage: '',
    isError: false,
    dateFetched: dateFetched ? dateFetched : new Date('2000-1-1'),
  };
}
