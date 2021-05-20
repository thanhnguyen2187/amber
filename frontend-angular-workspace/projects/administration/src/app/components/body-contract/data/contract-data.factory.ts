import { ContractData } from '../models/contract-data.interface';

export class ContractDataFactory {
  static createDefault(): ContractData {
    return {
      note: '',
      deposit: '',
      equipment: '',
    };
  }
}
