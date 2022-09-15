import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ByCapitalsComponent } from './pages/by-capitals/by-capitals.component';
import { ByCountryComponent } from './pages/by-country/by-country.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { SeeCountryComponent } from './pages/see-country/see-country.component';
import { RouterModule } from '@angular/router';
import { CountriesTableComponent } from './components/countries-table/countries-table.component';

/*
  this module will be imported on the main module of the app,
  app-module.ts, to be able to use the components of this module
  that we are exporting on other parts of the app (like app.component)

*/

@NgModule({
  declarations: [
    ByCapitalsComponent,
    ByCountryComponent,
    ByRegionComponent,
    SeeCountryComponent,
    CountriesTableComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],

  /*
    we export these components  bercause we are going to use it on another modules or components outside our shared module, for example in the main app-component

  */

  exports:[
    ByCapitalsComponent,
    ByCountryComponent,
    ByRegionComponent,
    SeeCountryComponent
  ]
})
export class PaisModule { }
