import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CompteService {
  private _compteUrl = "http://localhost:8000/api/compte"

  constructor(private http: HttpClient) { }

  ajoutCompte(compte){
    return this.http.post<any>(this._compteUrl, compte)
  }
}
