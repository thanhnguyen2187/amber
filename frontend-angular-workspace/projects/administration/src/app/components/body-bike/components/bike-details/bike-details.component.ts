import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { CookedBikeModelFactory } from '../../data/cooked-bike-model.factory';
import { BikeTransmissions } from '../../data/bike-transmissions';
import { MediaFileFactory } from '../../data/media-file.factory';
import { CookedBikeModel } from '../../models/cooked-bike-model.interface';
import { BikeUpsertService } from '../../services/bike-upsert.service';
import { FileChangeEvent } from '@angular/compiler-cli/src/perform_watch';
import { BikeUploadResponse } from '../../models/bike-upload-response.interface';
import { BikeUploadImageService } from '../../services/bike-upload-image.service';
import { MediaFile } from '../../models/media-file.interface';

@Component({
  selector: 'app-bike-details',
  templateUrl: './bike-details.component.html',
  styleUrls: ['./bike-details.component.scss']
})
export class BikeDetailsComponent implements OnInit {

  @ViewChild('imagesBox') imagesBox?: ElementRef;
  @Input() cookedBikeModel = CookedBikeModelFactory.createDefault();
  @Output() acceptClicked = new EventEmitter<CookedBikeModel>();
  bikeTransmissions = BikeTransmissions;

  addMediaFile(): void {
    this.cookedBikeModel.mediaFiles.push(
      MediaFileFactory.createDefault(),
    );
    if (this.imagesBox) {
      // use setTimeout to make the assignment/scroll happens after the push
      setTimeout(
        () => {
          if (this.imagesBox) {
            this.imagesBox.nativeElement.scrollTop = this.imagesBox.nativeElement.scrollHeight;
          }
        }
      );
    }
  }

  toggleRemovingMediaFile(index: number): void {
    this.cookedBikeModel.mediaFiles[index].removing = !this.cookedBikeModel.mediaFiles[index].removing;
  }

  removeMediaFile(index: number): void {
    this.cookedBikeModel.mediaFiles.splice(index, 1);
  }

  removeUsageType(value: number): void {
    this.cookedBikeModel.modelData.possibleUsageTypes.splice(
      this.cookedBikeModel.modelData.possibleUsageTypes.indexOf(value),
      1,
    );
  }

  addUsageType(value: number): void {
    this.cookedBikeModel.modelData.possibleUsageTypes.push(value);
  }

  $changeUsageType($event: any, value: number): void {
    if ($event?.target?.checked === false) {
      this.removeUsageType(value);
      switch (value) {
        case 0:
          this.cookedBikeModel.modelData.dailyRentalFeeInsideCity = 0;
          break;
        case 1:
          this.cookedBikeModel.modelData.dailyRentalFeeTraveling = 0;
          break;
        case 2:
          this.cookedBikeModel.modelData.monthlyRentalFee = 0;
          break;
        case 10:
          this.cookedBikeModel.modelData.cost = 0;
          break;

      }
    } else if ($event?.target?.checked === true) {
      this.addUsageType(value);
    }
    this.cookedBikeModel.modelData.possibleUsageTypes.sort();
  }

  accept(): void {
    this.bikeUpsertService.upsert$(this.cookedBikeModel).subscribe(
      () => {
        this.cookedBikeModel.displayDetails = false;
      }
    );
  }

  cancel(): void {
    this.cookedBikeModel.displayDetails = false;
  }

  get inputValidated(): boolean {
    return (
      // name is not empty
      this.cookedBikeModel.modelData.name.length > 0
      // capacity is greater than zero
      && this.cookedBikeModel.modelData.capacity > 0
      && this.cookedBikeModel.modelData.type.length > 0
      && this.cookedBikeModel.modelData.possibleUsageTypes.length > 0
      && (
        (
          this.cookedBikeModel.modelData.possibleUsageTypes.indexOf(10) === -1
        )
        // if it is available for sale, the price is greater than zero
        || (
          this.cookedBikeModel.modelData.possibleUsageTypes.indexOf(10) !== -1
          && this.cookedBikeModel.modelData.cost > 0
        )
      )
      && (
        (
          this.cookedBikeModel.modelData.possibleUsageTypes.indexOf(0) === -1
        )
        // if it is available for inside city rental, the price is greater than zero
        || (
          this.cookedBikeModel.modelData.possibleUsageTypes.indexOf(0) !== -1
          && this.cookedBikeModel.modelData.dailyRentalFeeInsideCity > 0
        )
      )
      && (
        (
          this.cookedBikeModel.modelData.possibleUsageTypes.indexOf(1) === -1
        )
        // if it is available for traveling rental, the price is greater than zero
        || (
          this.cookedBikeModel.modelData.possibleUsageTypes.indexOf(1) !== -1
          && this.cookedBikeModel.modelData.dailyRentalFeeTraveling > 0
        )
      )
      && (
        (
          this.cookedBikeModel.modelData.possibleUsageTypes.indexOf(2) === -1
        )
        // if it is available for inside city rental, the price is greater than zero
        || (
          this.cookedBikeModel.modelData.possibleUsageTypes.indexOf(2) !== -1
          && this.cookedBikeModel.modelData.monthlyRentalFee > 0
        )
      )
      && (
        (
          // every number plate is not blank
          this.cookedBikeModel.modelData.numberPlates.every(
            numberPlate => numberPlate
          )
          // the number plates are unique
          && new Set(this.cookedBikeModel.modelData.numberPlates).size
          === this.cookedBikeModel.modelData.numberPlates.length
        )
      )
    );
  }

  fileChange(
    $event: any,
    mediaFile: MediaFile,
  ): void {
    const file = $event.target.files[0];
    this.bikeUploadImageService.upload$(file).subscribe(
      (response) => {
        mediaFile.source = response.kraked_url;
        mediaFile.title = response.file_name;
      }
    );
  }

  addNumberPlate(): void {
    this.cookedBikeModel.modelData.numberPlates.push('');
  }

  removeNumberPlate(index: number): void {
    this.cookedBikeModel.modelData.numberPlates.splice(index, 1);
  }

  trackByNumberPlate(index: number, item: any): number {
    return index;
  }

  constructor(
    private bikeUpsertService: BikeUpsertService,
    private bikeUploadImageService: BikeUploadImageService,
  ) { }

  ngOnInit(): void {
  }

}
