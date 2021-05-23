import { BikeModelData } from './bike-model-data.interface';
import { MediaFile } from './media-file.interface';

export interface CookedBikeModel {
  id: number;
  modelData: BikeModelData;
  mediaFiles: MediaFile[];

  displayDetails: boolean;
}
