import { CookedBikeModel } from './cooked-bike-model.interface';

export interface CookedBikeModelResponse {
  cookedBikeModels: CookedBikeModel[];
  size: number;
  total: number;
}
