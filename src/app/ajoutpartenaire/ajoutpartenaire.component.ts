import { Component, OnInit } from '@angular/core';
import { ListeService } from '../liste.service';

@Component({
  selector: 'app-ajoutpartenaire',
  templateUrl: './ajoutpartenaire.component.html',
  styleUrls: ['./ajoutpartenaire.component.css']
})
export class AjoutpartenaireComponent implements OnInit {
  ajoutpartenaireData={imageName: File=null}
  imageUrl : string="/assets/img/capt.png";
  constructor(private _liste: ListeService) { }

  ngOnInit() {
  }

  handleFileInput(file : FileList){
    this.ajoutpartenaireData.imageName = file.item(0);
    
    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.ajoutpartenaireData.imageName);
      }

      ajoutpartenaire(){
        this._liste.ajoutpartenaire(this.ajoutpartenaireData)
        .subscribe(
          res => {console.log(res)},
          err => console.log(err)
        )
       }
}
