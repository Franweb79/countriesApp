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




  constructor() { 
   
    this.term="";
    this.isNotFound=false;
    // this.showTable=false;
    this.byCountryResults=[];


  }

  ngOnInit(): void {
  }

  getTermEmitter(term:string){
    this.term=term;
  }

  getIsNotFoundEmitter(isNotFound:boolean){
    this.isNotFound=isNotFound;
    console.log (this.isNotFound);
  }

  getByCountryResults(byCountryResults:Country[]){

    this.byCountryResults=byCountryResults;
  }

 

}
