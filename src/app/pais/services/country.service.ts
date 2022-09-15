import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Country } from '../interfaces/i-country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  public byCountryUrl=`${environment.apiUrl}/name`
  constructor(private _http:HttpClient) { }

  searchByCountry(country:string):Observable<Country[]>{
    return this._http.get<Country[]>(`${this.byCountryUrl}/${country}`)
  }
}
