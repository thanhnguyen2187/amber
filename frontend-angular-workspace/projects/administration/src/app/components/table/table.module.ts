import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableMasterComponent } from './components/table-master/table-master.component';
import { TableCellComponent } from './components/table-cell/table-cell.component';
import { TableRowComponent } from './components/table-row/table-row.component';
import { LayoutsModule } from '../../layouts/layouts.module';


@NgModule({
  declarations: [
    TableMasterComponent,
    TableCellComponent,
    TableRowComponent,
  ],
  imports: [
    CommonModule,
    LayoutsModule,
  ],
  exports: [
    TableMasterComponent,
    TableCellComponent,
  ]
})
export class TableModule { }
