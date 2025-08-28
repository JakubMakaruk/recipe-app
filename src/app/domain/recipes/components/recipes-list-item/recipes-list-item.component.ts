import { Component, input, InputSignal, output } from '@angular/core';
import { RecipeListItem } from '../../models';
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

  public navigateToDetails = output<string>();
}
