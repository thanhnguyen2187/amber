import { CookedContract } from '../models/cooked-contract.interface';
import { CustomerDataFactory } from './customer-data.factory';
import { VehicleUsageFactory } from './vehicle-usage.factory';
import { PaymentFactory } from './payment.factory';

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
      vehicleUsages: cookedContract.vehicleUsages.map(
        VehicleUsageFactory.augment
      ),
      vehicleUsagesLog: cookedContract.vehicleUsagesLog.map(
        VehicleUsageFactory.augment
      ),
      payments: cookedContract.payments.map(
        PaymentFactory.augment
      ),
      total: cookedContract.total,
      totalPaid: cookedContract.totalPaid,
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
