import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QueryBindingType } from '@angular/core/src/view';
import {Router} from '@angular/router';
import { JwtHelperService } from "@auth0/angular-jwt";
  

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
 // private _registerUrl = "http://localhost:8000/api/register"
  private _loginUrl = "http://localhost:8000/api/login_check"
  jwt : string;
  username : string;
  roles: Array<string>;
  navigate: any;
  // _router: any;
  
  constructor(private http: HttpClient,
    private _router:Router) {}
   
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
    return this.http.post(endpoint, formData);

  }
  loginUser( user){
    return this.http.post<any>(this._loginUrl, user, {observe: 'response'})
  }
  // loggedIn(){
  //   return !!localStorage.getItem('token')
  //}
  logoutUser(){
    localStorage.removeItem('token')
    this._router.navigate(['/login'])
   }
    saveToken(jwt:string)
    {
      localStorage.setItem('token',jwt['token']);
      this.jwt=jwt['token'];
      this.parseJWT();
    }
    parseJWT(){
let jwtHelper = new JwtHelperService();
let objJWT = jwtHelper.decodeToken(this.jwt);
console.log(objJWT)
this.username=objJWT.username;
console.log(this.username)
this.roles=objJWT.roles;
console.log(this.roles);
    }
    


  getToken()
  { 
    return localStorage.getItem('token')
  }
  loggIn(){
    return !!localStorage.getItem('token')
  }
  logOut(){
    localStorage.removeItem('token')
    this.initParams();
  }
initParams(){
this.jwt=undefined;
this.username=undefined;
this.roles=undefined;
}
isAdmin() {
    return this.roles.indexOf('ROLE_ADMIN') >= 0;

}
isSuperAdmin() {
    return this.roles.indexOf('ROLE_SUPER_ADMIN') >= 0;

}
isCaissier() {
  return this.roles.indexOf('ROLE_CAISSIER') >= 0;

}
isUser() {
    return this.roles.indexOf('ROLE_USER') >= 0;
}
isAuthenticated() {
    return this.roles && (this.isAdmin() || this.isUser() || this.isCaissier);

}
  loadToken(){
    this.jwt=localStorage.getItem('token');
    this.parseJWT();
  }
  
}
