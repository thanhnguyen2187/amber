import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHandler, HttpHeaders, HttpParams,
} from '@angular/common/http';
import {
  StaticConfiguration,
  StaticConfigurationService,
} from './static-configuration.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrefixedHttpClientService {

  staticConfiguration: StaticConfiguration = {
    apiBaseUrl: '',
  };
  httpHeaders = new HttpHeaders();
  httpOptions = {};

  constructor(
    private httpClient: HttpClient,
    private staticConfigurationService: StaticConfigurationService,
  ) {
    this.staticConfiguration = staticConfigurationService.staticConfiguration ?? {
      apiBaseUrl: '',
    };
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'no-cache',
      })
    };
    this.httpHeaders = new HttpHeaders(this.httpOptions);
  }

  stripSlashes(
    uri: string,
  ): string {
    // uri is a primitive, so it is passed by value
    // therefore the mutation should not be a problem
    while (uri.endsWith('/')) {
      uri = uri.slice(0, uri.length - 1);
    }
    return uri;
  }

  prefixUrl(
    url: string,
    prefix: string = this.staticConfiguration.apiBaseUrl,
  ): string {
    if (
      url.startsWith('http')
    ) {
      return url;
    } else {
      return [
        this.stripSlashes(prefix),
        this.stripSlashes(url),
      ].join('/');
    }
  }

  get(
    url: string,
    params?: HttpParams,
    headers: HttpHeaders = this.httpHeaders,
  ): Observable<object> {
    return (
      this
      .httpClient
      .get(
        this.prefixUrl(url),
        {
          headers,
          params,
        }
      )
    );
  }

}
