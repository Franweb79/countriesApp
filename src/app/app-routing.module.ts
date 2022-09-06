import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByCapitalsComponent } from './pais/pages/by-capitals/by-capitals.component';
import { ByRegionComponent } from './pais/pages/by-region/by-region.component';

const routes: Routes = [
  { path: 'regions', component: ByRegionComponent },
  { path: 'capitals', component: ByCapitalsComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
