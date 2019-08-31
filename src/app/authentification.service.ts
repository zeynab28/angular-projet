import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QueryBindingType } from '@angular/core/src/view';
  

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
 // private _registerUrl = "http://localhost:8000/api/register"
  private _loginUrl = "http://localhost:8000/api/login_check"
  
  constructor(private http: HttpClient) {}
   
  registerUser( User ){
    const endpoint = 'http://localhost:8000/api/register';
    const formData: FormData = new FormData();
    formData.append('imageName',User.imageName);
    formData.append('prenom',User.prenom);
    formData.append('nom',User.nom);
    formData.append('cni',User.cni);
    formData.append('adresse',User.adresse);
    formData.append('statut',User.statut);
    formData.append('email',User.email);
    formData.append('roles',User.roles);
    formData.append('tel',User.tel);
    formData.append('password',User.password);
    formData.append('username',User.username);
    formData.append('partenaire',User.partenaire);
    return this.http
    .post(endpoint, formData);

  }
  loginUser( user){
    return this.http.post<any>(this._loginUrl, user)
  }
  
}
