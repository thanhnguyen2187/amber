import {
  Component,
  HostListener,
  ElementRef,
  OnInit,
  OnDestroy,
  AfterViewInit,
  ViewChild,
} from '@angular/core';
import {
  fromEvent,
  interval,
  Observable,
  Subscription,
} from 'rxjs';
import {
  debounceTime,
  tap,
  throttle,
} from 'rxjs/operators';
import {
  TagSelectDropdownStyleService,
} from './tag-select-dropdown-style.service';

@Component({
  selector: 'app-tag-select',
  templateUrl: './tag-select.component.html',
  styleUrls: ['./tag-select.component.scss']
})
export class TagSelectComponent implements
  OnInit,
  OnDestroy,
  AfterViewInit
{

  get currentHeight(): number {
    const rectangle = this.elementRef.nativeElement.getBoundingClientRect();
    return rectangle.height;
  }

  constructor(
    private elementRef: ElementRef,
    public tagSelectDropdownStyleService: TagSelectDropdownStyleService,
  ) {
  }
  showDropdown = false;
  scrollEventSubscription: Subscription | undefined;
  availableDropdownHeight = 0;

  @ViewChild('dropdown') dropdown: ElementRef | undefined;

  updateAvailableDropdownHeight(): void {
    this.availableDropdownHeight = window.innerHeight - this.currentHeight;
  }

  get dropdownHeight(): number {
    return (
      this.dropdown
        ? this.dropdown.nativeElement.getBoundingClientRect().height
        : 0
    );
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

  ngAfterViewInit(): void {
  }

  ngOnDestroy(): void {
    this.scrollEventSubscription?.unsubscribe();
  }

}

