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

  //will be sent to input child component
  public placeholderText:string="Search by capital";

  constructor(private _countryService:CountryService) { 

    this.term="";
    this.isNotFound=false;
    this.byCapitalResults=[];
  }

  ngOnInit(): void {
  }

   
  search(term:string){
    this._countryService.searchByCapital(term).subscribe({
      next:(response:Country[])=>{
       
        this.term=term;
        this.byCapitalResults=response;
        this.isNotFound=false;

      
      },
      error:(error:any)=>{

        this.term=term;
        this.isNotFound=true;
        /*
          we set empty array if we had an error, 
          and we check it on the template
        */
        this.byCapitalResults=[];

        
      }
    });

  }

  deleteErrorMessage(){
    this.isNotFound=false;
  }

  

}
