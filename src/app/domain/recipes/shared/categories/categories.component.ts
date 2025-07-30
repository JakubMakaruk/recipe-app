import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { Category } from './models/category.model';
import { getCategories } from './const/categories.const';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RecipesStore } from '../../store/recipes.store';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [MatButton, MatIcon, MatIconButton],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
})
export class CategoriesComponent implements OnInit {
  public recipesStore = inject(RecipesStore);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private destroyRef = inject(DestroyRef);

  protected categories = signal<Category[]>(getCategories());

  public ngOnInit(): void {
    this.listenOnCategoryChange();
  }

  protected listenOnCategoryChange(): void {
    this.route.queryParamMap
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((params) => {
        const categoryName = params.get('category');

        if (categoryName) {
          const category = this.getCategoryByName(categoryName);

          if (category) {
            this.recipesStore.setCategory(category);
            this.recipesStore.loadRecipes('');
          }
        } else {
          this.recipesStore.reset();
          this.recipesStore.loadRecipes('');
        }
      });
  }

  protected selectCategory(category: Category): void {
    this.recipesStore.setCategory(category);

    this.router
      .navigate([], {
        relativeTo: this.route,
        queryParams: { category: category.label.toLowerCase() },
        queryParamsHandling: 'merge',
      })
      .then();
  }

  private getCategoryByName(categoryName: string): Category | undefined {
    return this.categories().find(
      (category) => category.label.toLowerCase() === categoryName,
    );
  }
}
