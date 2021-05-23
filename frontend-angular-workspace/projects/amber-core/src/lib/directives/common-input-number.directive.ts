import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[amberCommonInputNumber]'
})
export class CommonInputNumberDirective {

  @Input('disabled') disabled = false;
  @HostBinding('class') get classes(): string {
    return [
      'bg-white',
      'border-2',
      'rounded',
      'w-12',
      'px-1',
      'outline-none',
      this.disabled ? 'text-gray-200' : '',
    ].join(' ');
  }

  constructor() { }

}
