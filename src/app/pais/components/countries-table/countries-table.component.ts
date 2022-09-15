import { Component, OnInit, Input } from '@angular/core';
import { Country } from '../../interfaces/i-country';

@Component({
  selector: 'app-countries-table',
  templateUrl: './countries-table.component.html',
  styleUrls: ['./countries-table.component.css']
})
export class CountriesTableComponent implements OnInit {

  @Input() dataFromParent:Country[];
  
  constructor() { 
    this.dataFromParent=[];
  }

  ngOnInit(): void {
  }

}
