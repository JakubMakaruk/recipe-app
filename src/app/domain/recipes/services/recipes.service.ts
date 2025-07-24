import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RecipeListItem } from '../models/recipe-list-item.model';
import { CategoryEnum } from '../shared/categories/enums/category.enum';
import { getBreakfasts } from '../mocks/breakfast.mock';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  getRecipesByQuery(
    category: CategoryEnum,
    query: string,
  ): Observable<RecipeListItem[]> {
    let recipes: RecipeListItem[] = [];

    switch (category) {
      case CategoryEnum.Breakfast:
        recipes = getBreakfasts();
    }

    console.log(recipes);

    return of(recipes);
  }
}
