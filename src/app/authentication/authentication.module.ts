import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginPanelComponent} from './login-panel/login-panel.component';
import {AuthenticationRoutingModule} from './authentication-routing.module';
import {SharedModule} from '../shared/shared.module';
import {LandingPageComponent} from '../landing-page/landing-page.component';

@NgModule({
  declarations: [LandingPageComponent, LoginPanelComponent],
  imports: [CommonModule, AuthenticationRoutingModule, SharedModule],
})
export class AuthenticationModule {
  constructor() {
    console.log('CONSTRUCTOR AUTH MODULE');
  }
}
