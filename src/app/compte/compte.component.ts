import { Component, OnInit } from '@angular/core';
import { CompteService } from '../compte.service';
import { SweetAlert } from 'sweetalert/typings/core';
import * as _swal from 'sweetalert';
const swal: SweetAlert = _swal as any;

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {

  ajoutCompteData= {}
  constructor(private _compte: CompteService) { }

  ngOnInit() {
  }

  async ajoutCompte(){
    
      this._compte.ajoutCompte(this.ajoutCompteData)
      .subscribe(
        res => {console.log(res)},
        err => console.log(err),
        await swal("Compte crée!")
        
      )
    
    }
}
