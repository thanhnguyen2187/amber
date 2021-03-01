import { Provider } from '@angular/core';
import { StaticConfigurationService } from './static-configuration.service';

export const StaticConfigurationProvider: Provider = {
  provide: StaticConfigurationService,
  useFactory: () => {
    const staticConfigurationService = new StaticConfigurationService();
    staticConfigurationService.staticConfiguration = {
      // @ts-ignore
      apiBaseUrl: window.environment.apiBaseUrl,
    };
    return staticConfigurationService;
  },
};
