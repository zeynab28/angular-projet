import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../authentification.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerUserData={imageName: File=null}
imageUrl : string="/assets/img/capt.png";
  constructor(private _authenfication: AuthentificationService) { }

  ngOnInit() {
  }

  handleFileInput(file : FileList){
this.registerUserData.imageName = file.item(0);

var reader = new FileReader();
reader.onload = (event:any) => {
  this.imageUrl = event.target.result;
}
reader.readAsDataURL(this.registerUserData.imageName);
  }

  registerUser(){
   this._authenfication.registerUser(this.registerUserData)
   .subscribe(
     res => {console.log(res)},
     err => console.log(err)
   )
  }
}
