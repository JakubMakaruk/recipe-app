import { Component, inject, signal } from '@angular/core';
import { Category } from './models/category.model';
import { getCategories } from './const/categories.const';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RecipesStore } from '../../store/recipes.store';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [MatButton, MatIcon, MatIconButton],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
})
export class CategoriesComponent {
  public recipesStore = inject(RecipesStore);

  protected categories = signal<Category[]>(getCategories());

  protected selectCategory(category: Category): void {
    this.recipesStore.setCategory(category);
  }
}
