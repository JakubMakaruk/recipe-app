import { Component, computed, inject } from '@angular/core';
import { RecipeListItem } from '../../models/recipe-list-item.model';
import { RecipesListItemComponent } from '../recipes-list-item/recipes-list-item.component';
import { NgForOf } from '@angular/common';
import { RECIPES_LIST } from './recipes-list.mock';
import { CategoriesComponent } from '../../shared/categories/categories.component';
import { MatButton } from '@angular/material/button';
import { TranslatePipe } from '@ngx-translate/core';
import { NavigateLandingPageComponent } from '../../../../shared/components/navigate-landing-page/navigate-landing-page.component';
import { RecipesStore } from '../../store/recipes.store';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
  imports: [
    RecipesListItemComponent,
    NgForOf,
    CategoriesComponent,
    MatButton,
    TranslatePipe,
    NavigateLandingPageComponent,
  ],
  standalone: true,
})
export class RecipesListComponent {
  private recipesStore = inject(RecipesStore);

  protected recipes = computed(() => this.recipesStore.recipes());

  // recipes: Recipe[] = RECIPES_LIST;
}
