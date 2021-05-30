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
  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Cache-Control': 'no-cache',
  });

  constructor(
    private httpClient: HttpClient,
    private staticConfigurationService: StaticConfigurationService,
  ) {
    this.staticConfiguration = staticConfigurationService.staticConfiguration ?? {
      apiBaseUrl: '',
    };
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
    {
      url,
      params,
      headers = this.httpHeaders,
      responseType,
    }: {
      url: string,
      params?: HttpParams,
      headers?: HttpHeaders,
      responseType?: any,
    }
  ): Observable<object> {
    return (
      this
      .httpClient
      .get(
        this.prefixUrl(url),
        {
          headers,
          params,
          responseType,
        }
      )
    );
  }

  post(
    {
      url,
      headers = this.httpHeaders,
      params,
      body,
      responseType,
    }:
    {
      url: string,
      headers?: HttpHeaders,
      params?: HttpParams,
      body?: {},
      responseType?: any,
    }
  ): Observable<object> {
    return (
      this.httpClient.post(
        this.prefixUrl(url),
        body,
        {
          headers,
          params,
          responseType,
        }
      )
    );
  }
}
