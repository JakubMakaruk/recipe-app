import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {RecipesListComponent} from './components/recipes-list/recipes-list.component';
import {RecipesRoutingModule} from './recipes-routing.module';
import {RecipesListItemComponent} from './components/recipes-list-item/recipes-list-item.component';

@NgModule({
  declarations: [RecipesListComponent, RecipesListItemComponent],
  imports: [CommonModule, RecipesRoutingModule, SharedModule],
})
export class RecipesModule {
  constructor() {
    console.log('CONSTRUCTOR RECIPES MODULE');
  }
}
