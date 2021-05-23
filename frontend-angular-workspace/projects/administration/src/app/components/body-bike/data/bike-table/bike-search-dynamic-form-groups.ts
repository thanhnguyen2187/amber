import { DynamicFormGroup } from 'amber-core';
import { BikeTransmissions } from '../bike-transmissions';
import { BikePurposes } from '../bike-purposes';

export const BikeSearchDynamicFormGroups: DynamicFormGroup[] = [
  {
    title: 'Bike Data',
    type: 'textInputs',
    key: 'bikeData',
    rowsCount: 1,
    formControls: [
      {
        type: 'text',
        label: 'Name',
        value: '',
        key: 'name',
      },
    ],
  },
  {
    title: 'Transmission',
    type: 'checkboxes',
    key: 'transmission',
    rowsCount: 3,
    formControls: BikeTransmissions.map(
      (bikeTransmission) => {
        return {
          type: 'checkbox',
          label: bikeTransmission.label,
          value: true,
          key: bikeTransmission.value,
        };
      }
    ),
  },
  {
    title: 'Purpose',
    type: 'checkboxes',
    key: 'bikeData',
    rowsCount: 2,
    formControls: BikePurposes.map(
      (bikePurpose) => {
        return {
          type: 'checkbox',
          label: bikePurpose.label,
          value: true,
          key: bikePurpose.value,
        };
      }
    )
  },
  {
    title: 'Visibility',
    type: 'checkboxes',
    key: 'visibility',
    rowsCount: 1,
    formControls: [
      {
        type: 'checkbox',
        label: 'Hidden',
        value: false,
        key: 0,
      },
      {
        type: 'checkbox',
        label: 'Visible',
        value: true,
        key: 1,
      },
    ],
  },
];
