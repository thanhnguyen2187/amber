import { TestBed } from '@angular/core/testing';

import { TagSelectDropdownStyleService } from './tag-select-dropdown-style.service';

describe('TagSelectDropdownStyleService', () => {
  let service: TagSelectDropdownStyleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TagSelectDropdownStyleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
