import { Component, OnInit } from '@angular/core';
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
  public placeholderText:string="Search by country. Also variants including same term will be searched";


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
        this.isNotFound=false;

      
      },
      error:(error:any)=>{

        this.term=term;
        this.isNotFound=true;

        //we set array to empty and we control on the template
        this.byCountryResults=[];

        
      }
    });

    


  }

  ngOnInit(): void {

    
  }



  //TODO maybe this will be continued when they fix the API
  suggestions(term:string){
   // this.isNotFound=false;
    this._countryService.searchByCountry(term)
    .subscribe( countries =>{

      

      //we well get only certain results with splice array method
      //TODO aqui igual podemos hacer el filter por el term
      this.suggestedCountries=countries.splice (0,3);
      console.log (this.suggestedCountries);
    })

    
  }

  redirectToCountry(countryCode:string){
      
  }


 

}


