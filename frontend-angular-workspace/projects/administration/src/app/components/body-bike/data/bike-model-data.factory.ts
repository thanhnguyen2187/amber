import { BikeModelData } from '../models/bike-model-data.interface';

export class BikeModelDataFactory {
  static createDefault(): BikeModelData {
    return {
      brand: '',
      name: '',
      type: '',
      capacity: 0,
      cost: 0,
      dailyRentalFeeInsideCity: 0,
      dailyRentalFeeTraveling: 0,
      monthlyRentalFee: 0,
      description: '',
      possibleUsageTypes: [0, 1, 2, 10],
      numberPlates: [],
    };
  }
}
