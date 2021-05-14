import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { VehicleUsage } from '../../models/vehicle-usage.interface';
import { VehicleUsageFactory } from '../../data/vehicle-usage.factory';
import { vehicleUsageTypes } from '../../data/vehicle-usage-types';
import { vehicleUsageTypesEnum } from '../../data/vehicle-usage-types.enum';
import { vehicleUsageTypesMap } from '../../data/vehicle-usage-types.map';
import { BikeModelOptionsService } from '../../services/bike-model-options.service';
import { BikeModelOption } from '../../models/bike-model-option.interface';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-vehicle-usage-details',
  templateUrl: './vehicle-usage-details.component.html',
  styleUrls: ['./vehicle-usage-details.component.scss']
})
export class VehicleUsageDetailsComponent implements OnInit {

  @Input() vehicleUsage: VehicleUsage = VehicleUsageFactory.createDefault();
  get mode(): 'create' | 'edit' {
    switch (this.vehicleUsage.contractId) {
      case 0:
        return 'create';
      default:
        return 'edit';
    }
  }
  get vehicleUsageJSON(): string {
    return JSON.stringify(this.vehicleUsage);
  }
  vehicleUsageTypesEnum = vehicleUsageTypesEnum;
  vehicleUsageTypesMap = vehicleUsageTypesMap;
  bikeModelOptions: BikeModelOption[] = [];

  changeBikeModelOption(bikeModelId: number): void {
    this.vehicleUsage.bikeModelId = bikeModelId;
    this.bikeModelOptions.forEach(
      bikeModelOption => {
        if (bikeModelOption.bikeModelId === bikeModelId) {
          this.vehicleUsage.bikeModelData = bikeModelOption.bikeModelData;
          if (
            bikeModelOption.bikeModelData.possibleUsageTypes.indexOf(this.vehicleUsage.type) === -1 &&
            bikeModelOption.bikeModelData.possibleUsageTypes.length > 0
          ) {
            this.vehicleUsage.type = bikeModelOption.bikeModelData.possibleUsageTypes[0];
          }
        }
      }
    );
  }

  displayRangePicker = true;

  @Output() acceptEventEmitter = new EventEmitter<VehicleUsage>();
  @Output() cancelEventEmitter = new EventEmitter();

  validated = true;
  accept(): void {
    switch (this.mode) {
      case 'create':
        if (this.vehicleUsage.bikeModelId === 0) {
          this.message = 'Please select a model before accepting.';
          this.validated = false;
        } else {
          this.acceptEventEmitter.emit(this.vehicleUsage);
          this.cancelEventEmitter.emit(); // to hide the component
        }
        break;
      case 'edit':
        this.acceptEventEmitter.emit(this.vehicleUsage);
        break;
    }
  }

  message = '';

  get pickedDates(): Date[] {
    if (this.vehicleUsage.dateStart && this.vehicleUsage.dateEnd) {
      return [this.vehicleUsage.dateStart, this.vehicleUsage.dateEnd];
    } else if (this.vehicleUsage.dateStart) {
      return [this.vehicleUsage.dateStart];
    } else {
      return [];
    }
  }
  set pickedDates(pickedDates: Date[]) {
    switch (pickedDates.length) {
      case 0:
        this.vehicleUsage.dateStart = undefined;
        this.vehicleUsage.dateEnd = undefined;
        break;
      case 1:
        this.vehicleUsage.dateStart = pickedDates[0];
        this.vehicleUsage.dateEnd = undefined;
        break;
      case 2:
        this.vehicleUsage.dateStart = pickedDates[0];
        this.vehicleUsage.dateEnd = pickedDates[1];
        break;
    }
  }

  increaseAmount(): void {
    this.vehicleUsage.amount += 1;
  }
  decreaseAmount(): void {
    if (this.vehicleUsage.amount > 1) {
      this.vehicleUsage.amount -= 1;
    }
  }

  constructor(
    private bikeModelOptionsService: BikeModelOptionsService,
  ) {
    bikeModelOptionsService.bikeModelOptions$.subscribe(
      bikeModelOptions => this.bikeModelOptions = bikeModelOptions
    );
  }

  ngOnInit(): void {
  }

}