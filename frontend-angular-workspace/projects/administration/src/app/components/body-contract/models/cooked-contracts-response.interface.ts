import { CookedContract } from './cooked-contract.interface';

export interface CookedContractsResponse {
  cookedContracts: CookedContract[];
  size: number;
  total: number;
}
