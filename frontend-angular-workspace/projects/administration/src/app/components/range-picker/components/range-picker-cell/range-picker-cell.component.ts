import { Component, Input, OnInit } from '@angular/core';
import { RangePickerCellData } from '../../models/range-picker-cell-data.interface';
import { RangePickerCellDataFactory } from '../../data/range-picker-cell-data.factory';
import { calculateClasses } from '../../calculations/range-picker-cell-data.type.calculate-classes';

@Component({
  selector: 'app-range-picker-cell',
  templateUrl: './range-picker-cell.component.html',
  styleUrls: ['./range-picker-cell.component.scss']
})
export class RangePickerCellComponent implements OnInit {

  @Input() rangePickerCellData: RangePickerCellData = RangePickerCellDataFactory.createDefault(
    {
      label: 'Default',
    }
  );
  calculateClasses = calculateClasses;

  constructor() { }

  ngOnInit(): void {
  }

}
