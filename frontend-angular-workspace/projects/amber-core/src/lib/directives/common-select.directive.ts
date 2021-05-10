import { Directive, ElementRef, HostBinding } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[amberCommonSelect]'
})
export class CommonSelectDirective {

  @HostBinding('class') get classes(): string {
    return [
      'px-1',
      'bg-white',
      'border-2',
      'rounded',
      'outline-none',
    ].join(' ');
  }

  constructor(
  ) {
  }

}
