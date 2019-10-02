import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../authentification.service';
import { SweetAlert } from 'sweetalert/typings/core';
import * as _swal from 'sweetalert';
const swal: SweetAlert = _swal as any;


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
     async res => {console.log(res)
      await swal("utilisateur crée!", "You clicked the button!", "success");
    },
     err => console.log(err)
   )
  }
}
