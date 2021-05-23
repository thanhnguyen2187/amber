import { BikePurposes } from './bike-purposes';

export const BikePurposesMap: {
  [_: number]: string,
} = Object.fromEntries(
  BikePurposes.map(
    vehicleUsageType => [vehicleUsageType.value, vehicleUsageType.label]
  )
);
