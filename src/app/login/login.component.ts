import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginUserData = {}
  constructor(private _authenfication: AuthentificationService) { }

  ngOnInit() {
  }
  loginUser(){
    this._authenfication.loginUser(this.loginUserData)
    .subscribe(
      res => {
        console.log(res)
        localStorage.setItem('token', res.token)
     },
      err => console.log(err)
    )
   }

}
