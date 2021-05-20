import { TestBed } from '@angular/core/testing';

import { PaginatorStaticService } from './paginator-static.service';

describe('PaginatorStaticService', () => {
  let service: PaginatorStaticService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaginatorStaticService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
