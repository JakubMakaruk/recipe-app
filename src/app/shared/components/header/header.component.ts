import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { MatButton, MatIconButton } from '@angular/material/button';
import { TranslatePipe } from '@ngx-translate/core';
import { MenuItem } from '../../models/menu-item.model';
import { Router } from '@angular/router';
import { getMenuItems } from '../../utils';
import { NgTemplateOutlet } from '@angular/common';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatButton, TranslatePipe, NgTemplateOutlet, MatIcon, MatIconButton],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private readonly fb = inject(NonNullableFormBuilder);
  private readonly router = inject(Router);

  protected hamburgerMenuActive = signal(false);
  protected menuItems = signal<MenuItem[]>(getMenuItems(this.router));

  protected searchForm: FormGroup<SearchForm> | null = null;

  constructor() {
    this.createSearchForm();
  }

  protected toggleHamburgerMenu(): void {
    this.hamburgerMenuActive.set(!this.hamburgerMenuActive());
  }

  protected search(): void {
    if (!this.searchForm) {
      return;
    }

    this.searchForm.markAllAsTouched();
    this.searchForm.updateValueAndValidity();

    if (this.searchForm.valid) {
      const { search } = this.searchForm.getRawValue();
      console.log('Searching: ', search);
    }
  }

  private createSearchForm(): void {
    this.searchForm = this.fb.group({
      search: ['', []],
    });
  }
}

interface SearchForm {
  search: FormControl<string>;
}
