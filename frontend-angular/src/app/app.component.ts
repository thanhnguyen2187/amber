import { Component, OnInit } from '@angular/core';
import { IconService } from './services/icon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend-angular';

  constructor(
    private iconService: IconService,
  ) {
  }

  ngOnInit(): void {
    this.iconService.registerIcon();
  }
}