import { Injectable } from '@angular/core';
import { PrefixedHttpClientService } from './prefixed-http-client.service';
import { BehaviorSubject } from 'rxjs';
import { PrefixedHttpClientConstants } from './prefixed-http-client.constants';

export interface CommonPageData {
  footerData: {
    email: string;
    phoneNumber: string;
    shopAddress: string;
    warehouseAddress: string;
  };
}

export const defaultCommonPageData: CommonPageData = {
  footerData: {
    email: '',
    phoneNumber: '',
    shopAddress: '',
    warehouseAddress: '',
  }
};

@Injectable({
  providedIn: 'root'
})
export class CommonPageDataService {

  commonPageData$ = new BehaviorSubject<CommonPageData>(defaultCommonPageData);

  constructor(
    private prefixedHttpClientService: PrefixedHttpClientService,
  ) {
    prefixedHttpClientService
    .get(PrefixedHttpClientConstants.commonPageDataApiUrl)
    .subscribe(
      value => this.commonPageData$.next(value as CommonPageData)
    );
  }
}
