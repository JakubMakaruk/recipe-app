import {Component} from '@angular/core';
import {RecipeListItem} from '../../models/recipe-list-item.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
})
export class RecipesListComponent {
  recipes: RecipeListItem[] = [
    {
      id: 'reci-1',
      title: 'Makaron z kurczakiem, suszonymi pomidorami i szpinakiem',
      photoUrl: './assets/makaron-kurczak-pomidory-szpinak.jpg',
    },
    {
      id: 'reci-1',
      title: 'Makaron z kurczakiem, suszonymi pomidorami i szpinakiem',
      photoUrl: './assets/makaron-kurczak-pomidory-szpinak.jpg',
    },
    {
      id: 'reci-1',
      title: 'Makaron z kurczakiem, suszonymi pomidorami i szpinakiem',
      photoUrl: './assets/makaron-kurczak-pomidory-szpinak.jpg',
    },
    {
      id: 'reci-1',
      title: 'Makaron z kurczakiem, suszonymi pomidorami i szpinakiem',
      photoUrl: './assets/makaron-kurczak-pomidory-szpinak.jpg',
    },
    {
      id: 'reci-1',
      title: 'Makaron z kurczakiem, suszonymi pomidorami i szpinakiem',
      photoUrl: './assets/makaron-kurczak-pomidory-szpinak.jpg',
    },
    {
      id: 'reci-1',
      title: 'Makaron z kurczakiem, suszonymi pomidorami i szpinakiem',
      photoUrl: './assets/makaron-kurczak-pomidory-szpinak.jpg',
    },
  ];
}
