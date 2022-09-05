import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';

/*
  this module will be imported on the main module of the app,
  app-module.ts, to be able to use the components of this module
  that we are exporting on other parts of the app (like app.component)

*/
@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule
  ],
  /*
    we export SidebarComponent bercause we are going to use it on another modules or components outside our shared module, for example in the main app-component


  */ 
  exports:[
    SidebarComponent 
  ]
})
export class SharedModule { }
