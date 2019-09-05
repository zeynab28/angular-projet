import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private _envoiUrl="http://localhost:8000/api/send";
  private _translisteUrl="http://localhost:8000/api/liste_envoi";

  constructor(private http:HttpClient) { }

  envoi(send){
    return this.http.post<any>(this._envoiUrl, send)
  }
  getTransliste(){
    return this.http.get<any>(this._translisteUrl)
  }
}
