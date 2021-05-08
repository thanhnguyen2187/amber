import { TestBed } from '@angular/core/testing';

import { TableCellFactoryService } from './table-cell-factory.service';

describe('TableCellFactoryService', () => {
  let service: TableCellFactoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableCellFactoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
