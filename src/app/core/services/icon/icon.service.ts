import { Injectable } from '@angular/core';
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";

@Injectable({
  providedIn: 'root'
})
export class IconService {

  private readonly icons: { name: string; path: string }[] = [
    { name: 'google', path: 'assets/icons/svg/google.svg' },
    { name: 'facebook', path: 'assets/icons/svg/facebook.svg' },
  ];

  constructor(private _iconRegistry: MatIconRegistry,
              private _sanitizer: DomSanitizer,) { }

  registerIcons(): void {
    this.icons.forEach(icon => {
      this._iconRegistry.addSvgIcon(
        icon.name,
        this._sanitizer.bypassSecurityTrustResourceUrl(icon.path)
      );
    });
  }
}
