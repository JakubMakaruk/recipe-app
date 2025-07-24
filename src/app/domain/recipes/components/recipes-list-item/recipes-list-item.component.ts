import { Component, input, Input, InputSignal } from '@angular/core';
import { RecipeListItem } from '../../models/recipe-list-item.model';

@Component({
  selector: 'app-recipes-list-item',
  templateUrl: './recipes-list-item.component.html',
  styleUrls: ['./recipes-list-item.component.scss'],
  imports: [],
  standalone: true,
})
export class RecipesListItemComponent {
  public recipe: InputSignal<RecipeListItem> = input.required();
}
