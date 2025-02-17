import { Component } from '@angular/core';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, TranslatePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
