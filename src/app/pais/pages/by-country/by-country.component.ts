import { Component, OnInit } from '@angular/core';
import { ConnectableObservable, debounceTime, Observable, Subject } from 'rxjs';
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
  public suggestedCountries: Country[];

  //will be sent to input child component
  public placeholderText:string="Search by country";


  constructor( private _countryService:CountryService) { 
   
   this.term="";
    this.isNotFound=false;
    this.byCountryResults=[];
    this.suggestedCountries=[];


  }

  search(term:string){
    this._countryService.searchByCountry(term).subscribe({
      next:(response:Country[])=>{
       
        this.term=term;
        this.byCountryResults=response;
        console.log (this.byCountryResults);
        this.isNotFound=false;

      
      },
      error:(error:any)=>{

        this.term=term;

        console.log (error);
        this.isNotFound=true;
        this.byCountryResults=[];

        
      }
    });

    


  }

  ngOnInit(): void {

    
  }

  getTermEmitter(term:string){
    this.term=term;
  }

  suggestions(term:string){
   // this.isNotFound=false;
    this._countryService.searchByCountry(term)
    .subscribe( countries =>{
      //we well get only certain results with splice array method
      this.suggestedCountries=countries.splice (0,3);
    })
  }



 

}


