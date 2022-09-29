import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/i-country';
import { ChangeDetectorRef } from '@angular/core';


import {
  trigger, state, style, animate, transition, query, group
 } from '@angular/animations';


@Component({
  selector: 'app-see-country',
  templateUrl: './see-country.component.html',
  styleUrls: ['./see-country.component.css'],
  animations: [
    trigger('fade', [
      state('hide', style({
        
        opacity: 0
        
      })),
      state('show', style({
        
        opacity: 1
      })),
      transition('hide =>show', [
        animate('1s')
      ])/*,
        this wont be used, component is simply destroyed when we 
        pick another option in menu, no animation will be shown
      transition('show => hide', [
        animate('2s')
      ])*/
    ])
   
  ]
})
export class SeeCountryComponent implements OnInit {

  public countries: Country[]=[];

  public showComponentAnimation:boolean;


  constructor(private _activatedRoute:ActivatedRoute,
              private _countryService:CountryService,
              private _router:Router,
              private changeRef: ChangeDetectorRef) {

                this.showComponentAnimation=false;

               }

  ngOnInit(): void {

    /*we could make params.id to access the value of the id parameter,
    but we will do with detructuraion
    it seems we must use () to surround the {id}, which is the way to detructurate an object
    */

    this._activatedRoute.params
    .pipe(
      switchMap(({id})=>{
        return this._countryService.getCountryByCode(id);
     }),
     tap(
      console.log
     )
    )
    .subscribe({
      next: (resp=>{
        this.countries=resp;
      }),
      error:(error=>{

        this.countries=[];
        console.log ('error',this.countries);
        this._router.navigate(['']);
      })
    

    });

  }

  //to make animation work, must be here, not on ngOnInit
  ngAfterViewInit(): void {
    this.showComponentAnimation=true;
    this.changeRef.detectChanges();//to fix error https://github.com/angular/angular/issues/36173
    console.log ('init',this.showComponentAnimation);
  }

  ngOnDestroy(){
     this.showComponentAnimation=false;
 
   }
 

}
