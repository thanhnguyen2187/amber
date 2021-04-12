import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarBoxComponent } from './calendar-box.component';
import { AmberCoreModule } from 'amber-core';
import { CalendarMasterComponent } from './calendar-master.component';
import { CalendarCellComponent } from './calendar-cell.component';


@NgModule({
  declarations: [
    CalendarBoxComponent,
    CalendarCellComponent,
    CalendarMasterComponent,
  ],
  imports: [
    CommonModule,
    AmberCoreModule,
  ],
  exports: [
    CalendarMasterComponent,
  ]
})
export class CalendarModule { }
