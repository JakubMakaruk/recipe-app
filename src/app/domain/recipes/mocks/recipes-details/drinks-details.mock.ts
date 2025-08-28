import { RecipeDetails } from '../../models';

export const getDrinksDetails = (): RecipeDetails[] => [
  {
    id: 'drink-1',
    title: 'Mangoł',
    description: 'Autorski drink o smaku mango na bazie wódki.',
    photoUrl:
      'https://curiada.com/cdn/shop/articles/20240126141804-mango-20tango-20coconut-20cartel-20rum.png?v=1706286492',
    ingredients: [
      {
        icon: 'vodka',
        value: '40ml wódki',
      },
      {
        icon: 'mango',
        value: '55ml przecieru z mango',
      },
      {
        icon: 'lime-juice',
        value: '20ml soku z limonki',
      },
      {
        icon: 'sugar-syrup',
        value: '10ml syropu cukrowego',
      },
    ],
    steps: [
      'Wlej wszystkie składniki w danych proporcjach do shakera',
      'Dodaj kilka kostek lodu do shakera',
      'Dynamicznie wstrząsaj shakerem, a następnie przelej zawartość do kieliszka używając stainera',
      'Do dekoracji cytryna na kieliszek',
    ],
  },
  {
    id: 'drink-2',
    title: 'Mojito',
    description: 'Drink mojito.',
    photoUrl:
      'https://cookingtime.pl/images/upload/mojito-mohito-drink-z-mieta-62050.jpg',
    ingredients: [
      {
        icon: 'lime',
        value: '0,5 limonki',
      },
      {
        icon: 'sugar-brown',
        value: '2 łyżki cukru brązowego',
      },
      {
        icon: 'mint',
        value: 'kilka liści mięty (5-8)',
      },
      {
        icon: 'rum',
        value: '40ml białego rumu',
      },
      {
        icon: 'soda-water',
        value: 'dopełnienie wodą gazowaną',
      },
    ],
    steps: [
      'Przekrój boki limonki, a następnie z połówki limonki wytnij szkielet.',
      'Przekrój połówkę limonki na pół i na 3 kawałki, a następnie wrzuć do szklanki.',
      'Dodaj 2 łyżki cukru brązowego.',
      'Użyj muddlera do wyciśnięcia soku z limonek (staraj się nie naciskać na zewnętrzną część limonki).',
      'Dodaj kilka liści mięty (5-8) i naciskaj lekko muddlerem.',
      'Dodaj kilka kostek lodu.',
      'Całość dopełnij wodą gazowaną, wymieszaj i dodaj szczyt z mięty do dekoracji.',
    ],
  },
];
