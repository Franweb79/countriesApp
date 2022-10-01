import { Component, OnInit, Input } from '@angular/core';
import { Country } from '../../interfaces/i-country';
import { ChangeDetectorRef } from '@angular/core';

import {
  trigger, state, style, animate, transition
 } from '@angular/animations';

@Component({
  selector: 'app-countries-table',
  templateUrl: './countries-table.component.html',
  styleUrls: ['./countries-table.component.css'],
  animations: [
    trigger('fade', [
      state('hide', style({
        
        opacity: 0
        
      })),
      state('show', style({
        
        opacity: 1
      })),
      transition('hide =>show', [
        animate('0.5s')
      ])/*,
        this wont be used, component is simply destroyed when we 
        pick another option in menu, no animation will be shown
      transition('show => hide', [
        animate('2s')
      ])*/
    ]),
   
  ]
})
export class CountriesTableComponent implements OnInit {

  @Input() dataFromParent:Country[];

  public showTable:boolean;
  
  constructor(private changeRef: ChangeDetectorRef) { 
    this.dataFromParent=[];
    this.showTable=false;

  }

  ngOnInit(): void {

  }

  //to make animation work, must be here, not on ngOnInit
  ngAfterViewInit(): void {
    this.showTable=true;
    this.changeRef.detectChanges();//to fix error https://github.com/angular/angular/issues/36173
  }

  

}
