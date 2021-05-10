import { CookedContract } from '../models/cooked-contract.interface';
import { CustomerDataFactory } from './customer-data.factory';

export class CookedContractFactory {
  static createDefault(): CookedContract {
    return {
      id: 0,
      stateValue: 0,
      stateDisplay: '',
      customerData: CustomerDataFactory.createDefault(),
      vehicleUsages: [],
      total: 0,
      totalPaid: 0,
      visibility: 1,
      displayDetails: false,
    };
  }
}
