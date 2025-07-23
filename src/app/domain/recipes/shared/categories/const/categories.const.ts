import { Category } from '../models/category.model';

export const getCategories = (): Category[] => [
  {
    id: 'cate-1',
    label: 'Breakfast',
    icon: 'breakfast',
  },
  {
    id: 'cate-2',
    label: 'Dinner',
    icon: 'dinner',
  },
  {
    id: 'cate-3',
    label: 'Supper',
    icon: 'supper',
  },
  {
    id: 'cate-4',
    label: 'Desserts',
    icon: 'desserts',
  },
  {
    id: 'cate-5',
    label: 'Soups',
    icon: 'soups',
  },
  {
    id: 'cate-6',
    label: 'Salads',
    icon: 'salads',
  },
  {
    id: 'cate-7',
    label: 'Cakes',
    icon: 'cakes',
  },
  {
    id: 'cate-8',
    label: 'Drinks',
    icon: 'drinks',
  },
];
