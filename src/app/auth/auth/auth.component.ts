import {Component} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {TranslatePipe} from '@ngx-translate/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [MatButton, TranslatePipe, NgOptimizedImage],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {}
