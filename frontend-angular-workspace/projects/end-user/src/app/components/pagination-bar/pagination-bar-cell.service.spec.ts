import { TestBed } from '@angular/core/testing';

import { PaginationBarCellService } from './pagination-bar-cell.service';

describe('ItemGridCellService', () => {
  let service: PaginationBarCellService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaginationBarCellService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
