import { RecipeListItem } from '../../models/recipe-list-item.model';

export const getSalads = (): RecipeListItem[] => [
  {
    id: 'salad-1',
    title: 'Sałatka z brokułem',
    photoUrl:
      'https://cdn.aniagotuje.com/pictures/articles/2019/11/1491628-v-1500x1500.jpg',
  },
  {
    id: 'salad-2',
    title: 'Sałatka Cezar',
    photoUrl:
      'https://bi.im-g.pl/im/6c/c7/1a/z28079212ICR,Fit-przepis-na-salatke-cezar.jpg',
  },
  {
    id: 'salad-3',
    title: 'Sałatka grecka',
    photoUrl:
      'https://wszystkoojedzeniu.pl/site/assets/files/104973/saatka-grecka.650x0.jpeg',
  },
];
