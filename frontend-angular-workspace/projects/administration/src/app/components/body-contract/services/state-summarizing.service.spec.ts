import { TestBed } from '@angular/core/testing';

import { StateSummarizingService } from './state-summarizing.service';

describe('StateSummarizingService', () => {
  let service: StateSummarizingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StateSummarizingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
