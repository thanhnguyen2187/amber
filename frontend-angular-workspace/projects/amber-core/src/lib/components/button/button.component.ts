import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'amber-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() disabled = false;
  @Input() backgroundColor = 'white';
  @Input() borderColor = 'gray';
  @Input() disabledBackgroundColor = 'gray';
  @Input() disabledBorderColor = 'gray';

  constructor() { }

  ngOnInit(): void {
  }

}
