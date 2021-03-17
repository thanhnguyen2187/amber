import { Component, OnInit } from '@angular/core';
import {
  // SidebarItem,
  SidebarItemV2,
  SidebarItemService,
} from './sidebar-item.service';
import {
  NavigationEnd,
  Router,
} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  providers: [
    SidebarItemService,
  ]
})
export class SidebarComponent implements OnInit {

  stateOpen = true;
  // stateOpen = false;
  // sidebarItems: SidebarItem[] = [];
  sidebarItems: SidebarItemV2[] = [];
  currentUrl = '';

  get buttonStyleByState(): object {
    if (this.stateOpen) {
      return {
        // backgroundImage: `url('assets/close-white.svg')`,
        backgroundImage: `url('assets/menu-open.svg')`,
        // padding: '0.25em',
        // margin: '0.25em',
        // width: '1.5em',
        // height: '1.5em',
        width: '2em',
        height: '2em',
      };
    } else {
      return {
        backgroundImage: `url('assets/menu-open.svg')`,
        width: '2em',
        height: '2em',
      };
    }
  }

  get containerStyleByState(): object {
    if (this.stateOpen) {
      return {
        width: '12em',
      };
    } else {
      return {
      };
    }
  }

  sidebarItemIsSelected(
    sidebarItemUrl: string,
  ): boolean {
    return this.currentUrl.indexOf(sidebarItemUrl) !== -1;
  }

  navigate(url: string): void {
    console.log('navigating to ' + url);
    this.router.navigateByUrl(url);
  }

  constructor(
    private sidebarItemService: SidebarItemService,
    private router: Router,
  ) {
    // sidebarItemService
    //   .getSidebarItems()
    //   .subscribe(
    //     (value) => this.sidebarItems = value
    //   );
    sidebarItemService
      .getSidebarItemsV2()
      .subscribe(
        (value) => {
          this.sidebarItems = value;
        }
      );

    // activatedRoute.url.subscribe(
    //   (urlSegments) => this.currentUrl = urlSegments.join('/')
    // );
    router.events.subscribe(
      (event) => {
        if (event instanceof NavigationEnd) {
          this.currentUrl = event.url;
        }
      }
    );
  }

  ngOnInit(): void {
  }

}
