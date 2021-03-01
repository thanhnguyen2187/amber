import { TestBed } from '@angular/core/testing';

import { CommonPageDataService } from './common-page-data.service';

describe('CommonPageDataService', () => {
  let service: CommonPageDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonPageDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
