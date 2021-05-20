import { DynamicFormGroup } from 'amber-core';

export const dynamicFormGroups: DynamicFormGroup[] = [
  {
    title: 'State',
    type: 'radioInputs',
    key: 'state',
    rowsCount: 3,
    formControls: [
      {
        type: 'radio',
        label: 'Created',
        value: true,
        key: 0,
      },
      {
        type: 'radio',
        label: 'Pending',
        value: true,
        key: 1,
      },
      {
        type: 'radio',
        label: 'Booked',
        value: true,
        key: 2,
      },
      {
        type: 'radio',
        label: 'In Effect',
        value: true,
        key: 3,
      },
      {
        type: 'radio',
        label: 'Finished',
        value: false,
        key: 4,
      },
      {
        type: 'radio',
        label: 'Overdue',
        value: true,
        key: 5,
      },
    ],
  },
  {
    title: 'Customer Data',
    type: 'textInputs',
    key: 'customerData',
    rowsCount: 3,
    formControls: [
      {
        type: 'text',
        label: 'Name',
        value: '',
        key: 'fullName',
      },
      {
        type: 'text',
        label: 'Email',
        value: '',
        key: 'email',
      },
      {
        type: 'text',
        label: 'Phone Number',
        value: '',
        key: 'phoneNumber',
      },
    ],
  },
  {
    title: 'Note',
    type: 'textarea',
    key: 'note',
    rowsCount: 1,
    formControls: [
      {
        type: 'textarea',
        label: '',
        value: '',
        key: 'note',
      },
    ],
  },
];
