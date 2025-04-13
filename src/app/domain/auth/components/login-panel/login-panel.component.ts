import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TranslatePipe } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { Store } from '@ngrx/store';
import { AuthActions } from '../../store/auth.actions';
import { NavigateBackComponent } from '../../../../shared/components/navigate-back/navigate-back.component';
import { InputComponent } from '../../../../shared/components/input/input.component';

@Component({
  selector: 'app-login-panel',
  templateUrl: './login-panel.component.html',
  styleUrls: ['./login-panel.component.scss'],
  imports: [
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    NavigateBackComponent,
    FormsModule,
    InputComponent,
    TranslatePipe,
    RouterLink,
    NgIf,
  ],
  standalone: true,
})
export class LoginPanelComponent {
  loginForm: FormGroup<LoginForm> | null = null;

  private readonly _fb: NonNullableFormBuilder = inject(NonNullableFormBuilder);
  private readonly store: Store = inject(Store);

  constructor() {
    this.createLoginForm();
  }

  login(): void {
    if (!this.loginForm) {
      return;
    }

    this.loginForm.markAllAsTouched();
    this.loginForm.updateValueAndValidity();

    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.getRawValue();
      this.store.dispatch(AuthActions.login({ email, password }));
    }
  }

  private createLoginForm(): void {
    this.loginForm = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }
}

interface LoginForm {
  email: FormControl<string>;
  password: FormControl<string>;
}
