import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[amberCommonInputCheckbox]'
})
export class CommonInputCheckboxDirective {

  @HostBinding('class') get classes(): string {
    return [
      'bg-white',
      'border-2',
      'rounded',
      'w-4',
      'h-4',
    ].join(' ');
  }

  constructor() { }

}
