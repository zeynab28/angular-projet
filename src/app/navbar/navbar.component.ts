import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../authentification.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _authenfication:AuthentificationService) { }

  ngOnInit() {
  }
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
