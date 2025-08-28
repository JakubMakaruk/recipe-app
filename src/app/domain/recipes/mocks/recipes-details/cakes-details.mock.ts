import { RecipeDetails } from '../../models';

export const getCakesDetails = (): RecipeDetails[] => [
  {
    id: 'cake-1',
    title: 'Murzynek',
    description:
      'Przepis na ciasto czekoladowe murzynek według przepisu "Pysznie czy przepysznie".',
    photoUrl:
      'https://wszystkiegoslodkiego.pl/storage/images/201915/murzynek-1.jpg',
    ingredients: [
      {
        icon: 'butter',
        value: '100g masła (82%)',
      },
      {
        icon: 'oil',
        value: '50ml oleju',
      },
      {
        icon: 'egg',
        value: '3 jajka',
      },
      {
        icon: 'sugar-vanilla',
        value: '2 łyżki cukru wanilinowego',
      },
      {
        icon: 'milk',
        value: '350ml mleka',
      },
      {
        icon: 'jam-plum',
        value: '5 łyżek powideł śliwkowych',
      },
      {
        icon: 'flour',
        value: '300g mąki pszennej (typ 450)',
      },
      {
        icon: 'soda',
        value: '1 łyżeczka sody oczyszczonej',
      },
      {
        icon: 'baking-powder',
        value: '1 łyżeczka proszku do pieczenia',
      },
      {
        icon: 'cocoa',
        value: '40g kakao',
      },
    ],
    steps: [
      'Nagrzać piekarnik do 180*C góra-dół.',
      'Masło roztopić i wystudzić.',
      'Mąkę (300g), kakao (40g), sodę (1 łyżeczka), proszek do pieczenia (1 łyżeczka) wymieszać i przesiać przez sitko.',
      'Jajka (3) razem z cukrem (150g) i cukrem wanilinowym (2 łyżeczki) ubić na jasną i puszystą masę.',
      'Do ubitych jajek dodać roztopione masło i olej (50ml) dalej miksując.',
      'Wlać mleko (350ml), dodać powidła śliwkowe (5 łyżeczek), i miksować na najniższych obrotach.',
      'Dalej miksując dodać mąkę z proszkiem, sodą i kakao i mieszać tylko do połączenia.',
      'Ciasto przelać do formy, wyrównać i wstawić do nagranego piekarnika - piec około 50min do suchego patyczka.',
    ],
  },
];
