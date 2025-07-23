import { inject, Injectable, signal } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { CustomIcon } from '../../models';
import { MEDIA_ICONS } from '../../const';
import { CATEGORIES_ICONS } from '../../const/categories-icons.const';

@Injectable({
  providedIn: 'root',
})
export class IconService {
  private iconRegistry = inject(MatIconRegistry);
  private sanitizer = inject(DomSanitizer);

  private readonly icons = signal<CustomIcon[]>([
    ...MEDIA_ICONS,
    ...CATEGORIES_ICONS,
  ]);

  registerIcons(): void {
    this.icons().forEach((icon) => {
      this.iconRegistry.addSvgIcon(
        icon.name,
        this.sanitizer.bypassSecurityTrustResourceUrl(icon.path),
      );
    });
  }
}
