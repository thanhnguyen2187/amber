import { TestBed } from '@angular/core/testing';

import { SettingsItemService } from './settings-item.service';

describe('SettingsItemService', () => {
  let service: SettingsItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SettingsItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
