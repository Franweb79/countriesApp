import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { CountryService } from '../../services/country.service';
import { Country, Idd } from '../../interfaces/i-country';

@Component({
  selector: 'app-see-country',
  templateUrl: './see-country.component.html',
  styleUrls: ['./see-country.component.css']
})
export class SeeCountryComponent implements OnInit {

  public countries: Country[]=[];

  constructor(private _activatedRoute:ActivatedRoute,
              private _countryService:CountryService,
              private _router:Router) { }

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
       // console.log(this.country[0]);
      }),
      error:(error=>{

        this.countries=[];
        console.log ('error',this.countries);
        this._router.navigate(['']);
      })
    
      //TODO delete console logs everywhere and non used imports

    });


    /*
    this._activatedRoute.params.subscribe(({id})=>{
      console.log (id);
      this._countryService.getCountryByCode(id).subscribe(value=>{
        console.log (value);
      });

    })

    */
  }

}
