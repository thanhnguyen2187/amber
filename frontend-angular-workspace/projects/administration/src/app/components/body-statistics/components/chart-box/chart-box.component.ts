import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart-box',
  templateUrl: './chart-box.component.html',
  styleUrls: ['./chart-box.component.scss']
})
export class ChartBoxComponent implements OnInit {

  open = false;
  @Input() title = 'Chart Box';

  constructor() { }

  ngOnInit(): void {
  }

}
