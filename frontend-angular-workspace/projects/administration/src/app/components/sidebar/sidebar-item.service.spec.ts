import { TestBed } from '@angular/core/testing';

import { SidebarItemService } from './sidebar-item.service';

describe('SidebarItemService', () => {
  let service: SidebarItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SidebarItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
