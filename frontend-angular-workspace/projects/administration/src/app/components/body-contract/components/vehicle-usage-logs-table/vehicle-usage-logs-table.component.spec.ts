import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleUsageLogsTableComponent } from './vehicle-usage-logs-table.component';

describe('VehicleUsagesLogTableComponent', () => {
  let component: VehicleUsageLogsTableComponent;
  let fixture: ComponentFixture<VehicleUsageLogsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleUsageLogsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleUsageLogsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
