import { TestBed } from '@angular/core/testing';

import { BikeTypesService } from './bike-types.service';

describe('BikeTypesService', () => {
  let service: BikeTypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BikeTypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
