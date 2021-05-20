import { CustomerData } from './customer-data.interface';
import { VehicleUsage } from './vehicle-usage.interface';
import { Payment } from './payment.interface';
import { ContractData } from './contract-data.interface';

export interface CookedContract {
  id: number;
  stateValue: number;
  stateDisplay: string;
  customerData: CustomerData;
  contractData: ContractData;
  vehicleUsages: VehicleUsage[];
  vehicleUsagesLog: VehicleUsage[];
  payments: Payment[];
  total: number;
  totalPaid: number;
  visibility: number;
  displayDetails: boolean;
  displayPayments: boolean;
  displayUsagesLog: boolean;
}
