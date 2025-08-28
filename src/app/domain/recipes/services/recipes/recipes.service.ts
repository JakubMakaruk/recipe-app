import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RecipeListItem } from '../../models';
import { CategoryEnum } from '../../shared/categories/enums';
import {
  allRecipes,
  getBreakfasts,
  getCakes,
  getDrinks,
  getSalads,
} from '../../mocks';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  getRecipesByQuery(
    category: CategoryEnum,
    _query: string,
  ): Observable<RecipeListItem[]> {
    let recipes: RecipeListItem[];

    switch (category) {
      case CategoryEnum.Breakfast:
        recipes = getBreakfasts();
        break;
      case CategoryEnum.Salads:
        recipes = getSalads();
        break;
      case CategoryEnum.Cakes:
        recipes = getCakes();
        break;
      case CategoryEnum.Drinks:
        recipes = getDrinks();
        break;
      default:
        recipes = allRecipes();
        break;
    }

    return of(recipes);
  }
}
