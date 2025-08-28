import { TestBed } from '@angular/core/testing';

import { GsapTransitionService } from './gsap-transition.service';

describe('GsapTransitionService', () => {
  let service: GsapTransitionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GsapTransitionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
