import {Component, forwardRef, Host, Input, Optional} from '@angular/core';
import {
  ControlContainer, ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule
} from "@angular/forms";
import {MatError, MatFormField, MatLabel, MatPrefix, MatSuffix} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatInput} from "@angular/material/input";
import {NgIf} from "@angular/common";
import {MatIconButton} from "@angular/material/button";

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
    MatSuffix
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor {
  @Input() label: string = '';
  @Input() icon!: string;
  @Input() type: string = 'text';
  @Input() placeholder: string = '';

  value: string = '';
  isDisabled = false;
  isPasswordVisible = false;

  constructor(@Optional() @Host() protected controlContainer: ControlContainer) {
    if (!this.controlContainer) {
      console.warn('CustomInputComponent musi być używany wewnątrz FormGroup.');
    }
  }

  get isPasswordField(): boolean {
    return this.type === 'password';
  }

  get passwordVisibilityIcon(): string {
    return this.isPasswordVisible ? 'visibility_off' : 'visibility';
  }

  togglePassswordVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  getErrorMessage(): string {
    if (this.controlContainer?.hasError('required')) {
      return `${this.label} is required`;
    }
    if (this.controlContainer?.hasError('email')) {
      return 'Please enter a valid email address';
    }
    if (this.controlContainer?.hasError('minlength')) {
      const minLength = this.controlContainer.getError('minlength')?.requiredLength;
      return `${this.label} must be at least ${minLength} characters long`;
    }
    return 'Invalid value';
  }

  onChange = (value: string) => {};
  onTouched = () => {};

  writeValue(value: string): void {
    this.value = value || '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  // Obsługa zmiany wartości
  handleInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.onChange(this.value);
  }
}
