import { Component, OnInit } from '@angular/core';
import { ListeService } from '../liste.service';
import * as jsPDF from 'jspdf';
import { SweetAlert } from 'sweetalert/typings/core';
import * as _swal from 'sweetalert';
const swal: SweetAlert = _swal as any;

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
          async res => {console.log(res),
           await swal("Partenaire crée!", "You clicked the button!", "success");
          },
          err => console.log(err),
          
        )
       }
       downloadPDF(){
        console.log('downloading pdf ...');
         
    const doc =new jsPDF();
     
    doc.text('Hello world!', 15, 15);
     
    doc.save('two-by-four.pdf')
       }
}
