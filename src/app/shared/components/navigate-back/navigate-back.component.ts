import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {noop} from 'rxjs';

@Component({
  selector: 'app-navigate-back',
  templateUrl: './navigate-back.component.html',
  styleUrls: ['./navigate-back.component.scss'],
})
export class NavigateBackComponent {
  constructor(private _router: Router) {}

  navigateBack() {
    this._router.navigate(['..']).then(noop);
  }
}
