import { BikeModelOption } from './bike-model-option.interface';

export interface BikeModelOptionsResponse {
  bikeModelOptions: BikeModelOption[];
  total: number;
}
