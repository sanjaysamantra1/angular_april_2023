import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[zoom]',
})
export class ZoomDirective {
  constructor(private ele: ElementRef) {}

  @HostListener('mouseenter')
  abc() {
    this.ele.nativeElement.style.transform = 'scale(1.1,1.1)';
  }
  @HostListener('mouseleave')
  xyz() {
    this.ele.nativeElement.style.transform = 'scale(1,1)';
  }
}
