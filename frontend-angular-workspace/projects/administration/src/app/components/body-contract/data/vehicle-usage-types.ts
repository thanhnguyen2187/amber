import { VehicleUsageType } from '../models/vehicle-usage-type.interface';

export const vehicleUsageTypes: VehicleUsageType[] = [
  {
    label: 'Daily Rental Inside City',
    value: 0,
  },
  {
    label: 'Daily Rental Traveling',
    value: 1,
  },
  {
    label: 'Monthly Rental',
    value: 2,
  },
  {
    label: 'For Sale',
    value: 10,
  },
];
