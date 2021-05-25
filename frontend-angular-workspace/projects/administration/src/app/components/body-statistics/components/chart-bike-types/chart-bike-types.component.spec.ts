import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartBikeTypesComponent } from './chart-bike-types.component';

describe('ChartBikeTypesComponent', () => {
  let component: ChartBikeTypesComponent;
  let fixture: ComponentFixture<ChartBikeTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartBikeTypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartBikeTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
