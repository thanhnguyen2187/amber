import { RangePickerCellDataTypeClassesPack } from '../models/range-picker-cell-data.type.classes-pack';
import { RangePickerCellDataType } from '../models/range-picker-cell-data.type';

export const rangePickerCellDataTypeClassesPacks: RangePickerCellDataTypeClassesPack[] = [
  {
    type: RangePickerCellDataType.None,
    included: [],
    excluded: [],
  },
  {
    type: RangePickerCellDataType.Default,
    included: [
      'select-none',
      'cursor-pointer',
      'rounded',
      'px-2',
      'text-center',
      'hover:ring-1',
      'active:ring-2',
    ],
    excluded: [],
  },
  {
    type: RangePickerCellDataType.Display,
    included: [
    ],
    excluded: [
      'cursor-pointer',
      'hover:ring-1',
      'active:ring-2',
    ],
  },
  {
    type: RangePickerCellDataType.CurrentDate,
    included: [
      'font-semibold',
    ],
    excluded: [],
  },
  {
    type: RangePickerCellDataType.PickedOnly,
    included: [
      'rounded-full',
      'bg-blue-400',
    ],
    excluded: [],
  },
  {
    type: RangePickerCellDataType.PickedFirst,
    included: [
      'rounded-l-full',
      'bg-blue-400',
    ],
    excluded: [],
  },
  {
    type: RangePickerCellDataType.PickedSecond,
    included: [
      'rounded-r-full',
      'bg-blue-400',
    ],
    excluded: [],
  },
  {
    type: RangePickerCellDataType.PickedBetween,
    included: [
      'bg-blue-400',
    ],
    excluded: [
      'rounded',
    ],
  },
  {
    type: RangePickerCellDataType.NotAllowed,
    included: [
      'cursor-not-allowed'
    ],
    excluded: [
      'cursor-pointer',
      'hover:ring-1',
      'active:ring-2',
    ],
  },
  {
    type: RangePickerCellDataType.PastDay,
    included: [
      'text-gray-500'
    ],
    excluded: [
    ]
  },
  {
    type: RangePickerCellDataType.DifferentMonth,
    included: [
      'text-gray-300'
    ],
    excluded: [
      'text-gray-500',
    ]
  },
];
