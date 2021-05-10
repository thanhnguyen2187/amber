import { CookedContract } from '../models/cooked-contract.interface';
import { VehicleUsage } from '../models/vehicle-usage.interface';

export function calculateTotal(
  vehicleUsages: VehicleUsage[],
): number {
  let total = 0;
  vehicleUsages.forEach(
    (vehicleUsage) => total += vehicleUsage.total
  );
  return total;
}
