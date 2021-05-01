import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../item-grid/item.service';

@Component({
  selector: 'app-body-bike-details',
  templateUrl: './body-bike-details.component.html',
  styleUrls: ['./body-bike-details.component.scss']
})
export class BodyBikeDetailsComponent implements OnInit {

  id = 0;
  @Input() item: Item = {
    id: 0,
    name: '',
    images: [],
    capacity: 100,
    typeDisplay: 'Manual',
    description: 'Description',
    imageReference: 'https://via.placeholder.com/300x200',
    priceForSaleDisplay: '300 USD',
    priceForRentTravelingDisplay: '10 USD',
    priceForRentInsideCityDisplay: '5 USD',
    priceForRentMonthlyDisplay: '1 000 000 VND',
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
    this.activatedRoute.params.subscribe(
      params => {
        this.id = params.id as number;
      }
    );
    this.item = router.getCurrentNavigation()?.extras.state?.item ?? this.item;
  }

  ngOnInit(): void {
  }

}
