import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private _envoiUrl="http://localhost:8000/api/send";
  private _translisteUrl="http://localhost:8000/api/liste_trans";
  private _retraitUrl="http://localhost:8000/api/retrait";
  private _retrait2Url="http://localhost:8000/api/retrait_test";

  constructor(private http:HttpClient) { }

   finaliser(recev){
    return this.http.post<any>(this._retraitUrl, recev)
  }
  envoi(send){
    return this.http.post<any>(this._envoiUrl, send)
  }
  getTransliste(){
    return this.http.get<any>(this._translisteUrl)
  }
  testretrait(user){
    return this.http.post<any>(this._retrait2Url, user)
  }
}
