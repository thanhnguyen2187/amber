import { Directive, HostBinding } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[amberCommonInputText]'
})
export class CommonInputTextDirective {

  @HostBinding('class') get classes(): string {
    return [
      'px-1',
      'bg-white',
      'border-2',
      'rounded',
      'outline-none',
    ].join(' ');
  }

  constructor() { }

}
