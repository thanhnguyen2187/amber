import { VehicleUsage } from '../models/vehicle-usage.interface';
import { BikeModelDataFactory } from './bike-model-data.factory';
import { vehicleUsageTypesEnum } from './vehicle-usage-types.enum';
import { vehicleUsageTypesMap } from './vehicle-usage-types.map';
import { formatDate } from '@angular/common';
import { differenceInDays, format, formatISO, parse, parseJSON, startOfDay } from 'date-fns';
import { round } from 'amber-core';

export class VehicleUsageFactory {
  static rebind(vehicleUsage: VehicleUsage): VehicleUsage {
    return {
      ...vehicleUsage,
    };
  }

  static augment(vehicleUsage: VehicleUsage): VehicleUsage {
    return {
      dateCreated: parseJSON(vehicleUsage.dateCreated),
      get dateCreatedDisplay(): string {
        return format(
          this.dateCreated,
          'yyyy-MM-dd',
        );
      },
      usageId: vehicleUsage.usageId,
      contractId: vehicleUsage.contractId,
      type: vehicleUsage.type,
      get typeDisplay(): string {
        return vehicleUsageTypesMap[this.type];
      },
      bikeModelId: vehicleUsage.bikeModelId,
      bikeModelData: vehicleUsage.bikeModelData,
      amount: vehicleUsage.amount,
      get dayCount(): number {
        if (this.dateStart && this.dateEnd) {
          return differenceInDays(
            startOfDay(this.dateEnd),
            startOfDay(this.dateStart),
          ) + 1;
        } else {
          return 0;
        }
      },
      get monthCount(): number {
        return round(
          {
            value: this.dayCount / 30,
            step: 0.2,
            mathFunction: Math.ceil,
          }
        );
      },
      get price(): number {
        switch (this.type) {
          case vehicleUsageTypesEnum.DailyRentalInsideCity:
            return this.bikeModelData.dailyRentalFeeInsideCity;
          case vehicleUsageTypesEnum.DailyRentalTraveling:
            return this.bikeModelData.dailyRentalFeeTraveling;
          case vehicleUsageTypesEnum.MonthlyRental:
            return this.bikeModelData.monthlyRentalFee;
          case vehicleUsageTypesEnum.ForSale:
            return this.bikeModelData.cost;
          default:
            return 0;
        }
      },
      dateStart: vehicleUsage.dateStart ? parseJSON(vehicleUsage.dateStart) : undefined,
      get dateStartDisplay(): string {
        return (
          this.dateStart
            ? format(
                parseJSON(this.dateStart),
                'yyyy-MM-dd',
              )
            : 'Unavailable'
        );
      },
      dateEnd: vehicleUsage.dateEnd ? parseJSON(vehicleUsage.dateEnd) : undefined,
      get dateEndDisplay(): string {
        return (
          this.dateEnd
            ? format(
                parseJSON(this.dateEnd),
                'yyyy-MM-dd',
              )
            : 'Unavailable'
        );
      },
      get total(): number {
        switch (this.type) {
          case vehicleUsageTypesEnum.DailyRentalInsideCity:
          case vehicleUsageTypesEnum.DailyRentalTraveling:
            return this.price * this.amount * this.dayCount;
          case vehicleUsageTypesEnum.MonthlyRental:
            return this.price * this.amount * this.monthCount;
          case vehicleUsageTypesEnum.ForSale:
            return this.price * this.amount;
          default:
            return 0;
        }
      },
      removing: vehicleUsage.removing,
    };
  }

  static createDefault(): VehicleUsage {
    const defaultUsage: VehicleUsage = {
      dateCreated: new Date(),
      dateCreatedDisplay: '',
      usageId: 0,
      contractId: 0,
      type: vehicleUsageTypesEnum.DailyRentalInsideCity,
      typeDisplay: 'For Rent Daily Inside City',
      bikeModelId: 0,
      bikeModelData: BikeModelDataFactory.createDefault(),
      amount: 1,
      dayCount: 1,
      monthCount: 1,
      price: 0,
      dateStart: new Date(),
      dateStartDisplay: '',
      dateEnd: new Date(),
      dateEndDisplay: '',
      total: 0,
      removing: false,
    };
    return this.augment(defaultUsage);
  }
}
