import { Component, OnInit } from '@angular/core';
import { ListeService } from '../liste.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  liste = []
  constructor(private _listeService: ListeService) { }

  ngOnInit() {
    this._listeService.getListe()
    .subscribe
    (
      res => this.liste =res,
      error => console.log(error)
     
    )
  }

}
