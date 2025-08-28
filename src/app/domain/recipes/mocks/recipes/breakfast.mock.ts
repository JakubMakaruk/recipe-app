import { RecipeListItem } from '../../models/recipe-list-item.model';

export const getBreakfasts = (): RecipeListItem[] => [
  {
    id: 'reci-b1',
    title: 'Jajecznia',
    photoUrl:
      'https://www.tasteofhome.com/wp-content/uploads/2025/03/Baked-Scrambled-Eggs_EXPS_FT25_278646_EC_0312_5.jpg?w=892',
  },
  {
    id: 'reci-b2',
    title: 'Szakszuka',
    photoUrl: 'https://mosso.pl/wp-content/uploads/2022/05/szakszuka.jpg',
  },
  {
    id: 'reci-b3',
    title: 'Omlet na słodko',
    photoUrl:
      'https://jessicasglutenfreekitchen.com/wp-content/uploads/2019/05/from-phone-2.jpg',
  },
];
