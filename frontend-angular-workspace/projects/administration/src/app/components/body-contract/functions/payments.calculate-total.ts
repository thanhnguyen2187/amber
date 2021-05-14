import { Payment } from '../models/payment.interface';

export function calculateTotal(
  payments: Payment[],
): number {
  let total = 0;
  payments.forEach(
    (payment) => total += payment.amount
  );
  return total;
}
