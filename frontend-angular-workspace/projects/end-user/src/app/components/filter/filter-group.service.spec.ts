import { TestBed } from '@angular/core/testing';

import { FilterGroupService } from './filter-group.service';

describe('FilterGroupService', () => {
  let service: FilterGroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterGroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
