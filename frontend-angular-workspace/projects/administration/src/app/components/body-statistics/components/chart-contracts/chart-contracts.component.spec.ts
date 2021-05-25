import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartContractsComponent } from './chart-contracts.component';

describe('ChartContractsComponent', () => {
  let component: ChartContractsComponent;
  let fixture: ComponentFixture<ChartContractsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartContractsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartContractsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
