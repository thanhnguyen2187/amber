import { TestBed } from '@angular/core/testing';

import { CalendarStaticService } from './calendar-static.service';

describe('CalendarStaticService', () => {
  let service: CalendarStaticService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalendarStaticService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
