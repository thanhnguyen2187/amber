import { Component, OnInit } from '@angular/core';
import {
  CommonPageData,
  defaultCommonPageData,
  CommonPageDataService,
} from '../../services/common-page-data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  commonPageData: CommonPageData = defaultCommonPageData;

  constructor(
    private commonPageDataService: CommonPageDataService,
  ) {
    commonPageDataService.commonPageData$.subscribe(
      (value) => this.commonPageData = value
    );
  }

  ngOnInit(): void {
  }

}
