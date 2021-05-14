import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangePickerBoxComponent } from './range-picker-box.component';

describe('RangePickerBoxComponent', () => {
  let component: RangePickerBoxComponent;
  let fixture: ComponentFixture<RangePickerBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RangePickerBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RangePickerBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
