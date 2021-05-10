import { vehicleUsageTypes } from './vehicle-usage-types';

export const vehicleUsageTypesMap: {
  [_: number]: string,
} = Object.fromEntries(
  vehicleUsageTypes.map(
    vehicleUsageType => [vehicleUsageType.value, vehicleUsageType.label]
  )
);
