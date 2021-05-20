import { InputData } from '../models/input-data';
import { CookedContract } from '../../../models/cooked-contract.interface';
import { DynamicFormGroup } from 'amber-core';
import { range } from 'rxjs';

export function convertCookedContract(
  cookedContract: CookedContract,
): DynamicFormGroup[] {

  const stateGroup: DynamicFormGroup = {
    title: 'State',
    type: 'radioInputs',
    key: 'state',
    rowsCount: 3,
    formControls: [],
  };
  const stateLabelKeyPairs: [string, number][] = [
    ['Created', 0],
    ['Pending', 1],
    ['Booked', 2],
    ['In Effect', 3],
    ['Finished', 4],
    ['Overdue', 5],
  ];
  stateGroup.formControls = stateLabelKeyPairs.map(
    ([label, key]) => {
      return {
        type: 'radio',
        label,
        value: key === cookedContract.stateValue,
        key,
      };
    }
  );
  // fill with blank groups to fix layout
  range(0, 18).subscribe(
    () => {
      stateGroup.formControls.push(
        {
          type: 'blank',
          key: '',
          value: '',
          label: '',
        }
      );
    }
  );

  const customerDataGroup: DynamicFormGroup = {
    title: 'Customer Data',
    type: 'textInputs',
    key: 'customerData',
    rowsCount: 3,
    formControls: [],
  };
  const customerDataLabelKeyPairs: [string, string][] = [
    ['Name', 'fullName'],
    ['Email', 'email'],
    ['Phone Number', 'phoneNumber'],
  ];
  customerDataGroup.formControls = customerDataLabelKeyPairs.map(
    ([label, key]) => {
      return {
        type: 'text',
        label,
        // @ts-ignore
        value: cookedContract.customerData[key],
        key,
      };
    }
  );

  const noteGroup: DynamicFormGroup = {
    title: 'Note',
    type: 'textarea',
    key: 'note',
    rowsCount: 1,
    formControls: [
      {
        type: 'textarea',
        key: '',
        label: 'Note',
        value: cookedContract.contractData.note,
      }
    ],
  };

  return [
    stateGroup,
    customerDataGroup,
    noteGroup,
  ];
}
