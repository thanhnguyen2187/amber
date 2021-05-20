import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CookedContract } from '../../models/cooked-contract.interface';
import { CookedContractFactory } from '../../data/cooked-contract.factory';
import { TableCellFactoryService } from '../../../table/services/table-cell-factory.service';
import { calculateTotal as calculateTotalVehicleUsages } from '../../functions/vehicle-usages.calculate-total';
import { calculateTotal as calculateTotalPayments } from '../../functions/payments.calculate-total';
import { PaymentFactory } from '../../data/payment.factory';
import { Payment } from '../../models/payment.interface';
import { UpdatePaymentsService } from '../../services/update-payments.service';
import { calculatePaymentAmount } from '../../functions/payment.calculate-amount';
import { ContractStatesEnum } from '../../data/contract-states.enum';

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

  get displayPaymentButtons(): boolean {
    return this.cookedContract.totalPaid < this.cookedContract.total;
  }

  payOneThird(): void {
    this.cookedContract.stateValue = ContractStatesEnum.Booked;
    this.newPayments.push(
      PaymentFactory.createWithAmount(
        this.cookedContract.id,
        calculatePaymentAmount(
          {
            type: 'oneThird',
            cookedContract: this.cookedContract,
          }
        )
      )
    );
  }

  payUp(): void {
    this.cookedContract.stateValue = ContractStatesEnum.InEffect;
    // TODO: implement "findMainUsagesType",
    //       and switch the state accordingly
    this.newPayments.push(
      PaymentFactory.createWithAmount(
        this.cookedContract.id,
        calculatePaymentAmount(
          {
            type: 'all',
            cookedContract: this.cookedContract,
          }
        )
      )
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
