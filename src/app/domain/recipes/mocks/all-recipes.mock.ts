import { RecipeDetails, RecipeListItem } from '../models';
import {
  getBreakfasts,
  getCakes,
  getCakesDetails,
  getDrinks,
  getSalads,
} from './index';
import { getDrinksDetails } from './recipes-details/drinks-details.mock';

export const allRecipes = (): RecipeListItem[] => [
  ...getBreakfasts(),
  ...getCakes(),
  ...getDrinks(),
  ...getSalads(),
];

export const allRecipesDetails = (): RecipeDetails[] => [
  ...getCakesDetails(),
  ...getDrinksDetails(),
];
