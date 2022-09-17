import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { Country } from '../../interfaces/i-country';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-input-component',
  templateUrl: './input-component.component.html',
  styleUrls: ['./input-component.component.css']
})
export class InputComponentComponent implements OnInit {

  //this is to emit tjhe complete search term when we push enter (ngSubmit)
  //to catch input value each time we input (write) a character,
  //we will use debounceValueEmit with (input) event
  public term:string;

  @Output() termEmitter= new EventEmitter<string>;
  @Output() onDebounce=new EventEmitter<string>;


 
  constructor(private _countryService:CountryService) {
    this.term="";

   }

  ngOnInit(): void {
  }

  searchEmit(){
    this.termEmitter.emit(this.term);
  }

  debounceValueEmit(event:any){

    this.onDebounce.emit(event.target.value)
    console.log (event.target.value);
  }

  


  

}
