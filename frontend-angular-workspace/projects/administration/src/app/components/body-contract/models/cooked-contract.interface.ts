import { CustomerData } from './customer-data.interface';
import { VehicleUsage } from './vehicle-usage.interface';

export interface CookedContract {
  id: number;
  stateValue: number;
  stateDisplay: string;
  customerData: CustomerData;
  vehicleUsages: VehicleUsage[];
  total: number;
  totalPaid: number;
  visibility: number;
  displayDetails: boolean;
}
