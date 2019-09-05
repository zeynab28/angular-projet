import { Component } from '@angular/core';
import { AuthentificationService } from './authentification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-angular-api';
constructor(private _authenfication:AuthentificationService){}

  isAdmin(){
    return this._authenfication.isAdmin()
  }
  isSuperAdmin(){
   return this._authenfication.isSuperAdmin()
 }
 isUser(){
   return this._authenfication.isUser()
 }
 isCaissier(){
   return this._authenfication.isCaissier()
 }
 isAthenticated(){
  return this._authenfication.isAuthenticated() 
 }
}

