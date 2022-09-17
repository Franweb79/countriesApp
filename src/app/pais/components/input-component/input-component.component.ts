import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';
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


  public $subject = new Subject<string>();

  constructor(private _countryService:CountryService) {
    this.term="";

   }

  ngOnInit(): void {

    this.$subject
    .pipe(debounceTime(300))
    .subscribe(value=>{
      console.log ('subject', value);
      this.onDebounce.emit(value);
      //this.isNotFound=false;
    })
  }

  searchEmit(){
    this.termEmitter.emit(this.term);
  }

  //despite any, type can be keyboardEvent
  pressedKeyEvent(){


    this.$subject.next(this.term);
    //const value=event.target.value;
    //this.onDebounce.emit(event.target.value)
   // console.log (event.target.value);
  }

  


  

}
