import { Component, Input, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'amber-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  constructor() { }

  hovering = false;
  @Input() disabled = false;
  @Input() useHovering = false;
  @Input() disableTabIndex = false;
  @Input() backgroundImageUrl = '';
  @Input() hoverBackgroundImageUrl = '';
  @Input() size = '';
  getBackgroundImageUrl(): string {
    if (!this.hoverBackgroundImageUrl || !this.hovering) {
      return this.backgroundImageUrl;
    } else {
      return this.hoverBackgroundImageUrl;
    }
  }

  @Input() action = () => {};
  doNothing(): void {}

  ngOnInit(): void {
  }

}
