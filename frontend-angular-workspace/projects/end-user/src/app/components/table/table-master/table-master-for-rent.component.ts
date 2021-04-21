import { Component, Input, OnInit } from '@angular/core';
import { TableRowForRent } from '../table-data.model';
import { TableStaticService } from '../table-static.service';

@Component({
  selector: 'app-table-master-for-rent',
  templateUrl: './table-master-for-rent.component.html',
  styleUrls: ['./table-master-for-rent.component.scss']
})
export class TableMasterForRentComponent implements OnInit {

  @Input() title = '';
  @Input() rows: TableRowForRent[] = [];
  get total(): number {
    return this.tableStaticService.sumRows(this.rows);
  }

  constructor(
    public tableStaticService: TableStaticService,
  ) { }

  ngOnInit(): void {
  }

}
