import { Category } from '../shared/categories/models/category.model';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { withCallState } from '@angular-architects/ngrx-toolkit';

type RecipesState = {
  category: Category | null;
};

const initialState: RecipesState = {
  category: null,
};

export const RecipesStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withCallState(),
  withMethods((store) => ({
    setCategory: (category: Category) => {
      patchState(store, { category });
    },
  })),
);
