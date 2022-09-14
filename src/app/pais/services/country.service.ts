import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  public byCountryUrl=`${environment.apiUrl}/name`
  constructor(private _http:HttpClient) { }

  searchByCountry(country:string){
    return this._http.get(`${this.byCountryUrl}/${country}`)
  }
}
