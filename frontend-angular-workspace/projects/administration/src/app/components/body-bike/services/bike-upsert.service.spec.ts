import { TestBed } from '@angular/core/testing';

import { BikeUpsertService } from './bike-upsert.service';

describe('BikeUpsertService', () => {
  let service: BikeUpsertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BikeUpsertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
