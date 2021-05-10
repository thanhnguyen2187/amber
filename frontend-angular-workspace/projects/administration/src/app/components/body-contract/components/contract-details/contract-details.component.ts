import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { dynamicFormGroups } from './data/dynamic-form';
import { headerLabels } from './data/vehicle-usages.header-labels';
import { CookedContract } from '../../models/cooked-contract.interface';
import { CookedContractFactory } from '../../data/cooked-contract.factory';
import { convertCookedContract } from './functions/cooked-contract.convert';
import { DynamicFormGroup } from 'amber-core';
import { TableCellFactoryService } from '../../../table/services/table-cell-factory.service';
import { calculateTotal } from '../../functions/cooked-contracts.calculate-total';

@Component({
  selector: 'app-contract-details',
  templateUrl: './contract-details.component.html',
  styleUrls: ['./contract-details.component.scss']
})
export class ContractDetailsComponent implements OnInit {

  displayValue = false;
  displayUsage = false;

  @Input() get display(): boolean {
    return this.displayValue;
  }

  set display(value: boolean) {
    this.displayValue = value;
    this.displayChange.emit(value);
  }

  @Output() displayChange = new EventEmitter<boolean>();
  cookedContractValue: CookedContract = CookedContractFactory.createDefault();
  dynamicFormGroups = dynamicFormGroups;
  headerLabels = headerLabels;
  customCell = this.tableCellFactoryService.customCell;
  createHeaderCell = this.tableCellFactoryService.createHeaderCell;

  @Input() get cookedContract(): CookedContract {
    return this.cookedContractValue;
  }
  set cookedContract(cookedContract: CookedContract) {
    this.cookedContractValue = cookedContract;
    this.dynamicFormGroups = convertCookedContract(cookedContract);
  }

  get dynamicFormGroupsJSON(): string {
    return JSON.stringify(this.dynamicFormGroups);
  }
  get usagesTotal(): number {
    return calculateTotal(this.cookedContract.vehicleUsages);
  }


  constructor(
    private tableCellFactoryService: TableCellFactoryService,
  ) {
  }

  ngOnInit(): void {
  }

}
