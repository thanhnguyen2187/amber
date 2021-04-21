import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableMasterComponent } from './table-master.component';
import { TableRowComponent } from './table-row.component';
import { AmberCoreModule } from 'amber-core';
import { TableCellComponent } from './table-cell.component';
import { FormsModule } from '@angular/forms';
import { TableCellPlainComponent } from './table-cell/table-cell-plain.component';
import { TableCellAmountComponent } from './table-cell/table-cell-amount.component';
import { TableCellImageComponent } from './table-cell/table-cell-image.component';
import { TableCellDateComponent } from './table-cell/table-cell-date.component';
import { TableMasterForRentComponent } from './table-master/table-master-for-rent.component';
import { TableMasterForSaleComponent } from './table-master/table-master-for-sale.component';
import { TableRowForSaleComponent } from './table-row/table-row-for-sale.component';


@NgModule({
  declarations: [
    TableMasterComponent,
    TableRowComponent,
    TableCellComponent,
    TableCellPlainComponent,
    TableCellAmountComponent,
    TableCellImageComponent,
    TableCellDateComponent,
    TableMasterForRentComponent,
    TableMasterForSaleComponent,
    TableRowForSaleComponent,
  ],
  exports: [
    TableMasterComponent,
    TableMasterForSaleComponent,
  ],
  imports: [
    CommonModule,
    AmberCoreModule,
    FormsModule,
  ]
})
export class TableModule { }
