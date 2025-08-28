import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RecipesListComponent } from './components/recipes-list/recipes-list.component';

const routes: Routes = [
  {
    path: '',
    component: RecipesListComponent,
  },
  {
    path: ':recipeId',
    loadComponent: () =>
      import('./components/recipe-details/recipe-details.component').then(
        (c) => c.RecipeDetailsComponent,
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipesRoutingModule {}
