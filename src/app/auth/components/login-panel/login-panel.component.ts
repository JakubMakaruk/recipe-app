import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators,} from '@angular/forms';
import {MatIconModule, MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {NavigateBackComponent} from "../../../shared/components/navigate-back/navigate-back.component";
import {InputComponent} from "../../../shared/components/input/input.component";
import {TranslatePipe} from "@ngx-translate/core";
import {RouterLink} from "@angular/router";

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
  ],
  standalone: true,
})
export class LoginPanelComponent implements OnInit {
  loginForm: FormGroup<LoginForm>;

  constructor(
    private _fb: FormBuilder,
    private _matIconRegistry: MatIconRegistry,
    private _sanitizer: DomSanitizer,
  ) {
    this.loginForm = this._fb.group({
      email: new FormControl<string>('', [Validators.required, Validators.email]),
      password: new FormControl<string>('', [Validators.required]),
    });

    this._matIconRegistry.addSvgIcon(
      'google',
      this._sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/svg/google.svg'),
    );
    this._matIconRegistry.addSvgIcon(
      'facebook',
      this._sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/svg/facebook.svg'),
    );
  }

  ngOnInit() {
    console.log('LOGIN PANEL INITIALIZATION');
  }

  login(): void {

  }

  printForm(): void {
    console.log('form')
    console.log('invalid: ', this.loginForm.invalid)
    console.log(this.loginForm);
    this.loginForm.markAllAsTouched()
  }
}

interface LoginForm {
  email: FormControl<string | null>;
  password: FormControl<string | null>;
}
