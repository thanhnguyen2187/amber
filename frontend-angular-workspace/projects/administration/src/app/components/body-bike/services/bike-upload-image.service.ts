import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PrefixedHttpClientService } from '../../../services/prefixed-http-client.service';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { BikeUploadResponse } from '../models/bike-upload-response.interface';

@Injectable({
  providedIn: 'root'
})
export class BikeUploadImageService {

  upload$(
    file: File,
  ): Observable<BikeUploadResponse> {
    const formData: FormData = new FormData();
    formData.append('upload', file, file.name);
    formData.append(
      'data',
      JSON.stringify({
        auth: {
          api_key: '309bc8210be3f40017712ba6e50c6b77',
          api_secret: '29528c683812bb2b2b0cd89cf5ff527777b77e32',
        },
        wait: true,
      })
    );
    return this.prefixedHttpClientService.post(
      {
        url: 'https://api.kraken.io/v1/upload',
        body: formData,
        headers: (
          new HttpHeaders()
          .append('Access-Control-Allow-Origin', '*')
        ),
      }
    ) as Observable<BikeUploadResponse>;
  }

  constructor(
    private prefixedHttpClientService: PrefixedHttpClientService,
  ) { }
}
