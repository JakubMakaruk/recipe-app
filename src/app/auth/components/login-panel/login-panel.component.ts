import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NavigateBackComponent } from '../../../shared/components/navigate-back/navigate-back.component';
import { InputComponent } from '../../../shared/components/input/input.component';
import { TranslatePipe } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

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
  loginForm: FormGroup<LoginForm>;

  constructor(private _fb: FormBuilder) {
    this.loginForm = this._fb.group({
      email: new FormControl<string>('', [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl<string>('', [Validators.required]),
    });
  }

  login(): void {
    this.loginForm.markAllAsTouched();
    this.loginForm.updateValueAndValidity();
  }
}

interface LoginForm {
  email: FormControl<string | null>;
  password: FormControl<string | null>;
}
