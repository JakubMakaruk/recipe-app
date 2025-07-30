import { Component, input, Input, InputSignal } from '@angular/core';
import { RecipeListItem } from '../../models/recipe-list-item.model';
import { NgOptimizedImage } from '@angular/common';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-recipes-list-item',
  templateUrl: './recipes-list-item.component.html',
  styleUrls: ['./recipes-list-item.component.scss'],
  imports: [NgOptimizedImage, MatIcon],
  standalone: true,
})
export class RecipesListItemComponent {
  public recipe: InputSignal<RecipeListItem> = input.required();
}
