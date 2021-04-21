import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableMasterForRentComponent } from './table-master-for-rent.component';

describe('TableMasterForRentComponent', () => {
  let component: TableMasterForRentComponent;
  let fixture: ComponentFixture<TableMasterForRentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableMasterForRentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableMasterForRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
