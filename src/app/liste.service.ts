import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ListeService {
  
  private _listeuserUrl="http://localhost:8000/api/liste_user";
  private _listallUrl="http://localhost:8000/api/liste_all";
  private _listeUrl="http://localhost:8000/prestataire/liste";
  constructor(private http:HttpClient) { }

  getListeall(){
    return this.http.get<any>(this._listallUrl)
  }
  getListe(){
    return this.http.get<any>(this._listeUrl)
  }
  getListUser(){
    return this.http.get<any>(this._listeuserUrl)
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
    //formData.append('compte',partenaire.compte);
    formData.append('rs',partenaire.rs);
    formData.append('nompart',partenaire.nompart);
    formData.append('adressemail',partenaire.adressemail);
    formData.append('ninea',partenaire.ninea);
    formData.append('statutpart',partenaire.statutpart);
    formData.append('solde',partenaire.solde);
    return this.http
    .post(endpoint, formData);

  }
  blok(id){

    const _blokUrl='http://localhost:8000/api/user/bloquer_user/'+id;

    return this.http.get(_blokUrl)
  }
  

}

