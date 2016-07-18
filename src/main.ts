import { bootstrap } from '@angular/platform-browser-dynamic';
import {provide, PLATFORM_DIRECTIVES,enableProdMode} from '@angular/core';
import { AppComponent, environment } from './app/';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import {ROUTER_DIRECTIVES} from '@angular/router';

import {APP_ROUTER_PROVIDER} from './app/routes';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  APP_ROUTER_PROVIDER, // custom router provider
  provide(PLATFORM_DIRECTIVES, {useValue: [ROUTER_DIRECTIVES], multi: true}),
  disableDeprecatedForms(),
  provideForms()
]);
