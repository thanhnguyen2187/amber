import {
  Component, ElementRef,
  Input,
  OnInit
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
export class TagSelectDropdownComponent implements OnInit {

  @Input() visibility = false;
  @Input() dropdownDirection: 'down' | 'up' = 'down';
  @Input() parentYPosition = 0;
  get currentHeightInPx(): string {
    return this.rectangle
      ? this.rectangle.height.toString()
      : '0' + 'px';
  }
  rectangle: undefined | DOMRect;

  constructor(
    private elementRef: ElementRef,
  ) {
    this.rectangle = elementRef.nativeElement.getBoundingClientRect();
  }


  calculateDropdownDirection(
    availableDropdownHeight: number,
  ): 'up' | 'down' {
    return 'up';
  }

  ngOnInit(): void {
  }

}
