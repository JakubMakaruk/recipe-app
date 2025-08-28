import { Component, computed, inject, OnInit } from '@angular/core';
import { RecipesListItemComponent } from '../recipes-list-item/recipes-list-item.component';
import { CategoriesComponent } from '../../shared/categories/categories.component';
import { RecipesStore } from '../../store/recipes.store';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeListItem } from '../../models/recipe-list-item.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
  imports: [RecipesListItemComponent, CategoriesComponent, HeaderComponent],
  standalone: true,
})
export class RecipesListComponent implements OnInit {
  private recipesStore = inject(RecipesStore);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  protected recipes = computed(() => this.recipesStore.recipes());

  public ngOnInit(): void {
    this.recipesStore.loadRecipes('');
  }

  protected navigateToRecipeDetails(item: RecipeListItem): void {
    this.router
      .navigate([item.title.toLowerCase()], {
        relativeTo: this.route,
        state: { id: item.id },
      })
      .then();
  }
}
