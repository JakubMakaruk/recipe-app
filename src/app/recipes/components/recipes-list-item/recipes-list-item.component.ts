import {Component, Input} from '@angular/core';
import {RecipeListItem} from '../../models/recipe-list-item.model';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-recipes-list-item',
  templateUrl: './recipes-list-item.component.html',
  styleUrls: ['./recipes-list-item.component.scss'],
  imports: [
    NgIf
  ],
  standalone: true
})
export class RecipesListItemComponent {
  @Input() recipe: RecipeListItem | null = null;
}
