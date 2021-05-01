import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'amber-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  displayValue = false;

  @Input() get display(): boolean {
    return this.displayValue;
  }
  set display(value: boolean) {
    this.displayValue = value;
    this.displayChange.emit(value);
  }
  @Output() displayChange = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

}
