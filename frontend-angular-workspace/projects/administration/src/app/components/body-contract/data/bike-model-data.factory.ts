import { BikeModelData } from '../models/bike-model-data.interface';

export class BikeModelDataFactory {
  static createDefault(): BikeModelData {
    return {
      brand: '',
      name: '',
      type: '',
      capacity: 100,
      cost: 0,
      dailyRentalFeeInsideCity: 0,
      dailyRentalFeeTraveling: 0,
      monthlyRentalFee: 0,
    };
  }
}
