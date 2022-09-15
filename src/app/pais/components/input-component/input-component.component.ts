import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Country } from '../../interfaces/i-country';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-input-component',
  templateUrl: './input-component.component.html',
  styleUrls: ['./input-component.component.css']
})
export class InputComponentComponent implements OnInit {

  /*public term:string;

  @Output() termEmitter= new EventEmitter<string>;


  public isNotFound:boolean;

  @Output() isNotFoundEmitter=new EventEmitter<boolean>;

  //public showTable:boolean; we will do better setting the array results to 0

  public byCountryResults:Country[];
  @Output() byCountryResultsEmitter=new EventEmitter<Country[]>;

  */
  constructor(private _countryService:CountryService) {
    _countryService.term="";

   // _countryService.isNotFound=false;
    // this.showTable=false;
  //  _countryService.byCountryResults=[];

   }

  ngOnInit(): void {
  }

  search(){
    console.log(this._countryService.term);
    this._countryService.searchByCountry(this._countryService.term).subscribe({
      next:(response:Country[])=>{
       
        this._countryService.byCountryResults=response;
        console.log (this._countryService.byCountryResults);
        this._countryService.isNotFound=false;

       /* this.termEmitter.emit(this.term);
        this.isNotFoundEmitter.emit(this.isNotFound);
        this.byCountryResultsEmitter.emit(this.byCountryResults);*/
       // this.showTable=true;
      },
      error:(error:any)=>{
        console.log ("cagada"+error);
        this._countryService.isNotFound=true;
       // this.showTable=false;
        this._countryService.byCountryResults=[];

        /*this.termEmitter.emit(this.term);
        this.isNotFoundEmitter.emit(this.isNotFound);
        this.byCountryResultsEmitter.emit(this.byCountryResults);*/
      }
    });

    


  }

  /*to be able to inject private service and use property on the template*/

  get term():string{
    return this._countryService.term;
  }

  set term(_term:string){
    this._countryService.term=_term;
  }

}
