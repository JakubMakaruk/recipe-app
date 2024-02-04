import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormControl, FormGroup,} from '@angular/forms';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';

const googleLogoURL =
  'https://raw.githubusercontent.com/fireflysemantics/logo/master/Google.svg';

@Component({
  selector: 'app-login-panel',
  templateUrl: './login-panel.component.html',
  styleUrls: ['./login-panel.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginPanelComponent implements OnInit {
  loginForm: FormGroup<LoginForm>;

  get emailFormControl(): FormControl {
    return this.loginForm.controls.email;
  }

  get passwordFormControl(): FormControl {
    return this.loginForm.controls.password;
  }

  constructor(
    private _fb: FormBuilder,
    private _matIconRegistry: MatIconRegistry,
    private _sanitizer: DomSanitizer,
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl<string>('', [
        // Validators.required,
        // Validators.email,
      ]),
      password: new FormControl<string>(''),
    });

    this._matIconRegistry.addSvgIcon(
      'google',
      this._sanitizer.bypassSecurityTrustResourceUrl(googleLogoURL),
    );
  }

  ngOnInit() {
    console.log('LOGIN PANEL INITIALIZATION');
  }
}

interface LoginForm {
  email: FormControl<string | null>;
  password: FormControl<string | null>;
}
