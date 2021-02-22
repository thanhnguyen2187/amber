import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tag-select-dropdown-item',
  templateUrl: './tag-select-dropdown-item.component.html',
  styleUrls: ['./tag-select-dropdown-item.component.scss']
})
export class TagSelectDropdownItemComponent implements OnInit {

  @Input() label = '';
  constructor() { }

  ngOnInit(): void {
  }

}
