import { Component, input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { TranslatePipe } from '@ngx-translate/core';
import { Ingredient } from '../../../../models';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-recipe-ingredients',
  standalone: true,
  imports: [MatIcon, TranslatePipe, MatButton],
  templateUrl: './recipe-ingredients.component.html',
  styleUrl: './recipe-ingredients.component.scss',
})
export class RecipeIngredientsComponent {
  public ingredients = input<Ingredient[]>([]);
}
