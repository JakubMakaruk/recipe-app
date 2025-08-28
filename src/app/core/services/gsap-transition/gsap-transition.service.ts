import { ElementRef, Injectable } from '@angular/core';
import gsap from 'gsap';

@Injectable({
  providedIn: 'root',
})
export class GsapTransitionService {
  enterPage(element: ElementRef, done?: () => void) {
    gsap.fromTo(
      element.nativeElement,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: 'power3.out',
        onComplete: done,
      },
    );
  }

  leavePage(element: ElementRef, done?: () => void) {
    gsap.to(element.nativeElement, {
      opacity: 0,
      y: -100,
      duration: 1,
      ease: 'power3.in',
      onComplete: done,
    });
  }
}
