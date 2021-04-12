import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarBoxComponent } from './calendar-box.component';

describe('CalendarBoxComponent', () => {
  let component: CalendarBoxComponent;
  let fixture: ComponentFixture<CalendarBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
