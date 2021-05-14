import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangePickerCellComponent } from './range-picker-cell.component';

describe('RangePickerCellComponent', () => {
  let component: RangePickerCellComponent;
  let fixture: ComponentFixture<RangePickerCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RangePickerCellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RangePickerCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
