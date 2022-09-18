import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/i-country';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styleUrls: ['./by-region.component.css']
})
export class ByRegionComponent implements OnInit {

  public term:string;
  public isNotFound:boolean;
  public byRegionResults:Country[];

  //will be sent to input child component
  public placeholderText:string="Search by region (Africa, Americas, Asia, Europe, Oceania)";

  constructor(private _countryService:CountryService) {

    this.term="";
    this.isNotFound=false;
    this.byRegionResults=[];
   }

   search(term:string){
    this._countryService.searchByRegion(term).subscribe({
      next:(response:Country[])=>{
       
        this.term=term;
        this.byRegionResults=response;
        console.log (this.byRegionResults);
        this.isNotFound=false;

      
      },
      error:(error:any)=>{

        this.term=term;

        console.log (error);
        this.isNotFound=true;
        this.byRegionResults=[];

        
      }
    });

    


  }

  ngOnInit(): void {

    
  }

  getTermEmitter(term:string){
    this.term=term;
  }

  suggestions(term:string){
    this.isNotFound=false;
  }

}
