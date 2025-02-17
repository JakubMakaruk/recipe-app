import { AuthState } from '../models/auth-state.model';
import { Action, createReducer, on } from '@ngrx/store';
import { AuthActions, logout } from './auth.actions';
import { state } from '@angular/animations';

const initialState: AuthState = {
  userId: null,
  token: null,
  loading: false,
};

const _authReducer = createReducer(
  initialState,
  on(AuthActions.login, (state) => ({
    ...state,
    loading: true,
  })),
  on(AuthActions.loginSuccessfully, (state, { response }) => ({
    ...state,
    loading: false,
  })),
  on(AuthActions.loginFailed, (state, { error }) => ({
    ...state,
    loading: false,
  })),
  on(logout, (state) => ({
    userId: null,
    token: null,
    loading: false,
  })),
);

export function authReducer(state: AuthState, action: Action) {
  return _authReducer(state, action);
}
