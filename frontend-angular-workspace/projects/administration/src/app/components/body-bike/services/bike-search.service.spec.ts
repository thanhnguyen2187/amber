import { TestBed } from '@angular/core/testing';

import { BikeSearchService } from './bike-search.service';

describe('BikeSearchService', () => {
  let service: BikeSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BikeSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
