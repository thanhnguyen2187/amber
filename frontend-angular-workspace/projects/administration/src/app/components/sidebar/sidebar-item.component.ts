import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.scss']
})
export class SidebarItemComponent implements OnInit {

  constructor() { }

  @Input() content = '';
  @Input() url = '';
  @Input() iconUrl = '';
  // tslint:disable-next-line:variable-name
  @Input() open = false;
  @Input() selected = false;

  // tslint:disable-next-line:variable-name
  _expand = true;
  @Input()
  get expand(): boolean { return this._expand; };
  set expand(value: boolean) {
    this._expand = value;
    this.expandChange.emit(value);
  }
  @Output() expandChange = new EventEmitter<boolean>();

  @Input() hasChildren = false;

  ngOnInit(): void {
  }

}
