import { CookedContract } from '../models/cooked-contract.interface';
import { CustomerDataFactory } from './customer-data.factory';
import { VehicleUsageFactory } from './vehicle-usage.factory';
import { PaymentFactory } from './payment.factory';
import { ContractDataFactory } from './contract-data.factory';
import { calculateTotal as calculateTotalPayments } from '../functions/payments.calculate-total';
import { calculateTotal } from '../functions/vehicle-usages.calculate-total';

export class CookedContractFactory {
  static augment(cookedContract: CookedContract): CookedContract {
    return {
      id: cookedContract.id,
      stateValue: cookedContract.stateValue,
      get stateDisplay(): string {
        switch (this.stateValue) {
          case 0:
            return 'Created';
          case 1:
            return 'Pending';
          case 2:
            return 'Booked';
          case 3:
            return 'In Effect';
          case 4:
            return 'Finished';
          case 5:
            return 'Overdue';
          default:
            return '';
        }
      },
      customerData: CustomerDataFactory.shrink(
        cookedContract.customerData
      ),
      contractData: cookedContract.contractData,
      vehicleUsages: cookedContract.vehicleUsages.map(
        VehicleUsageFactory.augment
      ),
      vehicleUsagesLog: cookedContract.vehicleUsagesLog.map(
        VehicleUsageFactory.augment
      ),
      payments: cookedContract.payments.map(
        PaymentFactory.augment
      ),
      // total: cookedContract.total,
      get total(): number {
        return calculateTotal(this.vehicleUsages);
      },
      get totalPaid(): number {
        return calculateTotalPayments(this.payments);
      },
      visibility: cookedContract.visibility,
      displayDetails: false,
      displayPayments: false,
      displayUsagesLog: false,
    };
  }

  static createDefault(): CookedContract {
    return {
      id: 0,
      stateValue: 0,
      stateDisplay: '',
      customerData: CustomerDataFactory.createDefault(),
      contractData: ContractDataFactory.createDefault(),
      vehicleUsages: [],
      vehicleUsagesLog: [],
      payments: [],
      total: 0,
      totalPaid: 0,
      visibility: 1,
      displayDetails: false,
      displayPayments: false,
      displayUsagesLog: false,
    };
  }
}
