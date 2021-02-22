import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-body-with-cover',
  templateUrl: './layout-body-with-cover.component.html',
  styleUrls: ['./layout-body-with-cover.component.scss']
})
export class LayoutBodyWithCoverComponent implements OnInit {

  @Input() coverImageReference = '';

  constructor() { }

  ngOnInit(): void {
  }

}
