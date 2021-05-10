import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleUsageDetailsComponent } from './vehicle-usage-details.component';

describe('VehicleUsageDetailsComponent', () => {
  let component: VehicleUsageDetailsComponent;
  let fixture: ComponentFixture<VehicleUsageDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleUsageDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleUsageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
