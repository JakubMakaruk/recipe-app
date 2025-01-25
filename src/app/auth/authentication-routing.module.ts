import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./components/login-panel/login-panel.component').then((c) => c.LoginPanelComponent),
  },
  {
    path: 'register',
    loadComponent: () => import('./components/register-panel/register-panel.component').then((c) => c.RegisterPanelComponent),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule {}
