import { TestBed } from '@angular/core/testing';

import { UpdateContractDetailsService } from './update-contract-details.service';

describe('UpdateContractDetailsService', () => {
  let service: UpdateContractDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateContractDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
