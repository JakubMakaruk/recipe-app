import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RecipesListComponent } from './components/recipes-list/recipes-list.component';

const routes: Routes = [
  {
    path: '',
    component: RecipesListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipesRoutingModule {}
