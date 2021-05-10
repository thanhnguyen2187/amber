import { VehicleUsage } from '../models/vehicle-usage.interface';
import { BikeModelDataFactory } from './bike-model-data.factory';

export class VehicleUsageFactory {
  static createDefault(): VehicleUsage {
    return {
      type: 0,
      typeDisplay: 'For Rent Daily Inside City',
      bikeModelData: BikeModelDataFactory.createDefault(),
      amount: 1,
      dayCount: 0,
      monthCount: 0,
      price: 0,
      dateStart: new Date(),
      dateEnd: new Date(),
      total: 0,
    };
  }
}
