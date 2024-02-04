import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './components/navbar/navbar.component';
import {MaterialModule} from './material.module';
import {ReactiveFormsModule} from '@angular/forms';
import {NavigateBackComponent} from './components/navigate-back/navigate-back.component';

@NgModule({
  declarations: [NavbarComponent, NavigateBackComponent],
  exports: [
    NavbarComponent,
    MaterialModule,
    ReactiveFormsModule,
    NavigateBackComponent,
  ],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
})
export class SharedModule {}
