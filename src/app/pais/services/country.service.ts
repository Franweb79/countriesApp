import { HttpClient, HttpParams } from '@angular/common/http';
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
  public countryByCodeUrl=`${environment.apiUrl}/alpha`;


  /*
    we will need them to retrieve only certain data on some methods
    and make a faster and lighter response

  */
  public httpParams:HttpParams=new HttpParams()
  .set('fields','name,population,flags,capital,cca2');
  

  constructor(private _http:HttpClient) { }

  searchByCountry(country:string):Observable<Country[]>{
    

    let url:string=`${this.byCountryUrl}/${country}`;

    return this._http.get<Country[]>(url,{params:this.httpParams});
  }

  searchByCapital(capital:string):Observable<Country[]>{

    let url:string=`${this.byCapitalUrl}/${capital}`;
    return this._http.get<Country[]>(url, {params:this.httpParams});
  }

  searchByRegion(region:string):Observable<Country[]>{


    let url:string=`${this.byRegionUrl}/${region}`;
    return this._http.get<Country[]>(url, {params:this.httpParams});
  }

  //in older api by code it returns only an object, but here also an array
  //here we need the whole object and not certain fields so we use no httpParams
  getCountryByCode(code:string):Observable<Country[]>{

    let url=`${this.countryByCodeUrl}/${code}`;
    return this._http.get<Country[]>(url);

  }
  
}
