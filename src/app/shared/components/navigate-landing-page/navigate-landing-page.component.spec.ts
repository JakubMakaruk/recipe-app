import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigateLandingPageComponent } from './navigate-landing-page.component';

describe('NavigateLandingPageComponent', () => {
  let component: NavigateLandingPageComponent;
  let fixture: ComponentFixture<NavigateLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigateLandingPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigateLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
