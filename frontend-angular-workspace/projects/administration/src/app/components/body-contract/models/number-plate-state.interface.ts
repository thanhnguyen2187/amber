import { CookedContract } from './cooked-contract.interface';

export interface NumberPlateState {
  label: string;
  value: string;
  cookedContract: CookedContract;
  bikeName: string;
}
