import { TestBed } from '@angular/core/testing';

import { StaticConfigurationService } from './static-configuration.service';

describe('StaticConfigurationService', () => {
  let service: StaticConfigurationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaticConfigurationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
