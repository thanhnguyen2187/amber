import { MediaFile } from '../models/media-file.interface';

export class MediaFileFactory {
  static createDefault(): MediaFile {
    return {
      source: 'https://via.placeholder.com/300x200',
      title: '',
      removing: false,
    };
  }
}
