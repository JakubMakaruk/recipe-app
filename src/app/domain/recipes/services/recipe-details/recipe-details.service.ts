import { Injectable } from '@angular/core';
import { RecipeDetails } from '../../models';
import { Observable, of } from 'rxjs';
import { allRecipesDetails } from '../../mocks';

@Injectable({
  providedIn: 'root',
})
export class RecipeDetailsService {
  getRecipeById(id: string): Observable<RecipeDetails | undefined> {
    return of([...allRecipesDetails()].find((drink) => drink.id === id));
  }
}
