import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ExempleserviceService {
  private _expleUrl="http://localhost:8000/prestataire/liste";

  constructor(private http:HttpClient) { }

  getEntreprise(){
    return this.http.get<any>(this._expleUrl)
  }
}
