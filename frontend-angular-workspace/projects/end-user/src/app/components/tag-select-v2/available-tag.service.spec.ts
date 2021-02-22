import { TestBed } from '@angular/core/testing';

import { AvailableTagService } from './available-tag.service';

describe('AvailableTagService', () => {
  let service: AvailableTagService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvailableTagService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
