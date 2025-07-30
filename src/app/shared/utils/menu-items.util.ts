import { MenuItem } from '../models/menu-item.model';
import { Router } from '@angular/router';

export const getMenuItems = (router: Router): MenuItem[] => [
  {
    labelKey: 'HEADER_HOME',
    callback: () => router.navigate(['/']),
  },
  {
    labelKey: 'HEADER_RECIPES',
    callback: () => router.navigate(['/recipes']),
  },
  {
    labelKey: 'HEADER_ABOUT',
    callback: () => router.navigate(['/']),
  },
  {
    labelKey: 'HEADER_PRICING',
    callback: () => router.navigate(['/']),
  },
  {
    labelKey: 'HEADER_CONTACT',
    callback: () => router.navigate(['/']),
  },
];
