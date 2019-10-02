import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { SweetAlert } from 'sweetalert/typings/core';
import * as _swal from 'sweetalert';
const swal: SweetAlert = _swal as any;
@Component({
  selector: 'app-envoi',
  templateUrl: './envoi.component.html',
  styleUrls: ['./envoi.component.css']
})
export class EnvoiComponent implements OnInit {
envoiData = {}
  constructor(private _envoi: TransactionService) { }

  ngOnInit() {
  }

  envoi(){
    
    this._envoi.envoi(this.envoiData)
    .subscribe(
      async res => {console.log(res)
        await swal("Envoi effectué avec succes!", "You clicked the button!", "success");
      },
      err => console.log(err)
    )
  }
}
