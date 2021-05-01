//
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//
import { AmberCoreModule } from 'amber-core';
//
import { TableMasterComponent } from './components/table-master/table-master.component';
import { TableRowComponent } from './components/table-row/table-row.component';
import { TableCellComponent } from './components/table-cell/table-cell.component';


@NgModule({
  declarations: [
    TableMasterComponent,
    TableRowComponent,
    TableCellComponent,
  ],
  imports: [
    CommonModule,
    AmberCoreModule,
    FormsModule,
  ],
  exports: [
    TableMasterComponent,
  ]
})
export class TableV2Module { }
