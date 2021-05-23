import { CookedBikeModel } from '../models/cooked-bike-model.interface';
import { BikeModelDataFactory } from './bike-model-data.factory';
import { MediaFileFactory } from './media-file.factory';

export class CookedBikeModelFactory {
  static augment(cookedBikeModel: CookedBikeModel): CookedBikeModel {
    return {
      id: cookedBikeModel.id,
      modelData: cookedBikeModel.modelData,
      mediaFiles: cookedBikeModel.mediaFiles,
      displayDetails: false,
    };
  }

  static createDefault(): CookedBikeModel {
    return {
      id: 0,
      modelData: BikeModelDataFactory.createDefault(),
      mediaFiles: [
        MediaFileFactory.createDefault(),
      ],
      displayDetails: false,
    };
  }

  static createNew(): CookedBikeModel {
    return {
      ...this.createDefault(),
      displayDetails: true,
    };
  }
}
