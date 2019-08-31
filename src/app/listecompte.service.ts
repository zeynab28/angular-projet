import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListecompteService {
  private _listeUrl="http://localhost:8000/api/liste_compte";

  constructor(private http:HttpClient) { }

  getListecompte(){
    return this.http.get<any>(this._listeUrl)
  }
}
