import { TestBed } from '@angular/core/testing';

import { BodyContractDataService } from './body-contract-data.service';

describe('BodyContractDataService', () => {
  let service: BodyContractDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BodyContractDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
