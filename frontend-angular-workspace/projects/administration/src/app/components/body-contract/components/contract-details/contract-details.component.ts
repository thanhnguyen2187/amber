import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { dynamicFormGroups } from './data/dynamic-form';
import { headerLabels } from './data/vehicle-usages.header-labels';
import { CookedContract } from '../../models/cooked-contract.interface';
import { CookedContractFactory } from '../../data/cooked-contract.factory';
import { convertCookedContract } from './functions/cooked-contract.convert';
import { DynamicFormGroup } from 'amber-core';
import { TableCellFactoryService } from '../../../table/services/table-cell-factory.service';
import { calculateTotal } from '../../functions/vehicle-usages.calculate-total';
import { VehicleUsageFactory } from '../../data/vehicle-usage.factory';
import { VehicleUsage } from '../../models/vehicle-usage.interface';
import { vehicleUsageTypesEnum } from '../../data/vehicle-usage-types.enum';
import { calculateTotal as calculateTotalPayments } from '../../functions/payments.calculate-total';

@Component({
  selector: 'app-contract-details',
  templateUrl: './contract-details.component.html',
  styleUrls: ['./contract-details.component.scss']
})
export class ContractDetailsComponent implements OnInit {

  displayValue = false;
  displayUsage = false;
  displayPayment = false;
  selectedUsage = this.cookedContract?.vehicleUsages[0]
    ?? VehicleUsageFactory.createDefault();
  selectedUsageIndex = 0;
  VehicleUsageFactory = VehicleUsageFactory;
  clickEventRangePicker?: MouseEvent;

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

  vehicleUsageTypesEnum = vehicleUsageTypesEnum;

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
  get paymentsTotal(): number {
    return calculateTotalPayments(this.cookedContract.payments);
  }

  copyVehicleUsage(vehicleUsage: VehicleUsage): VehicleUsage {
    return Object.create(vehicleUsage);
  }

  acceptUsageChange(newVehicleUsage: VehicleUsage): void {
    if (this.selectedUsageIndex === -1) { // creating new
      this.cookedContract.vehicleUsages.push(newVehicleUsage);
    } else { // editing an old one
      this.cookedContract.vehicleUsages[this.selectedUsageIndex] = newVehicleUsage;
    }
  }

  constructor(
    private tableCellFactoryService: TableCellFactoryService,
  ) {
  }

  ngOnInit(): void {
  }

}
