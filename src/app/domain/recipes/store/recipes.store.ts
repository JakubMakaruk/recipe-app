import { Category } from '../shared/categories/models';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import {
  setError,
  setLoaded,
  setLoading,
  withCallState,
} from '@angular-architects/ngrx-toolkit';
import { RecipesService } from '../services';
import { inject } from '@angular/core';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap, tap } from 'rxjs';
import { tapResponse } from '@ngrx/operators';
import { RecipeListItem } from '../models';
import { CategoryEnum } from '../shared/categories/enums';

interface RecipesState {
  category: Category | null;
  recipes: RecipeListItem[];
}

const initialState: RecipesState = {
  category: null,
  recipes: [],
};

export const RecipesStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withCallState(),
  withMethods((store, recipesService = inject(RecipesService)) => ({
    loadRecipes: rxMethod<string>(
      pipe(
        tap(() => patchState(store, setLoading())),
        switchMap((query) =>
          recipesService
            .getRecipesByQuery(
              (store.category()?.label.toLowerCase() as CategoryEnum) ?? '',
              query,
            )
            .pipe(
              tapResponse({
                next: (recipes) => patchState(store, setLoaded(), { recipes }),
                error: (error) => patchState(store, setError(error)),
              }),
            ),
        ),
      ),
    ),
    setCategory: (category: Category) => {
      patchState(store, { category });
    },
    reset: () => {
      patchState(store, initialState);
    },
  })),
);
