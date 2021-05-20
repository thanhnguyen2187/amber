import { Component, Input, OnInit } from '@angular/core';
import { CustomerData } from '../../models/customer-data.interface';
import { CustomerDataFactory } from '../../data/customer-data.factory';

@Component({
  selector: 'app-customer-data',
  templateUrl: './customer-data.component.html',
  styleUrls: ['./customer-data.component.scss']
})
export class CustomerDataComponent implements OnInit {

  constructor() { }

  @Input() customerData: CustomerData = CustomerDataFactory.createDefault();

  ngOnInit(): void {
  }

}
