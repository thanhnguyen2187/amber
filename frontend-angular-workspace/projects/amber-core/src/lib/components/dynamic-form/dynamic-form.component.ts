import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DynamicFormControl, DynamicFormControlType, DynamicFormGroup } from './dynamic-form.interfaces';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'amber-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {

  @Input() dynamicFormGroups: DynamicFormGroup[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
