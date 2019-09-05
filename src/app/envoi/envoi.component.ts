import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';
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
      res => {console.log(res)},
      err => console.log(err)
    )
  }
}
