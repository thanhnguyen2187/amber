import { NumberPlateOption } from '../models/number-plate-option.interface';

export class NumberPlateOptionsFactory {
  static createDefault(): NumberPlateOption[] {
    return [
      {
        key: 'unknown',
        label: 'Unknown',
      }
    ];
  }
}
