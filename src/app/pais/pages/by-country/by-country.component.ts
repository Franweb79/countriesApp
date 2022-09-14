import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../../interfaces/i-country';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.css']
})
export class ByCountryComponent implements OnInit {

  public term:string;

  public isNotFound:boolean;

  public byCountryResults:Country[];

  constructor(private _countryService:CountryService) { 
    this.term="";
    this.isNotFound=false;
    this.byCountryResults=[];
  }

  ngOnInit(): void {
  }

  search(){
    console.log(this.term);
    this._countryService.searchByCountry(this.term).subscribe({
      next:(response:any)=>{
       
        this.byCountryResults=response;
        console.log (this.byCountryResults);
        this.isNotFound=false;
      },
      error:(error:any)=>{
        console.log ("cagada"+error);
        this.isNotFound=true;
      }
    });

  }

}
