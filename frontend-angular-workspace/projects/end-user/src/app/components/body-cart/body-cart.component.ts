import { Component, OnInit } from '@angular/core';
// import { TableStaticService } from '../table/table-static.service';
// import { TableDynamicService } from '../table/table-dynamic.service';
import { TableStaticService } from '../table-v2/services/table-static.service';
import { TableDynamicService } from '../table-v2/services/table-dynamic.service';
// import { TableCell, TableCellPlain, TableRowForRent, TableRowForSale } from '../table/table-data.model';
import { ItemStoreService } from '../item-grid/item-store.service';
import { TableRow, TableRowForRent, TableRowForSale } from '../table-v2/models/table-row';
import { ItemStoreName, ItemStoreV2Service } from '../item-grid/item-store-v2.service';
import { TableMasterType } from '../table-v2/components/table-master/table-master.type';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from '../notification/notification.service';
import { PrefixedHttpClientService } from '../../services/prefixed-http-client.service';

interface RowsData {
  headerLabels: string[];
  title: string;
  rows: TableRow[];
  storeName: ItemStoreName;
  masterType: TableMasterType;
}

@Component({
  selector: 'app-body-cart',
  templateUrl: './body-cart.component.html',
  styleUrls: ['./body-cart.component.scss']
})
export class BodyCartComponent implements OnInit {

  constructor(
    public tableStaticService: TableStaticService,
    public tableDynamicService: TableDynamicService,
    public itemStoreV2Service: ItemStoreV2Service,
    public notificationService: NotificationService,
    public httpClientService: PrefixedHttpClientService,
  ) {
  }

  get rowsDataArray(): RowsData[] {
    return Object.values(this.rowsDataMap) ?? [];
  }
  resultHeaderLabels: string[] = [
    'Purpose',
    'Bike Name',
    'Amount',
    'Total',
  ];
  get total(): number {
    let sum = 0;
    this.rowsDataArray.forEach(
      rowsData => {
        rowsData.rows.forEach(
          row => {
            sum += row.total;
          }
        );
      }
    );
    return sum;
  }

  get areActionsAvailable(): boolean {
    return this.total > 0;
  }

  cartContactFormGroup = new FormGroup({
    name: new FormControl(
      '',
      [
        Validators.required,
      ],
    ),
    email: new FormControl(
      '',
      [
        Validators.required,
        Validators.email,
      ],
    ),
    phoneNumber: new FormControl(
      '',
    ),
    note: new FormControl(''),
  });

  displaySendRequest = false;
  displayConfirmClear = false;
  displaySuccess = false;

  rowsDataMap: {
    [_ in ItemStoreName]: RowsData
  } = {
    dailyInsideCity: {
      headerLabels: this.tableStaticService.headerLabelsForRent,
      title: 'Daily Rental Inside City',
      rows: [],
      storeName: 'dailyInsideCity',
      masterType: TableMasterType.ForRentDaily,
    },
    dailyTraveling: {
      headerLabels: this.tableStaticService.headerLabelsForRent,
      title: 'Daily Rental Traveling',
      rows: [],
      storeName: 'dailyTraveling',
      masterType: TableMasterType.ForRentDaily,
    },
    monthly: {
      headerLabels: this.tableStaticService.headerLabelsForRentMonthly,
      title: 'Monthly Rental',
      rows: [],
      storeName: 'monthly',
      masterType: TableMasterType.ForRentMonthly,
    },
    forSale: {
      headerLabels: this.tableStaticService.headerLabelsForSale,
      title: 'For Sale',
      rows: [],
      storeName: 'forSale',
      masterType: TableMasterType.ForSale,
    },
  };

  clearAll(): void {
    this.tableDynamicService.clearAll();
    this.displayConfirmClear = false;
  }

  toggleSendRequest(): void {
    if (this.areActionsAvailable) {
      this.displaySendRequest = true;
    }
  }

  toggleClear(): void {
    if (this.areActionsAvailable) {
      this.displayConfirmClear = true;
    }
  }

  send(): void {
    if (this.cartContactFormGroup.valid) {
      this.displaySendRequest = false;

      this.httpClientService.post(
        {
          url: 'contract/process-request',
          body: {
            requests: {
              rentalsDailyInsideCity: [],
              rentalsDailyTraveling: [],
              rentalsMonthly: [],
              sales: [],
            },
            fullName: this.cartContactFormGroup.controls.name.value,
            email: this.cartContactFormGroup.controls.email.value,
            phoneNumber: this.cartContactFormGroup.controls.phoneNumber.value,
            note: this.cartContactFormGroup.controls.note.value,
          },
        },
      ).subscribe(
        () => {
          this.displaySuccess = true;
          this.clearAll();
        },
        // (error) => {
        //   console.log(error);
        // }
      );
    }
  }

  ngOnInit(): void {
    for (const [itemStoreName, rowsData] of Object.entries(this.rowsDataMap)) {
      this.tableDynamicService.subjectMap[itemStoreName as ItemStoreName].subscribe(
        (rows) => {
          rowsData.rows = rows;
        }
      );
    }
    this.tableDynamicService.updateSubjects();
  }

}
