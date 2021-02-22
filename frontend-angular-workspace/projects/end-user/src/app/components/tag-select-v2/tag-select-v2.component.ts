import {
  AfterViewChecked,
  AfterViewInit, ApplicationRef, ChangeDetectorRef,
  Component,
  DoCheck,
  ElementRef,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';
import { AvailableTagService, PhysicalTag, PhysicalTagStatus, } from './available-tag.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tag-select-v2',
  templateUrl: './tag-select-v2.component.html',
  styleUrls: ['./tag-select-v2.component.scss']
})
export class TagSelectV2Component implements
  OnInit,
  OnDestroy
{
  // variable declaration
  tags: PhysicalTag[] = [];
  tagsSubscription: Subscription | undefined;
  currentHeight = 0;
  isDropdownVisible = false;

  // getter
  get checkedTags(): PhysicalTag[] {
    return (
      this
      .tags
      .filter(
        (tag) =>
          tag.status === PhysicalTagStatus.checked
      )
    );
  }
  get uncheckedTags(): PhysicalTag[] {
    return (
      this
      .tags
      .filter(
        (tag) =>
          tag.status === PhysicalTagStatus.unchecked
      )
    );
  }

  // functions
  updateCurrentHeight(): void {
    this.currentHeight = this.elementRef.nativeElement.getBoundingClientRect().height;
  }

  setTagAsChecked(tag: PhysicalTag): void {
    tag.status = PhysicalTagStatus.checked;
    setTimeout(() => this.updateCurrentHeight(), 0);
    // this.updateCurrentHeight();
  }
  setTagAsUnchecked(tag: PhysicalTag): void {
    tag.status = PhysicalTagStatus.unchecked;
    setTimeout(() => this.updateCurrentHeight(), 0);
    // this.updateCurrentHeight();
  }

  // class-based methods
  constructor(
    private elementRef: ElementRef,
    private changeDetectionRef: ChangeDetectorRef,
    private availableTagService: AvailableTagService,
  ) {
  }

  ngOnInit(
  ): void {
    setTimeout(() => this.updateCurrentHeight(), 1);
    this.tagsSubscription =
      this.availableTagService
      .getPhysicalTags(['for-sale', 'for-rent'])
      .subscribe(
        (tags) => this.tags = tags
      );
  }

  ngOnDestroy(): void {
    this.tagsSubscription?.unsubscribe();
  }
}
