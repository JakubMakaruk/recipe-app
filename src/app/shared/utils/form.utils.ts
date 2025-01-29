import {
  AbstractControl,
  FormControl,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

export function confirmPasswordValidator(
  password: string,
  confirmPassword: string,
): ValidatorFn {
  return (formGroup: AbstractControl): ValidationErrors | null => {
    const passwordControl = formGroup.get(password);
    const confirmPasswordControl = formGroup.get(confirmPassword);

    if (!passwordControl || !confirmPasswordControl) {
      return null;
    }

    if (
      confirmPasswordControl.errors &&
      !confirmPasswordControl.errors['passwordNotMatch']
    ) {
      return null;
    }

    if (passwordControl.value !== confirmPasswordControl.value) {
      confirmPasswordControl.setErrors({ passwordNotMatch: true });
      return { passwordNotMatch: true };
    } else {
      confirmPasswordControl.setErrors(null);
      return null;
    }
  };
}

export function getFormControlErrorMessage(formControl: FormControl): string {
  if (isFieldRequired(formControl)) {
    return 'SHARED_FORM_ERROR_FIELD_REQUIRED';
  } else if (isEmailNotValid(formControl)) {
    return 'SHARED_FORM_ERROR_EMAIL';
  } else if (isPasswordNotMatch(formControl)) {
    return 'SHARED_FORM_ERROR_PASSWORD_NOT_MATCH';
  } else if (isCheckboxRequired(formControl)) {
    return 'SHARED_FORM_ERROR_CHECKBOX_REQUIRED';
  }
  return '';
}

export function isFieldRequired(formControl: FormControl): boolean {
  return formControl.hasError('required');
}

export function isEmailNotValid(formControl: FormControl): boolean {
  return formControl.hasError('email');
}

export function isPasswordNotMatch(formControl: FormControl): boolean {
  return formControl.hasError('passwordNotMatch');
}

export function isCheckboxRequired(formControl: FormControl): boolean {
  return formControl.hasError('requiredCheckbox');
}
