import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListedepotService {
  private _depotUrl = "http://localhost:8000/api/depot";
  private _listedepotUrl = "http://localhost:8000/api/liste_depot"

  constructor(private http: HttpClient) { }
  ajoutDepot(depot){
    return this.http.post<any>(this._depotUrl, depot)
  }
  getListedepot(){
    return this.http.get<any>(this._listedepotUrl)
  }  
}
