import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {noop} from 'rxjs';
import {MatIcon} from "@angular/material/icon";
import {MatFabButton} from "@angular/material/button";

@Component({
  selector: 'app-navigate-back',
  templateUrl: './navigate-back.component.html',
  styleUrls: ['./navigate-back.component.scss'],
  standalone: true,
  imports: [
    MatIcon,
    MatFabButton
  ]
})
export class NavigateBackComponent {
  constructor(private _router: Router) {}

  navigateBack() {
    this._router.navigate(['..']).then(noop);
  }
}
