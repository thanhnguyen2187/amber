import { Payment } from '../models/payment.interface';
import { format, parseJSON } from 'date-fns';
import { formatDate } from '@angular/common';
import { CookedContract } from '../models/cooked-contract.interface';

export class PaymentFactory {
  static augment(payment: Payment): Payment {
    return {
      paymentId: payment.paymentId,
      amount: payment.amount,
      note: payment.note,
      dateCreated: parseJSON(payment.dateCreated),
      contractId: payment.contractId,
      get dateCreatedDisplay(): string {
        return format(
          this.dateCreated,
          'yyyy-MM-dd HH:mm',
        );
      },
      editing: !!payment.editing,
      removing: !!payment.removing,
    };
  }

  static createDefault(): Payment {
    return {
      paymentId: 0,
      amount: 0,
      note: '',
      dateCreated: new Date(),
      contractId: 0,
      editing: false,
      removing: false,
    };
  }

  static createNew(contractId: number): Payment {
    const payment = this.createDefault();
    return {
      ...this.augment(payment),
      contractId,
      editing: true,
      removing: false,
    };
  }

  static createWithAmount(
    contractId: number,
    amount: number,
  ): Payment {
    const payment = this.createDefault();
    return {
      ...this.augment(payment),
      contractId,
      amount,
      editing: true,
      removing: false,
    };
  }
}
