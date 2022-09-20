import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { CountryService } from '../../services/country.service';
import { Idd } from '../../interfaces/i-country';

@Component({
  selector: 'app-see-country',
  templateUrl: './see-country.component.html',
  styleUrls: ['./see-country.component.css']
})
export class SeeCountryComponent implements OnInit {

  constructor(private _activatedRoute:ActivatedRoute,
              private _countryService:CountryService) { }

  ngOnInit(): void {

    /*we could make params.id to access the value of the id parameter,
    but we will do with detructuraion
    it seems we must use () to surround the {id}, which is the way to detructurate an object
    */

    this._activatedRoute.params
    .pipe(
      switchMap(({id})=>{
        return this._countryService.getCountryByCode(id);
     })
    )
    .subscribe(resp=>{
      console.log(resp);
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
