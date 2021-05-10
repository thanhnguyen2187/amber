import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'amber-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  displayValue = false;
  @Input() title = '';

  @Input() get display(): boolean {
    return this.displayValue;
  }
  set display(value: boolean) {
    this.displayValue = value;
    this.displayChange.emit(value);
  }
  @Output() displayChange = new EventEmitter<boolean>();

  @Input() dismissAction: () => void = () => {};

  constructor() { }

  ngOnInit(): void {
  }

}
