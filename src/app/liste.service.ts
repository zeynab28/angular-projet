import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListeService {

  private _listeUrl="http://localhost:8000/prestataire/liste";
  constructor(private http:HttpClient) { }

  getListe(){
    return this.http.get<any>(this._listeUrl)
  }
}
