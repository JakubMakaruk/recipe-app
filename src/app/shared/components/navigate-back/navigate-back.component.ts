import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { noop } from 'rxjs';
import { MatIcon } from '@angular/material/icon';
import { MatFabButton, MatIconButton } from '@angular/material/button';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navigate-back',
  templateUrl: './navigate-back.component.html',
  styleUrls: ['./navigate-back.component.scss'],
  standalone: true,
  imports: [MatIcon, MatFabButton, MatIconButton],
})
export class NavigateBackComponent {
  constructor(
    private _router: Router,
    private _location: Location,
  ) {}

  navigateBack() {
    this._router.navigate(['..']).then();
  }
}
