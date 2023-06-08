import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: 'button[clickcount]',
})
export class ClickcountDirective {
  numberOfClicks = 0;
  @HostListener('click')
  onClick() {
    console.log(`Number of times clicked ${this.numberOfClicks++}`);
  }
}
