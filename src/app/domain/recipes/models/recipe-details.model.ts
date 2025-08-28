import { Ingredient } from './ingredient.model';

export interface RecipeDetails {
  id: string;
  title: string;
  description: string;
  photoUrl: string;
  ingredients: Ingredient[];
  steps: string[];
}
