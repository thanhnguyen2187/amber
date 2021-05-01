import { TestBed } from '@angular/core/testing';

import { ItemStoreV2Service } from './item-store-v2.service';

describe('ItemStoreV2Service', () => {
  let service: ItemStoreV2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemStoreV2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
