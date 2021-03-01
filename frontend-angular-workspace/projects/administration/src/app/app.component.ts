// import '../css/tailwind-base.scss';
// import '../css/tailwind-components.scss';
// import '../css/tailwind-screens.scss';
// import '../css/tailwind-utilities.scss';

import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss',
    // '../css/tailwind-base.scss',
    // '../css/tailwind-components.scss',
    // '../css/tailwind-screens.scss',
    // '../css/tailwind-utilities.scss',
  ],
  // encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'administration';
}
