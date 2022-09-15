import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Country } from '../../interfaces/i-country';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-input-component',
  templateUrl: './input-component.component.html',
  styleUrls: ['./input-component.component.css']
})
export class InputComponentComponent implements OnInit {

  public term:string;

  @Output() termEmitter= new EventEmitter<string>;


  public isNotFound:boolean;

  @Output() isNotFoundEmitter=new EventEmitter<boolean>;

  //public showTable:boolean; we will do better setting the array results to 0

  public byCountryResults:Country[];
  @Output() byCountryResultsEmitter=new EventEmitter<Country[]>;

  constructor(private _countryService:CountryService) {
    this.term="";

    this.isNotFound=false;
    // this.showTable=false;
    this.byCountryResults=[];

   }

  ngOnInit(): void {
  }

  search(){
    console.log(this.term);
    this._countryService.searchByCountry(this.term).subscribe({
      next:(response:Country[])=>{
       
        this.byCountryResults=response;
        console.log (this.byCountryResults);
        this.isNotFound=false;

        this.termEmitter.emit(this.term);
        this.isNotFoundEmitter.emit(this.isNotFound);
        this.byCountryResultsEmitter.emit(this.byCountryResults);
       // this.showTable=true;
      },
      error:(error:any)=>{
        console.log ("cagada"+error);
        this.isNotFound=true;
       // this.showTable=false;
        this.byCountryResults=[];

        this.termEmitter.emit(this.term);
        this.isNotFoundEmitter.emit(this.isNotFound);
        this.byCountryResultsEmitter.emit(this.byCountryResults);
      }
    });

    


  }

}
