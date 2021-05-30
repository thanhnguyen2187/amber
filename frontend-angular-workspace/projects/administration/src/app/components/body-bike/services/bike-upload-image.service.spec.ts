import { TestBed } from '@angular/core/testing';

import { BikeUploadImageService } from './bike-upload-image.service';

describe('BikeUploadImageService', () => {
  let service: BikeUploadImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BikeUploadImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
