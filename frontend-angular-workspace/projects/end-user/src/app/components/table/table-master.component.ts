import { Component, Input, OnInit } from '@angular/core';
import { TableCell, TableRow, TableRowForRent, TableRowForSale } from './table-data.model';
import { TableStaticService } from './table-static.service';

@Component({
  selector: 'app-table-master',
  templateUrl: './table-master.component.html',
  styleUrls: ['./table-master.component.scss']
})
export class TableMasterComponent implements OnInit {

  // @Input() cells: TableCell[] = [];
  @Input() isTableForSale = false;
  @Input() isTableForRent = false;
  @Input() rowsForSale: TableRowForSale[] = [];
  @Input() rowsForRent: TableRowForRent[] = [];
  @Input() title = '';
  @Input() columnCount = 1;

  constructor(
    public tableStaticService: TableStaticService,
  ) { }

  ngOnInit(): void {
    // console.log(this.cells);
  }

}
