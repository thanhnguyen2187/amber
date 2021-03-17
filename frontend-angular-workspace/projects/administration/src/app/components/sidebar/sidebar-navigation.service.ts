import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarNavigationService {

  currentUrl: BehaviorSubject<string> = new BehaviorSubject<string>('something');

constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    activatedRoute.url.subscribe(
      urlSegments => {
        this.currentUrl.next(urlSegments.join('/'));
      }
    );
  }
}
