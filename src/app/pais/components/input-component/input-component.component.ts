import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-input-component',
  templateUrl: './input-component.component.html',
  styleUrls: ['./input-component.component.css']
})
export class InputComponentComponent implements OnInit {

  /*
  
    this is to emit the complete search term
    when we push enter (ngSubmit)
    to catch input value each time we input (write) 
    a character,
    we will use debounceValueEmit with (input) event

  */
  public term:string;

  public isNotFound:boolean=false;

  @Input() placeholder:string="";

  @Output() termEmitter= new EventEmitter<string>;
 // @Output() onDebounce=new EventEmitter<string>;


  public $subject = new Subject<string>();

  constructor() {
    this.term="";

   }

  ngOnInit(): void {

    this.$subject
    .pipe(debounceTime(300))
    .subscribe(value=>{
      console.log ('subject', value);
     // this.onDebounce.emit(value);
      this.isNotFound=false;// TODO igual quitar el suggestions() y descomentar este metodo e ya
    })
  }

  searchEmit(){
    this.termEmitter.emit(this.term);
  }

  pressedKeyEvent(){


    this.$subject.next(this.term);
    
  }

  


  

}
