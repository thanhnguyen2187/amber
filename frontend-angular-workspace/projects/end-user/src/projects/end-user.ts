import { enableProdMode } from '@angular/core';

import { environment } from '../environments/environment';

if (environment.production) {
  enableProdMode();
}

export { AppModule } from '../app/app.module';
export { renderModule, renderModuleFactory } from '@angular/platform-server';
