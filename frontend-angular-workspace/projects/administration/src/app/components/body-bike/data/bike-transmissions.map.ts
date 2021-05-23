import { BikeTransmissions } from './bike-transmissions';

export const BikeTransmissionsMap: {
  [_: string]: string,
} = Object.fromEntries(
  BikeTransmissions.map(
    vehicleUsageType => [vehicleUsageType.value, vehicleUsageType.label]
  )
);
