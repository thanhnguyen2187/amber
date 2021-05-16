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
import { UpdateContractDetailsService } from '../../services/update-contract-details.service';
import { convertDynamicFormGroups } from './functions/dynamic-form-groups.convert';

@Component({
  selector: 'app-contract-details',
  templateUrl: './contract-details.component.html',
  styleUrls: ['./contract-details.component.scss']
})
export class ContractDetailsComponent implements OnInit {

  displayValue = false;
  displayUsage = false;
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
  get headerLabelsJSON(): string {
    return JSON.stringify(this.headerLabels);
  }
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
    const usage = VehicleUsageFactory.createDefault();
    usage.dateCreated = vehicleUsage.dateCreated;
    usage.usageId = vehicleUsage.usageId;
    usage.contractId = vehicleUsage.contractId;
    usage.type = vehicleUsage.type;
    usage.bikeModelId = vehicleUsage.bikeModelId;
    usage.bikeModelData = vehicleUsage.bikeModelData;
    usage.amount = vehicleUsage.amount;
    usage.dateStart = vehicleUsage.dateStart;
    usage.dateEnd = vehicleUsage.dateEnd;
    return VehicleUsageFactory.augment(usage);
  }

  acceptUsageChange(newVehicleUsage: VehicleUsage): void {
    if (this.selectedUsageIndex === -1) { // creating new
      this.cookedContract.vehicleUsages.push(newVehicleUsage);
    } else { // editing an old one
      this.cookedContract.vehicleUsages[this.selectedUsageIndex] = newVehicleUsage;
    }
    this.displayUsage = false;
  }

  remove(index: number): void {
    this.cookedContract.vehicleUsages.splice(index, 1);
  }

  accept(): void {
    const [state, customerData] = convertDynamicFormGroups(this.dynamicFormGroups);
    this.updateContractDetailsService.update$(
      {
        contractId: this.cookedContract.id,
        state,
        customerData,
        vehicleUsages: this.cookedContract.vehicleUsages,
      }
    ).subscribe(
      () => {
        this.cookedContract.customerData = customerData;
        this.cookedContract.stateValue = state;
        this.cookedContract.displayDetails = false;
      }
    );
  }

  constructor(
    private tableCellFactoryService: TableCellFactoryService,
    private updateContractDetailsService: UpdateContractDetailsService,
  ) {
  }

  ngOnInit(): void {
  }

}
