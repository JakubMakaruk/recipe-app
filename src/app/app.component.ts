import { Component } from '@angular/core';
import { IconService } from './core/services/icon/icon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'recipe-app';

  constructor(private _iconService: IconService) {
    this._iconService.registerIcons();
  }
}
