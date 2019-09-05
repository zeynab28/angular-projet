import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../authentification.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginUserData = {}
  constructor(private _authenfication: AuthentificationService,
    private _router :Router) { }

  ngOnInit() {
  }
  loginUser(user:any){
    this._authenfication.loginUser(this.loginUserData)
    .subscribe(
      res => {
        let jwt= res.body;
        console.log(jwt);
        this._authenfication.saveToken(jwt);
        this._router.navigate(['/acceuil']);
        //localStorage.setItem('token', res.token)
     },
      err => console.log(err)
    )
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
