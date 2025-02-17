import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../services/auth.service';
import { AuthActions, logout } from './auth.actions';
import { catchError, map, of, switchMap, tap } from 'rxjs';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      switchMap(({ email, password }) =>
        this.authService.login(email, password).pipe(
          map((resp) => AuthActions.loginSuccessfully({ response: resp })),
          catchError((error) => of(AuthActions.loginFailed({ error }))),
        ),
      ),
    ),
  );

  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.loginSuccessfully),
        tap(({ response }) => {
          localStorage.setItem('token', response.token);
        }),
      ),
    { dispatch: false }, // to prevent dispatch any additional actions
  );

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(logout),
        map(() => {
          localStorage.removeItem('token');
        }),
      ),
    { dispatch: false },
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
  ) {}
}
