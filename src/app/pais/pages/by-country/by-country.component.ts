import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/internal/operators/filter';
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

    //term to lowercase because API is case sensitive
    term=term.toLowerCase();
   this.isNotFound=false;
    this._countryService.searchByCountry(term)
    .subscribe( countries =>{

     

      this.suggestedCountries=countries;

      /*
        no need to search on name it is done my the API, now
        we have the results with term on the name.official or in 
        the altSpellings, we will filter and modify the altSpellings array
        only with values containing the term (that is why we assign again altSpellings to altSpellings when we filter it,
        if we don´t make the original array wont be modified).

        suggestedCountries is not necessary to reassign since we will have
        the suggested countries with the modified altSpellings 

      */

      this.suggestedCountries.filter(country=>{

        /*
          in case search term is for example "ho", as the API
          is case sensitive, we must reassign another variable
          with "Ho" to make results like "Honduras" work,
          then on the filter we will search if altSpelling includes "ho" or "Ho"
        */
        let termwithCapitalLetter:string="";
        termwithCapitalLetter=term.charAt(0).toUpperCase()+term.slice(1);

       return country.altSpellings=country.altSpellings.filter(altSpellingValue=>{
          
        return altSpellingValue.includes(term) || altSpellingValue.includes(termwithCapitalLetter);
        })


      });

      console.log (this.suggestedCountries);
      
    });

    
  }

  


 

}


