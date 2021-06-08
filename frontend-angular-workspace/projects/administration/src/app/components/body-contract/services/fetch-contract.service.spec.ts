import { TestBed } from '@angular/core/testing';

import { FetchContractService } from './fetch-contract.service';

describe('FetchContractService', () => {
  let service: FetchContractService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchContractService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
