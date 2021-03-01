import { Component, OnInit } from '@angular/core';
import { PrefixedHttpClientService } from '../../services/prefixed-http-client.service';
import { PrefixedHttpClientConstants } from '../../services/prefixed-http-client.constants';

@Component({
  selector: 'app-about-us-content',
  templateUrl: './body-about-us.component.html',
  styleUrls: ['./body-about-us.component.scss']
})
export class BodyAboutUsComponent implements OnInit {

  testValue = '';

  constructor(
  ) {
    // this.testValue = JSON.stringify(staticConfigurationService.staticConfiguration);
  }

  ngOnInit(): void {
  }

}
