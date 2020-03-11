// Generic API structure state
export interface StandardApiState<T> {
  data: T;
  status: string;
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
  dateFetched: Date;
}
