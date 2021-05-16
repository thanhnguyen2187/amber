import { CustomerData } from '../models/customer-data.interface';

export class CustomerDataFactory {
  static createDefault(): CustomerData {
    return {
      fullName: '',
      phoneNumber: '',
      email: '',
    };
  }

  static shrink(customerData: CustomerData): CustomerData {
    return {
      fullName: customerData.fullName,
      phoneNumber: customerData.phoneNumber,
      email: customerData.email,
    };
  }
}
