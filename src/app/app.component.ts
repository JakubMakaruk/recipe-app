import { Component, inject } from '@angular/core';
import { IconService } from './core/services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public route = inject(ActivatedRoute);

  title = 'recipe-app';

  constructor(private _iconService: IconService) {
    this._iconService.registerIcons();
  }
}
