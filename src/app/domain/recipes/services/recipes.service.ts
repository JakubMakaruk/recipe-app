import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RecipeListItem } from '../models/recipe-list-item.model';
import { CategoryEnum } from '../shared/categories/enums/category.enum';
import { getBreakfasts, getDrinks, getSalads } from '../mocks';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  getRecipesByQuery(
    category: CategoryEnum,
    query: string,
  ): Observable<RecipeListItem[]> {
    let recipes: RecipeListItem[] = [];

    console.log('getRecipesByQuery', query);

    switch (category) {
      case CategoryEnum.Breakfast:
        recipes = getBreakfasts();
        break;
      case CategoryEnum.Salads:
        recipes = getSalads();
        break;
      case CategoryEnum.Drinks:
        recipes = getDrinks();
        break;
      default:
        recipes = [...getBreakfasts(), ...getSalads(), ...getDrinks()];
        break;
    }

    console.log(recipes);

    return of(recipes);
  }
}
