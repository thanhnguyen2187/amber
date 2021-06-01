import { TestBed } from '@angular/core/testing';

import { NumberPlateOptionsService } from './number-plate-options.service';

describe('NumberPlateOptionsService', () => {
  let service: NumberPlateOptionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumberPlateOptionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
