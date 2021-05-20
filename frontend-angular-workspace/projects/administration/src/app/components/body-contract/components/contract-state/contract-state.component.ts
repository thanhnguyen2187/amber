import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ContractStates } from '../../data/contract-states';

@Component({
  selector: 'app-contract-state',
  templateUrl: './contract-state.component.html',
  styleUrls: ['./contract-state.component.scss']
})
export class ContractStateComponent implements OnInit {

  constructor() { }

  contractStates = ContractStates;

  stateValue = 0;
  @Output() stateChange = new EventEmitter<number>();
  @Input() get state(): number {
    return this.stateValue;
  }
  set state(newValue: number) {
    this.stateValue = newValue;
    this.stateChange.emit(newValue);
  }

  ngOnInit(): void {
  }

}
