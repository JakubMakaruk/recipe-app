import {
  Directive,
  ElementRef,
  inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { GsapTransitionService } from '../../services';

@Directive({
  selector: '[appSwipeFromBottomToTopTransition]',
  standalone: true,
})
export class PageTransitionDirective implements OnInit, OnDestroy {
  private readonly elementRef = inject(ElementRef);
  private readonly transitionService = inject(GsapTransitionService);

  ngOnInit() {
    this.transitionService.enterPage(this.elementRef);
  }

  ngOnDestroy() {
    this.transitionService.leavePage(this.elementRef);
  }
}
