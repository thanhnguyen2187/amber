import { Component, Input, OnInit } from '@angular/core';
import { VehicleUsage } from '../../models/vehicle-usage.interface';
import { VehicleUsageFactory } from '../../data/vehicle-usage.factory';
import { vehicleUsageTypes } from '../../data/vehicle-usage-types';

@Component({
  selector: 'app-vehicle-usage-details',
  templateUrl: './vehicle-usage-details.component.html',
  styleUrls: ['./vehicle-usage-details.component.scss']
})
export class VehicleUsageDetailsComponent implements OnInit {

  @Input() vehicleUsage: VehicleUsage = VehicleUsageFactory.createDefault();
  vehicleUsageTypes = vehicleUsageTypes;

  constructor() { }

  ngOnInit(): void {
  }

}
