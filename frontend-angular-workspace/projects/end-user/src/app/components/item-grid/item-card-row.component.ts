import { Component, Input, OnInit } from '@angular/core';
import { CalendarDynamicService } from '../calendar/calendar-dynamic.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-item-card-row',
  templateUrl: './item-card-row.component.html',
  styleUrls: ['./item-card-row.component.scss']
})
export class ItemCardRowComponent implements OnInit {

  constructor(
    public calendarDynamicService: CalendarDynamicService,
  ) { }

  @Input() label = '';
  @Input() value = '';
  @Input() icon: 'cart' | 'calendar' = 'cart';

  ngOnInit(): void {
  }
}
