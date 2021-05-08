import { BikeModelData } from './bike-model-data.interface';

export interface VehicleUsage {
  type: number;
  typeDisplay: string;
  bikeModelData: BikeModelData;
  amount: number;
  dayCount: number;
  monthCount: number;
  price: number;
  dateStart: Date;
  dateEnd: Date;
  total: number;
}
