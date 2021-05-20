import { TestBed } from '@angular/core/testing';

import { PaginatorDynamicService } from './paginator-dynamic.service';

describe('PaginatorDynamicService', () => {
  let service: PaginatorDynamicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaginatorDynamicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
