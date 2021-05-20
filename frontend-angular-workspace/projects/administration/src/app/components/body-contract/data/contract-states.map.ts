import { ContractState } from '../models/contract-state.interface';
import { ContractStates } from './contract-states';

export const ContractStatesMap: {
  [_: number]: string,
} = Object.fromEntries(
  ContractStates.map(
    contractState => [contractState.value, contractState.label]
  )
);
