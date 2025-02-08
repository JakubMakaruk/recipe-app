import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreloadModulesStrategy } from './preload-modules.strategy';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/authentication-routing.module').then(
        (m) => m.AuthenticationRoutingModule,
      ),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then((x) => x.HomeComponent),
  },
  {
    path: 'recipes',
    loadChildren: () =>
      import('./recipes/recipes-routing.module').then(
        (m) => m.RecipesRoutingModule,
      ),
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadModulesStrategy,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
