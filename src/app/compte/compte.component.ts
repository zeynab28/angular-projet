import { Component, OnInit } from '@angular/core';
import { CompteService } from '../compte.service';

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

  ajoutCompte(){
    
      this._compte.ajoutCompte(this.ajoutCompteData)
      .subscribe(
        res => {console.log(res)},
        err => console.log(err)
      )
    }
}
