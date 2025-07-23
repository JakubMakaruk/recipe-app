import { Component } from '@angular/core';
import { RecipeListItem } from '../../models/recipe-list-item.model';
import { RecipesListItemComponent } from '../recipes-list-item/recipes-list-item.component';
import { NgForOf } from '@angular/common';
import { RECIPES_LIST } from './recipes-list.mock';
import { CategoriesComponent } from '../../shared/categories/categories.component';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
  imports: [RecipesListItemComponent, NgForOf, CategoriesComponent],
  standalone: true,
})
export class RecipesListComponent {
  recipes: RecipeListItem[] = RECIPES_LIST;
}
