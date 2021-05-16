import { Component, Input, OnInit } from '@angular/core';
import { TableCellFactoryService } from '../../../table/services/table-cell-factory.service';
import { CookedContract } from '../../models/cooked-contract.interface';
import { CookedContractFactory } from '../../data/cooked-contract.factory';

@Component({
  selector: 'app-vehicle-usage-logs',
  templateUrl: './vehicle-usage-logs.component.html',
  styleUrls: ['./vehicle-usage-logs.component.scss']
})
export class VehicleUsageLogsComponent implements OnInit {

  headerLabels: string[] = [
    'Date Created',
    'Model',
    'Amount',
    'Purpose',
    '',
  ];
  createHeaderCell = this.tableCellFactoryService.createHeaderCell;
  customCell = this.tableCellFactoryService.customCell;
  @Input() cookedContract: CookedContract = CookedContractFactory.createDefault();

  constructor(
    private tableCellFactoryService: TableCellFactoryService,
  ) {
  }

  ngOnInit(): void {
  }

}
