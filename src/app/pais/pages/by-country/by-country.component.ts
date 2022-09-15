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


 /* public term:string;
  public isNotFound:boolean;
  public byCountryResults:Country[];

*/


  constructor( private _countryService:CountryService) { 
   
  /*  this.term="";
    this.isNotFound=false;
    // this.showTable=false;
    this.byCountryResults=[];*/


  }

  ngOnInit(): void {
  }

  getTermEmitter(term:string){
    //this.term=term;
  }

  getIsNotFoundEmitter(isNotFound:boolean){
    /*this.isNotFound=isNotFound;
    console.log (this.isNotFound);*/
  }

  getByCountryResults(byCountryResults:Country[]){

   // this.byCountryResults=byCountryResults;
  }

  /*to be able to inject private service and use property on the template*/

  get term():string{
    return this._countryService.term;
  }

  set term(_term:string){
    this._countryService.term=_term;
  }


  get byCountryResults():Country[]{
    return this._countryService.byCountryResults;
  }

  set byCountryResults(_byCountryResults:Country[]){
    this._countryService.byCountryResults=_byCountryResults;
  }

  
  get isNotFound():boolean{
    return this._countryService.isNotFound;
  }

  set isNotFound(_isNotFound:boolean){
    this._countryService.isNotFound=_isNotFound;
  }

  

 

}
