import { TestBed } from '@angular/core/testing';

import { AmberCoreService } from './amber-core.service';

describe('AmberCoreService', () => {
  let service: AmberCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AmberCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
