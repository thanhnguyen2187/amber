import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCellImageComponent } from './table-cell-image.component';

describe('TableCellImageComponent', () => {
  let component: TableCellImageComponent;
  let fixture: ComponentFixture<TableCellImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableCellImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCellImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
