import { Component } from '@angular/core';
import { NavigateBackComponent } from '../../../shared/components/navigate-back/navigate-back.component';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputComponent } from '../../../shared/components/input/input.component';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { TranslatePipe } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { confirmPasswordValidator } from '../../../shared/utils/form.utils';

@Component({
  selector: 'app-register-panel',
  standalone: true,
  imports: [
    NavigateBackComponent,
    InputComponent,
    MatButton,
    MatIcon,
    ReactiveFormsModule,
    TranslatePipe,
    RouterLink,
  ],
  templateUrl: './register-panel.component.html',
  styleUrl: './register-panel.component.scss',
})
export class RegisterPanelComponent {
  registerForm: FormGroup<RegisterForm>;

  constructor(private _fb: FormBuilder) {
    this.registerForm = this._fb.group(
      {
        firstName: new FormControl<string>('', [Validators.required]),
        lastName: new FormControl<string>('', [Validators.required]),
        email: new FormControl<string>('', [
          Validators.required,
          Validators.email,
        ]),
        password: this._fb.group({
          password: new FormControl<string>('', [Validators.required]),
          confirmPassword: new FormControl<string>('', [Validators.required]),
        }),
      },
      {
        validators: confirmPasswordValidator(
          'password.password',
          'password.confirmPassword',
        ),
      },
    );
  }

  register(): void {}
}

interface RegisterForm {
  email: FormControl<string | null>;
  password: FormGroup<PasswordGroup>;
  firstName: FormControl<string | null>;
  lastName: FormControl<string | null>;
}

interface PasswordGroup {
  password: FormControl<string | null>;
  confirmPassword: FormControl<string | null>;
}
