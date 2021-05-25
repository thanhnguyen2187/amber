import { Component, OnInit } from '@angular/core';
import { Record } from '../../models/record.interface';
import { BikeTypesService } from '../../services/bike-types.service';

@Component({
  selector: 'app-chart-bike-types',
  templateUrl: './chart-bike-types.component.html',
  styleUrls: ['./chart-bike-types.component.scss']
})
export class ChartBikeTypesComponent implements OnInit {

  bikeTypesData: Record[] = [];

  constructor(
    private bikeTypesService: BikeTypesService,
  ) {
    this.bikeTypesService.bikeTypesData$.subscribe(
      (data) => this.bikeTypesData = data
    );
  }

  ngOnInit(): void {
  }

}
