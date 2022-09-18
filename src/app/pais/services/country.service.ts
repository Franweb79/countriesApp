import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Country } from '../interfaces/i-country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  public byCountryUrl=`${environment.apiUrl}/name`;
  public byCapitalUrl=`${environment.apiUrl}/capital`;
  public byRegionUrl=`${environment.apiUrl}/region`;


  

  

  constructor(private _http:HttpClient) { }

  searchByCountry(country:string):Observable<Country[]>{
    return this._http.get<Country[]>(`${this.byCountryUrl}/${country}`)
  }

  searchByCapital(capital:string):Observable<Country[]>{
    return this._http.get<Country[]>(`${this.byCapitalUrl}/${capital}`)
  }

  searchByRegion(region:string):Observable<Country[]>{
    return this._http.get<Country[]>(`${this.byRegionUrl}/${region}`)
  }
  
}
