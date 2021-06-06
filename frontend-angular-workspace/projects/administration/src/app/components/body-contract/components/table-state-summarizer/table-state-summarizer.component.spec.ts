import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableStateSummarizerComponent } from './table-state-summarizer.component';

describe('TableStateSummarizerComponent', () => {
  let component: TableStateSummarizerComponent;
  let fixture: ComponentFixture<TableStateSummarizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableStateSummarizerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableStateSummarizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
