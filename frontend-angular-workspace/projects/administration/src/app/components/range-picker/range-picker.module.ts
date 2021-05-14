import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RangePickerBoxComponent } from './components/range-picker-box/range-picker-box.component';
import { RangePickerCellComponent } from './components/range-picker-cell/range-picker-cell.component';
import { AmberCoreModule } from 'amber-core';


@NgModule({
  declarations: [
    RangePickerBoxComponent,
    RangePickerCellComponent,
  ],
  imports: [
    CommonModule,
    AmberCoreModule,
  ],
  exports: [
    RangePickerBoxComponent,
  ]
})
export class RangePickerModule { }
