import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableMasterForSaleComponent } from './table-master-for-sale.component';

describe('TableMasterForSaleComponent', () => {
  let component: TableMasterForSaleComponent;
  let fixture: ComponentFixture<TableMasterForSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableMasterForSaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableMasterForSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
