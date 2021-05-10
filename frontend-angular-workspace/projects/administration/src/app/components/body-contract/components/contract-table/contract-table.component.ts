import { Component, OnInit } from '@angular/core';
import { TableCellFactoryService } from '../../../table/services/table-cell-factory.service';
import { TableCell } from '../../../table/models/table-cell';
import { BodyContractDataService } from '../../services/body-contract-data.service';
import { CookedContract } from '../../models/cooked-contract.interface';
import { dynamicFormGroups } from './contract-table.dynamic-form.data';
import { convertDynamicFormGroup } from 'amber-core';

@Component({
  selector: 'app-contract-table',
  templateUrl: './contract-table.component.html',
  styleUrls: ['./contract-table.component.scss']
})
export class ContractTableComponent implements OnInit {

  headerLabels: string[] = [
    'ID',
    'State',
    'Customer Data',
    'Vehicle List',
    'Actions',
  ];
  headerCells: TableCell[] = this.headerLabels.map(
    this.tableCellFactoryService.createHeaderCell
  );
  customCell = this.tableCellFactoryService.customCell;
  displaySearch = false;

  cookedContracts: CookedContract[] = [];
  page = 1;
  size = 10;
  total = 1;

  dynamicFormGroups = dynamicFormGroups;
  get dynamicFormGroupsJSON(): string {
    return JSON.stringify(this.dynamicFormGroups);
  }

  displayDetails = false;

  constructor(
    private tableCellFactoryService: TableCellFactoryService,
    private dataService: BodyContractDataService,
  ) { }

  ngOnInit(): void {
    this.dataService.cookedContractsV2$.subscribe(
      (cookedContractsResponse) => {
        this.cookedContracts = cookedContractsResponse.cookedContracts;
        this.total = cookedContractsResponse.total;
      }
    );
    // this.reloadData();
    this.reloadDataV2();
  }

  reloadData(): void {
    this.dataService.reloadCookedContracts();
  }

  reloadDataV2(): void {
    const body = {};
    Object.assign(
      body,
      ...this.dynamicFormGroups.map(
        dynamicFormGroup => convertDynamicFormGroup(dynamicFormGroup)
      )
    );
    this.dataService.reloadCookedContractsV2(
      {
        body,
      }
    );
  }

  toggleContractVisibility(cookedContract: CookedContract): void {
    const newVisibility =
      cookedContract.visibility === 0
        ? 1
        : 0
    ;
    this.dataService.updateVisibility(
      {
        contractId: cookedContract.id,
        newVisibility,
      },
    );
    setTimeout(
      () => this.reloadDataV2(),
    );
  }

}
