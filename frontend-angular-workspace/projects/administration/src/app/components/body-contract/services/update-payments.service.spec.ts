import { TestBed } from '@angular/core/testing';

import { UpdatePaymentsService } from './update-payments.service';

describe('UpdatePaymentsService', () => {
  let service: UpdatePaymentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdatePaymentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
