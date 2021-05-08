import { DynamicFormGroup } from 'amber-core';

export const dynamicFormGroups: DynamicFormGroup[] = [
  {
    title: 'State',
    type: 'checkboxes',
    key: 'state',
    rowsCount: 3,
    formControls: [
      {
        type: 'checkbox',
        label: 'Created',
        value: true,
        key: 0,
      },
      {
        type: 'checkbox',
        label: 'Pending',
        value: true,
        key: 1,
      },
      {
        type: 'checkbox',
        label: 'Booked',
        value: true,
        key: 2,
      },
      {
        type: 'checkbox',
        label: 'In Effect',
        value: true,
        key: 3,
      },
      {
        type: 'checkbox',
        label: 'Finished',
        value: false,
        key: 4,
      },
      {
        type: 'checkbox',
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
    title: 'Bike Data',
    type: 'textInputs',
    key: 'bikeData',
    rowsCount: 2,
    formControls: [
      {
        key: 'name',
        label: 'Bike Name',
        type: 'text',
        value: '',
      }
    ]
  },
  {
    title: 'Vehicle Usage',
    type: 'checkboxes',
    key: 'vehicleUsage',
    rowsCount: 2,
    formControls: [
      {
        type: 'checkbox',
        label: 'Daily Rental Inside City',
        value: true,
        key: 0,
      },
      {
        type: 'checkbox',
        label: 'Daily Rental Traveling',
        value: true,
        key: 1,
      },
      {
        type: 'checkbox',
        label: 'Monthly Rental',
        value: true,
        key: 2,
      },
      {
        type: 'checkbox',
        label: 'For Sale',
        value: true,
        key: 10,
      },
    ],
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
  {
    title: 'Note',
    type: 'textarea',
    key: 'note',
    rowsCount: 1,
    formControls: [
      {
        key: '',
        value: '',
        type: 'textarea',
        label: '',
      }
    ]
  },
];
