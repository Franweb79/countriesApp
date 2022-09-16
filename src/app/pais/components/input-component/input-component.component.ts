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

 
  constructor(private _countryService:CountryService) {
    this.term="";

   }

  ngOnInit(): void {
  }

  searchEmit(){
    this.termEmitter.emit(this.term);
  }

  


  

}
