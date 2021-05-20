import { PaymentCalculationType } from '../models/payment-calculation.type';
import { CookedContract } from '../models/cooked-contract.interface';
import { round } from 'amber-core';

export function calculatePaymentAmount(
  {
    type,
    cookedContract,
  }: {
    type: PaymentCalculationType,
    cookedContract: CookedContract,
  }
): number {
  let amount = 0;
  switch (type) {
    case 'oneThird':
      amount = round(
        {
          value: cookedContract.total / 3,
          step: 0.01,
          mathFunction: Math.ceil,
        }
      );
      break;
    case 'all':
      amount = cookedContract.total - cookedContract.totalPaid;
      break;
  }
  return amount;
}
