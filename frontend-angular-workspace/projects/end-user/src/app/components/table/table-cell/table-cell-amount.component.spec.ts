import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCellAmountComponent } from './table-cell-amount.component';

describe('TableCellAmountComponent', () => {
  let component: TableCellAmountComponent;
  let fixture: ComponentFixture<TableCellAmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableCellAmountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCellAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
