import { TestBed } from '@angular/core/testing';

import { HomeGalleryImageService } from './home-gallery-image.service';

describe('HomeGaleryImageService', () => {
  let service: HomeGalleryImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeGalleryImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
