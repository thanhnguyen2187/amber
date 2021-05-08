import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-master',
  templateUrl: './table-master.component.html',
  styleUrls: ['./table-master.component.scss']
})
export class TableMasterComponent implements OnInit {

  @Input() columnCount = 1;
  constructor() { }

  ngOnInit(): void {
  }

}
