import { Component, inject, OnInit, signal } from '@angular/core';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { NgOptimizedImage } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { RecipeDetailsService, RecipesService } from '../../services';
import { TranslatePipe } from '@ngx-translate/core';
import { MatIcon } from '@angular/material/icon';
import { RecipeIngredientsComponent } from './components/recipe-ingredients/recipe-ingredients.component';
import { RecipeStepsComponent } from './components/recipe-steps/recipe-steps.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';

@Component({
  selector: 'app-recipe-details',
  standalone: true,
  imports: [
    HeaderComponent,
    NgOptimizedImage,
    RecipeIngredientsComponent,
    RecipeStepsComponent,
    FooterComponent,
  ],
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.scss',
})
export class RecipeDetailsComponent implements OnInit {
  private recipeService = inject(RecipeDetailsService);

  protected id = signal(history.state.id);
  protected recipe = toSignal(this.recipeService.getRecipeById(this.id()));

  public ngOnInit(): void {
    const id = history.state.id;
    console.log('recipe id: ', id);
  }
}
