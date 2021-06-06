import { BikeModelTypeWrapper } from '../models/bike-model-type-wrapper.interface';

export class BikeModelTypeWrapperFactory {
  static createDefaults(): BikeModelTypeWrapper[] {
    return [
      {
        label: 'Manual',
        value: 'manual',
        checked: false,
      },
      {
        label: 'Semi-automatic',
        value: 'semi-automatic',
        checked: false,
      },
      {
        label: 'Automatic',
        value: 'automatic',
        checked: false,
      },
    ];
  }
}
