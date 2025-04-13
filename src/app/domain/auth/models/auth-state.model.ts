export interface AuthState {
  userId: string | null;
  token: string | null;
  loading: boolean;
  error: string | null;
}
