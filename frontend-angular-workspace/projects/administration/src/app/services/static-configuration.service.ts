import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  BehaviorSubject,
} from 'rxjs';

export interface StaticConfiguration {
  apiBaseUrl: string;
}

@Injectable({
  providedIn: 'root',
})
export class StaticConfigurationService {

  staticConfiguration: StaticConfiguration | undefined;

  constructor(
  ) {}
}
