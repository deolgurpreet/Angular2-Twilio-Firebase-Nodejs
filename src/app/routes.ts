/**
 * Created by devel on 7/12/2016.
 */
import { provideRouter, RouterConfig } from '@angular/router';

import { WelcomeComponent } from './welcome';
import { LoginComponent } from './login';
import { SignUpComponent } from './sign-up';
import { MyAccountComponent } from './my-account';

export const appRoutes: RouterConfig = [
  { path: '', component: WelcomeComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent},
  { path: 'my-account', component: MyAccountComponent}
];

export const APP_ROUTER_PROVIDER = provideRouter(appRoutes);

