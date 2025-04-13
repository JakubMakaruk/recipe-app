import { AuthState } from '../models/auth-state.model';
import { Action, createReducer, on } from '@ngrx/store';
import { AuthActions, logout } from './auth.actions';

const initialState: AuthState = {
  userId: null,
  token: null,
  loading: false,
  error: null,
};

const _authReducer = createReducer(
  initialState,
  on(AuthActions.login, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(AuthActions.loginSuccessfully, (state, { response }) => ({
    ...state,
    loading: false,
    error: null,
  })),
  on(AuthActions.loginFailed, (state, { error }) => ({
    ...state,
    loading: false,
  })),
  on(logout, (state) => ({
    ...initialState,
  })),
);

export function authReducer(state: AuthState = initialState, action: Action) {
  return _authReducer(state, action);
}
