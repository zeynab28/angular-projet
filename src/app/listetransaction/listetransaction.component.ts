import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-listetransaction',
  templateUrl: './listetransaction.component.html',
  styleUrls: ['./listetransaction.component.css']
})
export class ListetransactionComponent implements OnInit {
envoi = []
  constructor(private _envoi: TransactionService) { }

  ngOnInit() {

    this._envoi.getTransliste()
    .subscribe
    (
      res => this.envoi =res,
      error => console.log(error)
     
    )
  }

}
