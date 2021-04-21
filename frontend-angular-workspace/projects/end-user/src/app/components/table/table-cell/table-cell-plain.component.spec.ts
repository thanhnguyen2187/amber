import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCellPlainComponent } from './table-cell-plain.component';

describe('TableCellPlainComponent', () => {
  let component: TableCellPlainComponent;
  let fixture: ComponentFixture<TableCellPlainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableCellPlainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCellPlainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
