import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'amber-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent implements AfterViewInit {

  // @ViewChild('child') child!: ElementRef;

  constructor() { }

  // ngOnInit(): void {
  // }

  ngAfterViewInit(): void {
  }

}
