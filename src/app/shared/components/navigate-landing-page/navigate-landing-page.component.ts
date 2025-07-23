import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-navigate-landing-page',
  standalone: true,
  imports: [MatButton, TranslatePipe],
  templateUrl: './navigate-landing-page.component.html',
  styleUrl: './navigate-landing-page.component.scss',
})
export class NavigateLandingPageComponent {
  private readonly router = inject(Router);

  protected navigateLandingPage(): void {
    this.router.navigate(['/']).then();
  }
}
