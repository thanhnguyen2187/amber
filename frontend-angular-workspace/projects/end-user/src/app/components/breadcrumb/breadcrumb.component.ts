import {
  Component,
  OnInit,
} from '@angular/core';
import {
  Router,
  Event,
  ActivationEnd,
  NavigationEnd,
  ActivatedRoute,
  ActivatedRouteSnapshot, Data, UrlSegment,
} from '@angular/router';
import {
  filter,
  map,
  buffer,
  pluck,
} from 'rxjs/operators';

interface Breadcrumb {
  label: string;
  reference: string;
}
const isNavigationEnd =
  (event: Event) => event instanceof NavigationEnd;
const isActivationEnd =
  (event: Event) => event instanceof ActivationEnd;

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  breadcrumbs: Breadcrumb[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
  ) {
    this.breadcrumbs =
      this
      .buildBreadcrumbs(activatedRoute)
      .filter(
        // remove the root route which does not have label
        (breadcrumb) => breadcrumb.label.trim() !== ''
      );
  }

  // TODO: switch to an `ActivatedRoute` version for dynamic route changing
  buildBreadcrumb(activatedRouteSnapshot: ActivatedRouteSnapshot): Breadcrumb {
    return {
      // use null coalescing operator to prevent undefined data of root route
      label: activatedRouteSnapshot.data.breadcrumb ?? '',
      reference: '/' + activatedRouteSnapshot.url.join('/'),
    };
  }

  buildBreadcrumbs(activatedRoute: ActivatedRoute | null): Breadcrumb[] {
    if (activatedRoute == null) {
      return [];
    } else {
      return [
        ...this.buildBreadcrumbs(activatedRoute.parent),
        this.buildBreadcrumb(activatedRoute.snapshot),
      ];
    }
  }

  ngOnInit(): void {
  }

}
