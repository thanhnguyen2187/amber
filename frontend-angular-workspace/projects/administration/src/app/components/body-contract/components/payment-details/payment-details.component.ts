import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CookedContract } from '../../models/cooked-contract.interface';
import { CookedContractFactory } from '../../data/cooked-contract.factory';
import { TableCellFactoryService } from '../../../table/services/table-cell-factory.service';
import { calculateTotal as calculateTotalVehicleUsages } from '../../functions/vehicle-usages.calculate-total';
import { calculateTotal as calculateTotalPayments } from '../../functions/payments.calculate-total';
import { PaymentFactory } from '../../data/payment.factory';
import { Payment } from '../../models/payment.interface';
import { UpdatePaymentsService } from '../../services/update-payments.service';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.scss']
})
export class PaymentDetailsComponent implements OnInit {

  @Input() cookedContract: CookedContract = CookedContractFactory.createDefault();
  newPayments: Payment[] = [];
  headerLabels: string[] = [
    'Date Created',
    'Note',
    'Amount',
    '',
  ];
  createHeaderCell = this.tableCellFactoryService.createHeaderCell;
  customCell = this.tableCellFactoryService.customCell;
  calculateTotalVehicleUsages = calculateTotalVehicleUsages;
  calculateTotalPayments = calculateTotalPayments;

  @Output() eventEmitterClose = new EventEmitter();

  addNewPayment(): void {
    this.newPayments.push(
      PaymentFactory.createNew(this.cookedContract.id)
    );
  }

  get totalVehicleUsages(): number {
    return calculateTotalVehicleUsages(this.cookedContract.vehicleUsages);
  }
  get totalPayments(): number {
    return calculateTotalPayments([
      ...this.cookedContract.payments,
      ...this.newPayments,
    ]);
  }

  removePayment(index: number): void {
    this.newPayments.splice(index, 1);
  }

  accept(): void {
    this.updatePaymentsService.updatePayments(
      {
        contractId: this.cookedContract.id,
        payments: this.newPayments,
      }
    ).subscribe(
      () => {
        this.cookedContract.payments.push(...this.newPayments);
        this.newPayments = [];
        this.cookedContract.displayPayments = false;
      },
    );
  }

  cancel(): void {
    this.cookedContract.displayPayments = false;
  }

  constructor(
    private tableCellFactoryService: TableCellFactoryService,
    private updatePaymentsService: UpdatePaymentsService,
  ) { }

  ngOnInit(): void {
  }

}
