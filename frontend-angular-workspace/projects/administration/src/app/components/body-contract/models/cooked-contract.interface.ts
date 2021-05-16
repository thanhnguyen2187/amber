import { CustomerData } from './customer-data.interface';
import { VehicleUsage } from './vehicle-usage.interface';
import { Payment } from './payment.interface';

export interface CookedContract {
  id: number;
  stateValue: number;
  stateDisplay: string;
  customerData: CustomerData;
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
