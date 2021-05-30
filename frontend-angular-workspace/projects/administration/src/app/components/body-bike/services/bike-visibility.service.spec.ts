import { TestBed } from '@angular/core/testing';

import { BikeVisibilityService } from './bike-visibility.service';

describe('BikeVisibilityService', () => {
  let service: BikeVisibilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BikeVisibilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
