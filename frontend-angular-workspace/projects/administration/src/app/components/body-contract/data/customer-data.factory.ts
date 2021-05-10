import { CustomerData } from '../models/customer-data.interface';

export class CustomerDataFactory {
  static createDefault(): CustomerData {
    return {
      fullName: '',
      phoneNumber: '',
      email: '',
    };
  }
}
