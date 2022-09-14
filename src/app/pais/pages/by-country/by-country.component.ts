import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.css']
})
export class ByCountryComponent implements OnInit {

  public term:string;

  public isNotFound:boolean;

  public $byCountryResults:Observable<object>;

  constructor(private _countryService:CountryService) { 
    this.term="";
    this.isNotFound=false;
    this.$byCountryResults=new Observable();
  }

  ngOnInit(): void {
  }

  search(){
    console.log(this.term);
    this._countryService.searchByCountry(this.term).subscribe({
      next:(data)=>{
        console.log (data);
        this.isNotFound=false;
      },
      error:(error)=>{
        console.log ("cagada"+error);
        this.isNotFound=true;
      }
    });

  }

}
