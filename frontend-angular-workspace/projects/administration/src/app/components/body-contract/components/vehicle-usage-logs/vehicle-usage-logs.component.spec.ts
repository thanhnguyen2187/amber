import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleUsageLogsComponent } from './vehicle-usage-logs.component';

describe('VehicleUsagesLogComponent', () => {
  let component: VehicleUsageLogsComponent;
  let fixture: ComponentFixture<VehicleUsageLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleUsageLogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleUsageLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
