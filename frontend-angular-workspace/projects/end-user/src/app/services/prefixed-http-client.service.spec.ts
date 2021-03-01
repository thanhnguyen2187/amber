import { TestBed } from '@angular/core/testing';

import { PrefixedHttpClientService } from './prefixed-http-client.service';

describe('PrefixedHttpClientService', () => {
  let service: PrefixedHttpClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrefixedHttpClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
