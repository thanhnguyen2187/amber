import { TestBed } from '@angular/core/testing';

import { TableStaticService } from './table-static.service';

describe('TableStaticService', () => {
  let service: TableStaticService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableStaticService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
