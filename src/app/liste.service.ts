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
  ajoutpartenaire( partenaire ){
    const endpoint = 'http://localhost:8000/prestataire/ajout';
    const formData: FormData = new FormData();
    formData.append('imageName',partenaire.imageName);
    formData.append('prenom',partenaire.prenom);
    formData.append('nom',partenaire.nom);
    formData.append('cni',partenaire.cni);
    formData.append('adresse',partenaire.adresse);
    formData.append('statut',partenaire.statut);
    formData.append('email',partenaire.email);
    formData.append('roles',partenaire.roles);
    formData.append('tel',partenaire.tel);
    formData.append('password',partenaire.password);
    formData.append('username',partenaire.username);
    // formData.append('partenaire',partenaire.partenaire);
    formData.append('rs',partenaire.rs);
    formData.append('nom',partenaire.nom);
    formData.append('adresse',partenaire.adresse);
    formData.append('ninea',partenaire.ninea);
    formData.append('statut',partenaire.statut);
    formData.append('solde',partenaire.solde);
    return this.http
    .post(endpoint, formData);

  }
}
