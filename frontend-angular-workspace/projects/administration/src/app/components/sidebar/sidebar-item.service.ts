import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
// import { SidebarModule } from './sidebar.module';

export interface SidebarItem {
  iconUrl: string;
  content: string;
  key: string;
  url: string;
  subItems?: SidebarItem[];
  stateExpand?: boolean;
}

interface SidebarItemDisplayData {
  iconUrl: string;
  content: string;
  key: string;
}

interface SidebarItemLogicData {
  expanded: boolean;
  selected: boolean;
  parent?: SidebarItemV2;
  children: SidebarItemV2[];
}

export class SidebarItemV2 {
  constructor(
    public displayData: SidebarItemDisplayData,
    public logicData: SidebarItemLogicData,
  ) {
    this.displayData = {...displayData};
    this.logicData = {...logicData};
  }

  static defaultLogicData: SidebarItemLogicData = {
    children: [],
    expanded: false,
    selected: false,
  };

  static createTree(
    parentDisplayData: SidebarItemDisplayData,
    childrenDisplayData: SidebarItemDisplayData[],
  ): {
    parent: SidebarItemV2,
    children: SidebarItemV2[],
  } {
    const parent = new SidebarItemV2(
      parentDisplayData,
      SidebarItemV2.defaultLogicData,
    );
    const children = childrenDisplayData.map(
      (childDisplayData) =>
        new SidebarItemV2(
          childDisplayData,
          SidebarItemV2.defaultLogicData,
        )
    );

    parent.logicData.children = children;
    children.forEach(
      (child) => {
        child.logicData.parent = parent;
      }
    );

    return {
      parent,
      children,
    };
  }

  get generatedUrl(): string {
    if (!this.logicData || !this.logicData.parent) { // is root
      return `/dashboard/${this.displayData.key}`;
    } else {
      return `${this.logicData.parent.generatedUrl}/${this.displayData.key}`;
      // return `${this.displayData.key}`;
    }
  }
}

// @Injectable({
//   providedIn: 'root',
// })
@Injectable()
export class SidebarItemService {

  constructor() { }

  getSidebarItemsV2(): Observable<SidebarItemV2[]> {

    const displayData: {
      parentData: SidebarItemDisplayData,
      childrenData: SidebarItemDisplayData[],
     }[] = [
      // {
      //   parentData: {
      //     iconUrl: 'assets/home-white.svg',
      //     content: 'Content',
      //     key: 'content',
      //   },
      //   childrenData: [
      //     {
      //       iconUrl: '',
      //       content: 'List',
      //       key: 'list',
      //     },
      //     {
      //       iconUrl: '',
      //       content: 'Create',
      //       key: 'create',
      //     },
      //   ],
      // },
      {
        parentData: {
          iconUrl: 'assets/contract-white.svg',
          content: 'Contract',
          key: 'contract',
        },
        childrenData: [
          // {
          //   iconUrl: '',
          //   content: 'List',
          //   key: 'list',
          // },
          // {
          //   iconUrl: '',
          //   content: 'Create',
          //   key: 'create',
          // },
        ],
      },
      // {
      //   parentData: {
      //     iconUrl: 'assets/customer-white.svg',
      //     content: 'Customer',
      //     key: 'customer',
      //   },
      //   childrenData: [
      //     {
      //       iconUrl: '',
      //       content: 'List',
      //       key: 'list',
      //     },
      //     {
      //       iconUrl: '',
      //       content: 'Create',
      //       key: 'create',
      //     },
      //   ],
      // },
      {
        parentData: {
          iconUrl: 'assets/bike-white.svg',
          content: 'Bike',
          key: 'bike',
        },
        childrenData: [
          // {
          //   iconUrl: '',
          //   content: 'List',
          //   key: 'list',
          // },
          // {
          //   iconUrl: '',
          //   content: 'Create',
          //   key: 'create',
          // },
        ],
      },
      {
        parentData: {
          iconUrl: 'assets/statistics-white.svg',
          content: 'Statistics',
          key: 'statistics',
        },
        childrenData: [
          // {
          //   iconUrl: '',
          //   content: 'First type graph',
          //   key: 'list',
          // },
          // {
          //   iconUrl: '',
          //   content: 'Second type graph',
          //   key: 'create',
          // },
          // {
          //   iconUrl: '',
          //   content: 'Third type graph',
          //   key: 'create',
          // },
        ],
      },
      // {
      //   parentData: {
      //     iconUrl: 'assets/settings-white.svg',
      //     content: 'Settings',
      //     key: 'settings',
      //   },
      //   childrenData: [],
      // },
    ];

    return of(displayData.map(
      value => {
        return SidebarItemV2.createTree(
          value.parentData,
          value.childrenData,
        ).parent;
      }
    ));
  }

}
