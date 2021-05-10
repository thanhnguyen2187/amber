import { CustomerData } from '../../../models/customer-data.interface';
import { VehicleUsage } from '../../../models/vehicle-usage.interface';

export interface InputData {
  stateValue: number;
  total: number;
  totalPaid: number;
  customerData: CustomerData;
  vehicleUsages: VehicleUsage[];
}
