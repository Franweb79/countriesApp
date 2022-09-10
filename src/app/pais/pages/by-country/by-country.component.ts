import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.css']
})
export class ByCountryComponent implements OnInit {

  public term:string;
  constructor() { 
    this.term="";
  }

  ngOnInit(): void {
  }

  search(){
    console.log("ey");
  }

}
