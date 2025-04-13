import { createAction, createActionGroup, props } from '@ngrx/store';
import { LoginResponse } from '../models/login-response.model';
import { ErrorResponse } from '../../../shared/models/error-response.model';

export const AuthActions = createActionGroup({
  source: '[Auth]',
  events: {
    Login: props<{ email: string; password: string }>(),
    'Login Successfully': props<{ response: LoginResponse }>(),
    'Login Failed': props<{ error: ErrorResponse }>(),
  },
});

export const logout = createAction('[Auth] Logout');
