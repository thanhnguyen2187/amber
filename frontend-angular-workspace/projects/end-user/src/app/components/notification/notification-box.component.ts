import { Component, OnInit } from '@angular/core';
import { NotificationService } from './notification.service';
import {
  trigger,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-notification-box',
  templateUrl: './notification-box.component.html',
  styleUrls: ['./notification-box.component.scss'],
  animations: [
    trigger('showHide', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('1s', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class NotificationBoxComponent implements OnInit {

  displayTimeoutId = 0;
  display = false;
  title = '';
  content = '';

  constructor(
    private notificationService: NotificationService,
  ) {
    this.notificationService.content$.subscribe(
      (content) => this.content = content
    );
    this.notificationService.title$.subscribe(
      (title) => this.title = title
    );
    this.notificationService.display$.subscribe(
      () => {
        this.display = true;
        clearTimeout(this.displayTimeoutId);
        this.displayTimeoutId = setTimeout(() => {
          this.display = false;
        }, 3000);
      }
    );
  }

  ngOnInit(): void {
  }

}
