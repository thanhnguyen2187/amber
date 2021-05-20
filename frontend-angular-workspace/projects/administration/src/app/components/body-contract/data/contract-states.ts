import { ContractState } from '../models/contract-state.interface';

export const ContractStates: ContractState[] = [
  {
    value: 0,
    label: 'Created',
  },
  {
    value: 1,
    label: 'Pending',
  },
  {
    value: 2,
    label: 'Booked',
  },
  {
    value: 3,
    label: 'In Effect',
  },
  {
    value: 4,
    label: 'Finished',
  },
  {
    value: 5,
    label: 'Overdue',
  },
]
