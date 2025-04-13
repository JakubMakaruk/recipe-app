import { Component } from '@angular/core';
import { RecipeListItem } from '../../models/recipe-list-item.model';
import { RecipesListItemComponent } from '../recipes-list-item/recipes-list-item.component';
import { NgForOf } from '@angular/common';
import { RECIPES_LIST } from './recipes-list.mock';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
  imports: [RecipesListItemComponent, NgForOf],
  standalone: true,
})
export class RecipesListComponent {
  recipes: RecipeListItem[] = RECIPES_LIST;
}
