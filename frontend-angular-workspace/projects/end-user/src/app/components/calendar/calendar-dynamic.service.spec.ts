import { TestBed } from '@angular/core/testing';

import { CalendarDynamicService } from './calendar-dynamic.service';

describe('CalendarDynamicService', () => {
  let service: CalendarDynamicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalendarDynamicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
