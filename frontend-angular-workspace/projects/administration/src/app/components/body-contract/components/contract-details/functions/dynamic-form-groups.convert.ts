import { DynamicFormGroup } from 'amber-core';
import { FormControl } from '@angular/forms';
import { CustomerData } from '../../../models/customer-data.interface';
import { CustomerDataFactory } from '../../../data/customer-data.factory';

export function convertDynamicFormGroups(
  dynamicFormGroups: DynamicFormGroup[],
): [number, CustomerData] {
  const state = dynamicFormGroups[0].formControls.filter(
    formControl => formControl.value
  )[0].key as number;
  const customerData: CustomerData = CustomerDataFactory.createDefault();
  customerData.fullName = dynamicFormGroups[1].formControls[0].value?.toString();
  customerData.email = dynamicFormGroups[1].formControls[1].value?.toString();
  customerData.phoneNumber = dynamicFormGroups[1].formControls[2].value?.toString();
  return [state, customerData];
}