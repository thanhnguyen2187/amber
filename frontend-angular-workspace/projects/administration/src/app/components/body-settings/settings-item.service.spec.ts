import { TestBed } from '@angular/core/testing';

import { SettingItemService } from './setting-item.service';

describe('SettingsItemService', () => {
  let service: SettingItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SettingItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
