import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CalendarBoxComponent } from './calendar-box.component';
import { CalendarDynamicService } from './calendar-dynamic.service';

@Component({
  selector: 'app-calendar-master',
  templateUrl: './calendar-master.component.html',
  styleUrls: ['./calendar-master.component.scss']
})
export class CalendarMasterComponent implements OnInit, AfterViewInit {

  // @ViewChild(CalendarBoxComponent)
  // calendarBoxComponent!: CalendarBoxComponent;

  constructor(
    public calendarDynamicService: CalendarDynamicService,
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

}
