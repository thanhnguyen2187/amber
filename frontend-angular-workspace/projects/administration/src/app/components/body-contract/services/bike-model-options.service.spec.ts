import { TestBed } from '@angular/core/testing';

import { BikeModelOptionsService } from './bike-model-options.service';

describe('BikeModelOptionsService', () => {
  let service: BikeModelOptionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BikeModelOptionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
