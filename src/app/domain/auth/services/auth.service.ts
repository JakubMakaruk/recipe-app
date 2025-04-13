import { Injectable } from '@angular/core';
import { EMPTY, Observable, of } from 'rxjs';
import { LoginResponse } from '../models/login-response.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  login(email: string, password: string): Observable<LoginResponse> {
    return of({ id: '1', token: 'token-1' });
  }

  logout(): Observable<void> {
    return EMPTY;
  }
}
