import { Component, Input, OnInit } from '@angular/core';
import { CookedContract } from '../../models/cooked-contract.interface';
import { CookedContractFactory } from '../../data/cooked-contract.factory';
import { TableCellFactoryService } from '../../../table/services/table-cell-factory.service';
import { VehicleUsage } from '../../models/vehicle-usage.interface';

@Component({
  selector: 'app-vehicle-usage-logs-table',
  templateUrl: './vehicle-usage-logs-table.component.html',
  styleUrls: ['./vehicle-usage-logs-table.component.scss']
})
export class VehicleUsageLogsTableComponent implements OnInit {

  @Input() headerLabels: string[] = [];
  createHeaderCell = this.tableCellFactoryService.createHeaderCell;
  customCell = this.tableCellFactoryService.customCell;
  @Input() cookedContract: CookedContract = CookedContractFactory.createDefault();
  @Input() vehicleUsages: VehicleUsage[] = [];

  constructor(
    private tableCellFactoryService: TableCellFactoryService,
  ) {
  }

  ngOnInit(): void {
  }

}
