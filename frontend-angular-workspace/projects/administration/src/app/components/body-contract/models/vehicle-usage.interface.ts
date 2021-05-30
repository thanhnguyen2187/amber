import { BikeModelData } from './bike-model-data.interface';

export interface VehicleUsage {
  dateCreated: Date;
  dateCreatedDisplay: string;
  usageId: number;
  contractId: number;
  type: number;
  typeDisplay: string;
  bikeModelId: number;
  bikeModelData: BikeModelData;
  amount: number;
  numberPlates: string[];
  dayCount: number;
  monthCount: number;
  price: number;
  dateStart?: Date;
  dateStartDisplay: string;
  dateEnd?: Date;
  dateEndDisplay: string;
  total: number;
  removing: boolean;
}
