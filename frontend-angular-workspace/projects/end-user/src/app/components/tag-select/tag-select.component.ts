import {
  Component,
  HostListener,
  ElementRef,
  OnInit,
  OnDestroy,
} from '@angular/core';
import {
  fromEvent,
  interval, Observable, Subscription,
} from 'rxjs';
import {
  debounceTime,
  tap,
  throttle,
} from 'rxjs/operators';

@Component({
  selector: 'app-tag-select',
  templateUrl: './tag-select.component.html',
  styleUrls: ['./tag-select.component.scss']
})
export class TagSelectComponent implements
  OnInit,
  OnDestroy
{
  showDropdown = false;
  scrollEventSubscription: Subscription | undefined;
  availableDropdownHeight = 0;
  currentYPosition = 0;
  get hasEnoughHeightForDropdown(
  ): boolean {
    return true;
  }

  updateAvailableDropdownHeight(): void {
    const rectangle = this.elementRef.nativeElement.getBoundingClientRect();
    this.availableDropdownHeight = window.innerHeight - rectangle.bottom;
  }

  constructor(
    private elementRef: ElementRef,
  ) {
  }

  ngOnInit(): void {
    this.scrollEventSubscription = (
      fromEvent(window, 'scroll')
      .pipe(
        debounceTime(200),
      )
      .subscribe(
        () => {
          this.updateAvailableDropdownHeight();
        }
      )
    );
  }

  ngOnDestroy(): void {
    this.scrollEventSubscription?.unsubscribe();
  }

}

