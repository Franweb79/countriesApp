import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByCapitalsComponent } from './pais/pages/by-capitals/by-capitals.component';
import { ByCountryComponent } from './pais/pages/by-country/by-country.component';
import { ByRegionComponent } from './pais/pages/by-region/by-region.component';
import { SeeCountryComponent } from './pais/pages/see-country/see-country.component';

const routes: Routes = [
  {
    path:'',
    component:ByCountryComponent,
    pathMatch:'full'
  },
  { 
    path: 'region', 
    component: ByRegionComponent 
  },
  { 
    path: 'capital', 
    component: ByCapitalsComponent 
  },
  {
    path:'country/:id',
    component:SeeCountryComponent
  },
  {
    path:'**',
    redirectTo:''
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
