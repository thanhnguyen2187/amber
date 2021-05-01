import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRowForRentComponent } from './table-row-for-rent.component';

describe('TableRowForRentComponent', () => {
  let component: TableRowForRentComponent;
  let fixture: ComponentFixture<TableRowForRentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableRowForRentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableRowForRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
