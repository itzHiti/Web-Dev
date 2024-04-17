import { ApplicationConfig } from '@angular/core';
import {provideRouter, Routes} from '@angular/router';

import { provideClientHydration } from '@angular/platform-browser';
import {AppComponent} from "./app.component";
import {CompanyListComponent} from "./company-list/company-list.component";

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: '', redirectTo: '/companies', pathMatch: 'full' },
  { path: 'companies', component: CompanyListComponent },
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration()]
};
