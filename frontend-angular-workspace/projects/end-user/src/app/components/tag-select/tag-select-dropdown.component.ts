import {
  Component,
  Input,
  ElementRef,
  ViewChild,
  OnInit,
  OnChanges,
  AfterViewInit, SimpleChanges,
} from '@angular/core';

interface Position {
  x: number;
  y: number;
}

interface LineItem {
  index: number;
  type: 'input' | 'item';
}

@Component({
  selector: 'app-tag-select-dropdown',
  templateUrl: './tag-select-dropdown.component.html',
  styleUrls: ['./tag-select-dropdown.component.scss']
})
export class TagSelectDropdownComponent implements
  OnInit
{

  currentHeight = 0;
  @Input() isVisible = false;
  @Input() availableHeight = 0;
  @Input() parentHeight = 0;

  constructor(
    public elementRef: ElementRef,
  ) {
  }

  updateCurrentHeight(): void {
    this.currentHeight = this.elementRef.nativeElement.getBoundingClientRect().height;
  }

  ngOnInit(): void {
    this.updateCurrentHeight();
  }
}
