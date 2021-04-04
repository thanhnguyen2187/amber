import { TestBed } from '@angular/core/testing';

import { HeaderMenuItemService } from './header-menu-item.service';

describe('HeaderItemService', () => {
  let service: HeaderMenuItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeaderMenuItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
