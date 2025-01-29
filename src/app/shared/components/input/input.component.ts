import { Component, forwardRef, Input } from '@angular/core';
import {
  FormControl,
  FormsModule,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  MatError,
  MatFormField,
  MatLabel,
  MatPrefix,
  MatSuffix,
} from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { NgIf } from '@angular/common';
import { MatIconButton } from '@angular/material/button';
import { getFormControlErrorMessage } from '../../utils/form.utils';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    MatFormField,
    MatIcon,
    MatInput,
    MatLabel,
    MatPrefix,
    MatError,
    NgIf,
    ReactiveFormsModule,
    MatIconButton,
    MatSuffix,
    FormsModule,
    TranslatePipe,
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent {
  @Input() label = '';
  @Input() icon!: string;
  @Input() type = 'text';
  @Input() placeholder = '';
  @Input() passwordToggleVisible = false;
  @Input({ required: true }) control!: FormControl;

  private _isPasswordVisible = false;

  get isPasswordField(): boolean {
    return this.passwordToggleVisible;
  }

  get passwordVisibilityIcon(): string {
    return this._isPasswordVisible ? 'visibility_off' : 'visibility';
  }

  togglePasswordVisibility(): void {
    this._isPasswordVisible = !this._isPasswordVisible;
    this.type = this._isPasswordVisible ? 'text' : 'password';
  }

  getErrorMessage(): string {
    return getFormControlErrorMessage(this.control);
  }
}
