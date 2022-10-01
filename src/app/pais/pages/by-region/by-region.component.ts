import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/i-country';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styleUrls: ['./by-region.component.css']
})
export class ByRegionComponent implements OnInit {

  public regions:string[]=['africa', 'americas', 'asia', 'europe', 'oceania'];
  public activeRegion:string='';

  
  
  public byRegionResults:Country[];

  

  constructor(private _countryService:CountryService) {

    this.byRegionResults=[];
   }

   activateRegion (region:string){

    /*  
      following return is to avoid we load data again if we push
      the same button, e.g. oceania 2 times, why load same data 2 times?

    */
    if(this.activeRegion===region){return};
    /*we empty the results if it was prior data on the array from another request,
    to make response faster*/
    this.byRegionResults=[];
    this.activeRegion=region;


    this._countryService.searchByRegion(region).subscribe({
      next:(response:Country[])=>{
       
        this.byRegionResults=response;

      
      },
      error:(error:any)=>{


        console.log (error);
        this.byRegionResults=[];

        
      }
    });
  
   }
   search(term:string){
    

    


  }

  ngOnInit(): void {

    
  }


}
