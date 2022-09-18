import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/i-country';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capitals',
  templateUrl: './by-capitals.component.html',
  styleUrls: ['./by-capitals.component.css']
})
export class ByCapitalsComponent implements OnInit {

  public term:string;
  public isNotFound:boolean;
  public byCapitalResults:Country[];

  constructor(private _countryService:CountryService) { 

    this.term="";
    this.isNotFound=false;
    this.byCapitalResults=[];
  }

  ngOnInit(): void {
  }

  //TODO  
  search(term:string){
    this._countryService.searchByCapital(term).subscribe({
      next:(response:Country[])=>{
       
        this.term=term;
        this.byCapitalResults=response;
        console.log (this.byCapitalResults);
        this.isNotFound=false;

      
      },
      error:(error:any)=>{

        this.term=term;

        console.log (error);
        this.isNotFound=true;
        this.byCapitalResults=[];

        
      }
    });

  }

  getTermEmitter(term:string){
    this.term=term;
  }

  suggestions(term:string){
    this.isNotFound=false;
  }

}
