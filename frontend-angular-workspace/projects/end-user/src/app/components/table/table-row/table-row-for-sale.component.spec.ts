import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRowForSaleComponent } from './table-row-for-sale.component';

describe('TableRowForSaleComponent', () => {
  let component: TableRowForSaleComponent;
  let fixture: ComponentFixture<TableRowForSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableRowForSaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableRowForSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
